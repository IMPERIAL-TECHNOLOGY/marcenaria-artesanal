<template>
  <div class="hero-container">
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
          <li>
            <button v-on:click="scrollTo('history')">História</button>
          </li>
          <li>
            <button v-on:click="scrollTo('contact')">Contato</button>
          </li>
          <li>
            <button v-on:click="scrollTo('portifolio')">Projetos</button>
          </li>
        </ul>
      </div>
      <img :src="logo" class="hero-nav-icon-desktop" />
    </div>
    <img :src="logo" class="hero-logo-mobile" />
  </div>
</template>

<script>
export default {
  name: "Hero",

  data() {
    return {
      menuOpen: false,
      windowWidth: window.innerWidth,
      img1: `${new URL(
        "../../../../assets/history/img1.jpg",
        import.meta.url
      )}`,
      img2: `${new URL(
        "../../../../assets/history/img2.jpg",
        import.meta.url
      )}`,
      img3: `${new URL(
        "../../../../assets/history/img3.jpg",
        import.meta.url
      )}`,
      logo: `${new URL("../../../../assets/images/logo.png", import.meta.url)}`,
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
  },
};
</script>

<style lang="css" scoped>
.hero-container {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../../../assets/images/mobileBackground.jpeg") no-repeat fixed
      center;
  background-size: cover;
}
.hero-open-menu-icon-mobile {
  height: 30px;
  color: white;
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 1000;
}
.hero-close-menu-icon-mobile {
  height: 30px;
  color: white;
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 1000;
}
.hero-mobile-menu {
  transition: 1s;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 300px;
  z-index: 20;
}
.item-hidden {
  display: none;
  opacity: 0;
  transition: 2s ease-in;
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
</style>
