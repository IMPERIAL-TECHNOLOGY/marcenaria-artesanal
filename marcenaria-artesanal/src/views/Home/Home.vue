<template>
  <div>
    <header>
      <base-image
          :src="require('@/assets/images/header-background.png')"
          alt="living room decorated with handmade furniture"
          height="100vh"
      />
      <TabsNavegation
          :tabs="tabs"
          class="tabStyle"
      />
    </header>
    <v-main>
      <div id="history">
        <base-image
            :src="require('@/assets/images/ex.jpeg')"
            alt="room decorated with handmade furniture"
            height="100vh"
        />
      </div>
    </v-main>
  </div>
</template>

<script>
import BaseImage from "@/components/Image/BaseImage";
import TabsNavegation from "@/components/Tabs/TabsNavegation";
import Parallax from "@/components/Parallax/Parallax";
  export default {
    name: 'Home',
    components: {
      Parallax,
      BaseImage,
      TabsNavegation
    },
    data() {
      return{
        tabs: [
          {
            name: 'HISTÓRIA',
            anchor: '#history',
          },
          {
            name: 'PROJETOS',
            anchor: '#section2',
          },
          {
            name: 'CONTATO',
            anchor: '#section3',
          }
        ]
      }
    }
  }
</script>
<style scoped>
.tabStyle {
  position: absolute;
  top: 77px;
  right: 30px;
}
</style>