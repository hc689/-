// profile.js
Page({
  data: {
    // 页面数据
    isEditing: false,
    username: '用户名',
    userDesc: '广西民歌爱好者',
    avatarUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%2C%20friendly%20face%2C%20simple%20style%2C%20wearing%20traditional%20Guangxi%20ethnic%20accessories&image_size=square',
    publishedSongs: [],
    stats: {
      works: 0,
      favorites: 0,
      following: 0,
      followers: 0
    }
  },
  onLoad() {
    // 页面加载时执行
    console.log('个人中心页面加载');
    // 从本地存储中加载已发布的歌曲
    const publishedSongs = wx.getStorageSync('publishedSongs') || [];
    this.setData({
      publishedSongs: publishedSongs,
      'stats.works': publishedSongs.length
    });
  },
  // 进入编辑模式
  enterEditMode() {
    this.setData({
      isEditing: true
    });
  },
  // 取消编辑
  cancelEdit() {
    this.setData({
      isEditing: false
    });
  },
  // 选择头像
  chooseAvatar() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths;
        this.setData({
          avatarUrl: tempFilePaths[0]
        });
      }
    });
  },
  // 绑定用户名输入
  bindUsernameInput(e) {
    this.setData({
      username: e.detail.value
    });
  },
  // 绑定个人简介输入
  bindDescInput(e) {
    this.setData({
      userDesc: e.detail.value
    });
  },
  // 保存资料
  saveProfile() {
    // 这里可以添加保存到服务器的逻辑
    wx.showToast({
      title: '保存成功',
      icon: 'success'
    });
    this.setData({
      isEditing: false
    });
  },
  // 查看我的创作
  viewMyWorks() {
    wx.navigateTo({
      url: '../my-works/my-works'
    });
  },
  // 查看我的收藏
  viewMyFavorites() {
    wx.navigateTo({
      url: '../my-favorites/my-favorites'
    });
  },
  // 查看我的成就
  viewMyAchievements() {
    wx.navigateTo({
      url: '../my-achievements/my-achievements'
    });
  },
  // 打开设置
  openSettings() {
    wx.navigateTo({
      url: '../settings/settings'
    });
  },
  // 查看作品详情
  viewWorkDetail(e) {
    const songId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../work-detail/work-detail?id=' + songId
    });
  },
  // 查看我的关注
  viewMyFollowing() {
    wx.showToast({
      title: '关注列表功能开发中',
      icon: 'none'
    });
  },
  // 查看我的粉丝
  viewMyFollowers() {
    wx.showToast({
      title: '粉丝列表功能开发中',
      icon: 'none'
    });
  }
})