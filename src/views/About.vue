<template>
  <div>
    <v-data-table :headers="datosHeader" :items="datos"> </v-data-table>
  </div>
</template>

<script>
export default {
   data() {
       return {
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

       
      ],
       }
   },

  computed:{
      datos(){
          return this.$store.state.productos
      }
  },
 
  mounted() {
    this.$store.dispatch("traerProductos")
  },


};
</script>

<style lang="scss" scoped></style>
