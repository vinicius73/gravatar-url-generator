const version = require('./package.json').version
const now = Math.round(Date.now() / 6000).toString(36)

process.env.VUE_APP_VERSION = `${version}-${now}`

const baseUrl = process.env.NODE_ENV === 'production'
  ? '/gravatar-url-generator/'
  : '/'

const precacheSw = `${baseUrl}precache-sw.js`

module.exports = {
  baseUrl,
  pwa: {
    name: 'Gravatar URL Generator',
    themeColor: '#009586',
    msTileColor: '#009586',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    workboxOptions: {
      importScripts: [precacheSw],
      skipWaiting: true
    }
  }
}
