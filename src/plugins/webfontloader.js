const WebFontLoader = require('webfontloader')

WebFontLoader.load({
  google: {
    families: [
      'Overpass:300,600,700',
      'Inconsolata'
    ]
  }
})

export default WebFontLoader
