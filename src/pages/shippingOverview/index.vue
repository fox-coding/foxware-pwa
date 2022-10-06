<template>
  <div class="container mx-auto prose">
    <h1>Versandkostenübersicht</h1>
    <shipping-method-wrapper></shipping-method-wrapper>
  </div>
</template>

<script>
import ShippingMethodWrapper from "@/components/custompages/ShippingOverview/ShippingMethodWrapper.vue"
export default {
  components: { ShippingMethodWrapper },
}
</script>

<style>
.container {
  max-width: 1280px;
  min-height: 680px;
}
</style>
