const base = require('./Base');
const ObjectId = base.ObjectId;
const UserAccountSchema = new base.Schema({
    mobile: String,                              //手机
    pwd: String,                                 //密码
    email: String,                               //邮箱
    name: String,                                //姓名
    idnumber: String,                            //身份证
    sex: String,                                 //性别
    headimage: String,                           //头像
    createtime: {type: Date, default: Date.now},//创建时间
});
UserAccountSchema.index({studentID: 1}, {"background": true});//设置索引
const UserAccountModel = base.mongoose.model('UserAccountModel', UserAccountSchema, 'usersaccount');
exports.UserAccountModel = UserAccountModel;//导出UserAccountModel实体