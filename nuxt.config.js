export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/images/icons/favicon.png" },
      {
        rel: "stylesheet",
        href: "/vendor/bootstrap/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
      },
      {
        rel: "stylesheet",
        href: "/fonts/iconic/css/material-design-iconic-font.min.css"
      },
      {
        rel: "stylesheet",
        href: "/fonts/linearicons-v1.0.0/icon-font.min.css"
      },
      {
        rel: "stylesheet",
        href: "/vendor/animate/animate.css"
      },
      {
        rel: "stylesheet",
        href: "/vendor/css-hamburgers/hamburgers.min.css"
      },
      {
        rel: "stylesheet",
        href: "/vendor/animsition/css/animsition.min.css"
      },
      {
        rel: "stylesheet",
        href: "/vendor/select2/select2.min.css"
      },
      {
        rel: "stylesheet",
        href: "/vendor/daterangepicker/daterangepicker.css"
      },
      {
        rel: "stylesheet",
        href: "/vendor/slick/slick.css"
      },
      {
        rel: "stylesheet",
        href: "/vendor/MagnificPopup/magnific-popup.css"
      },
      {
        rel: "stylesheet",
        href: "/vendor/perfect-scrollbar/perfect-scrollbar.css"
      },
      {
        rel: "stylesheet",
        href: "/css/util.css"
      },
      {
        rel: "stylesheet",
        href: "/css/main.css"
      }
    ],

    script: [
      {
        src: "/vendor/jquery/jquery-3.2.1.min.js",
        type: "text/javascript"
      },

      {
        src: "/vendor/bootstrap/js/popper.js",
        type: "text/javascript"
      },
      {
        src: "/vendor/bootstrap/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src: "/vendor/animsition/js/animsition.min.js",
        type: "text/javascript"
      },

      {
        src: "/vendor/select2/select2.min.js",
        type: "text/javascript"
      },
      {
        src: "/vendor/daterangepicker/moment.min.js",
        type: "text/javascript"
      },
      {
        src: "/vendor/daterangepicker/daterangepicker.js",
        type: "text/javascript"
      },
      {
        src: "/vendor/slick/slick.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/slick-custom.js",
        type: "text/javascript"
      },
      {
        src: "/vendor/parallax100/parallax100.js",
        type: "text/javascript"
      },
      {
        src: "/vendor/MagnificPopup/jquery.magnific-popup.min.js",
        type: "text/javascript"
      },
      {
        src: "/vendor/isotope/isotope.pkgd.min.js",
        type: "text/javascript"
      },
      {
        src: "/vendor/sweetalert/sweetalert.min.js",
        type: "text/javascript"
      },
      {
        src: "/vendor/perfect-scrollbar/perfect-scrollbar.min.js",
        type: "text/javascript"
      },

      {
        src: "/homepagejs/index.js",
        type: "text/javascript"
      },
      {
        src: "/js/main.js",
        type: "text/javascript"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
