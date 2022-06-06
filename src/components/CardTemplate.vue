<template>
  <div class="jumbotron animate__animated animate__fadeIn">
    <section v-if="showItem">
      <div class="container">
        <h4 class="page-title">{{ titulo }}</h4>
        <h5 class="display-6">{{ subtitulo }}</h5>
      </div>
      <hr class="mb-2" />
      <component :is="view" style="height: 100%"></component>
    </section>

    <!-- tela introdução App -->
    <section
      v-else
      style="height: 100%"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <img
        :src="require('../assets/img/img2.png')"
        alt="intro"
        class="img-fluid"
        width="330px"
      />
      <h3 class="text-center mt-5">Bem-vindo ao AppMedic</h3>
      <router-link
        class="text-white nextBtn mt-1"
        to="/profissional"
        style="width: 50%"
      >
        Iniciar Cadastro
      </router-link>
    </section>
  </div>
</template>
<script>
import Form01 from "./Form01.vue";
import Form02 from "./Form02.vue";
import Form03 from "./Form03.vue";
import "animate.css";
export default {
  components: {
    Form01,
    Form02,
    Form03,
  },
  props: {
    titulo: { required: true, type: String },
    subtitulo: { required: true, type: String },
    view: String,
    showItem: { default: true, type: Boolean },
  },
};
</script>
<style scoped>
.jumbotron {
  width: 50rem;
  height: auto;
  border-radius: 20px;
  background-color: var(--secondary-0);
  box-shadow: 4px 4px var(--primary-0);
}
@media (max-width: 1000px) {
  .jumbotron {
    width: 100%;
    /* height: 80%; */
    position: absolute;
    bottom: -7% !important;
    left: 0;
    border-radius: 40px 40px 0 0;
  }
}
</style>
