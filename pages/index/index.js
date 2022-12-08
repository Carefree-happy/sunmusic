// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    msg: "初始化测试数据"
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

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})