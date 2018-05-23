var app = getApp()
Page({
  data: {
    isShow: true,
    time: '',
    context: '',
    images: [],
    location: '',
    diaryCount: 0
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '日记列表'
    })
  },
  onShow: function () {
    let that = this;
    let images = wx.getStorageSync("images")
    let context = wx.getStorageSync("diaryContent")
    let time = wx.getStorageSync("date")
   // console.log(time)
    let location = wx.getStorageSync("location")
    that.setData({
      images: images
    })
    that.setData({
      context: context
    })
    that.setData({
      time: time
    })
    that.setData({
      location: location
    })
    if (context) {
      that.setData({
        diaryCount: 1
      })
    }
  },

 modify: function () {
     console.log('aaa')
     wx.navigateTo({
       url: '../../wzone/wzone?context=' + this.data.context
     })
    
   },
  deleteDiary: function () {
    let that = this;
    wx.showModal({
      content: '确定要删除吗？',
      success: function (res) {
        if (res.confirm) {
          wx.clearStorage();
          that.setData({
            diaryCount: 0,
            isShow: false
          })
          setTimeout(function () {
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 2000
            })
          }, 1000)
        } else if (res.cancel) {

        }
      }
    })
  }
})
