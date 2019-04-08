Page({

  /**
   * 页面的初始数据
   */
  data: {
    mynavlist:[],
    myid:0,
    indexlist:[],


    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000    
  },
  myactive:function(e){
    this.setData({
      myid:e.target.dataset.id
    })
  },
  getnavlist:function(){
    var that=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success(res) {
        that.setData({
          mynavlist: res.data.data.navList
        })

      }
    })
  },
  getswiper:function(){
    var that=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res){
        that.setData({
          imgUrls: res.data.data.swiperList
        })

      }
    })

  },
  getindexlist:function(){
    var that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res){
        that.setData({
          indexlist: res.data.data.videosList
        })
       

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getnavlist();
    this.getswiper();
    this.getindexlist();
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})