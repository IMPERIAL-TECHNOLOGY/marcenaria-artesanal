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
              >
                <v-hover v-slot="{ isHovering, props }">
                <v-card-item
                  class="portfolioItem"
                  v-bind="props"
                >
                  <v-card-title>
                    {{ item.title }}
                  </v-card-title>
                  <v-expand-transition
                  >
                    <div class="d-flex transition-fast-in-low-out v-card--reveal text-h2"
                         v-if="isHovering">
                      <v-card-item
                        class="portfolioItemExpanded "
                      >
                        <v-card-title>
                          {{ item.title }}
                        </v-card-title>
                        <v-card-text>
                          {{ item.text }}
                        </v-card-text>
                        <v-btn
                          class="cardButton"
                          :to="{name: item.path, hash: item.anchor}"
                        >
                          contato
                        </v-btn>
                      </v-card-item>
                    </div>
                  </v-expand-transition>
                </v-card-item>
                </v-hover>
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
            name: "cardSala",
            title: "SALA",
            text: "diuuahsduhasdhosadsdasdasdasdsadsada sdsadsadsaddsdsad" +
              "sadasddssdadsdasdsadsadsadasdsadsadsadsaddsdsadsadsadssd" +
              "asdasdsadsaddssdsd",
            anchor: "#contact",
            card: false
          },
          {
            name: "cardQuarto",
            title: "QUARTO",
            text: "diuuahsduhasdhosadsdasdasdasdsadsada sdsadsadsaddsdsad" +
              "sadasddssdadsdasdsadsadsadasdsadsadsadsaddsdsadsadsadssd" +
              "asdasdsadsaddssdsd",
            anchor: "#contact",
            card: false
          },
          {
            name: "cardCozinha",
            title: "COZINHA",
            text: "diuuahsduhasdhosadsdasdasdasdsadsada sdsadsadsaddsdsad" +
              "sadasddssdadsdasdsadsadsadasdsadsadsadsaddsdsadsadsadssd" +
              "asdasdsadsaddssdsd",
            anchor: "#contact",
            card: false
          },
          {
            name: "cardEscritório",
            title: "ESCRITÓRIO",
            text: "diuuahsduhasdhosadsdasdasdasdsadsada sdsadsadsaddsdsad" +
              "sadasddssdadsdasdsadsadsadasdsadsadsadsaddsdsadsadsadssd" +
              "asdasdsadsaddssdsd",
            anchor: "#contact",
            card: false,
          }
        ],
        logo: `${new URL('../../assets/images/logo.png', import.meta.url)}`,
      }
    },
    methods: {
      cardExpanded(name) {
        const card = name
        if (card === "cardSala") {
          return this.portifolioTabs[0].card = !this.portifolioTabs[0].card
        } else if (card === "cardQuarto") {
          return this.portifolioTabs[1].card = !this.portifolioTabs[1].card
        } else if (card === "cardCozinha") {
          return this.portifolioTabs[2].card = !this.portifolioTabs[2].card
        } else {
          return this.portifolioTabs[3].card = !this.portifolioTabs[3].card
        }
      }
    }
  }
</script>
<style scoped>
.headerContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100vh;;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-image: url('../../assets/images/header-background.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;

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
  height: 43vh;
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
  border-bottom: 2px groove white;
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
  width: 100vw;
  background-color: black;
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
  height: 45vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
 .portfolioItemExpanded {
   width: 200px;
   height: 40vh;
   margin-right: 20px;
   background-color: #341818;
   cursor: pointer;
}
 .portfolioItem {
   width: 200px;
   margin-bottom: 0;
   margin-top: 20vh;
   margin-right: 20px;
   cursor: pointer;
 }
.v-card--reveal {
  height: 40vh;
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}
.cardButton {
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 0.5px white;
  background-color: #341818;
  color: white;
}
</style>
