module.exports = {
  content: [
    "./sw-plugins/my-local-plugin/myLocalPlugin.vue",
    "./src/pages/index.vue",
    "./src/components/SwHeader.vue",
    "./src/components/SwTopNavigation.vue",
    "./src/components/SwSearchBar.vue",
    "./src/components/SwHeaderIcons.vue",
    "./src/components/SwFooter.vue",
    "./src/components/organisms/SwFooterNavigation.vue"
  ],
  theme: {
    extend: {
      colors: {
        'abo-primary': '#006ab3',
        'abo-secondary': '#009fe3',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
