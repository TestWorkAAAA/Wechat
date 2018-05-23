let util = require('../../../utils/util.js');
var self = this;
var user = wx.getStorageSync('userInfo')
let currentdate = util.getNowFormatDate();
Page({
  data: {
    teamName: null,
    teamNum : 0,
    teamPlan: null,
    dateValueCurr:currentdate,
    dateValue: currentdate,
    types: 0
  },

  onLoad: function (options) {
    self = this;   
  },

  teamNameInput: function (e) {
    self.setData({
      teamName: e.detail.value
    });
  },

  teamNumInput: function (e) {
    self.setData({
      teamNum: e.detail.value
    });
  },

  teamPlanInput: function (e) {
    self.setData({
      teamPlan: e.detail.value
    });
  },

  datePickerBindchange: function (event) {
    self.setData({
      dateValue: event.detail.value,
    })
  },
  
  turn: function(res){
    var timestamp = Date.parse(new Date());
    var endTime = Date.parse(dateValue);
  },


  createTeam: function (e) {
    if (self.data.teamName == null || self.data.teamPlan == null || self.data.teamNum== null) {
      wx.showModal({
        title: "提示",
        content: "请您输入完整信息，谢谢！",
        confirmText: "确定",
        showCancel: false,
      })
    } else {
     // console.log(getApp().user.openid)
    }
    self.setData({
      loading: true
    }),
    

      wx.request({
        url: 'https://www.Eryn.com/MySchool/study/addOneStudy',
        data: {
          userId: user.openId,
          name: self.data.teamName,
          type: self.data.types,
          createTime: Date.parse(self.data.dateValueCurr),
          endTime: Date.parse(self.data.dateValue)
        }, 
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },      
        success: function (result) {
          console.log(result.data);
          self.setData({
            loading: false
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

        //  var user=wx.getStorageSync('userInfo');
        //  wx.request({
        //    url: 'https://ww.Eryn.com/MySchool/joinClass/joinClass',
        //    data: {
        //      userId: user.openid,
        //      classId: result.data.data
        //    },

        //  })

 
        // }

        // })
       // },



})