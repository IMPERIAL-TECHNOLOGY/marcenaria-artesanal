<template>
  <v-app>
      <router-view/>
  </v-app>
</template>

<script>

import Vue from "vue";

export default Vue.extend({
  name: 'App',
  components: {},
  data: () => ({
    //
  }),
  computed: {},
  mounted() {},
});
</script>
<style>
*
{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

html, body, #root
{
  min-height: 100vh;
  background-color: black;
}

</style>
