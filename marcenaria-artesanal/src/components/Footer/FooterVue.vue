<template>
  <div class="footer-container">
    <h3
      class="footer-title"
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
      DESIGN, BELEZA E SENTIDO
    </h3>
    <div
      class="footer-container-2"
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
      <img :src="logo" class="footer-logo" />
      <div class="footer-social">
        <a href="https://pt-br.facebook.com/marcenariartesanal/"
          ><font-awesome-icon
            :icon="['fab', 'fa-facebook-f']"
            class="footer-social-icons"
        /></a>
        <a href="https://www.instagram.com/marcenariaartesanal/?hl=en"
          ><font-awesome-icon
            :icon="['fab', 'fa-instagram']"
            class="footer-social-icons"
        /></a>
        <a href="https://wa.me/message/YRG5PWGMPL73G1">
          <font-awesome-icon
            :icon="['fab', 'fa-whatsapp']"
            class="footer-social-icons"
          />
        </a>
        <a href="https://twitter.com/m_artesanal"
          ><font-awesome-icon
            :icon="['fab', 'fa-twitter']"
            class="footer-social-icons"
        /></a>
      </div>
      <div class="footer-navigation">
        <h3>NAVEGAÇÃO</h3>
        <a @click="scrollTo('hero')">HOME</a>
        <a @click="scrollTo('history')">NOSSA HISTÓRIA</a>
        <a @click="scrollTo('portifolio')">PROJETOS</a>
        <a @click="scrollTo('contact')">CONTATO</a>
      </div>
      <div class="footer-contact">
        <h3>CONTATO</h3>
        <a href="tel:01532424194">
          <font-awesome-icon
            :icon="['fas', 'phone']"
            class="footer-contact-icons"
          />
          (15)3242-4194</a
        >
        <a href="https://wa.me/message/YRG5PWGMPL73G1">
          <font-awesome-icon
            :icon="['fab', 'fa-whatsapp']"
            class="footer-contact-icons"
          />
          (15)3357-9346</a
        >
        <a href="mailto: contato@marcenariaartesanal.com.br"
          ><font-awesome-icon
            :icon="['fas', 'envelope']"
            class="footer-contact-icons"
          />contato@marcenariaartesanal.com.br</a
        >
      </div>
      <div class="footer-address">
        <h3>ENDEREÇOS</h3>
        <p>Rodovia Raimundo Antunes Soares, 2270 Votorantim - SP</p>
        <p
          >Av. Gisele Constantino, 1548 - 2º andar Pq. Bela Vista - Sorocaba -
          SP</p
        >
      </div>
    </div>
    <span class="copyright"
      >© 2022 MARCENARIA
      <p>ARTESANAL</p></span
    >
  </div>
</template>

<script>
export default {
  name: "FooterVue",

  data() {
    return {
      logo: `${new URL("../../assets/images/logo.WebP", import.meta.url)}`,
    };
  },
  methods: {
    scrollTo(section) {
      const element = document.getElementById(section);
      element.scrollIntoView({
        behavior: "smooth",
      });
    },
  }
};
</script>

<style lang="css" scoped>
.footer-container {
  text-align: center;
  background-color: black;
  color: white;
}
.footer-title {
  font-family: Arboria-Bold;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 150px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.footer-container-2 a,
span,
p {
  font-family: Arboria-Light;
}
.footer-container-2 h3 {
  font-family: Arboria-Medium;
}
.footer-logo {
  margin-top: 50px;
  width: 250px;
}
.footer-social {
  display: flex;
  width: 200px;
  margin: 40px auto 20px auto;
  justify-content: space-between;
}
.footer-social-icons {
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  padding: 8px 8px;
  height: 18px;
  width: 18px;
}
.footer-social-icons:hover {
  cursor: pointer;
  transition: 0.5s;
  color: white;
  border-color: white;
}
.footer-navigation {
  display: grid;
  grid-template-rows: 60px 40px 40px 40px 40px;
  width: 250px;
  margin: 10px auto;
}
.footer-navigation h3 {
  display: flex;
  align-self: center;
  justify-content: center;
  font-size: 16px;
}
.footer-navigation a {
  display: flex;
  height: 100%;
  align-self: center;
  justify-content: center;
  font-size: 12px;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.5);
}
.footer-navigation a:hover {
  cursor: pointer;
  transition: 0.5s;
  color: white;
}
.footer-contact {
  display: grid;
  grid-template-rows: 60px 40px 40px 40px;
  width: 250px;
  margin: 10px auto;
}
.footer-contact h3 {
  display: flex;
  align-self: center;
  justify-content: center;
  font-size: 16px;
}
.footer-contact a,
span {
  text-decoration: none;
  display: flex;
  height: 100%;
  align-self: center;
  justify-content: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  height: 12px;
}
.footer-contact a:hover {
  cursor: pointer;
  transition: 0.5s;
  color: white;
}
.footer-contact-icons {
  height: 14px;
  margin: 4px 6px 0px 0px;
  color: rgba(255, 255, 255, 0.7);
}
.footer-address {
  display: grid;
  grid-template-rows: 60px 50px 50px;
  width: 250px;
  margin: 10px auto;
}
.footer-address h3 {
  display: flex;
  align-self: center;
  justify-content: center;
  font-size: 16px;
}
.footer-address p {
  display: flex;
  align-self: center;
  justify-content: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  overflow-wrap: normal;
}
.copyright {
  font-size: 16px;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-self: center;
  height: 50px;
  margin-top: 50px;
  color: white;
}
.copyright p {
  margin-left: 5px;
  color: rgba(255, 255, 255, 0.5);
}
@media (min-width: 768px) {
  .footer-title {
    height: 200px;
  }
  .footer-container-2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 2fr;
  }
  .footer-logo {
    grid-column: 1 / span 3;
    display: flex;
    justify-self: center;
    align-self: center;
  }
  .footer-social {
    grid-column: 1 / span 3;
    grid-row: 2;
  }
}

@media (min-width: 1300px) {
  .footer-title {
    height: 200px;
  }
  .footer-container-2 {
    width: 95vw;
    max-width: 1280px;
    justify-content: left;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .footer-logo {
    grid-column: 1;
    display: flex;
    justify-self: left;
    align-self: center;
  }
  .footer-social {
    grid-column: 1;
    grid-row: 2;
  }
  .footer-navigation {
    grid-row: 1 / span 2;
    margin-top: 30px;
  }
  .footer-contact {
    grid-row: 1 / span 2;
    margin-top: 30px;
  }
  .footer-address {
    grid-row: 1 / span 2;
    margin-top: 30px;
  }
  .footer-social {
    margin-left: 25px;
    justify-self: left;
  }
  .footer-navigation h3 {
    justify-self: left;
    text-align: left;
  }
  .footer-navigation a {
    justify-self: left;
    text-align: left;
  }
  .footer-contact h3 {
    justify-self: left;
    text-align: left;
  }
  .footer-contact a {
    justify-self: left;
    text-align: left;
  }
  .footer-address h3 {
    justify-self: left;
    text-align: left;
  }
  .footer-address p {
    justify-self: left;
    text-align: left;
  }
}
</style>
