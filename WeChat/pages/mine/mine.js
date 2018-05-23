// pages/mine/mine.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    modalShowStyle: '',
    title: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var that = this
    //调用应用实例的方法获取全局数据
  },

  

  bindGetUserInfo:function(res){
    var code=wx.getStorageSync('logcode')
    var encryptedData = wx.getStorageSync('logencryptedData')
    var iv=wx.getStorageSync('logiv')
    var that=this
    
    wx.request({
      url: 'https://www.Eryn.com/MySchool/file/decodeUserInfo',//自己的服务接口地址
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { encryptedData: encryptedData, iv: iv, code: code },
      success: function (data) {
          that.setData({
            userInfo: data.data.data ,
          })
          wx.setStorageSync('userInfo', data.data.data)
      },
      fail: function () {
        wx.showModal({
          title: '请授权',
          content: '未授权无法使用小程序',
          success: function (res) {
            if (res.confirm) {
              wx.navigateTo({
                url: '/pages/mine/mine'
              })
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


  },

  dayplay: function () {
    console.log("tapped");
    wx.navigateTo({ url: '../dayplan/dayplan' });
  },

  showdairy:function() {
    console.log("tapped");
    wx.navigateTo({ url: '../zone/lzone/lzone' });
  },

  feedback: function () {
    console.log("tapped");
    wx.navigateTo({ url: '../feedback/feedback' });
  },
})