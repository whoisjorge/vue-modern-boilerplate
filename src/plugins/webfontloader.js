const WebFontLoader = require('webfontloader')

WebFontLoader.load({
  custom: {
    families: ['Custom-Font'],
    urls: ['fonts/import.css']
  },
  google: {
    families: [
      'Overpass:300,600,700',
      'Inconsolata'
    ]
  }
})

export default WebFontLoader
