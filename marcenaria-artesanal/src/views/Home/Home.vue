<template>
  <header>
    <base-image
        :src="require('@/assets/images/header-background.png')"
        height="100vh"
        class="relativeImage"
    >
    </base-image>
    <TabsNavegation
        :tabs="tabs"
        class="tabStyle"
    />
    <base-image
        :src="require('@/assets/images/header-background.png')"
        height="100vh"
        class="relativeImage"
    >
    </base-image>
  </header>
    <!-- fotos montando na tela-->
    <!--Carousel-->
    <!--Footer-->
</template>

<script>
import BaseImage from "@/components/Image/BaseImage";
import TabsNavegation from "@/components/Tabs/TabsNavegation";
  export default {
    name: 'Home',
    components: {
      BaseImage,
      TabsNavegation
    },
    data() {
      return{
        tabs: [
          {name: 'NOSSA HISTÓRIA'},
          {name: 'PROJETOS'},
          {name: 'CONTATO'}
        ]
      }
    }
  }
</script>
<style>
.tabStyle {
  position: absolute;
  top: 77px;
  right: 30px;
}
</style>