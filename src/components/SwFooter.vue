 <!-- <template>
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
</script> -->

<template>
<section id="footer" class="py-10 bg-abogray">
  <div class="container mx-auto px-4">
    <img class="container w-auto mb-12" src="~assets/logo/allbuyone-footer556efe06e9117.png" alt="">
    <div class="flex flex-wrap  -mx-4 border-b border-gray-400">
      <div class="w-full lg:w-5/5 px-4">
        <div class="flex flex-wrap -mx-5">
          <div class="w-full md:w-1/2 lg:w-1/5 px-4 mb-10 lg:mb-0">
            <h3 class="mb-6 text-base font-bold font-heading text-abo-text-grey ">Kontakt</h3>
            <ul class="text-xs">
              <li class="mb-5 text-abo-text-grey">Bei Fragen oder Problemen schreiben Sie uns gerne eine Mail:</li>
              <li class="mb-1 text-abo-text-grey flex flex-wrap">
              <a class="hover:text-abo-primary" href="mailto:shop@allbuyone.com">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 hover:text-abo-primary" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              </a>
              <a class="hover:text-abo-primary text-sm font-semibold" href="mailto:shop@allbuyone.com">shop@allbuyone.com</a></li>
            </ul>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/5 px-4 mb-10 lg:mb-0">
            <h3 class="mb-6 text-base font-bold font-heading text-abo-text-grey">Informationen</h3>
            <ul class="text-xs">
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Referenzen</a></li>
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Team</a></li>
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Karriere</a></li>
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Wiederrufsrecht</a></li>
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Datenschutz</a></li>
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">AGB</a></li>
              <li><a class="text-abo-text-grey hover:text-abo-primary" href="#">Impressum</a></li>
            </ul>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/5 px-4 mb-4 footer-text-color">
            <h3 class="mb-6 text-base text-abo-text-grey font-bold text-abo-text-grey">Shop Service</h3>
            <ul class="text-xs">
              <li class="mb-1">
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">FAQ</a></li>
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Retouren & Reklamationen</a></li>
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Kontakt</a></li>
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Lookbooks</a></li>
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Newsletter</a></li>
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Versandinfo</a></li>
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Zahlungsinfo</a></li>
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Lexikon</a></li>
              <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Sitemap</a></li>
            </ul>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/5 px-4 mb-4 footer-text-color">
            <h3 class="mb-3 text-base text-abo-text-grey font-bold text-abo-text-grey">Versand</h3>
            <ul class="text-xs">
              <li class="flex flex-wrap mb-6">
                <a href=""><img class="mr-3" src="~assets/bilder/dispatch-ups.png" alt="dispach_ups"></a>
                <a href=""><img src="~assets/bilder/dispatch-sped.png" alt="dispach_sped"></a>
              </li>
              <li class="mb-1">
                <a class="text-abo-text-grey hover:text-abo-primary" href="#">Wir versenden per UPS bzw. weiteren Paketdiensten und per Spedition in folgende Länder:</a>
              </li>
              <li class="flex flex-wrap mt-3">
                <a class="mr-1 mt-2" href=""><img src="~assets/bilder/shipping-flagDE.jpg" alt="DE"></a>
                <a class="mr-1 mt-2" href=""><img src="~assets/bilder/shipping-flagAT.jpg" alt="DE"></a>
                <a class="mr-1 mt-2" href=""><img src="~assets/bilder/shipping-flagCH.jpg" alt="DE"></a>
                <a class="mr-1 mt-2" href=""><img src="~assets/bilder/shipping-flatBE.jpg" alt="DE"></a>
                <a class="mr-1 mt-2" href=""><img src="~assets/bilder/shipping-flatNL.jpg" alt="DE"></a>
                <a class="mr-1 mt-2" href=""><img src="~assets/bilder/shipping-flatLU.jpg" alt="DE"></a>
                <a class="mr-1 mt-2" href=""><img src="~assets/bilder/shipping-flatDK.jpg" alt="DE"></a>
                <a class="mr-1 mt-2" href=""><img src="~assets/bilder/shipping-flatIT.jpg" alt="DE"></a>
                <a class="mr-1 mt-2" href=""><img src="~assets/bilder/shipping-flatSE.jpg" alt="DE"></a>
              </li>
            </ul>
          </div>
                    <div class="w-full md:w-1/2 lg:w-1/5 px-4 mb-4 footer-text-color">
            <h3 class="mb-6 text-base text-abo-text-grey font-bold text-abo-text-grey">Zahlung</h3>
            <ul class="text-xs">
            <div class="flex flex-wrap mb-5">
              <a href=""><img class="w-12 mr-2 mb-1" src="~static/icons/visa.svg" alt=""></a>
              <a href=""><img class="w-12 mr-2 mb-1" src="~static/icons/mastercard.svg" alt=""></a>
              <a href=""><img class="h-6 mb-1" src="https://www.paypalobjects.com/webstatic/de_DE/i/de-pp-logo-100px.png" border="0" alt="PayPal Logo" /></a>
              
            </div>
            <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Kreditkarte</a></li>
            <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">PayPal</a></li>
            <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Rechnung</a></li>
            <li class="mb-1"><a class="text-abo-text-grey hover:text-abo-primary" href="#">Vorkasse</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full px-4 flex flex-wrap justify-between lg:order-last">

        <div class="w-full md:w-auto flex">
          <a class="inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full" href="#">
            <img src="yofte-assets/buttons/facebook-white-circle.svg" alt="">
          </a>
          <a class="inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full" href="#">
            <img src="yofte-assets/buttons/instagram-circle.svg" alt="">
          </a>
          <a class="inline-flex items-center justify-center w-12 h-12 rounded-full" href="#">
            <img src="yofte-assets/buttons/twitter-circle.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="pt-12 flex items-center justify-center">
      <p class="inline-block text-xs text-abo-text-grey">* Alle Preise inkl. gesetzl. jeweils gültiger Mehrwertsteuer zzgl. <a href="">Versandkosten</a></p>
    </div>
     <div class="pt-6 flex items-center justify-center">
      <p class="inline-block text-xs text-abo-text-grey">copyright © allbuyone gmbh. Alle Rechte reserviert.</p>

     </div>
 
  </div>
</section>
</template>

<script>
import SwPluginSlot from "sw-plugins/SwPluginSlot.vue"
import SwFooterNavigation from "@/components/organisms/SwFooterNavigation.vue"
import { SfIcon } from "@storefront-ui/vue"


export default {
  name: "SwFooter",
  components: {
    SwPluginSlot,
    SwFooterNavigation,
    SfIcon,
  },
  props: {
    column: {
      type: Number,
      default: 5,
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.sw-footer {
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  margin-top: 1em;
  width: 100%;

  @include for-desktop {
    margin-bottom: 0;
    margin-top: 2em;
  }

  &__link {
    font-weight: 500;

    &:hover {
      color: var(--_c-green-primary);
      text-decoration: underline;
    }
  }

  &__signature {
    text-align: center;
    width: 100%;

    @include for-desktop {
      margin-bottom: 0;
    }
  }

  &__bottom-navigation {
    border-top: var(--c-primary) solid 4px;
    margin-bottom: var(--spacer-sm);
  }
}
</style>

