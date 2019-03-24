const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{ src: 'http://api.map.baidu.com/api?v=2.0&ak=bFAgzCdGaFxkCtnZHf9OOK9dkgP2A5rw', type: 'text/javascript', charset: 'utf-8'}],
    __dangerouslyDisableSanitizers: ['script']
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/public/public.css',
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/reset.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      /*if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/
    },
    //cache: true,
    //vendor: ['element-ui'],
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          // 除了img的src,还可以继续配置处理更多html引入的资源
          attrs: ['img:src', 'img:data-src', 'audio:src']
        }
      },
      {
        test: /\.css$/,
        loader: 'vue-style-loader!css-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
  }
}
