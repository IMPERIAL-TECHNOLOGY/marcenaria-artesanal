<template>
  <header>
    <Parallax
        :src="require('@/assets/header-background.png')"
        height="100"
    ></Parallax>
  </header>
    <!-- fotos montando na tela-->
    <!--Carousel-->
    <!--Footer-->
</template>

<script>
import Parallax from "@/components/Parallax/Parallax";

  export default {
    name: 'Home',
    components: { Parallax },
  }
</script>