let util = require('../../../utils/util.js');
var QQMapWX = require('../../../lib/qqmap-wx-jssdk.js');
var demo = new QQMapWX({
  key: 'O7PBZ-Z5BCJ-7Z6FX-KJC34-WJKEJ-3XBVE'
})

let currentdate = util.getNowFormatDate();
var app = getApp()
Page({
  data: {
    isShow: false,
    isLoad: true,
    photoShow: false,
    fontShow: false,
    sizes: [
      {
        index: 0,
        size: "12px",
        selected: false
      },
      {
        index: 1,
        size: "14px",
        selected: false
      },
      {
        index: 2,
        size: "16px",
        selected: false
      },
      {
        index: 3,
        size: "18px",
        selected: false
      },
      {
        index: 4,
        size: "20px",
        selected: false
      },
      {
        index: 5,
        size: "22px",
        selected: false
      }
    ],
    picker1Value: 0,
    dateValue: currentdate,
    location: "点击添加位置",
    locationStyle: '',
    fontSize: '',
    context: '',
    index: '',
    photos: [],
    emojiChar: "☺-😋-😌-😍-😏-😜-😝-😞-😔-😪-😭-😁-😂-😃-😅-😆-👿-😒-😓-😔-😏-😖-😘-😚-😒-😡-😢-😣-😤-😢-😨-😳-😵-😷-😸-😻-😼-😽-😾-😿-🙊-🙋-🙏-✈-🚇-🚃-🚌-🍄-🍅-🍆-🍇-🍈-🍉-🍑-🍒-🍓-🐔-🐶-🐷-👦-👧-👱-👩-👰-👨-👲-👳-💃-💄-💅-💆-💇-🌹-💑-💓-💘-🚲",
    //0x1f---
    emoji: [
      "60a", "60b", "60c", "60d", "60f",
      "61b", "61d", "61e", "61f",
      "62a", "62c", "62e",
      "602", "603", "605", "606", "608",
      "612", "613", "614", "615", "616", "618", "619", "620", "621", "623", "624", "625", "627", "629", "633", "635", "637",
      "63a", "63b", "63c", "63d", "63e", "63f",
      "64a", "64b", "64f", "681",
      "68a", "68b", "68c",
      "344", "345", "346", "347", "348", "349", "351", "352", "353",
      "414", "415", "416",
      "466", "467", "468", "469", "470", "471", "472", "473",
      "483", "484", "485", "486", "487", "490", "491", "493", "498", "6b4"
    ],
    emojis: [] //qq、微信原始表情
  },
  onLoad: function (query) {
    let that = this;
    wx.setNavigationBarTitle({
      title: '日期: ' + currentdate
    })
    
    var em = {}, emChar = that.data.emojiChar.split("-");
    var emojis = []
    that.data.emoji.forEach(function (v, i) {
      em = {
        char: emChar[i],
        emoji: "0x1f" + v
      };
      emojis.push(em)
    });
    that.setData({
      emojis: emojis
    })
  },
  bindclick: function () {
    this.setData({
      isShow: false,
      photoShow: false,
      fontShow: false,
    })
  },
  emojiShowHide: function () {
    let that = this
    that.setData({
      isShow: !this.data.isShow,
      isLoad: false,
      photoShow: false,
      fontShow: false
    })
  },
  emojiChoose: function (e) {
    this.setData({
      context: this.data.context + e.currentTarget.dataset.emoji
    })
  },
  photoShowHide: function () {
    let that = this
    that.setData({
      isShow: false,
      fontShow: false,
      photoShow: !this.data.photoShow
    })
  },
  fontShowHide: function () {
    let that = this
    that.setData({
      isShow: false,
      photoShow: false,
      fontShow: !this.data.fontShow
    })
  },

  addPhoto: function () {
    let that = this
    wx.chooseImage({
      count: 9, // 可根据情况自由设置，默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        //console.log(tempFilePaths);
        that.setData({
          photos: tempFilePaths
        })
      }
    });
  },

  deletePhoto: function (e) {
    let that = this
    let id = e.currentTarget.id
    that.data.photos.splice(id, 1)
    that.setData({
      photos: that.data.photos
    })
    console.log(e.detail.value)
  },

  getLocation: function () {
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude
        var longitude = res.longitude
        demo.reverseGeocoder({
          location: {
            latitude,
            longitude
          },
          success: function (res) {
            console.log(res.result)
            var location = res.result.address_component.province + res.result.address_component.city
            that.setData({
              location,
            });
            wx.setStorage({
              key: "location",
              data: location
            })

          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {
            console.log(res);
          }
        });
      }
    })
  },
  changeFont: function (event) {
    for (var i = 0; i < this.data.sizes.length; i++) {
      if (event.currentTarget.id == i) {
        this.data.sizes[i].selected = true
      }
      else {
        this.data.sizes[i].selected = false
      }
    }
    this.setData(this.data);
    this.setData({
      fontSize: event.target.dataset.fontsize
    })
    console.log(this.data);
  },

  input: function (e) {
    let that = this
    let context = e.detail.value
    console.log(e.detail.value);
    that.setData({
      context: e.detail.value
    })
  },

  save: function (event) {
    let that = this;
    var context = event.detail.value;
    if (that.data.context !== '') {
      wx.setStorage({
        key: "diaryContent",
        data: that.data.context
      });
      wx.setStorageSync('date', currentdate);
      wx.setStorage({
        key: 'images',
        data: that.data.photos
      })
      wx.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 2000,
        success: function () {
        },
      });
      wx.navigateTo({
        url: "../lzone/lzone"
      })
      setTimeout(function () {
        wx.hideLoading();
        //  wx.navigateBack();
      }, 2000)
    } else {
      wx.showToast({
        title: '输入为空',
      })

    }

  },

})
