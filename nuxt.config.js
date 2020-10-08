export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Argentum 20",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&family=Livvic:ital,wght@0,400;0,700;1,400&display=swap",
      },
    ],
    script: [
      // {
      //   src: "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js",
      //   async: true,
      // },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/fontawesome.min.css",
    "@/assets/css/light.min.css",
    "@/assets/css/brands.min.css",
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["@/plugins/vuePlugins", "@/plugins/swiper.client.js"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // Actúa como fallback si no está puesto ningún runtimeConfig
    baseURL: "http://localhost:1338",
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  publicRuntimeConfig: {
    axios: {
      browserBaseUrl: process.env.AXIOS_BROWSER_BASE_URL || "http://localhost:1338",
    },
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.AXIOS_BASE_URL || "http://localhost:1338",
    },
  },
  // serverMiddleware: [{ path: "/api", handler: "@/api/index.js" }],
};
