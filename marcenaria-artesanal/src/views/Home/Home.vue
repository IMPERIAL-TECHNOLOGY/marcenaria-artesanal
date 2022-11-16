<template>
  <div>
    <div>
      <header class="headerContainer">
        <nav class="navContainer">
          <base-image
              :src="require('@/assets/images/logo.png')"
              alt="Marcenaria artesanal logo"
              class="logo"
              max-width="15em"
              max-height="4em"
          />
          <TabsNavegation
              :tabs="tabs"
              class="tabStyle"
          />
        </nav>
        <div><p>MARCENARIA <span>ARTESANAL</span></p></div>
      </header>
    </div>
    <v-main>
      <parallax
          :src="require('@/assets/images/test-parallax.png')"
          alt="room decorated with handmade furniture"
          height="100vh"
      />
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
.headerContainer {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  background-image: url('../../assets/images/header-background.png');
}
.navContainer {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.tabStyle {
  margin-right: 100px;
  margin-top: 80px;
}
.logo{
  margin-left: 100px;
  margin-top: 80px;
}
</style>