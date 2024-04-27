module.exports = {
  title: '编程学习',
  description: '最新官方编程学习文档',
  base: '/learn/',
  theme: 'reco',
  locales: {
     '/': {
        lang: 'zh-CN'
      }
  },
  themeConfig: {
	subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '橙橙的 编程学习 中心', 
                items: [
                    { text: 'Github', link: 'https://github.com/schengProgrammer' }
                ]
            }
        ],
	sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "" },
                { title: "泛型", path: "" }
              ],
            }
          ]
    }
}
