//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code = res.code;
        wx.setStorageSync("logcode", res.code)  
        if (code) {
          //2、调用获取用户信息接口
          wx.getUserInfo({
            success: function (res) {
              wx.setStorageSync("logencryptedData", res.encryptedData)
              wx.setStorageSync("logiv", res.iv)
             },
             fail: function(res){
               var that = this;
               wx.showModal({
                 title: '请授权到我的主页授权',
                 content: '未授权无法使用小程序',
                 success: function (res) {
                   if (res.confirm) {
                     console.log('用户点击确定')
                   } else if (res.cancel) {
                     that.setData({
                       userInfo: 'tourist'
                     })
                     console.log('用户点击取消')
                   }
                 }
               })  

             }
           })
         }
      }
    })
  },


  globalData: {
    userInfo: null
  }
})