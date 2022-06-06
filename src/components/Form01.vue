<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label>Nome Completo*</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Digite nome completo"
              style="text-transform: capitalize"
              v-model="nome"
              @change="setLocalStorage('nome', nome)"
            />

            <label>CPF / CNPJ*</label>
            <the-mask
              :mask="['###.###.###-##', '##.###.###/####-##']"
              type="text"
              class="form-control"
              v-model="cpf"
              placeholder="Digite um CPF / CNPJ"
              required
            />
            <label>Número Celular*</label>
            <the-mask
              type="text"
              v-model="telefone"
              class="form-control"
              placeholder="(00) 0 0000-0000"
              :mask="['(##) ####-####', '(##) #####-####']"
              @change="setLocalStorage('telefone', telefone)"
            />
          </div>
          <div class="form-group row">
            <div class="col-12 col-lg-6">
              <label>Estado*</label>
              <select name="estado" id="estado" class="form-control">
                <option value="x">Selecione</option>
                <option
                  v-for="(e, index) in estados"
                  :key="index"
                  :value="e.sigla"
                >
                  {{ e.nome }}
                </option>
              </select>
            </div>
            <div class="col-12 col-lg-6">
              <label>Cidade*</label>
              <select name="estado" id="cidade" class="form-control">
                <option value="x">Selecione</option>
                <option
                  v-for="(c, index) in cidades"
                  :key="index"
                  :value="c.estadoId"
                >
                  {{ c.nome }}
                </option>
              </select>
            </div>
          </div>
        </form>
        <div class="progress mb-3" style="height: 20px">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 50%"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <router-link
          to="/atendimento"
          class="text-white nextBtn"
          style="text-decoration: none"
          >Próximo</router-link
        >
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <img
          :src="require('../assets/img/img1.png')"
          alt="img1"
          class="img-fluid"
          @click="setCPF"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import api from "../api";
import { TheMask } from "vue-the-mask";
export default {
  name: "Form01",
  components: { TheMask },
  data() {
    return {
      estados: null,
      cidades: null,
      nome: "",
      cpf: "",
      telefone: "",
    };
  },
  created() {
    // get Estados cadastrados
    axios.get(api.url("estados")).then((r) => {
      this.estados = r.data;
    });

    // get Cidades cadastrados
    axios.get(api.url("cidades")).then((r) => {
      this.cidades = r.data;
    });
  },
  methods: {
    setLocalStorage(nome, dado) {
      setTimeout(() => {
        localStorage.setItem(nome, dado);
      }, 1500);
    },

    setCPF() {
      setTimeout(() => {
        localStorage.setItem(cpf, this.cpf);
      }, 1500);
    },
  },
};
</script>
<style scoped>
@media (max-width: 800px) {
  .col-md-6:nth-child(2) {
    display: none !important;
  }
}
</style>
