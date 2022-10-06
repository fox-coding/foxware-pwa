<template>
  <div class="solid text-gray-800 inline-flex">
    <span class="bg-gray-100 py-2 px-4 rounded inline-flex items-center block">
      ab {{ weight }}</span
    >
    <span class="font-bold inline-flex items-center block py-2 px-4">{{
      price
    }}</span>
  </div>
</template>

<script>
export default {
  props: ["step"],
  methods: {
    formatPrice(value) {
      if (typeof value !== "number") {
        return value
      }
      const formatter = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
      })
      return formatter.format(value)
    },
    formatWeight(value) {
      if (typeof value !== "number") {
        return value
      }
      const formatter = new Intl.NumberFormat("de-DE")
      return formatter.format(value)
    },
  },
  computed: {
    weight() {
      return `${this.formatWeight(this.step.quantityStart)} kg`
    },
    price() {
      return `${this.formatPrice(this.step.price)}`
    },
  },
}
</script>
