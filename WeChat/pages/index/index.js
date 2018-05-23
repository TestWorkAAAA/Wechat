//index.js
//获取应用实例
const app = getApp()
//var config = require('../../config');
Page({

  data :{
    //userInfo:''
  },

  buildteam: function () {
    console.log("tapped");
    wx.navigateTo({ url: '../team/buildteam/buildteam' });
  },
  jointeam: function () {
    console.log("tapped");
    wx.navigateTo({ url: '../team/jointeam/jointeam' });
  },
  buildclass: function () {
    console.log("tapped");
    wx.navigateTo({ url: '../class/buildclass/buildclass' });
  },
  joinclass: function () {
    console.log("tapped");
    wx.navigateTo({ url: '../class/joinclass/joinclass' });
  },

  showgrade: function () {
    console.log("tapped");
    wx.navigateTo({ url: '../service/grades/grades' });
  },
  showlesson: function () {
    console.log("tapped");
    wx.navigateTo({ url: '../service/lesson/lesson' });
  },
  showtrainingroom: function () {
    console.log("tapped");
    wx.navigateTo({ url: '../service/trainingroom/trainingroom' });
  },
  showmore: function () {
    console.log("tapped");
    wx.navigateTo({ url: '../service/service' });
  },
  onLoad: function () {
    
   
    }
    
  
})


