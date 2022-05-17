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
