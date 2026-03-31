// work-detail.js
Page({
  data: {
    // 页面数据
  },
  onLoad() {
    // 页面加载时执行
    console.log('作品详情页面加载');
  },
  // 点赞功能
  likeWork() {
    wx.showToast({
      title: '点赞成功',
      icon: 'success'
    });
  },
  // 收藏功能
  collectWork() {
    wx.showToast({
      title: '收藏成功',
      icon: 'success'
    });
  },
  // 分享功能
  shareWork() {
    wx.showToast({
      title: '分享成功',
      icon: 'success'
    });
  },
  // 发布评论
  postComment() {
    wx.showToast({
      title: '评论发布成功',
      icon: 'success'
    });
  }
})