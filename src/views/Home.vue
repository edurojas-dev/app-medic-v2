<template>
  <div class="home">
    <div class="container">
      <card-template
        titulo=""
        subtitulo=""
        view=""
        :showItem="false"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardTemplate from "../components/CardTemplate.vue";
export default {
  name: "Home",
  components: {
    CardTemplate,
  },
};
</script>
