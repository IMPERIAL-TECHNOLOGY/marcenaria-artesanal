<template>
  <div class="contact-container">
    <div
      class="contact-main-container"
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
    >
      <h3>Quer saber mais sobre nós?</h3>
      <p class="contact-main-container-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit
      </p>
      <a href="https://wa.me/message/YRG5PWGMPL73G1"
        >ENTRE EM CONTATO PELO WHATSAPP</a
      >
      <div class="contact-address-container">
        <font-awesome-icon
          :icon="['fas', 'fa-location-dot']"
          class="contact-map-icon"
        />
        <p>
          Av. Gisele Constantino, 1548 - 2º andar<br />Pq. Bela Vista - Sorocaba
          - SP
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",

  data() {
    return {
      img1: `${new URL(
        "../../../../assets/images/contato-pic.jpeg",
        import.meta.url
      )}`,

      windowWidth: window.innerWidth,
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
  },
};
</script>

<style lang="css" scoped>
.contact-container {
}
.contact-main-container {
  background-color: #341818;
  color: white;
  padding: 45px;
  text-align: center;
}
.contact-main-container h3 {
  font-family: Arboria-Book;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.contact-main-container-text {
  font-family: Arboria-Light;
  margin-bottom: 30px;
}
.contact-main-container a {
  display: block;
  font-family: Arboria-Book;
  font-size: 13px;
  padding: 8px 15px;
  text-transform: uppercase;
  border: solid 1px gray;
  color: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  margin-bottom: 50px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;
}
.contact-main-container a:hover {
  transition: 0.2s ease-in-out;
  border: solid 1px white;
  background-color: rgba(128, 128, 128, 0.322);
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.contact-address-container {
  margin: 0 auto;
  display: flex;
  width: 290.75px;
  align-items: center;
  justify-content: space-between;
}
.contact-address-container p {
  font-family: Arboria-Light;
  font-size: 15px;
  text-align: left;
}

.contact-map-icon {
  height: 25px;
  margin-right: 20px;
}
@media (min-width: 768px) {
  .contact-container {
    background-color: #341818;
    display: flex;
    justify-content: center;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("../../../../assets/images/contato-pic.jpeg") no-repeat fixed center;
    background-origin: content-box;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    color: rgba(255, 255, 255, 0.7);
  }

  .contact-main-container {
    width: 600px;
    padding: 50px 100px 50px 100px;
    color: rgba(255, 255, 255, 0.9);
  }
  .contact-main-container h3 {
    font-size: 24px;
  }
  .contact-main-container a {
    font-size: 18px;
  }
  .contact-main-container-text {
    margin: 0 auto 50px auto;
    font-size: 18px;
    margin-bottom: 80px;
  }
  .contact-address-container {
    margin-top: 50px;
    width: 360px;
    width: 390px;
  }
  .contact-address-container p {
    font-size: 18px;
  }
  .contact-map-icon {
    height: 40px;
  }
}
</style>
