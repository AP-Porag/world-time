export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'world-time',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/vendors/js/vendor.bundle.base.js",
        async: true,
        crossorigin: "anonymous"
      },
      {
        src: "/js/vendors/aos/dist/aos.js/aos.js",
      },
      {
        src: "/js/demo.js",
      },
      {
        src: "/js/jquery.easeScroll.js",
      },
    ],
    loading: {
      color: 'blue',
      height: '5px'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/vendors/mdi/css/materialdesignicons.min.css',
    '~/assets/vendors/aos/dist/aos.css/aos.css',
    '~/assets/images/favicon.png',
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
