<template>
  <div class="hidden xl:flex sw-search-bar flex mx-auto mb-10 lg:mb-0 items-center pl-8 bg-white rounded-lg">
     <span class="mr-3">
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 17.6719L12.5042 12.4961" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M7.27524 14.4082C10.8789 14.4082 13.8002 11.486 13.8002 7.88134C13.8002 4.27666 10.8789 1.35449 7.27524 1.35449C3.67159 1.35449 0.750244 4.27666 0.750244 7.88134C0.750244 11.486 3.67159 14.4082 7.27524 14.4082Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
      <input
      v-model="typingQuery"
      :placeholder="$t('Search for products')"
      :aria-label="$t('Search for products')"
      data-testid="search-bar"
      @keydown.enter="performSearch"
      class="header__search border-0 focus:ring-transparent focus:outline-none" type="search">
      <button class="inline-flex items-center justify-center w-12 h-12 bg-orange-300 hover:bg-orange-400 rounded-md">
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.125 6.00252L0 1.87752L1.17801 0.699219L6.48102 6.00252L1.17801 11.3058L0 10.1275L4.125 6.00252Z" fill="white"></path>
        </svg>
      </button>

    <SwSuggestSearch
      v-if="!isMobile"
      :products="getProducts"
      :total-found="getTotal"
      :search-phrase="typingQuery"
      :is-open="isSuggestBoxOpen"
      @close="isSuggestBoxOpen = false"
      @search="performSearch"
    />
  </div>
</template>

<script>
import { ref, reactive, onMounted, computed } from "@vue/composition-api"
import { getSearchPageUrl } from "@/helpers"
import { SfSearchBar } from "@storefront-ui/vue"
import { useProductQuickSearch } from "@shopware-pwa/composables"
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "@storefront-ui/vue/src/utilities/mobile-observer"
import { debounce } from "@shopware-pwa/helpers"
const SwSuggestSearch = () => import("@/components/SwSuggestSearch.vue")

export default {
  components: {
    SfSearchBar,
    SwSuggestSearch,
  },
  setup() {
    const { searchTerm, search, getProducts, getTotal } =
      useProductQuickSearch()

    const typingQuery = ref("")
    const isSuggestBoxOpen = ref(false)

    const performSuggestSearch = debounce((value) => {
      searchTerm.value = value
      if (searchTerm.value.length > 0) {
        search()
        isSuggestBoxOpen.value = true
      } else {
        isSuggestBoxOpen.value = false
      }
    }, 300)

    return {
      getProducts,
      getTotal,
      isSuggestBoxOpen,
      typingQuery,
      performSuggestSearch,
    }
  },
  computed: {
    ...mapMobileObserver(),
  },
  watch: {
    $route(to, from) {
      this.isSuggestBoxOpen = false
    },
    typingQuery(value) {
      if (!this.isMobile) {
        this.performSuggestSearch(value)
      }
    },
  },
  beforeDestroy() {
    unMapMobileObserver()
  },
  methods: {
    performSearch() {
      if (this.typingQuery.length > 0) {
        this.$router.push(
          this.$routing.getUrl(getSearchPageUrl(this.typingQuery))
        )
      }
    },
  },
}
</script>