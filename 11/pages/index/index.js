// index.js
Page({
  data: {
    // 页面数据
  },
  onLoad() {
    // 页面加载时执行
    console.log('首页加载');
  },
  // 导航到创作页面
  navigateToCreate() {
    wx.navigateTo({
      url: '../create/create'
    });
  },
  // 导航到展示页面
  navigateToShow() {
    wx.navigateTo({
      url: '../show/show'
    });
  },
  // 导航到互动页面
  navigateToInteract() {
    wx.navigateTo({
      url: '../interact/interact'
    });
  },
  // 导航到个人中心
  navigateToProfile() {
    wx.navigateTo({
      url: '../profile/profile'
    });
  }
})