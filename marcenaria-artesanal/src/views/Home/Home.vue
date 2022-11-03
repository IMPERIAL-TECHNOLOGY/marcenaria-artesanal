<template>
  <v-header>
    <base-image
        :src="require('@/assets/images/header-background.png')"
        alt="living room decorated with handmade furniture"
        height="100vh"
        class="relativeImage"
    >
    </base-image>
    <TabsNavegation
        :tabs="tabs"
        class="tabStyle"
    />
    <main>
      <base-image
          :src="require('@/assets/images/header-background.png')"
          alt="living room decorated with handmade furniture"
          height="100vh"
          class="relativeImage"
      >
      </base-image>
    </main>
  </v-header>
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
          {name: 'HISTÓRIA'},
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