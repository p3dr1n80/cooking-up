<script lang="ts">
import SelectIngredients from "@/components/SelectIngredients.vue";
import ShowRecipes from "@/components/ShowRecipes.vue";
import Tag from "@/components/Tag.vue";
import Alert from "@/components/Alert.vue";

type Page = 'SelecionarIngredientes' | 'MostrarReceitas';

export default {
  components: {ShowRecipes, SelectIngredients, Tag, Alert},

  data() {
    return {
      ingredientes: [] as string[],
      conteudo: 'SelecionarIngredientes' as Page
    }
  },

  methods: {
    addIngredient(ingredient: string){
      this.ingredientes.push(ingredient)
    },

    delIngredient(ingredient: string) {
      this.ingredientes.splice(this.ingredientes.indexOf(ingredient), 1)
    },

    navigate(page: Page){
      this.conteudo = page
    }
  }
}
</script>

<template>
  <main class="conteudo-principal">
    <Alert/>
    <section>
      <span class="subtitulo-lg sua-lista-texto">
        Sua lista:
      </span>

      <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
        <li v-for="ingrediente in ingredientes" :key="ingrediente">
          <Tag :texto="ingrediente" :ativa="true"/>
        </li>
      </ul>

      <p v-else class="paragrafo lista-vazia">
        <img src="../assets/images/icones/lista-vazia.svg" alt="Ícone de pesquisa">
        Sua lista está vazia, selecione ingredientes para iniciar.
      </p>
    </section>

    <KeepAlive include="SelectIngredients">
      <SelectIngredients v-if="conteudo === 'SelecionarIngredientes'"
          @adicionar-ingrediente="addIngredient"
          @remover-ingrediente="delIngredient"
          @buscar-receitas="navigate('MostrarReceitas')"
      />

      <ShowRecipes
          v-else-if="conteudo === 'MostrarReceitas'"
          @editar-receitas="navigate('SelecionarIngredientes')"
          :ingredientes="ingredientes"
      />
    </KeepAlive>
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>