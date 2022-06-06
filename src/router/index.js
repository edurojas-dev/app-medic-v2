import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cadastro from "../views/Cadastro.vue";
import Detalhe from "../views/Detalhe.vue";
import Revisao from "../views/Revisao.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profissional",
    name: "Cadastro",
    component: Cadastro,
  },
  {
    path: "/atendimento",
    name: "Detalhe",
    component: Detalhe,
  },
  {
    path: "/revisao",
    name: "Revisao",
    component: Revisao,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
