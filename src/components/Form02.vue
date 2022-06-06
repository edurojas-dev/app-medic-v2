<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label>Especialidade principal*</label>
            <select
              name="especialidade"
              id="especialidade"
              class="form-control"
            >
              <option value="x">Selecione a especialidade</option>
              <option
                v-for="(esp, index) in especalistas"
                :key="index"
                :value="index"
              >
                {{ esp.nome }}
              </option>
            </select>

            <label>Informe o preço da consulta*</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="badgeReal">R$</span>
              </div>
              <money
                v-model="price"
                v-bind="money"
                type="text"
                class="form-control"
                placeholder="Valor"
                aria-label="Valor"
                aria-describedby="basic-addon1"
              />
            </div>

            <label>Formas de Pagamento*</label>
            <div class="input-group mb-3 p-1 itemPay">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input
                    id="pix"
                    value="pix"
                    v-model="checkPagamentos"
                    type="checkbox"
                    @click="setar"
                    aria-label="Chebox para permitir input text"
                  />
                  <span class="ml-3">Pix</span>
                </div>
              </div>
            </div>

            <div class="input-group mb-3 p-1 itemPay">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input
                    id="Boleto"
                    value="Boleto"
                    v-model="checkPagamentos"
                    type="checkbox"
                    aria-label="Chebox para permitir input text"
                    @click="setar"
                  />
                  <span class="ml-3">Boleto</span>
                </div>
              </div>
            </div>

            <div class="input-group mb-3 p-1 itemPay">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input
                    id="cartao"
                    value="cartao"
                    v-model="checkPagamentos"
                    type="checkbox"
                    @click="setar"
                    aria-label="Chebox para permitir input text"
                  />
                  <span class="ml-3">Cartão</span>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="progress mb-3" style="height: 20px">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 100%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <router-link
          to="/revisao"
          class="text-white nextBtn"
          style="text-decoration: none"
          >Próximo</router-link
        >
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <img
          :src="require('../assets/img/img3.png')"
          alt="img1"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import api from "../api";
import { Money } from "v-money";
export default {
  name: "Form02",
  components: { Money },
  data() {
    return {
      checkPagamentos: [],
      pix: "",
      boleto: "",
      especalistas: null,
      price: 0.0,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "",
        suffix: " ",
        precision: 2,
        masked: false,
      },
    };
  },

  created() {
    // get Estados cadastrados
    axios.get(api.especialidades).then((r) => {
      this.especalistas = r.data;
    });
  },
  methods: {
    setar() {
      localStorage.setItem("formas", this.checkPagamentos);
    },
  },
};
</script>
<style scoped>
.itemPay {
  background-color: #e9ecee !important;
  border-radius: 5px;
  box-shadow: 0px 3px 3px var(--secondary-3);
}
.input-group-text {
  border: none !important;
}
@media (max-width: 800px) {
  .col-md-6:nth-child(2) {
    display: none !important;
  }
}
</style>
