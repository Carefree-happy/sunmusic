// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    msg: "初始化测试数据"
  },

  handleParent() {
    console.log("tap parents")
  },

  handleChild() {
    console.log("tap child")
  },

  toLogs() {
    // wx.navigateTo({ // 调用 onHide
    wx.reLaunch({ // 调用 onUnload
      url: '/pages/image/images',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    // 修改msg的数据，语法：this.setData
    setTimeout(() => {
      this.setData({
        msg: "美丽的田野"
      }),
      console.log(this.data.msg)
    }, 2000)
    console.log(this.data.msg)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
    console.log("onReady")
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {
    console.log("onShow")
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {
    console.log("onHide")
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {
    // 页面销毁
    console.log("page unload")
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {
    console.log("onPullDownRefresh")
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {
    console.log("onReachBottom")
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {
    console.log("onShareAppMessage")
  }
})