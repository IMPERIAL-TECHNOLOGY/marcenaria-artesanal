<template>
      <div class="headerContainer">
        <div>
          <nav>
            <v-img
              :src="logo"
              alt="Marcenaria artesanal logo"
              class="logo"
              max-width="15vw"
              min-width="10vw"
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
                  <v-card-title style="text-align: center; font-size: 2vh">{{ item.title }}</v-card-title>
                  <v-expand-transition>
                    <div class="transition-fast-in-low-out v-card--reveal" v-if="isHovering">
                      <v-card-item
                        class="portfolioItemExpanded "
                      >
                        <v-card-title>{{ item.title }}</v-card-title>
                        <v-card-text>{{ item.text }}</v-card-text>
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
            text: "diuuahsduhasdhosadsdasdasdasdsadsada sdsadsadsaddsdsad",
            anchor: "#contact",
            card: false
          },
          {
            name: "cardQuarto",
            title: "QUARTO",
            text: "diuuahsduhasdhosadsdasdasdasdsadsada sdsadsadsaddsdsad",
            anchor: "#contact",
            card: false
          },
          {
            name: "cardCozinha",
            title: "COZINHA",
            text: "diuuahsduhasdhosadsdasdasdasdsadsada sdsadsadsaddsdsad",
            anchor: "#contact",
            card: false
          },
          {
            name: "cardEscritório",
            title: "ESCRITÓRIO",
            text: "diuuahsduhasdhosadsdasdasdasdsadsada sdsadsadsaddsdsad" +
              "sadasddssdadsdasdsadsa",
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
  height: 100vh;
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
  height: 20vh;
}
.tabStyle {
  min-height: 7vh;
  margin-right: 10vw;
  margin-top: 7vh;
}
.logo{
  margin-left: 10vw;
  margin-top: 7vh;
}
.titleContainer {
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 33vh;
  width: 50vw;
  margin: 0 auto;
}
.titleContent {
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  width: 100%;
}
.titleContent div > h1 {
  font-size: 3vh;
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
  width:20vw;
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
  width: 100%;
}
.contactContainer {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  background-color: blue;
}
.portfolioTabs {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 60vw;
  color: white;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
 .portfolioItemExpanded {
   font-size: 2.2vh;
   padding: 1vw;
   margin: 0 auto;
   box-sizing: border-box;
   width: 12vw;
   height: 100%;
   background-color: #341818;
   cursor: pointer;

}
 .portfolioItem {
   font-size: 3vh;
   background-color: #341818;
   padding: 0vw;
   width: 12vw;
   height: 5vh;
   margin-top: 25vh;
   margin-right: 2vw ;
   margin-left: 2vw ;
   cursor: pointer;
 }
.v-card--reveal {
  font-size: 2.2vh;
  height: 100%;
  margin: 0 auto;
  width: 12vw;
  bottom: 0;
  box-sizing: border-box;
  justify-content: flex-start;
  position: absolute;
}
.cardButton {
  width: 100%;
  justify-content: center;
  border: 0.5px white;
  background-color: #341818;
  color: white;
}
</style>
