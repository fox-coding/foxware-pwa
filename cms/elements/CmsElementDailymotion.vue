<template>
 <div class="sw-cms-el-dailymotion">
                <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden;">
                    <iframe style="width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden"
                            :src="'https://www.dailymotion.com/video/'+videoId"
                            frameborder="0"
                            type="text/html"
                            width="100%"
                            height="100%">
                    </iframe>
                </div>
            </div>
</template>

<script>
export default {
  components: {},
  name: "CmsElementDailymotion",
  props: {
    content: {
      type: Object,
      default: () => ({
        config: {
          dailyUrl: {
            value: "",
          },
        },
        id: null,
      }),
    },
  },
  computed: {
    videoId() {
      return this.content.config.dailyUrl.value
      return 'https://www.dailymotion.com/embed/video/' + this.content.config.dailyUrl.value
    },
  },
}
</script>

<style lang="scss">

</style>
