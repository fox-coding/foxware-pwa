<template>
  <div class="sw-footer" data-testid="main-footer">
    <section class="bg-gray-100">
  <div class="flex flex-wrap">
    <div class="w-full md:w-5/12 lg:w-3/12 py-20 px-6 bg-white">
      <div class="max-w-xs mx-auto">
        <a class="inline-block mb-12 text-3xl font-bold font-heading" href="#">
          <img class="" src="https://cdn.allbuyone.com/media/image/99/aa/dd/allbuyone-footer.png" alt="" width="auto">
        </a>
        <div class="mb-12 font-semibold font-heading">
          <p>allbuyone GmbH Büro München</p>
          <p>Obere Bahnhofstraße 58</p>
          <p>D-82110 Germering</p>
        </div>
        <div class="flex mb-16 md:mb-40">
          <a class="inline-flex items-center justify-center w-12 h-12 mr-2 bg-blue-500 rounded-full" href="#">
            <img src="https://shuffle.dev/yofte-assets/buttons/facebook-circle.svg" alt="">
          </a>
          <a class="inline-flex items-center justify-center w-12 h-12 mr-2 bg-indigo-300 rounded-full" href="#">
            <img src="https://shuffle.dev/yofte-assets/buttons/instagram-circle.svg" alt="">
          </a>
          <a class="inline-flex items-center justify-center w-12 h-12 bg-blue-300 rounded-full" href="#">
            <img src="https://shuffle.dev/yofte-assets/buttons/twitter-circle.svg" alt="">
          </a>
        </div>
        <div class="flex flex-wrap">
          <div class="w-1/3 px-1 mb-2 lg:mb-0">
            <img class="w-full" src="https://shuffle.dev/yofte-assets/brands/visa.svg" alt="">
          </div>
          <div class="w-1/3 px-1 mb-2 lg:mb-0">
            <img class="w-full" src="https://shuffle.dev/yofte-assets/brands/paypal.svg" alt="">
          </div>
          <div class="w-1/3 px-1 mb-2 lg:mb-0">
            <img class="w-full" src="https://shuffle.dev/yofte-assets/brands/mastercard.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:w-7/12 lg:w-9/12 py-20 px-6 lg:pl-40">
        <SwFooterNavigation class="sw-footer__bottom-navigation" />
      <div class="relative mt-8 pb-32 lg:pb-0">
        <p class="font-semibold font-heading">Copyright © allbuyone gmbh. Alle Rechte reserviert.</p>
      </div>
    </div>
  </div>
</section>

  </div>
</template>

<script>
import SwPluginSlot from "sw-plugins/SwPluginSlot.vue"
import SwFooterNavigation from "@/components/organisms/SwFooterNavigation.vue"

export default {
  name: "SwFooter",
  components: {
    SwPluginSlot,
    SwFooterNavigation,
  },
  props: {
    column: {
      type: Number,
      default: 4,
    },
  },
}
</script>
