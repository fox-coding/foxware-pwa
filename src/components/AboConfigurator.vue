<template>
    <div id="aboConfigurator" @mouseup="clearDrag" class="prose">
        <button class="btn-pink" @click="activateConfigurator">Jetzt selbst gestalten</button>
        <div class="fixed w-full h-full left-0 top-0 overflow-hidden bg-white"
            :class="{ block: activated, 'hidden': !activated }">
            <div class="max-w-screen-xl m-auto py-4">
                <button class="btn-secondary" @click="closeConfigurator">schließen</button>
            </div>
            <AboConfiguratorDesigner :elementDragged="elementDragged" v-on:startDrag="updateDragged" />
        </div>
    </div>
</template>
  
<script>
import {
    useCart,
    useSessionContext,
    useUser,
} from "@shopware-pwa/composables"

import AboConfiguratorDesigner from "./organisms/AboConfiguratorDesigner.vue"

export default {
    name: "AboConfigurator",
    components: {
        AboConfiguratorDesigner,
    },
    setup() {
        return {
            activated: false,
            elementDragged: false
        }

    },
    watch: {
        activated: function () {
            document.body.style.overflow = this.activated ? 'hidden' : ''
        }
    },
    methods: {
        activateConfigurator() {
            this.activated = true
        },
        closeConfigurator() {
            this.activated = false
        },
        clearDrag(e) {
            e.preventDefault()
            this.elementDragged = false
        },
        updateDragged(){
            this.elementDragged = true
        }
    }
}
</script>