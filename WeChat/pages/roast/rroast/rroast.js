Page({

  /**
   * 页面的初始数据
   */
  data: {
    topTopic: [],
    hotInfo: [],
    indicatorcolor: "#fff",
    indicatoractivecolor: "pink",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let that = this
    wx.request({
      url: 'http://www.easy-mock.com/mock/59642c25b6cab76bb7382dc1/index/hot',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        var data = res.data.hotInfo;
        //  console.log(data)
        that.setData({
          hotInfo: data
        })
      }
    });
    wx.request({
      url: 'http://www.easy-mock.com/mock/59642c25b6cab76bb7382dc1/index/topTopic',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        var data = res.data.topTopic;
        //  console.log(data)
        that.setData({
          topTopic: data
        })
      }
    });
    wx.request({
      url: 'http://www.easy-mock.com/mock/59642c25b6cab76bb7382dc1/index/index/topicList',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        var data = res.data.topicList;
        //  console.log(data)
        that.setData({
          topicList: data
        })
      }
    });
  },
  toDetail: function (e) {
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../detail/index?id=' + id
    })
  },
})