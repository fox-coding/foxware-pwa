module.exports = {
  content: [
    "./sw-plugins/my-local-plugin/myLocalPlugin.vue",
    "./src/pages/index.vue",
    "./src/components/SwHeader.vue",
    "./src/components/SwTopNavigation.vue",
    "./src/components/SwSearchBar.vue",
    "./src/components/SwHeaderIcons.vue",
    "./src/components/SwFooter.vue",
    "./src/components/organisms/SwFooterNavigation.vue",
    "./src/components/SwProductDescription.vue",
    "./cms/blocks/CmsBlockImageHeroHeading.vue",
    "./cms/elements/CmsElementAboGallery.vue",
    "./src/components/organisms/AboImageSlider.vue",
    "./cms/elements/CmsElementBgbox.vue",
    "./src/pages/aboTeam.vue",
    ".shopware-pwa/pwa-bundles-assets/abo-team/main.vue",
    ".shopware-pwa/pwa-bundles-assets/abo-contact/main.vue"
  ],
  theme: {
    typography: {
      default: {
        css: {
          'div.noprose': false,
        }
      }
    },
    extend: {
      colors: {
        'abo-primary': '#006ab3',
        'abo-secondary': '#009fe3',
        'abo-transparentWhite': '#ffffffde'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
