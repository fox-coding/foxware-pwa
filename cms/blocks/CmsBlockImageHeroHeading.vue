<template>
  <div class="hero-heading-wrapper relative min-h-[300px]">
    <CmsGenericElement
          v-if="getImage"
          :content="getImage"
          class="cms-block-abo-image-hero-heading-image w-[100vw]"
    />
    <div class="max-w-screen-xl absolute h-full inset-x-0 top-0 mx-auto w-full flex justify-between items-start flex-col md:flex-row py-3.5 px-2.5 xl:px-0">
      <CmsGenericElement
          v-if="getTitle"
          :content="getTitle"
          class="cms-block-abo-image-hero-heading-title text-white text-3xl font-bold px-2.5 bg-abo-secondary noprose"
      />
      <CmsGenericElement
          v-if="getDescription"
          :content="getDescription"
          class="p-2.5 text-xs w-[500px] bg-abo-transparentWhite text-zinc-600 overflow-auto max-h-[75%] max-w-[100%]"
      />
    </div>
  </div>

</template>

<script>
import CmsGenericElement from "sw-cms/CmsGenericElement";

export default {
  components: {
    CmsGenericElement,
  },
  name: "CmsBlockImageHeroHeading",
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    getSlots() {
      return this.content.slots || [];
    },
    getImage() {
      return this.getSlots.length && this.getSlots[0];
    },
    getTitle() {
      return this.getSlots.length && this.getSlots[1];
    },
    getDescription() {
      return this.getSlots.length && this.getSlots[2];
    },
  },
  mounted(){
    var target = document.querySelector('.hero-heading-wrapper')
    target.parentNode.parentNode.classList.remove('sw-default-section--boxed')
  }
};
</script>
<style>
  .hero-heading-wrapper img{
    min-height: 300px;
  }
</style>