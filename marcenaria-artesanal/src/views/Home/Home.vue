<template>
  <header>
    <ParallaxHome/>
  </header>
    <!-- fotos montando na tela-->
    <!--Carousel-->
    <!--Footer-->
</template>

<script>
import ParallaxHome from "@/components/Parallax/ParallaxHome";

  export default {
    name: 'Home',
    components: { ParallaxHome },
  }
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
  background-color: white;
  min-height: 100vh;
}
</style>