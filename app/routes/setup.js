var express = require('express');
var User = require('../modules/user');

var router = express.Router();

router.get('/', function (req, res) {
  console.log('enter setup');
  var admin = new User({
    name: 'mipaifu328',
    password: '123456',
    admin: true
  })
  admin.save(function (err) {
    if (err) {
      res.json({
        success: false,
        message: '管理员创建失败'
      });
    } else {
      res.json({
        success: true,
        message: '管理员创建成功'
      });
    }
  })

})

module.exports = router;