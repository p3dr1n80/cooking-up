<script lang="ts">
export default {}
</script>

<template>
  <div class="alert_user">
    <span><b>Importante:</b> Somente algumas receitas foram cadastradas, nesse caso,
      pode ser que ao buscar algum ingrediente, nada seja retornado. Seguem alguns
      ingredientes que foram cadastrados, e podem ser buscados
      <b class="ingredients">(Alho e Azeite de Oliva)</b>,
      <b class="ingredients">(Pão, Manteiga, Alho e Orégano)</b>.
    </span>
  </div>

  <div class="link_gist">Você pode ver todas as receitas cadastradas no
    <a href="https://gist.githubusercontent.com/pedro-p-silva/ac308d6eb870edb5197bccd3bcda43b3/raw/b35429a39174f8e7b965111e5026e1bb95223e2d/recipes.json"
       target="_blank"><b>Gist</b></a>
  </div>
</template>

<style scoped>
  .alert_user {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link_gist a {
    text-decoration: none;
  }

  .link_gist a b {
    color: #f0633c;
  }

  .alert_user span b {
    font-size: 20px;
    color: red;
  }

  .alert_user span .ingredients {
    color: #f0633c;
    font-size: 18px;
  }
</style>