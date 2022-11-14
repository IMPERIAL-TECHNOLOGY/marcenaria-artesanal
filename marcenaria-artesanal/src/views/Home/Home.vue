<template>
      <div class="headerContainer">
        <div>
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
        </div>
        <div class="titleContainer">
          <div class="titleContent">
            <div CLASS="separator"/>
            <div class="text-no-wrap"><h1>MARCENARIA <span>ARTESANAL</span></h1></div>
            <div CLASS="separator"/>
          </div>
          <div class="portfolioTabs">
            <v-card
              v-for="(item, i) in portifolioTabs" :key="i"
              variant="accordion"
              class="portfolioItem"
            >
              <v-card-title>
                {{item.title}}
              </v-card-title>
                <v-card-text>
                  {{item.text}}
                </v-card-text>>
            </v-card>
          </div>
        </div>
      </div>
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
      </div>
    </footer>
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
        portifolioTabs: [
          {
            title: "SALA",
            text: "diuuahsduhasdhosadsdasdasdasdsadsada sdsadsadsaddsdsad" +
              "sadasddssdadsdasdsadsadsadasdsadsadsadsaddsdsadsadsadssd" +
              "asdasdsadsaddssdsd",
            anchor: "1"
          },
          {
            title: "QUARTO",
            text: "diuuahsduhasdhosadsdasdasdasdsadsada sdsadsadsaddsdsad" +
              "sadasddssdadsdasdsadsadsadasdsadsadsadsaddsdsadsadsadssd" +
              "asdasdsadsaddssdsd",
            anchor: "2"
          },
          {
            title: "COZINHA",
            text: "diuuahsduhasdhosadsdasdasdasdsadsada sdsadsadsaddsdsad" +
              "sadasddssdadsdasdsadsadsadasdsadsadsadsaddsdsadsadsadssd" +
              "asdasdsadsaddssdsd",
            anchor: "3"
          },
          {
            title: "ESCRITÓRIO",
            text: "diuuahsduhasdhosadsdasdasdasdsadsada sdsadsadsaddsdsad" +
              "sadasddssdadsdasdsadsadsadasdsadsadsadsaddsdsadsadsadssd" +
              "asdasdsadsaddssdsd",
            anchor: "4"
          }
        ],
        cardSala: false,
        cardQuarto: false,
        cardCozinha: false,
        cardEscritório: false,
        logo: `${new URL('../../assets/images/logo.png', import.meta.url)}`,
      }
    }
  }
</script>
<style scoped>
.headerContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100vh;
  width:100vw;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-image: url('../../assets/images/header-background.png');

}
.headerContainer nav{
  display: flex;
  justify-content: space-between;
  width: 100vw;
}
.tabStyle {
  margin-right: 100px;
  margin-top: 80px;
}
.logo{
  margin-left: 100px;
  margin-top: 80px;
}
.titleContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 30vh;
}
.titleContent {
  display: flex;
  justify-content: center;
  flex-flow: row;
  width: 100%;

}
.titleContent div > h1 {
  font-size: 25px;
  color: white;
}
.titleContent div > h1 > span {
  color: rgba(255, 255, 255, 0.47);
  text-wrap: none;
}
.separator {
  border-bottom: 1.5px groove white;
  box-sizing:border-box;
  margin-bottom: 17px;
  margin-right: 21px;
  margin-left: 21px;
  width:300px;
}
.historyContainer {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
}
.portifolioContainer {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 600px;
  background-color: yellow;
}
.contactContainer {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  background-color: blue;
}
.portfolioTabs {
  color: white;
  height: 200px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
 .portfolioItem {
  width: 200px;
   background-color: gray;
}
</style>
