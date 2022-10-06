<template>
  <div>
    <h2 class="mb-0">{{ singleShippingMethod.name }}</h2>
    <p>Laufzeit: {{ singleShippingMethod.deliveryTime }}</p>
    <span v-for="entry in singleShippingMethod.prices" :key="entry.id">
      <span v-for="step in entry.steps" :key="step.id">
        <shipping-method-entry :step="step"></shipping-method-entry>
      </span>
    </span>
  </div>
</template>

<script>
import ShippingMethodEntry from "./ShippingMethodEntry.vue"
export default {
  components: { ShippingMethodEntry },
  props: ["singleShippingMethod"],
}
</script>

<style></style>
