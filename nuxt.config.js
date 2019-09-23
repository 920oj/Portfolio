
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: `おーじぇいWEB`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'おーじぇいことJunya OiwaのポートフォリオWebサイトです。自己紹介や過去に作ったものなどの情報を掲載しています。' 
      },
      { property: 'og:url', content: 'https://920oj.net/'}
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
