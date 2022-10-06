<template>
  <div>
    <section v-for="entry in deliveryinfos" :key="entry.id">
      <shipping-method-table
        :singleShippingMethod="entry"
      ></shipping-method-table>
    </section>
  </div>
</template>

<script>
import ShippingMethodTable from "./ShippingMethodTable.vue"
import SwPluginSlot from "sw-plugins/SwPluginSlot.vue"
import axios from "axios"
import config from "@@/shopware-pwa.config.js"

const SHOPWARE_API_URL = config.shopwareEndpoint
const PLUGIN_ENDPOINT_URL = "/store-api/deliveryinfos"
const SW_ACCESS_KEY = config.shopwareAccessToken

export default {
  name: "ShopwarePluginSlot",
  components: {
    SwPluginSlot,
    ShippingMethodTable,
  },
  data() {
    return {
      deliveryinfos: undefined,
    }
  },
  mounted() {
    this.getShippingInfos()
  },
  methods: {
    async getShippingInfos() {
      try {
        const shippingdata = await axios.get(
          `${SHOPWARE_API_URL}${PLUGIN_ENDPOINT_URL}`,
          {
            headers: {
              "sw-access-key": SW_ACCESS_KEY,
            },
          }
        )
        this.deliveryinfos = shippingdata.data.shippingMethods
      } catch (e) {
        console.warn("ShippingInfos: ", e)
      }
    },
  },
}
</script>

<style></style>
