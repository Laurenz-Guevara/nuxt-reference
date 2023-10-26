
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/laurenz/Repos/nuxt-reference/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "c9dc14da-a655-4896-b94f-f71f287a205b"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
