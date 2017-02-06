//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    activeTab: 'hot',
    refrushTxt: '上拉刷新',
    loadmoreTxt: '下拉加载更多',
    userInfo: {}
  },
  //切换tab
  bandleHotTab: function() {
    this.setData({
      activeTab: 'hot'
    })
  },
  handleCategoriesTab: function() {
    this.setData({
      activeTab: 'categories'
    })
  },
  //请求初始数据
  fetchInitData: function(cb) {
    var _this = this
    //topList
    wx.request({
      url: 'http://123.57.21.57:8011/wxDemo/toplist.json',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        _this.setData({
          hotList: res.data.data,
          refrushTxt: '上拉刷新',
        })
        wx.stopPullDownRefresh()
      }
    })
  },
  // 请求更多数据
  fetchMoreData: function() {
    
  },
  onLoad: function() {
    console.log( 'onLoad' )
    var _this = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      _this.setData({
        userInfo: userInfo
      })
    })
    this.fetchInitData()
  }
})
