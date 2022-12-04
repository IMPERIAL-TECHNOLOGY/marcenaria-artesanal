<template>
  <div
    class="contact-container"
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
    <div class="photo-container">
      <h3>Lorem Ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor.
      </p>
    </div>
    <div class="contact-main-container">
      <h3>Quer saber mais sobre nós?</h3>
      <p class="contact-main-container-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit
      </p>
      <button>ENTRE EM CONTATO PELO WHATSAPP</button>
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
.photo-container {
  display: none;
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
.contact-main-container button {
  font-family: Arboria-Book;
  font-size: 13px;
  padding: 8px 15px;
  text-transform: uppercase;
  border: solid 1px white;
  border-radius: 5px;
  margin-bottom: 50px;
}
.contact-main-container button:hover {
  transition: 0.2s ease-in;
  border: solid 1px gray;
  background-color: rgba(128, 128, 128, 0.322);
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
  .contact-main-container-text {
    max-width: 500px;
    margin: 0 auto 50px auto;
    font-size: 24px;
  }
  .contact-main-container button {
    font-size: 15px;
  }
  .contact-main-container {
    padding: 100px;
  }
  .contact-main-container h3 {
    font-size: 36px;
  }
  .contact-address-container {
    width: 390px;
  }
  .contact-address-container p {
    font-size: 20px;
  }
  .contact-map-icon {
    height: 40px;
  }
}
@media (min-width: 1400px) {
  .contact-container {
    display: grid;
    grid-template-columns: 60vw 40vw;
  }
  .photo-container {
    padding: 100px;
    display: block;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("../../../../assets/images/contato-pic.jpeg") no-repeat fixed center;
    background-size: cover;
    background-origin: content-box;
    color: white;
  }
  .photo-container h3 {
    font-family: Arboria-Bold;
    font-size: 32px;
    margin-bottom: 20px;
  }
  .photo-container p {
    font-family: Arboria-Light;
    font-size: 24px;
    width: 50%;
    max-width: 500px;
  }
  .contact-main-container {
    padding: 100px;
  }
  .contact-main-container h3 {
    font-size: 36px;
  }
  .contact-main-container-text {
    font-size: 24px;
  }
  .contact-main-container button {
  }
  .contact-address-container {
    margin-top: 50px;
  }
  .contact-address-container p {
    font-size: 20px;
  }
  .contact-map-icon {
  }
}
</style>
