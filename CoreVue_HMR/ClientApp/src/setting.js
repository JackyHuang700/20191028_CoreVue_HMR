export default {
  // 快捷鍵
  // 支持快捷鍵 例如 ctrl+shift+s
  hotkey: {
    search: {
      open: 's',
      close: 'esc'
    }
  },
  // 側邊欄默認折疊狀態
  menu: {
    asideCollapse: false
  },
  // 在讀取持久化數據失敗時默認頁面
  page: {
    opened: [
      {
        name: 'index',
        fullPath: '/index',
        meta: {
          title: '首頁',
          auth: false
        }
      }
    ]
  },
  // 菜單搜索
  search: {
    enable: true
  },
  // 註冊的主題
  theme: {
    list: [
      {
        title: 'd2admin 經典',
        name: 'd2',
        preview: 'image/theme/d2/preview@2x.png'
      },
      {
        title: '紫羅蘭',
        name: 'violet',
        preview: 'image/theme/violet/preview@2x.png'
      },
      {
        title: '簡約線條',
        name: 'line',
        backgroundImage: 'image/theme/line/bg.jpg',
        preview: 'image/theme/line/preview@2x.png'
      },
      {
        title: '流星',
        name: 'star',
        backgroundImage: 'image/theme/star/bg.jpg',
        preview: 'image/theme/star/preview@2x.png'
      },
      {
        title: 'Tomorrow Night Blue (vsCode)',
        name: 'tomorrow-night-blue',
        preview: 'image/theme/tomorrow-night-blue/preview@2x.png'
      }
    ]
  },
  // 是否默認開啟頁面切換動畫
  transition: {
    active: true
  }
}
