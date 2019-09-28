
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: `920oj.net - OJのポートフォリオ`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'おーじぇいこと大岩潤矢のポートフォリオWebサイトです。自己紹介や過去に作ったものなどの情報を掲載しています。' 
      },
      { hid: 'description', name: 'description', content: 'OJこと大岩潤矢のポートフォリオです。自己紹介や過去に作ったものなどの情報を掲載しています。' },
      { hid: 'og:site_name', property: 'og:site_name', content: '920oj.net - OJのポートフォリオ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://920oj.net/' },
      { hid: 'og:title', property: 'og:title', content: '920oj.net - OJのポートフォリオ' },
      { hid: 'og:description', property: 'og:description', content: 'OJこと大岩潤矢のポートフォリオです。自己紹介や過去に作ったものなどの情報を掲載しています。' },
      { hid: 'og:image', property: 'og:image', content: 'https://920oj.net/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@920oj' },
      { name: 'twitter:title', content: '920oj.net - OJのポートフォリオ'},
      { name: 'twitter:description', content: 'OJこと大岩潤矢のポートフォリオです。自己紹介や過去に作ったものなどの情報を掲載しています。'}

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:100,400,700&display=swap&subset=japanese'},
      { rel: 'stylesheet', href: 'https://unpkg.com/ress/dist/ress.min.css'}
    ],
    script: [
      { src: 'https://kit.fontawesome.com/031620f726.js'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'animate.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-svg-loader',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['@nuxtjs/moment', ['ja']]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
}
