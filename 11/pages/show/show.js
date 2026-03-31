// show.js
Page({
  data: {
    activeCategory: 'all'
  },
  onLoad() {
    // 页面加载时执行
    console.log('展示页面加载');
  },
  // 选择分类
  selectCategory(e) {
    const category = e.currentTarget.dataset.category;
    this.setData({
      activeCategory: category
    });
    // 这里可以添加根据分类筛选作品的逻辑
    console.log('选择分类:', category);
  },
  // 查看作品详情
  viewWorkDetail() {
    wx.navigateTo({
      url: '../detail/work-detail/work-detail'
    });
  }
})