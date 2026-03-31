// create.js
Page({
  data: {
    // 音乐风格选项
    selectedStyle: '',
    // 歌曲长度选项
    songLengths: ['1分钟', '2分钟', '3分钟', '4分钟', '5分钟'],
    selectedLength: '3分钟',
    // 节奏速度选项
    tempos: ['慢速', '中速', '快速'],
    selectedTempo: '中速',
    // 情感风格选项
    emotions: ['欢快', '悲伤', '抒情', '激昂'],
    selectedEmotion: '抒情',
    // 生成结果
    hasResult: false,
    audioUrl: '',
    // 已创作歌曲
    createdSongs: [
      {
        id: 1,
        title: '我的创作歌曲',
        status: '未发布',
        createTime: '2024-01-15'
      }
    ]
  },
  onLoad() {
    // 页面加载时执行
    console.log('创作页面加载');
  },
  // 选择音乐风格
  selectStyle(e) {
    const style = e.currentTarget.dataset.style;
    this.setData({
      selectedStyle: style
    });
  },
  // 绑定歌曲长度选择
  bindLengthChange(e) {
    this.setData({
      selectedLength: this.data.songLengths[e.detail.value]
    });
  },
  // 绑定节奏速度选择
  bindTempoChange(e) {
    this.setData({
      selectedTempo: this.data.tempos[e.detail.value]
    });
  },
  // 绑定情感风格选择
  bindEmotionChange(e) {
    this.setData({
      selectedEmotion: this.data.emotions[e.detail.value]
    });
  },
  // 生成音乐
  generateMusic() {
    // 模拟AI音乐生成过程
    wx.showLoading({
      title: '生成音乐中...',
    });
    
    // 模拟生成过程
    setTimeout(() => {
      wx.hideLoading();
      // 模拟生成结果
      this.setData({
        hasResult: true,
        audioUrl: '/assets/audio/广西壮族自治区歌舞团 - 壮乡春早 (马骨胡)_L.ogg' // 本地音频文件
      });
      wx.showToast({
        title: '音乐生成成功',
        icon: 'success'
      });
    }, 2000);
  },
  // 编辑音乐
  editMusic() {
    wx.showToast({
      title: '编辑功能开发中',
      icon: 'none'
    });
  },
  // 保存音乐
  saveMusic() {
    wx.showToast({
      title: '音乐保存成功',
      icon: 'success'
    });
  },
  // 分享音乐
  shareMusic() {
    wx.showToast({
      title: '分享功能开发中',
      icon: 'none'
    });
  },
  // 选择并上传音乐
  chooseMusic() {
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      extension: ['.mp3', '.mp4', '.wav'],
      success: (res) => {
        const tempFilePaths = res.tempFiles;
        wx.showLoading({
          title: '上传中...',
        });
        
        // 这里使用wx.uploadFile上传文件
        // 注意：这里需要替换为真实的后端上传接口
        wx.uploadFile({
          url: 'https://your-server.com/upload', // 替换为真实的上传接口
          filePath: tempFilePaths[0].path,
          name: 'file',
          formData: {
            'songId': '1',
            'songName': '我的创作歌曲'
          },
          success: (uploadRes) => {
            wx.hideLoading();
            wx.showToast({
              title: '上传成功',
              icon: 'success'
            });
            // 更新歌曲状态
            const updatedSongs = this.data.createdSongs.map(song => {
              if (song.id === 1) {
                return { 
                  ...song, 
                  status: '已发布',
                  filePath: tempFilePaths[0].path,
                  uploadTime: new Date().toLocaleString()
                };
              }
              return song;
            });
            this.setData({
              createdSongs: updatedSongs
            });
            
            // 保存到本地存储，以便在个人中心页面显示
            wx.setStorageSync('publishedSongs', updatedSongs);
          },
          fail: (err) => {
            wx.hideLoading();
            wx.showToast({
              title: '上传失败',
              icon: 'none'
            });
            console.error('上传失败:', err);
          }
        });
      },
      fail: (err) => {
        console.error('选择文件失败:', err);
      }
    });
  }
})