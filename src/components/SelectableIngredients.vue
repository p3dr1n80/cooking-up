<script lang="ts">

import {defineComponent} from "vue";
import Tag from "@/components/Tag.vue";

export default defineComponent({
  components: {Tag},

  props: {
    ingrediente: { type: String, required: true }
  },

  data() {
    return {
      select: false
    }
  },

  methods: {
    ifClick() {
      this.select = !this.select

      if(!this.select){
        this.$emit('removerIngrediente', this.ingrediente)
      }

      if (this.select){
        this.$emit('adicionarIngrediente', this.ingrediente)
      }
    }
  },

  emits: ['adicionarIngrediente', 'removerIngrediente']
})
</script>

<template>
  <button
      class="ingrediente"
      @click="ifClick"
      :aria-pressed="select">
    <Tag :texto="ingrediente" :ativa="select"/>
  </button>
</template>

<style scoped>
.ingrediente {
  cursor: pointer;
}
</style>