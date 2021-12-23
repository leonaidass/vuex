import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productoEnviar: {},
    productos: [],
  },
  mutations: {
    AGREGAR_PRODUCTO(state, payload) {
      state.productoEnviar = payload;
      axios
        .post(
          "https://61afe8ff3e2aba0017c4959a.mockapi.io/productos",
          state.productoEnviar
        )
        .then((res) => {
          console.log(res.data);
        
        });
    },

    GET_PRODUCTOS(state){
      axios.get("https://61afe8ff3e2aba0017c4959a.mockapi.io/productos")
      .then((data) => {
      state.productos = data.data;
    });
    }
  },
  actions: {
    agregarProducto(context, payload) {
      context.commit("AGREGAR_PRODUCTO", payload);
    },

    traerProductos(context) {
      context.commit("GET_PRODUCTOS");
    },
  },
  modules: {},
});
