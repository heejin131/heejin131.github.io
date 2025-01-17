import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  sourceDir: "src",
  dest: "docs/",
  
  lang: 'en-US',

  title: 'team sunsin',
  description: "sunsin team's blog about the spirit of sunsin",

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'heejin-blog:team SUNSIN' }],
    ['meta', { property: 'og:description', content: "Im heejin, who likes to study code." }],
    ['meta', { property: 'og:image', content: 'https://heejin131.github.io/images/preview.png' }],
    ['meta', { property: 'og:url', content: 'https://blog.journeyjean.shop' }],
  ],
  
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US',
    //   title: 'tech-blog:cashmallow',
    //   description: "cashmallow dev team's technology blog about wanting to contribute to the open source ecosystem",
    },
    '/': {
      lang: 'ko-KR',
    //   title: 'tech-blog:cashmallow',
    //   description: "cashmallow dev team's technology blog about wanting to contribute to the open source ecosystem",
    },
  },


  locales: {
    '/zh/': {
      lang: 'zh-CN',
    },
    '/en/': {
      lang: 'en-US',
    },
    '/': {
      lang: 'ko-KR',
    },
  },

  theme: defaultTheme({
    selectLanguageText: "lang",

    locales: {
      '/zh/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
      '/': {
        selectLanguageName: '한국어',
      },
    },

    logo: "/images/hero.png",
    logoDark: "/images/heroD.png",

    repo: "https://github.com/heejin131",
    repoLabel: "github",

    contributors: false,

    editLink: false,
    // editLinkText: '✏️',

    lastUpdated: true,
    lastUpdatedText: "Last Updated",

    colorMode: "auto",
    colorModeSwitch: true,

    navbar: [
      { text: "101", link: "https://github.com/ppabam/101" },
      { text: "RESUME", link: "/resume/" },
    ],

    sidebar: {
      "/": [
        {
          text: "resume",
          collapsible: true,
          children: [
            "/resume/",
          ],
        },
        {
          text: "team",
          collapsible: true,
          children: [
            "/team/tiger/",
            "/team/recruit/",
            "/team/how2pr/",
            "/team/tiger2agile/",
          ],
        },
        {
          text: "opensource",
          collapsible: true,
          children: [
            "/tech/share/opensource/",
          ],
        },
      ],
    },
  }),

  plugins: [
    searchPlugin({

    }),
    backToTopPlugin(),
    googleAnalyticsPlugin({
      id: "G-P4C4H8GP2W",
      debug: true,
    }),
  ],

})
