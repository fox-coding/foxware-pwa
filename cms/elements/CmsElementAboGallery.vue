<template>
  <div class="galary-wrapper flex relative">
    <div class="w-1/5"></div>
    <AboImageSlider class="cms-element-image-slider w-4/5" :slides="getSlides">
      <AboHeroItem
        v-for="slide in getSlides"
        :key="slide.mediaId"
        class="sw-image-slider__item"
        :image="`'${slide.mediaUrl}'`"
      >
        <template v-if="slide.url" #call-to-action>
          <!-- ToDo https://github.com/DivanteLtd/storefront-ui/issues/1279 
          ToDo move nuxt-link to SwLink when https://github.com/DivanteLtd/shopware-pwa/pull/901 merge -->

          <nuxt-link
            :to="$routing.getUrl(slide.url)"
            class="cms-element-image-slider__link"
          >
            <SwButton class="sf-button"> See more </SwButton>
          </nuxt-link>
        </template>
      </AboHeroItem>
    </AboImageSlider>
  </div>
</template>

<script>
import AboImageSlider from "@/components/organisms/AboImageSlider.vue"
import SwButton from "@/components/atoms/SwButton.vue"

export default {
  name: "CmsElementAboGallery",

  components: {
    AboImageSlider,
    SwButton,
  },

  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    getSlides() {
      return (this.content.config && this.content.config.sliderItems.value) || []
    },
  },
}
</script>

