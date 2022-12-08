Page({

  /**
   * Page initial data
   */
  data: {
    tempFilePaths: ""
  },

  chooseimage: function () {  
    var _this = this;  
    wx.chooseMedia({  
      count: 1, // 默认多选
      mediaType: ["image", "video", "mix"], // 设置文件类型
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {  
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePaths: res.tempFiles[0].tempFilePath 
        })
        // this.upload();
      }  
    })  
  },

  upload() {
    wx.uploadFile({
      filePath: this.data.tempFilePaths,
      name: 'file',
      url: 'url',

      success: function (res) {
        const data = res.data
        // 将值渲染出来
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

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