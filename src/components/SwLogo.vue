<template>
  <nuxt-link
    :to="$routing.getUrl('/')"
    class="sf-header__logo"
    data-testid="header-logo"
  >
    <img
      src="https://cdn.allbuyone.com/media/image/9f/7a/d6/logo-allbuyone-big.png"
      alt="Allbuyone"
    />
  </nuxt-link>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.sf-header__logo img {
  height: 100px;
}
</style>
