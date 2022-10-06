<template>
  <div :style="{'background-color':content.config.bgColor.value, 'padding':'20px'}" v-html="content.config.content.value"></div>
</template>

<script>
// import any extra components here

export default {
  name: "CmsElementBgbox",
  props: {
    content: {
      type: Object,
      default: () => ({
        config: {
          content: {
            value: "<div></div>"
          },
          bgColor: {
            value: "transparent",
          },
        },
        id: null,
      }),
    },
  },
}
</script>
