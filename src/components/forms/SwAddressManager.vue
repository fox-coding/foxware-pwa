<template>
  <div class="p-6 flex flex-col">
    <div class="text-base font-bold mb-2">{{ titleText || $t('Shipping address') }}</div>
    <div class="text-sm mb-2 min-h-[110px]" v-if="activeAddress">
      <div class="text-sm">
        <div>{{ activeAddress.firstName }} {{ activeAddress.lastName }}</div>
        <div>{{ activeAddress.street }}</div>
        <div>{{ activeAddress.zipcode }} {{ activeAddress.city }}</div>
        <div>{{ activeAddress.country.name }}</div>
        <div>{{ activeAddress.phoneNumber }}</div>
      </div>
    </div>
    <button class="bg-abo-gray font-bold hover:text-abo-primary" v-if="activeAddress" @click="
          isModalOpen = true
          isEditModeOpen = true
        ">
        {{ $t("Edit") }}
    </button>
    <SfModal
      class=""
      :title="$t('Edit address')"
      :visible="isModalOpen"
      @close="isModalOpen = false"
    >
      <SfHeading
        :title="$t('Edit address')"
        class=""
        :level="4"
      />
      <div v-if="isEditModeOpen" class="">
        <div
          v-for="address in addresses"
          :key="address.id"
          class=""
        >
          <SfAddressPicker
            :selected="activeAddress.id"
            @change="onAddressChange"
          >
            <SfAddress :name="address.id">
              <span>{{ address.firstName }} {{ address.lastName }}</span>
              <p>{{ address.street }}</p>
              <span>{{ address.zipcode }} {{ address.city }}</span>
              <span>{{ address.country.name }}</span>
              <span>{{ address.phoneNumber }}</span>
            </SfAddress>
          </SfAddressPicker>
        </div>
        <SwButton
          class=""
          @click="
            isModalOpen = true
            isEditModeOpen = false
          "
        >
          {{ $t("Add new") }}
        </SwButton>
      </div>
      <SwAddressForm
        v-else
        @success="onAddressSave"
        @cancel="isModalOpen = false"
      />
    </SfModal>
  </div>
</template>

<script>
import {
  SfHeading,
  SfRadio,
  SfModal,
  SfAddressPicker,
} from "@storefront-ui/vue"
import { useSessionContext, useUser } from "@shopware-pwa/composables"
import SwButton from "@/components/atoms/SwButton.vue"
import { ref, watch } from "@vue/composition-api"
import SwAddressForm from "@/components/forms/SwAddressForm.vue"
// import SwCheckbox from '@/components/atoms/SwCheckbox.vue'

export default {
  name: "SwAddressManager",
  components: {
    SfRadio,
    // SwCheckbox,
    SwButton,
    SfModal,
    SfAddressPicker,
    SwAddressForm,
    SfHeading,
  },
  props: {
    addresses: {
      type: Array,
      default: [],
    },
    activeAddress: {
      type: Object,
      default: null,
    },
    titleText: {
      type: String,
      default: null,
    },
    subtitleText: {
      type: String,
      default: null,
    },
  },
  setup(props, { root, emit }) {
    const isModalOpen = ref(false)
    const isEditModeOpen = ref(false)

    const onAddressSave = (addressId) => {
      isModalOpen.value = false
      emit("added", addressId)
    }

    function onAddressChange(value) {
      emit("change", value)
    }

    return {
      isModalOpen,
      onAddressSave,
      isEditModeOpen,
      onAddressChange,
    }
  },
}
</script>
