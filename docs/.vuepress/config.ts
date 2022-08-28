import { defineUserConfig } from 'vuepress'
import{ path } from '@vuepress/utils'
const { defaultTheme } = require('vuepress')
// 引入主题
// import KnznTheme from 'vuepress-theme-knzn'
// 引入谷歌分析插件
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress !',
  description: '这是Cicada的第一个 VuePress 站点',
  // pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!MyBlog/*.md'],
  // public: path.resolve(__dirname, './static'), // 静态资源目录
  alias: {
    '@images': path.resolve(__dirname, '../images'), // 图片的路径别名
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
  base: '/VuePress/', // 网站部署在非根目录下
  markdown: {
    anchor: false, // 禁用锚点
    // links: false, // 禁用外部链接
    // emoji: false, // 禁用图标 
    code: { // 代码段
      // lineNumbers: false, // 禁用行号
      // highlightLines: false // 禁用高亮
    },
    importCode: { // 路径别名
      handleImportPath: (str) => 
        str.replace(/^@vuepress/, path.resolve(__dirname, './')),
    },
  },
  // 主题多语言配置
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
        selectLanguageText: 'longuages'
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言'
      },
    },
     // 默认主题配置
     navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
  }),
  /* theme: KnznTheme({}) */
  // 插件
  plugins: [
    // 谷歌分析插件
    googleAnalyticsPlugin({
      id: 'G-M0H35G4CSK',
    }),
  ],
})

