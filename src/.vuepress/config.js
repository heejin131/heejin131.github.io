import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  sourceDir: "src",
  dest: "docs/",
  
  lang: 'en-US',

  title: 'IM 희진',
  description: "'어떻게 더 잘 해낼 수 있는 지 끊임없이 생각하고 자신에게 질문을 던져라' 단단한 기술력을 가지고 있는 신입 데이터 개발자의 첫걸음",

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'heejin-blog:team SUNSIN' }],
    ['meta', { property: 'og:description', content: "Im Heejin, who is the beginner in  programming." }],
    ['meta', { property: 'og:image', content: 'https://heejin131.github.io/images/preview.png' }],
    ['meta', { property: 'og:url', content: 'https://blog.journeyjean.shop' }],
  ],
  
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US',
    //   title: 'HEEJIN-blog:team sunsin',
    //   description: "'Continuously think about how you can do better and keep asking yourself questions.' The first step of a rookie data developer with solid technical skills.",
    },
    '/': {
      lang: 'ko-KR',
    //   title: '희진-blog:순신샵',
    //   description: "'어떻게 더 잘 해낼 수 있는 지 끊임없이 생각하고 자신에게 질문을 던져라' 단단한 기술력을 가지고 있는 신입 데이터 개발자의 첫걸음",
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
