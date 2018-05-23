var self = this;
Page({
  data: {
    classNum: null,
    className: null,
  },

  onLoad: function (options) {
    self = this;
  },

  classNumInput: function (e) {
    self.setData({
      classNum: e.detail.value
    });
  },

  classNameInput: function (e) {
    self.setData({
      className: e.detail.value
    });
  },


  createClass: function (e) {
    if (self.data.classNum == null || self.data.className == null ) {
      wx.showModal({
        title: "提示",
        content: "请您输入完整信息，谢谢！",
        confirmText: "确定",
        showCancel: false,
      })
    } else {
      self.setData({
        loading: true
      })
      wx.request({
        url: 'https://www.Eryn.com/MySchool/study/addOneType',
        data: {
          killerNum: self.data.classNum,
          policeNum: self.data.policeNum,
          citizenNum: self.data.citizenNum,
        },
        success: function (result) {
          console.log(result.data);
          self.setData({
            loading: false
          })
          wx.redirectTo({
            url: '/pages/waitGame/waitGame?gameId=' + result.data.result,
          })
        },

        fail: function ({ errMsg }) {
          wx.showModal({
            title: "错误",
            content: errMsg,
            confirmText: "确定",
            showCancel: false,
          })
          self.setData({
            loading: false
          })
        }
      })
    }
  }
})