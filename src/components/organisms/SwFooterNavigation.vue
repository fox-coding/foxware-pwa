<template>
  <div
    class="flex flex-wrap mt-16 -mx-4 pb-20 border-b"
    v-if="navigationElements && navigationElements.length"
    :multiple="true"
    :open="open"
  >
    <div
      class="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0"
      v-for="category in navigationElements"
      :key="category.id"
      :title="getTranslatedProperty(category, 'name')"
    >
    <h3 class="mb-8 text-xl font-bold font-heading">{{getTranslatedProperty(category, 'name')}}</h3>
      <ul v-if="category.children">
        <li
          class="mb-6"
          v-for="childCategory in category.children"
          :key="childCategory.id"
        >
          <a
            v-if="isLinkCategory(childCategory)"
            class="sf-header__link hover:underline"
            :href="getCategoryUrl(childCategory)"
            target="_blank"
          >
            <SfMenuItem :label="getTranslatedProperty(childCategory, 'name')" />
          </a>
          <nuxt-link
            v-else
            class="sf-header__link hover:underline"
            :to="$routing.getUrl(getCategoryUrl(childCategory))"
          >
            <SfMenuItem :label="getTranslatedProperty(childCategory, 'name')" />
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
      <h3 class="mb-8 text-xl font-bold font-heading">Kontakt</h3>
      <ul>
        <li class="mb-6">
          <h4 class="mb-2">Tel:</h4>
          <a class="text-blue-500 hover:underline" href="#">+49 89-122 89 06 22</a>
        </li>
        <li class="mb-6">
          <h4 class="mb-2">Email:</h4>
          <a class="text-blue-500 hover:underline" href="#">shop@allbuyone.com</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { SfFooter, SfList, SfMenuItem } from "@storefront-ui/vue"
import { ref, watch, computed } from "@vue/composition-api"
import {
  getCategoryUrl,
  isLinkCategory,
  getTranslatedProperty,
} from "@shopware-pwa/helpers"
import { useNavigation, useSharedState } from "@shopware-pwa/composables"
import { useDomains } from "@/logic"

function extractCategoryNames(categories, aggregation = []) {
  for (const category of categories) {
    aggregation.push(getTranslatedProperty(category, "name"))
    if (category.children && category.children.length) {
      extractCategoryNames(category.children, aggregation)
    }
  }
}

export default {
  name: "SwFooterNavigation",
  components: {
    SfFooter,
    SfList,
    SfMenuItem,
  },
  setup() {
    const { loadNavigationElements, navigationElements } = useNavigation({
      type: "footer-navigation",
    })
    const isLoadingFooterData = ref(false)

    const { currentDomainId } = useDomains()

    const column = ref(4)

    const open = computed(() => {
      if (!navigationElements.value) {
        return []
      }
      const names = []
      extractCategoryNames(navigationElements.value, names)
      return names
    })

    const { preloadRef } = useSharedState()
    preloadRef(navigationElements, async () => {
      await loadNavigationElements({ depth: 2 })
    })
    watch(currentDomainId, async () => {
      await loadNavigationElements({ depth: 2 })
    })

    return {
      navigationElements,
      getCategoryUrl,
      isLinkCategory,
      column,
      open,
      getTranslatedProperty,
    }
  },
}
</script>
