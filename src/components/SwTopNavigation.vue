<template>
  <ul
    class="hidden lg:flex lg:items-center lg:w-auto"
    data-test-id="sw-top-navigation"
    v-if="visibleCategories && visibleCategories.length"
  >
    <li
      v-for="category in visibleCategories"
      :key="getTranslatedProperty(category, 'name')"
      data-testid="top-navigation-item"
      @click="changeCurrentCategory(null)"
    >
          <a
            v-if="isLinkCategory(category)"
            class="sf-header__link inline-block mr-3 py-2 px-4 text-center hover:text-white bg-gray-50 hover:bg-abo-primary rounded-full font-bold font-heading transition duration-200"
            :href="getCategoryUrl(category)"
            target="_blank"
          >
            {{ getTranslatedProperty(category, "name") }}
          </a>
          <nuxt-link
            v-else
            class="sf-header__link inline-block mr-3 py-2 px-4 text-center hover:text-white bg-gray-50 hover:bg-abo-primary rounded-full font-bold font-heading transition duration-200"
            :to="$routing.getUrl(getCategoryUrl(category))"
            >{{ getTranslatedProperty(category, "name") }}</nuxt-link
          >
          <SwMegaMenu
            v-if="category.children && category.children.length"
            :category="category"
            :visible="
              currentCategoryName &&
              getTranslatedProperty(category, 'name') === currentCategoryName
            "
          />
    </li>
    <SwPluginSlot name="sw-top-navigation-after" />
  </ul>
</template>

<script>
import {
  useNavigation,
  useSharedState,
  useUIState,
} from "@shopware-pwa/composables"

import SwMegaMenu from "@/components/SwMegaMenu.vue"
import { ref, watch, computed } from "@vue/composition-api"
import { getCategoryUrl, isLinkCategory } from "@shopware-pwa/helpers"
import SwPluginSlot from "sw-plugins/SwPluginSlot.vue"
import { useDomains } from "@/logic"
import SwTopNavigationShowMore from "@/components/SwTopNavigationShowMore.vue"
import { getTranslatedProperty } from "@shopware-pwa/helpers"

export default {
  components: {
    SwMegaMenu,
    SwPluginSlot,
    SwTopNavigationShowMore,
  },
  setup() {
    const { switchState: switchOverlay } = useUIState({
      stateName: "MEGA_MENU_OVERLAY_STATE",
    })
    const unwrappedElements = ref(5)
    const { loadNavigationElements, navigationElements } = useNavigation()
    const { currentDomainId } = useDomains()
    const currentCategoryName = ref(null)

    const changeCurrentCategory = (categoryName) => {
      currentCategoryName.value = categoryName
      switchOverlay(!!currentCategoryName.value)
    }

    const { preloadRef } = useSharedState()
    preloadRef(navigationElements, async () => {
      await loadNavigationElements({ depth: 3 })
    })

    const unvisibleCategories = computed(() => {
      if (
        navigationElements.value?.slice(unwrappedElements.value).length === 0
      ) {
        return
      }

      return {
        children: navigationElements.value.slice(unwrappedElements.value),
        name: "categories",
        translated: {
          name: "categories",
        },
      }
    })

    watch(currentDomainId, async () => {
      await loadNavigationElements({ depth: 3 })
    })

    return {
      navigationElements: computed(() => navigationElements.value || []),
      visibleCategories: computed(() =>
        navigationElements.value?.slice(0, unwrappedElements.value)
      ),
      unvisibleCategories,
      getCategoryUrl,
      isLinkCategory,
      currentCategoryName,
      changeCurrentCategory,
      getTranslatedProperty,
    }
  },

  watch: {
    navigationElements() {
      this.countVisibleCategories()
    },
  },

  async mounted() {
    window.addEventListener("resize", this.countVisibleCategories)
    this.countVisibleCategories()
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.countVisibleCategories)
  },

  methods: {
    countVisibleCategories() {
      this.unwrappedElements = this.navigationElements.length

      this.$nextTick(() => {
        const nav = this.$refs.navigation
        const navElements =
          nav?.querySelectorAll(".sf-header-navigation-item") || []
        let visibleItemsCount = 0
        let unvisibleItemsCount = 0

        navElements.forEach((element) => {
          if (element.offsetTop <= 27) {
            visibleItemsCount += 1
          }
          if (element.offsetTop > 27) {
            unvisibleItemsCount += 1
          }
        })
        if (unvisibleItemsCount >= 1) {
          // This subtraction makes more space in nav and prevent to move "more category " to the next line.
          this.unwrappedElements = Math.max(0, visibleItemsCount - 2)
        } else {
          this.unwrappedElements = visibleItemsCount
        }
      })
    },
  },
}
</script>

