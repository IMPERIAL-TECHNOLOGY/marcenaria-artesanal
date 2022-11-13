<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
  import { RouterView } from 'vue-router'
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

html, body, #root {
  min-height: 100vh;
  background-color: black;
}
</style>
