<template>
    <div class="max-w-screen-xl flex justify-left mx-auto w-full my-4 min-h-[50%]">
        <SwPluginSlot name="abo-plugin-main-content" class="w-full" />
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
