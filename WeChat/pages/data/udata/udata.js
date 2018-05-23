var app = getApp()
Page({
  data: {
    currentTab: 0,

    //创建资料分类信息
    learn_type_parent:'',
    learn_type_name:'',
    learn_type_user_id:'',
    learn_type_id:'',

    //已上传资料信息
    learn_info_id:'',
    learn_info_type_id:'',
    learn_info_user_id:'',
    learn_info_name:'',
    learn_info_url:''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    

  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  buildteam: function () {
    console.log("tapped");
    wx.navigateTo({ url: '../team/buildteam/buildteam' });
  },




})