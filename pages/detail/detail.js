Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:null,
    othersList:[],
    commentData: null
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let that=this;

    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id=' + options.id,
      success(res){
        that.setData({
          detail: res.data.data.videoInfo
        })

      }
    })

    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id' + options.id,
      success:function(res){
        that.setData({
          othersList: res.data.data.othersList
        })

      }
    })
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id' + options.id,
      success:function(res){
        that.setData({
          commentData: res.data.data.commentData
        })

      }
    })
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