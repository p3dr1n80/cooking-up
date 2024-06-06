<script lang="ts">
import {dataCategories} from "@/http";
import CardCategory from "@/components/CardCategory.vue";
import MainBottom from "@/components/MainBottom.vue";
import type ICategory from "@/interfaces/ICategory";

export default {
  name: 'SelectIngredients',

  components: {MainBottom, CardCategory},

  data() {
    return {
      categorias: [] as ICategory[]
    }
  },

  async created() {
    this.categorias = await dataCategories();
  },

  emits: ['adicionarIngrediente', 'removerIngrediente', 'buscarReceitas']
}
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul v-if="categorias.length" class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
        <CardCategory
            :categoria="categoria"
            @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
            @remover-ingrediente="$emit('removerIngrediente', $event)"
        />
      </li>
    </ul>

    <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>
  </section>

  <MainBottom
      texto="Buscar receitas!"
      @click="$emit('buscarReceitas')"

  />
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>