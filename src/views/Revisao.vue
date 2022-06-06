<template>
  <div class="home">
    <div class="container">
      <card-template
        titulo="Revisão do cadastro"
        subtitulo=" "
        view="Form03"
        showItem
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardTemplate from "../components/CardTemplate.vue";
export default {
  name: "Revisao",
  components: {
    CardTemplate,
  },
};
</script>
