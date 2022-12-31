<template>
  <section id="hero">
    <Hero />
  </section>
  <section id="history">
    <History />
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
          Conheça alguns de nossos projetos
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
import Hero from "@/views/Home/Components/Hero/Hero.vue";
export default {
  name: "Home",
  components: {
    TabsNavegation,
    TabCards,
    HomeCarousel,
    FooterVue,
    History,
    Contact,
    Hero,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.portifolioContainer {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
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
