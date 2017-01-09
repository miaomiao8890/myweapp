//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    activeTag: 'Hot',
    hotList: [],
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function() {
    console.log( 'onLoad' )
    var _this = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      _this.setData( {
        userInfo: userInfo
      })
    })

    //topList
    wx.request({
      url: 'http://123.57.21.57:8011/wxDemo/toplist.json',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        _this.hotList = res.data.data
        console.log(_this.hotList)
      }
    })

  },
})
