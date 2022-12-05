<template>
  <div
    class="headerContainer"
    :style="{ backgroundImage: `url(${heroBackground})` }"
  >
    <div v-if="!$vuetify.display.xs && !$vuetify.display.sm">
      <nav>
        <v-img
          :src="logo"
          alt="Marcenaria artesanal logo"
          class="logo"
          max-width="15vw"
          min-width="10vw"
        />
        <TabsNavegation :tabs="tabs" class="tabStyle" />
      </nav>
    </div>
    <div class="titleContainer">
      <div class="titleContent">
        <div CLASS="separator" />
        <div class="text-no-wrap">
          <h1>MARCENARIA <span>ARTESANAL</span></h1>
        </div>
        <div CLASS="separator" />
      </div>
      <div
        v-if="!$vuetify.display.xs && !$vuetify.display.sm"
        class="portfolioTabs"
      >
        <TabCards
          :tabs="portifolioTabs"
          @background="changeBackground"
        />
      </div>
    </div>
  </div>
  <section id="history">
    <History class="historyContainer" />
  </section>

  <section id="contact">
    <Contact class="contactContainer" />
  </section>
  <section id="portifolio" class="portifolioContainer">
    <div
      class="carouselContainer"
      v-motion
      :initial="{ opacity: 0 }"
      :visibleOnce="{
        opacity: 1,

        transition: {
          duration: 500,
          type: 'keyframes',
          ease: 'easeIn',
        },
      }"
      :delay="400"
    >
      <div class="titleCarousel">
        <h1 class="projects-title">PROJETOS</h1>
        <h4 class="projects-subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h4>
        <a
          class="projects-instagram"
          href="https://www.instagram.com/marcenariaartesanal/?hl=en"
        >
          Veja mais no Instagram
          <font-awesome-icon
            :icon="['fab', 'fa-instagram']"
            class="projects-instagram-logo"
          />
        </a>
      </div>
      <div class="carousel">
        <HomeCarousel />
      </div>
    </div>
  </section>
  <FooterVue />
</template>

<script>
import TabsNavegation from "@/components/Tabs/TabsNavegation";
import TabCards from "@/views/Home/Components/Tabs/TabCards";
import HomeCarousel from "@/views/Home/Components/Carousel/HomeCarousel";
import FooterVue from "@/components/Footer/FooterVue.vue";
import History from "@/views/Home/Components/History/History";
import Contact from "./Components/Contact/Contact.vue";
export default {
  name: "Home",
  components: {
    TabsNavegation,
    TabCards,
    HomeCarousel,
    FooterVue,
    History,
    Contact,
  },
  data() {
    return {
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
          background: `${new URL('../../assets/heroCards/background4.png', import.meta.url)}`
        },
        {
          name: "cardQuarto",
          title: "QUARTO",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          anchor: "#contact",
          card: false,
          background: `${new URL('../../assets/heroCards/background2.png', import.meta.url)}`
        },
        {
          name: "cardCozinha",
          title: "COZINHA",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          anchor: "#contact",
          card: false,
          background:`${new URL('../../assets/heroCards/background3.png', import.meta.url)}`
  },
        {
          name: "cardEscritório",
          title: "ESCRITÓRIO",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          anchor: "#contact",
          card: false,
          background: `${new URL('../../assets/heroCards/background.png', import.meta.url)}`
        },
      ],
      logo: `${new URL("../../assets/images/logo.png", import.meta.url)}`,
      heroBackground: `${new URL('../../assets/heroCards/background.png', import.meta.url)}`,
    };
  },
  methods: {
    changeBackground(background) {
      this.heroBackground = background
    }
  },
};
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
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
.headerContainer nav {
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
.logo {
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
  box-sizing: border-box;
  margin-bottom: 17px;
  margin-right: 21px;
  margin-left: 21px;
  width: 20vw;
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
  width: 60vw;
  color: white;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
.portifolioContainer {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
.carouselContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 100%;
  max-width: 1400px;
  padding: 50px 5vw 0 5vw;
  height: 100%;
}
.projects-title {
  font-family: Arboria-Bold;
  font-size: 24px;
  margin-bottom: 24px;
}
.projects-subtitle {
  color: rgba(0, 0, 0, 0.63);
  margin-bottom: 24px;
  font-size: 18px;
  font-family: Arboria-Light;
}
.carousel {
  height: 70vh;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.projects-instagram {
  display: block;
  margin: 0px 0 40px 0;
  height: 30px;
  width: 200px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
}
.projects-instagram:hover {
  cursor: pointer;
  transition: 0.2s ease-in-out;
  width: 300px;
  border-bottom: 0.5px solid #612d2d;
  color: #362727;
}
.projects-instagram-logo {
  margin-left: 5px;
}
@media (min-width: 768px) {
  .titleCarousel h1 {
    color: rgba(0, 0, 0, 0.8);

    font-family: Arboria-Medium;
    font-size: 32px;
    margin-bottom: 40px;
  }

  .titleCarousel h4 {
    color: rgba(0, 0, 0, 0.63);
    margin-bottom: 40px;
    font-size: 24px;
    font-family: Arboria-Light;
  }
}
</style>
