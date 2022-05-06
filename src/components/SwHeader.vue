<template>
  <div class="sw-top-navigation" data-testid="main-header">

    <SfOverlay :visible="isOpen" class="sw-overlay" />

    <SwCookieBar />

     <section class="relative">
      <nav class="relative flex flex-wrap bg-abo-primary justify-center">
        <div class="flex justify-between w-full max-w-screen-xl">

          <div class="pr-10 py-2 flex w-full items-center">
            <SwLogo />
            <SwSearchBar />
          </div>
          <SwHeaderIcons />
          <a class="xl:hidden flex mr-6 items-center text-white" href="#">
            <svg class="mr-2" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span class="inline-block w-6 h-6 text-center text-gray-900 bg-white rounded-full font-semibold font-heading">3</span>
          </a>
          <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z" fill="white"></path>
            </svg>
          </a>
        </div>
        <div class="hidden lg:flex w-full px-10 py-2 bg-abo-secondary">
            <SwTopNavigation />
        </div>
      </nav>
    </section>
    <!-- <SfHeader
      :title="$t('page.title')"
      class="sw-header sf-header--has-mobile-search"
      :has-mobile-search="false"
      :is-sticky="false"
    >
      <template #logo>
        <SwLogo />
      </template>
      <template #search>
        <SwSearchBar />
      </template>
      <template #header-icons>
        <SwHeaderIcons />
      </template>
      <template #navigation>
        <SwTopNavigation />
      </template>
    </SfHeader> -->
  </div>
</template>

<script>
import { SfHeader, SfOverlay } from "@storefront-ui/vue"
import { useUIState } from "@shopware-pwa/composables"

import SwTopBar from "@/components/SwTopBar.vue"
import SwLogo from "@/components/SwLogo.vue"
import SwHeaderIcons from "@/components/SwHeaderIcons.vue"
import SwTopNavigation from "@/components/SwTopNavigation.vue"
import SwSearchBar from "@/components/SwSearchBar.vue"

import SwCookieBar from "@/components/gdpr/SwCookieBar.vue"

export default {
  components: {
    SfHeader,
    SfOverlay,
    SwTopBar,
    SwLogo,
    SwHeaderIcons,
    SwTopNavigation,
    SwSearchBar,
    SwCookieBar,
  },
  setup() {
    const { isOpen } = useUIState({ stateName: "MEGA_MENU_OVERLAY_STATE" })

    return {
      isOpen,
    }
  },
}
</script>

<style lang="scss">
.sf-header__wrapper {
  header {
    box-sizing: border-box;
    max-width: 1320px;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.sw-top-navigation {
  --header-container-padding: 0 var(--spacer-base);
  --header-navigation-item-margin: 0 1rem 0 0;

  .sw-overlay {
    --overlay-z-index: 1;
  }

  @include for-desktop {
    ::v-deep .sf-header {
      display: flex;
      justify-content: space-between;
      &__sticky-container {
        width: 100%;
      }
      &__navigation {
        flex: 0 0 calc(100% - 22rem);
      }
    }
  }
}

.sw-header {
  position: relative;
  background-color: var(--c-white);

  &__icons {
    display: flex;
  }

  &__icon {
    cursor: pointer;
  }
}
</style>
