const redis = require('redis');
const bluebird = require('bluebird');
//使redis避免回调地狱
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
//默认redis客户端运行在localhost:6379端口，如果需要修改可以在createClient(username,port)来指定
const UserAccountModel = require('../models/UserAccount').UserAccountModel;
const async = require('async');
const client = redis.createClient();


client.on('connect', function () {
    console.log('=============redis数据库连接成功=============');
});
//监听错误
client.on('error', function (err) {
    console.log('error event - ' + redis.host + ':' + redis.port + ' - ' + err);
});


//读取所有的用户信息到内存
/**
 * 读取所有注册用户信息
 */
function cacheAllUsers(topcallback) {
    let t1 = new Date().getTime();
    let us = [];
    UserAccountModel.find({}, {"pwd": 0}, function (err, users) {
        if (err) {
            console.error("redis初始化UserAccount失败");
            return;
        }

        async.mapLimit(users, 4, function (user, callback) {
            client.setAsync("user:" + user._doc._id, JSON.stringify(user)).then(function (data) {
                console.log("已存入dis" + user._doc._id);
                us.push(user._doc);
                callback(null, us);
            }, function (err, docs) {
                console.error("redis预读取" + user._doc._id + "失败err=" + err);
                callback(err, null);
            })
        }, function (err, thuids) {
            if (err) {
                console.error("redis初始化UserAccount失败" + err);
                topcallback(err, null);
            } else {
                let t2 = new Date().getTime();
                let interval = (t2 - t1 - 1000);
                console.log("redis初始化预读取UserAccount成功:" + us.length + "条记录,用时" + interval);
                topcallback(null, us)
            }
        })
    })
}


/**
 * 读取单个用户信息到内存
 */
function cacheOneUser(userid, topcallback) {
    let t1 = new Date().getTime();
    UserAccountModel.findById(userid, {"pwd": 0}, function (err, user) {
        if (err) {
            console.error("缓存预读取" + user._id + "失败err=" + err);
            return;
        }
        client.setAsync("user:" + user._id, JSON.stringify(user)).then(function (data) {
            console.log("已存入dis" + user._id)
        }, function (err, docs) {
            console.error("缓存预读取" + user._id + "失败err=" + err);
        })
    })
}


//暴露根据_id获取用户信息的API接口,参数接受userid
module.exports.getUser = function (userid) {
    let promise = client.hgetallAsync(userid);
    return promise;
};


module.exports.updateUser = function (userid, option, callback) {
    UserAccountModel.findByIdAndUpdate(userid, option, {new: true}, function (err, doc) {
        if (err) {
            callback(err);
            return;
        }
        client.hmset(userid, doc._doc, function (err) {
            if (err) {
                callback(err);
                return;
            }
            callback(null, doc._doc);
        })
    })
};


exports.publishRedPacketTakers = function (redPacketId, takersArray) {
    for (let i = 0; i < takersArray.length; i++) {
        client.rpush(redPacketId, JSON.stringify(takersArray[i]), function (err, data) {
            if (err) console.log('发布红包数据到redis发生错误： ' + err);
        })
    }
};


exports.popRedPacketTaker = function (redPacketId, callback) {
    client.rpop(redPacketId, function (err, data) {
        if (err) {
            console.log('发布红包数据到redis发生错误： ' + err);
            callback(err, null);
        } else {
            callback(null, data);
        }
    })
};