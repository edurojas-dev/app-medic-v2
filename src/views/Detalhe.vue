<template>
  <div class="cadastro">
    <div class="container">
      <card-template
        titulo="Sobre o atendimento"
        subtitulo="Detalhes do atendimento"
        view="Form02"
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
