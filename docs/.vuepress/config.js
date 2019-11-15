module.exports = {
  title: '移动端组件', 
  description: '组件描述',
  head: [
      ['link', { rel: 'icon', href: '/img/logo.ico' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig : {
    nav : [
        { text: '使用方法', link: '/apiword' }
    ],
    sidebar: [
      {
        title: '按钮相关',
        collapsable: true,
        children: [
          '/buttonComponents/base/button'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ]
      }
    ],
    sidebarDepth : 2
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  },
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-xxx'))
    } 
  }
}