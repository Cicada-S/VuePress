import { defineUserConfig } from 'vuepress'
import{ path } from '@vuepress/utils'
const { defaultTheme } = require('vuepress')

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress !',
  description: '这是Cicada的第一个 VuePress 站点',
  // pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!MyBlog/*.md'],
  // public: path.resolve(__dirname, './static'), // 静态资源目录
  alias: {
    '@images': path.resolve(__dirname, '../images'),
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
  base: '/bar/', // 网站部署在非根目录下
  markdown: {
    anchor: false, // 禁用锚点
    // links: false, // 禁用外部链接
    // emoji: false, // 禁用图标 
    code: { // 代码段
      // lineNumbers: false, // 禁用行号
      // highlightLines: false // 禁用高亮
    },
    importCode: {
      handleImportPath: (str) => 
        str.replace(/^@vuepress/, path.resolve(__dirname, './')),
    },
  },
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
  }),
})

