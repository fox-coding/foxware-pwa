<template>
    <div class="flex justify-between w-full max-w-screen-xl m-auto">
        <h2>ABO-CUSTOM-URL:</h2>
        <SwPluginSlot name="abo-plugin-main-content" />

    </div>
</template>

<script>
import SwPluginSlot from "sw-plugins/SwPluginSlot.vue"

export default {
  components: {
    SwPluginSlot,
  },
}
</script>
