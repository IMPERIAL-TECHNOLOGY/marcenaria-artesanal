<template>
  <div v-if="$vuetify.display.xs" class="hero-container">
    <div class="hero-nav-container">
      <font-awesome-icon
        :icon="['fas', 'fa-bars']"
        class="hero-open-menu-icon-mobile"
        v-on:click="openMenu"
      />
      <font-awesome-icon
        :icon="['fas', 'fa-x']"
        class="hero-close-menu-icon-mobile item-hidden"
        v-on:click="openMenu"
      />
        <div class="hero-mobile-menu item-hidden">
          <ul class="hero-nav-items">
            <li v-for="(item, index) in menuMobile" key="index">
              <button class="menuButtons" v-on:click="scrollTo(item.anchor)">{{ item.tab }}</button>
            </li>
          </ul>
        </div>
      <img :src="logo" class="hero-nav-icon-desktop" />
    </div>
    <img :src="logo" class="hero-logo-mobile" />
  </div>
  <div
    v-else
    class="headerContainer"
    :style="{ backgroundImage: `url(${heroBackground})` }"
  >
    <div
      class="navContainer"
    >
      <nav>
        <v-img
          :src="logo"
          alt="Marcenaria artesanal logo"
          class="logo"
          max-width="200px"
          min-width="150px"
        />
        <TabsNavegation :tabs="tabs" class="tabStyle" />
      </nav>
    </div>
    <div class="titleContainer">
      <div class="titleContent">
        <div class="separator" />
        <div class="text-no-wrap">
          <h1>MARCENARIA <span style="font-family: Arboria-Light">ARTESANAL</span></h1>
        </div>
        <div class="separator"/>
      </div>
      <div
        class="portfolioTabs"
      >
        <TabCards
          :tabs="portifolioTabs"
          @background="changeBackground"
          @hovering="hovering"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TabCards from "@/views/Home/Components/Tabs/TabCards";
import TabsNavegation from "@/components/Tabs/TabsNavegation";

export default {
  name: "Hero",
  components: {
    TabsNavegation,
    TabCards,
  },
  data() {
    return {
      menuOpen: false,
      windowWidth: window.innerWidth,
      logo: `${new URL("@/assets/images/logo.png", import.meta.url)}`,
      tabs: [
        {
          name: "HISTÓRIA",
          anchor: "#history",
        },
        {
          name: "PROJETOS",
          anchor: "#portifolio",
        },
        {
          name: "CONTATO",
          anchor: "#contact",
        },
      ],
      portifolioTabs: [
        {
          name: "cardSala",
          title: "SALA",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          anchor: "#contact",
          card: false,
          background: `${new URL(
            "@/assets/heroCards/background4.jpg",
            import.meta.url
          )}`,
          active: false,
        },
        {
          name: "cardQuarto",
          title: "QUARTO",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          anchor: "#contact",
          card: false,
          background: `${new URL(
            "@/assets/heroCards/background3.jpg",
            import.meta.url
          )}`,
          active: false,
        },
        {
          name: "cardCozinha",
          title: "COZINHA",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          anchor: "#contact",
          card: false,
          background: `${new URL(
            "@/assets/heroCards/background2.jpg",
            import.meta.url
          )}`,
          active: false,
        },
        {
          name: "cardEscritório",
          title: "ESCRITÓRIO",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          anchor: "#contact",
          card: false,
          background: `${new URL(
            "@/assets/heroCards/background.jpg",
            import.meta.url
          )}`,
          active: false,
        },
      ],
      menuMobile: [
        {tab:'HISTÓRIA',
         anchor: 'history'
        },
        {tab:'PROJETOS',
         anchor: 'portifolio'
        },
        {tab:'CONTATO',
         anchor: 'contact'
        },
        {tab:'HOME',
         anchor: 'hero'
        },
      ],
      heroBackground: `${new URL('../../../../assets/heroCards/background.jpg', import.meta.url)}`,
      hovering: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    scrollTo(section) {
      const element = document.getElementById(section);
      element.scrollIntoView({
        behavior: "smooth",
      });
    },
    openMenu() {
      const iconClosed = document.querySelector(".hero-open-menu-icon-mobile");
      const iconOpened = document.querySelector(".hero-close-menu-icon-mobile");
      const menu = document.querySelector(".hero-mobile-menu");

      if (this.menuOpen == false) {
        iconClosed.classList.add("item-hidden");
        iconOpened.classList.remove("item-hidden");
        menu.classList.remove("item-hidden");
        this.menuOpen = true;
      } else {
        iconClosed.classList.remove("item-hidden");
        iconOpened.classList.add("item-hidden");
        menu.classList.add("item-hidden");
        this.menuOpen = false;
      }
    },
      changeBackground(background) {
        this.heroBackground = background
      }
  },
};
</script>

<style lang="css" scoped>
.hero-container {
  height: 100vh;
  width: 100vw;
  background-image: url("../../../../assets/heroCards/background.jpg");
  background-size: cover;
}
.hero-open-menu-icon-mobile {
  cursor: pointer;
  height: 25px;
  color: white;
  opacity: 0.7;
  background-color: rgba(0, 0, 0, 0.19);
  border-radius: 7px;
  padding: 0.1em;
  position: fixed;
  right: 25px;
  top: 25px;
}
.hero-close-menu-icon-mobile {
  cursor: pointer;
  height: 23px;
  color: rgba(255, 255, 255, 0.66);
  position: fixed;
  right: 28px;
  top: 25px;
  z-index: 21;
}
.hero-mobile-menu {
  position: fixed;
  top: 0px;
  right: 0px;
  background-color: #341818;
  opacity: 0.95;
  height: 100vh;
  width: 300px;
  z-index: 20;
}
.item-hidden {
  display: none;
  opacity: 0;
}
.hero-nav-items {
  padding: 90px 0 0px 0;
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  list-style: none;
}

.hero-nav-items li {
  width: 60vw;
  height: 70px;
  padding-left: 40px;
  text-align: left;
  font-family: Arboria-Medium;
  font-size: 20px;
  line-height: 70px;
}
.hero-nav-icon-desktop {
  display: none;
}
.hero-logo-mobile {
  position: absolute;
  top: 40vh;
  left: calc(50vw - 158px);
  z-index: 10;
}

@media (min-width: 1200px) {
  .hero-open-menu-icon-mobile {
    display: none;
  }
}
.headerContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: background-image 0.4s ease-in-out;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
.headerContainer nav {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1300px;
  height: 20vh;
}
.tabStyle {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.titleContainer {
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 33vh;
  max-width: 90em;
  margin: 0 auto;
}
.titleContent {
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  width: 100%;
}
.titleContent div > h1 {
  font-size: 1.8em;
  color: white;
  font-family: Arboria-Bold, sans-serif;
}
.titleContent div > h1 > span {
  color: rgba(255, 255, 255, 0.47);
  text-wrap: none;
}
.separator {
  border-bottom: 2px groove white;
  box-sizing: border-box;
  margin-bottom: 17px;
  margin-right: 21px;
  margin-left: 21px;
  width: 100%;
}

.contactContainer {
  margin: 0;
  padding: 0;
  width: 100%;
}
.portfolioTabs {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  color: white;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
.menuButtons {
  cursor: pointer;
  font-family: Arboria-Light;
}
</style>
