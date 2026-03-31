// interact.js
Page({
  data: {
    // 页面数据
  },
  onLoad() {
    // 页面加载时执行
    console.log('互动页面加载');
  },
  // 发布评论
  postComment() {
    wx.showToast({
      title: '评论发布成功',
      icon: 'success'
    });
  }
})