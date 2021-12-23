<template>
  <v-container>
   <v-card class="sidebar pa-4">
            <h3>Agregar Producto</h3>
            <v-text-field
              v-model="productoAgregar.nombre"
              label="Nombre"
            ></v-text-field>
            <v-text-field
              v-model.number="productoAgregar.precio"
              label="Precio"
            ></v-text-field>
            <v-text-field
              v-model.number="productoAgregar.cantidad"
              label="Cantidad"
            ></v-text-field>
            <v-btn color="green" dark block @click="agregarProducto()"
              >Agregar</v-btn
            >
          </v-card>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      datos: [],
      productoAgregar: {
        nombre: "",
        precio: 0,
        cantidad: 0,
        
      },
      datosEditar:{},
      dialog:false,
      datosHeader: [
        {
          text: "Nombre",
          value: "nombre",
        },
        {
          text: "Precio",
          value: "precio",
        },
        {
          text: "Cantidad",
          value: "cantidad",
        },

        {
          text: "Total",
          value: "total",
        },
        {
          text: "Acciones",
          value: "acciones",
        },
      ],
    };
  },
  methods: {
   
    agregarProducto() {
      this.$store.dispatch("agregarProducto",this.productoAgregar)
    },
    
  },

  
};
</script>


<style lang="scss" scoped></style>

