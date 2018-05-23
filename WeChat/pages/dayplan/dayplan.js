let util = require('../../utils/util.js');
var self = this;
let currentdate = util.getNowFormatDate();
Page({
  data: {
    planName: null,
    dateValue: '08:00',
    dateValue1: '20:00',
  },

  onLoad: function (options) {
    self = this;
  },

  planName: function (e) {
    self.setData({
      planName: e.detail.value
    });
  },

  datePickerBindchange1: function (event) {
    self.setData({
      dateValue1: event.detail.value,
    })
  },

  datePickerBindchange: function (event) {
    self.setData({
      dateValue: event.detail.value,
    })
    console.log(event.detail.value)
  },

  createPlan: function (e) {
   var one= self.data.dateValue.replace(':','');
   var two = self.data.dateValue1.replace(':', '');
    if (self.data.planName == null ) {
      wx.showModal({
        title: "提示",
        content: "请您输入完整信息，谢谢！",
        confirmText: "确定",
        showCancel: false,
      })
    } else if (one >= two) {
      wx.showModal({
        title: "提示",
        content: "输入时间错误！",
        confirmText: "确定",
        showCancel: false,
      })
      
    } self.setData({
       loading: true
     })

    // wx.request({
    //     url: 'https://www.Eryn.com/MySchool/user/getUser',
    //     data: {
    //     //  userId: getApp().user.openid,
    //     //  gameOwnerAvatarUrl: getApp().user.userInfo.avatarUrl,
    //     //  gameOwnerNickName: getApp().user.userInfo.nickName,
    //       teamName: self.data.killerNum,
    //       team: self.data.policeNum,
    //       citizenNum: self.data.citizenNum,
    //     },
    //     success: function (result) {
    //       console.log(result.data);
    //       self.setData({
    //         loading: false
    //      })
    //       wx.redirectTo({
    //         url: '/pages/waitGame/waitGame?gameId=' + result.data.result,
    //       })
    //     },

    //     fail: function ({ errMsg }) {
    //       wx.showModal({
    //         title: "错误",
    //         content: errMsg,
    //         confirmText: "确定",
    //         showCancel: false,
    //       })
    //       self.setData({
    //         loading: false
    //       })
    //     }
    //   })
    // }
    }

})