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
            <TabCards
              :tabs="portifolioTabs"
            />
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
import TabCards from "@/components/TabCards/TabCards";
  export default {
    name: 'Home',
    components: {
      Parallax,
      BaseImage,
      TabsNavegation,
      TabCards
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
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            anchor: "#contact",
            card: false
          },
          {
            name: "cardQuarto",
            title: "QUARTO",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            anchor: "#contact",
            card: false
          },
          {
            name: "cardCozinha",
            title: "COZINHA",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            anchor: "#contact",
            card: false
          },
          {
            name: "cardEscritório",
            title: "ESCRITÓRIO",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
</style>
