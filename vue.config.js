const app = require('./src/app.config')

/**
 * Extend Vue & Webpack configuration.
 * https://cli.vuejs.org/config/
 */

module.exports = {
  productionSourceMap: false,

  /**
   * Pass some options to the PWA Plugin. See what is configured by default:
   * https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
   */
  pwa: {
    name: app.name,
    themeColor: app.themeColor,
    msTileColor: app.backgroundColor,
    appleMobileWebAppCapable: app.AppleMobileWebAppCapable,
    appleMobileWebAppStatusBarStyle: app.AppleMobileWebAppStatusBarStyle
  },

  /**
   * Pass settings to Pre-Processor loaders.
   * https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
   */
  css: {
    loaderOptions: {
      sass: { data: `@import "@/styles/_settings.scss";` }
    }
  },

  /**
   * Tweak the webpack configuration.
   * https://cli.vuejs.org/guide/webpack.html
   */
  configureWebpack: config => {
    // config.resolve.alias.appConfig = path.resolve(__dirname, './src')
    if (process.env.NODE_ENV === 'production') {
      // Remove comments inside compiled JS files.
      config.optimization.minimizer[0].options.uglifyOptions.output.comments = false
    }
  },

  // Allows for more fine-grained modification of the internal webpack config.
  chainWebpack: config => {
    // Inject app-specific variables into html-webpack-plugin
    config.plugin('html').tap(args => {
      args[0].app = app
      return args
    })

    if (process.env.NODE_ENV === 'production') {
      // Remove comments inside compiled CSS files.
      config.plugin('optimize-css').tap(args => {
        args[0].cssProcessorOptions = { discardComments: { removeAll: true } }
        return args
      })
        .end()
      // Let webpack generate all the project favicons and icons.
      // https://github.com/jantimon/favicons-webpack-plugin
      config.plugin('favicons').use(require('favicons-webpack-plugin'), [{
        background: app.backgroundColor,
        persistentCache: false,
        inject: false,
        logo: './public/img/icons/favicon.svg',
        prefix: 'img/icons/',
        icons: {
          favicons: true,
          android: true,
          appleIcon: true,
          windows: true,
          appleStartup: false,
          coast: false,
          firefox: false,
          yandex: false
        }
      }])
        .end()
    } else {
      // mutate for development...
    }
  },

  // Configure Webpack's dev server (proxy API requests)
  // https://github.com/vuejs/vue-cli/tree/dev/docs/config
  devServer: {}
}
