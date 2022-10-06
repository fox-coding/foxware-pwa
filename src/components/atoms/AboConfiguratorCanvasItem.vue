<template>
    <div @mousedown.self="startDragElement" :style="{'top':top+'px','left':left+'px'}" class="absolute bg-black text-white p-9">
        {{content}}
    </div>
</template>
  
<script>
export default {
    name: "AboConfiguratorCanvasItem",
    props: ["content","elementDragged","itemMoved","id","cursorY","cursorX"],
    components: {
    },
    setup() {
        return {}
    },
    data() {
        return {
            ypos: 0,
            xpos: 0,
            top: 2500,
            left: 2500
        }
    },
    methods: {
        startDragElement(e){
            e.preventDefault()
            this.ypos = this.top - e.pageY
            this.xpos = this.left - e.pageX
            this.$emit('startDragElement', this.id)
        },
        cancelDrag(e){
            e.preventDefault()
            console.log('cancel Drag')
        }
    },
    watch: {
        cursorY: function () {
            if(this.itemMoved === this.id && this.elementDragged){
                this.top = (this.cursorY + this.ypos)
                this.left = (this.cursorX + this.xpos)
            }
        },
        cursorX: function () {
            if(this.itemMoved === this.id && this.elementDragged){
                this.top = (this.cursorY + this.ypos)
                this.left = (this.cursorX + this.xpos)
            }
        }
    },
}
</script>