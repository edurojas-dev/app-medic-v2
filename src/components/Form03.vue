<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h5>Nome Completo</h5>
        <p>João Pereira</p>

        <h5>CPF / CNPJ</h5>
        <p>114.458.789-68</p>

        <h5>Número de contato</h5>
        <p>(34) 9 9112-7523</p>

        <h5>Cidade/ Estado</h5>
        <p>Pelotas - RS</p>

        <h5>Especialidade principal</h5>
        <p>Cardiologia</p>

        <h5>Preço de Consulta</h5>
        <p>R$ 350,00</p>

        <h5>Formas de Pagamento</h5>
        <p>Pix e Boleto</p>

        <div class="btns mb-2 mt-3">
          <button type="button" class="btn-cadastrar">
            CADASTRAR PROFISSIONAL
          </button>
          <router-link to="/profissional" class="page-title mt-3 edit">
            Editar Cadastro
          </router-link>
        </div>
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
export default {
  name: "Form03",
};
</script>
<style scoped>
h5 {
  margin-bottom: 0;
}
.page-title {
  font-size: 20px !important;
  text-align: center;
  display: block;
}

.edit {
  text-decoration: none !important;
}

.edit:hover {
  color: var(--primary-0);
}
</style>