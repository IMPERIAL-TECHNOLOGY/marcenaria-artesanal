<template>
  <div>
      <header class="headerContainer">
        <nav>
          <v-img
              :src="logo"
              alt="Marcenaria artesanal logo"
              class="logo"
              max-width="200px"
              width="200px"
          />
          <TabsNavegation
              :tabs="tabs"
              class="tabStyle"
          />
        </nav>
        <h1><span class="separator"></span>MARCENARIA <span>ARTESANAL<span class="separator"></span></span></h1>
      </header>
    <section
      id="history"
      class="historyContainer"
    >
    </section>
    <section
      id="portifolio"
      class="portifolioContainer"
    >
    </section>
    <section
      id="contact"
      class="contactContainer"
    >
    </section>
    <footer>
      <div>
        <BaseImage
          :src="test"
          alt="room decorated with handmade furniture"
          height="100vh"
        />
      </div>
    </footer>
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
            anchor: '#portifolio',
          },
          {
            name: 'CONTATO',
            anchor: '#contact',
          }
        ],
        logo: `${new URL('../../assets/images/logo.png', import.meta.url)}`,
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
.headerContainer nav{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.headerContainer h1 {
  color: white;
  margin-bottom: 0;
  justify-content: flex-end ;
  align-items: flex-end;
}
.tabStyle {
  margin-right: 100px;
  margin-top: 80px;
}
.logo{
  margin-left: 100px;
  margin-top: 80px;
}
.separator {
  border-color: white;
  box-sizing:border-box;
  width:100px;
}
.historyContainer {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  background-color: green;
}
.portifolioContainer {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  background-color: yellow;
}
.contactContainer {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  background-color: blue;
}
</style>
