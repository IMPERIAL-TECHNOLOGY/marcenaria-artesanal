<template>
  <div
    v-if="$vuetify.display.xs || $vuetify.display.sm || $vuetify.display.md"
    class="hero-container"
  >
    <v-card style="z-index: 400">
      <div class="hero-nav-container">
        <font-awesome-icon
          :icon="['fas', 'fa-bars']"
          class="hero-open-menu-icon-mobile"
          @click="drawer = !drawer"
        />
        <v-navigation-drawer
          location="right"
          v-model="drawer"
          width="250"
          style="z-index: 100; background-color: #341818"
          class="hero-mobile-menu"
        >
          <font-awesome-icon
            :icon="['fas', 'fa-x']"
            class="hero-close-menu-icon-mobile"
            @click="drawer = !drawer"
          />
          <div class="menuContainer">
            <div class="containerIcons">
              <div v-for="(item, index) in linkIcons" :key="index">
                <a :href="item.ref">
                  <font-awesome-icon
                    :icon="item.icon"
                    class="footer-social-icons icons"
                  />
                </a>
              </div>
            </div>
            <div class="listContainer">
              <ul>
                <li
                  class="hero-items"
                  v-for="(item, index) in menuMobile"
                  :key="index"
                >
                  <button
                    class="menuButtons"
                    @click="scrollToDrawer(item.anchor)"
                  >
                    {{ item.tab }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </v-navigation-drawer>
        <img :src="logo" class="hero-nav-icon-desktop" />
      </div>
    </v-card>
    <img :src="logo" class="hero-logo-mobile" />
  </div>
  <div
    v-else
    class="headerContainer"
    :style="{ backgroundImage: `url(${heroBackground})` }"
  >
    <div>
      <nav class="navContainer">
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
          <h1>
            MARCENARIA <span style="font-family: Arboria-Light">ARTESANAL</span>
          </h1>
        </div>
        <div class="separator" />
      </div>
      <div class="portfolioTabs">
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
          title: "DESIGN",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          anchor: "#contact",
          card: false,
          background: `${new URL(
            "@/assets/heroCards/background4.jpeg",
            import.meta.url
          )}`,
          active: false,
        },
        {
          name: "cardQuarto",
          title: "BELEZA",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          anchor: "#contact",
          card: false,
          background: `${new URL(
            "@/assets/heroCards/background3.jpeg",
            import.meta.url
          )}`,
          active: false,
        },
        {
          name: "cardCozinha",
          title: "SENTIDO",
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
          title: "HARMONIA",
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
      drawer: null,
      menuMobile: [
        { tab: "HOME", anchor: "hero" },
        { tab: "HISTÓRIA", anchor: "history" },
        { tab: "CONTATO", anchor: "contact" },
        { tab: "PROJETOS", anchor: "portifolio" },
      ],
      heroBackground: `${new URL(
        "../../../../assets/heroCards/background.jpg",
        import.meta.url
      )}`,
      hovering: false,
      linkIcons: [
        {
          ref: "https://pt-br.facebook.com/marcenariartesanal/",
          icon: ["fab", "fa-facebook-f"],
        },
        {
          ref: "https://www.instagram.com/marcenariaartesanal/?hl=en",
          icon: ["fab", "fa-instagram"],
        },
        {
          ref: "https://wa.me/message/YRG5PWGMPL73G1",
          icon: ["fab", "fa-whatsapp"],
        },
      ],
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
    scrollToDrawer(section) {
      this.drawer = !this.drawer;
      const element = document.getElementById(section);
      element.scrollIntoView({
        behavior: "smooth",
      });
    },
    scrollTo(section) {
      this.drawer = !this.drawer;
      const element = document.getElementById(section);
      element.scrollIntoView({
        behavior: "smooth",
      });
    },
    changeBackground(background) {
      this.heroBackground = background;
    },
  },
};
</script>

<style lang="css" scoped>
.hero-container {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../../../../assets/images/contato-pic.jpeg") no-repeat fixed center;
  background-size: cover;
}
.hero-open-menu-icon-mobile {
  cursor: pointer;
  height: 25px;
  color: rgba(255, 255, 255, 0.66);
  background-color: rgba(128, 128, 128, 0.29);
  border-radius: 3px;
  padding: 0.1em;
  position: fixed;
  right: 25px;
  bottom: 25px;
}
.hero-open-menu-icon-mobile:hover {
  transition: 0.7s;
  background-color: rgba(0, 0, 0, 0.57);
}
.hero-open-menu-icon-mobile:focus {
  transition: 0.7s;
  background-color: rgba(0, 0, 0, 0.57);
}
.hero-close-menu-icon-mobile {
  cursor: pointer;
  height: 23px;
  color: rgba(255, 255, 255, 0.66);
  position: fixed;
  right: 28px;
  bottom: 25px;
  z-index: 21;
}
.hero-close-menu-icon-mobile:hover {
  transition: 0.7s;
  background-color: rgba(255, 255, 255, 0.15);
}
.hero-close-menu-icon-mobile:focus {
  transition: 0.7s;
  background-color: rgba(255, 255, 255, 0.15);
}
.hero-mobile-menu {
  position: fixed;
  top: 0px;
  right: 0px;
  background-color: #341818;
  opacity: 0.95;
  height: 100vh;
  z-index: 20;
}
.hero-nav-items {
  padding: 90px 0 0px 0;
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-top: 3em;
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
.menuButtons:focus {
  transition: 0.5s;
  background-color: rgba(255, 255, 255, 0.38);
  border: 1px solid white;
}
.containerIcons {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 170px;
  margin: 0 auto;
  margin-top: 3em;
}
.footer-social-icons {
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50%;
  padding: 8px 8px;
  height: 18px;
  width: 20px;
  margin-right: 0;
}
.menuContainer {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
}
.navContainer {
  padding-left: 4em;
  padding-right: 4em;
}
.hero-items {
  margin: 2em 0 2em 0;
  color: white;
  list-style: none;
}
.hero-items:focus {
  transition: 0.7s;
  background-color: rgba(255, 255, 255, 0.15);
}
.listContainer {
  margin-top: calc(50vh - 219px);
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.icons:hover {
  transition: 0.7s;
  background-color: rgba(255, 255, 255, 0.15);
}
.icons:focus {
  transition: 0.7s;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.15);
}
</style>
