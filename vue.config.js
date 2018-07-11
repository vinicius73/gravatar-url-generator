const baseUrl = process.env.NODE_ENV === 'production'
  ? '/gravatar-url-generator/'
  : '/'
module.exports = {
  baseUrl,
  pwa: {
    name: 'Gravatar URL Generator',
    themeColor: '#009586',
    msTileColor: '#009586',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    workboxOptions: {
    }
  }
}
