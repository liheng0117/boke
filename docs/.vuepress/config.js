const private = require('./private/private')
// 把最后更改时间更改为 中国地区的样式
const moment = require('moment');
moment.locale("zh-cn") //显示中国的时间格式

module.exports = {
  title: "TangCuYu",
  description: "糖醋鱼小屋",
  dest: "dist",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.svg" }],
  ],
  theme: "reco",
  themeConfig: {
    // 博客配置
    type: "blog",
    fullscreen: true,
    logo: "/images/favicon.svg",// 左侧logo
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      }
    },
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: "auto",//所有页面自动生成侧边栏
    author: "TangCuYu",
    authorAvatar: "/images/tx.JPG", // 首页文章列表右边的头像
    mode: "light", //默认显示模式  modePicker: false 关闭该按钮
    codeTheme: "tomorrow", // default 'tomorrow' okaidia
    record: "蜀ICP备20019955号",
    recordLink: "https://icp.chinaz.com/home/info?host=pengsir.top",
    smooth: "true", //平滑滚动
    nav: [
      // 导航栏
      { text: "主页", link: "/", icon: "reco-home" },
      {
        text: "工具箱",
        icon: "iconfont icon-tools",
        items: [
          { text: "在线PS", link: "https://ps.gaoding.com/#/" },
          { text: "渐变色", link: "https://uigradients.com/" },
          { text: "图片压缩", link: "https://tinypng.com/" },
          { text: "变量命名", link: "https://unbug.github.io/codelf/" },
          { text: "消除图片背景", link: "https://www.remove.bg/zh" },
          { text: "生成二维码", link: "https://cli.im/" },
        ]
      },
      {
        text: "博客",
        icon: 'iconfont icon-tools',
        items: [
          { text: 'Es6基础语法', link: 'https://www.jianshu.com/p/173b4f93b042'},
          { text: '数据结构 V：1.3.0', link: 'https://www.jianshu.com/p/8034d28b0210'},
        ]
      },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
      { text: "留言板", link: "/views/others/message", icon: "reco-message" },
      {
        text: "关于",
        icon: "reco-message",
        items: [  
          {
            text: "关于我",
            link: "/views/About/author",
            icon: "reco-account"
          },
          {
            text: "简书",
            link: "https://www.jianshu.com/u/50ce9c5b2638",
            icon: "reco-jianshu",
          },
          {
            text: "GitHub",
            link: "https://github.com/liheng0117",
            icon: "reco-github",
          },
          {
            text: "Gitee",
            link: "https://gitee.com/li_heng_0117",
            icon: "reco-mayun",
          },
        ]
      }
    ],
    startYear: '2020',
  },
  // 项目开始时间
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页 ！',
  markdown: {
    lineNumbers: true, //代码显示行号
  }, // 搜索设置
  plugins: {
    // //一键复制代码插件: "vuepress-plugin-code-copy": "^1.0.6",
    // "vuepress-plugin-code-copy": true,
    // // 阅读进度条: "vuepress-plugin-reading-progress": "^1.0.10",
    // "reading-progress": true,
    // // 最后更改时间插件(内置)+moment 格式化为中国地区的样式
    // '@vuepress/last-updated': {
    //   transformer: (timestamp, lang) => {
    //     return moment(timestamp).format('LLLL')
    //   }
    // },
    // // 看板娘插件 https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang
    // "@vuepress-reco/vuepress-plugin-kan-ban-niang":
    // {
    //   theme: ['z16', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku'],
    //   clean: false,
    //   messages: {
    //     home: '我是bookbook,欢迎你的关注 ',
    //     welcome: '心里的花，我想要带你回家。',
    //     theme: '去看看我的其他小伙伴~',
    //     close: '再见哦~'
    //   },
    //   width: 150,
    //   height: 219,
    // },
    
    meting:{
      // metingApi: "http://music.163.com/playlist?id=417639577&userid=301312374",
      meting: {
          server: "netease",
          type: "playlist",
          mid: "6814322593",
          auto: "https://music.163.com/#/playlist?id=6814322593"
      },
      // 不配置该项的话不会出现全局播放器
      aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: true,
          // 歌曲栏折叠
          listFolded:true,
          // 颜色
          theme: '#f9bcdd',
          // 播放顺序为随机
          order: 'random',
          // 初始音量
          volume: 0.3,
          // 关闭歌词显示
          lrcType: 0
      },
      mobile :{
          // 手机端去掉cover图
          cover: false,
      },
  },
    
  }
}