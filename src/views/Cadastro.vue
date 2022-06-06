<template>
  <div class="cadastro">
    <div class="container">
      <card-template
        titulo="Sobre o profissional"
        subtitulo="Dados do profissional"
        view="Form01"
        showItem
      />
    </div>
  </div>
</template>
<script>
import CardTemplate from "../components/CardTemplate.vue";
export default {
  components: {
    CardTemplate,
  },
};
</script>
