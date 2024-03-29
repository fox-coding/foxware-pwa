module.exports = {
  content: [
    "./sw-plugins/my-local-plugin/myLocalPlugin.vue",
    "./src/pages/_.vue",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./cms/blocks/CmsBlockImageHeroHeading.vue",
    "./cms/elements/CmsElementAboGallery.vue",
    "./src/components/organisms/AboImageSlider.vue",
    "./cms/elements/CmsElementBgbox.vue",
    "./src/pages/configurator.vue",

    ".shopware-pwa/pwa-bundles-assets/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'abo-primary': '#006ab3',
        'abo-secondary': '#009fe3',
        'abo-gray': '#e3e3e3',
        'abo-pink': 'deeppink',
        'abo-highlight': '#ff9600',
        'abo-highlightLighten': '##ffba00',
        'abo-transparentWhite': '#ffffffde'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
