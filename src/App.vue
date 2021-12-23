<template>
  <v-app>
    <div id="app">
      <v-app-bar color="green" dark>
        <div id="nav">
          <router-link to="/">Formulario</router-link> |
          <router-link to="/about">Tabla</router-link>
        </div>
      </v-app-bar>
    </div>
    <v-container>
      <router-view />
    </v-container>
  </v-app>
</template>

<style lang="scss"></style>
