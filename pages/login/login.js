// pages/login/login.js
Page({
  /**
   * Page initial data
   */
  data: {
    data: {
      userInfo: {}
    },
  },

  // GetUserInfo() {
  //   var that = this
  //   wx.getUserInfo({
  //     desc: '用户信息授权',
  //     success:(res)=>{
  //       that.data.userInfo = res.userInfo;
  //       that.data.avatarUrl = res.avatarUrl;
  //       console.log(res)
  //     },
  //     fail:(res)=>{
  //       // debugger
  //       console.log(res)
  //     }
  //   })
  // },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * handle user information
   */
  handleUserInfo(res) {
    console.log(res)
    if (res.detail.userInfo) {
      this.setData({
        userInfo: res.detail.userInfo
      })
    }
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