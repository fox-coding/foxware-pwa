<template>
    <div id="configuratorDesigner" @mousemove="dragMove"
        class="bg-zinc-100 h-[calc(100%_-_90px)] w-full flex flex-col relative overflow-hidden">
        <div class="bg-zinc-100 z-10">
            <div class="max-w-screen-xl m-auto py-4">
                <button class="btn-gray mr-2" @click="createText">Text</button>
                <button class="btn-gray mr-2" @click="">Grafik</button>
                <button class="btn-gray mr-2" @click="">Motive</button>
                <button class="btn-gray mr-2" @click="">Formen</button>
            </div>
        </div>
        <div class="flex flex-grow overflow-hidden">
            <div @mousedown.self="startDrag" :style="{'top':top+'px','left':left+'px'}" class="h-[4000px] w-[4000px] bg-grid-zinc-300 absolute">

                <AboConfiguratorCanvasItem v-for="(canvasElement, index) in canvasElements"
                 :id="'element-'+index"
                 :cursorX="cursorX"
                 :cursorY="cursorY"
                 :elementDragged="elementDragged" 
                 :itemMoved="itemMoved"
                 :content="canvasElement.content"
                 v-on:startDragElement="updateDraggedElement"
                />

            </div>
        </div>
        <div class="bg-zinc-100 py-4 text-right w-full z-10">
            <div class="max-w-screen-xl m-auto">
                <button class="btn-gray mr-2" @click="">Position entfernen</button>
                <button class="btn-secondary mr-2" @click="">Position speichern</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import AboConfiguratorCanvasItem from "../atoms/AboConfiguratorCanvasItem.vue"
export default {
    name: "AboConfiguratorDesigner",
    props: ["elementDragged"],
    components: {
        AboConfiguratorCanvasItem
    },
    setup() {
        return {}
    },
    data() {
        return {
            ypos: 0,
            xpos: 0,
            top: -2000,
            left: -2000,
            cursorY: 0,
            cursorX: 0,
            canvasElements: [],
            itemMoved:"",
        }
    },
    methods: {
        startDrag(e) {
            e.preventDefault()
            this.ypos = this.top - e.pageY
            this.xpos = this.left - e.pageX
            this.itemMoved = "canvas"
            this.$emit('startDrag')
        },
        dragMove(e) {
            e.preventDefault()
            this.cursorX = e.pageX
            this.cursorY = e.pageY
            if (this.elementDragged && this.itemMoved === "canvas") {
                this.top = (e.pageY + this.ypos)
                this.left = (e.pageX + this.xpos)
            }else{
                
            }
        },
        updateDraggedElement(elementId){
            this.$emit('startDrag')
            this.itemMoved = elementId
        },
        createText() {
            console.log('creating Element')
            this.canvasElements.push({ "type": "text", "content": "Hello Bernd" })
        }
    }
}
</script>