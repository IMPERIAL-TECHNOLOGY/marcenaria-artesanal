<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
@font-face {
  font-family: "Arboria-Medium";
  src: local("Arboria-Medium"), url(./fonts/Arboria/OTF/Arboria-Medium.otf);
}
@font-face {
  font-family: "Arboria-Light";
  src: local("Arboria-Light"), url(./fonts/Arboria/OTF/Arboria-Light.otf);
}
@font-face {
  font-family: "Arboria-Bold";
  src: local("Arboria-Bold"), url(./fonts/Arboria/OTF/Arboria-Bold.otf);
}
@font-face {
  font-family: "Arboria-Black";
  src: local("Arboria-Black"), url(./fonts/Arboria/OTF/Arboria-Black.otf);
}
@font-face {
  font-family: "Arboria-Thin";
  src: local("Arboria-Thin"), url(./fonts/Arboria/OTF/Arboria-Thin.otf);
}
html,
body,
#root {
  min-height: 100vh;
  background-color: black;
}
</style>
