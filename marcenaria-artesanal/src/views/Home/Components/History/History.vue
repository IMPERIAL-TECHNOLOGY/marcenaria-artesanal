<template>
  <div class="hist-container" v-if="windowWidth >= 1200">
    <div class="title-container">
      <div class="hist-bg-text history-title-desktop">
        <h1>32</h1>
        <span>anos</span>
        <div style="margin-right: 20px" />
        <h1>+10k</h1>
        <span>projetos</span>
      </div>
    </div>
    <div
      class="hist-intro-container"
      v-motion
      :initial="{ opacity: 0 }"
      :visibleOnce="{
        opacity: 1,
        transition: {
          duration: 1200,
          type: 'keyframes',
          ease: 'easeIn',
        },
      }"
      :delay="100"
    >
      <div class="video-container-desktop">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/shopq-fKYwE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <v-carousel
        :show-arrows="false"
        cycle
        show-arrows="hover"
        class="hist-text-intro"
        hide-delimiter-background
      >
        <v-carousel-item v-for="(item, i) in slideHistory" :key="i" cover>
          <div style="font-family: Arboria-Light; font-size: 30px">
            {{ item.text }}
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div
      class="hist-design-container"
      v-motion
      :initial="{ opacity: 0, x: 200 }"
      :visibleOnce="{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1200,
          type: 'keyframes',
          ease: 'easeIn',
        },
      }"
    >
      <h3>design</h3>
      <img :src="img1" class="hist-img-1" />
      <p class="hist-paragraph">
        A Marcenaria Artesanal proporciona ambientes únicos a partir de soluções
        inovadoras na criação de móveis personalizados, de acordo com o estilo
        de cada cliente.
      </p>
    </div>
    <div
      class="hist-beleza-container"
      v-motion
      :initial="{ opacity: 0, x: -200 }"
      :visibleOnce="{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1200,
          type: 'keyframes',
          ease: 'easeIn',
        },
      }"
    >
      <h3>beleza</h3>
      <img :src="img2" class="hist-img-2" />
      <p class="hist-paragraph hist-paragraph-beleza">
        Com uma das maiores e mais modernas instalações no segmento de móveis
        sob medida da região, a Marcenaria Artesanal desenvolve projetos ao lado
        de renomados arquitetos e decoradores do estado de São Paulo.
      </p>
    </div>
    <div
      class="hist-sentido-container"
      v-motion
      :initial="{ opacity: 0, x: 200 }"
      :visibleOnce="{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1200,
          type: 'keyframes',
          ease: 'easeIn',
        },
      }"
    >
      <h3>sentido</h3>
      <img :src="img3" class="hist-img-3" />
      <p class="hist-paragraph">
        Desde 1991, a Marcenaria Artesanal fabrica móveis de alta qualidade e
        procedência, com design arrojado e exclusivo, tendo como premissa a
        responsabilidade com o meio ambiente.
      </p>
    </div>
  </div>
  <div class="hist-container" v-else>
    <div
      class="hist-intro-container"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{
        opacity: 1,

        transition: {
          duration: 500,
          type: 'keyframes',
          ease: 'easeIn',
        },
      }"
      :delay="400"
    >
      <div class="hist-bg-texts-mobile">
        <div class="hist-bg-text">
          <h1>32</h1>
          <span>anos</span>
        </div>
        <div class="hist-bg-text hist-bg-text-projetos">
          <h1>+10k</h1>
          <span>projetos</span>
        </div>
      </div>
      <div class="video-container-mobile">
        <iframe
          width="100%"
          height="220px"
          src="https://www.youtube.com/embed/shopq-fKYwE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <v-carousel
        :show-arrows="false"
        class="hist-text-intro-mobile"
        hide-delimiter-background
      >
        <v-carousel-item
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          "
          v-for="(item, i) in slideHistory"
          :key="i"
          cover
        >
          <div
            style="font-family: Arboria-Light; font-size: 25px; height: 55vh"
          >
            {{ item.text }}
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div
      class="hist-design-container"
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
      <h3>design</h3>
      <img :src="img1" class="hist-img-1" />
      <p class="hist-paragraph">
        A Marcenaria Artesanal proporciona ambientes únicos a partir de soluções
        inovadoras na criação de móveis personalizados, de acordo com o estilo
        de cada cliente.
      </p>
    </div>
    <div
      class="hist-beleza-container"
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
      <h3>beleza</h3>
      <img :src="img2" class="hist-img-2" />
      <p class="hist-paragraph hist-paragraph-beleza">
        Com uma das maiores e mais modernas instalações no segmento de móveis
        sob medida da região, a Marcenaria Artesanal desenvolve projetos ao lado
        de renomados arquitetos e decoradores do estado de São Paulo.
      </p>
    </div>
    <div
      class="hist-sentido-container"
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
      <h3>sentido</h3>
      <img :src="img3" class="hist-img-3" />
      <p class="hist-paragraph">
        Desde 1991, a Marcenaria Artesanal fabrica móveis de alta qualidade e
        procedência, com design arrojado e exclusivo, tendo como premissa a
        responsabilidade com o meio ambiente.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "History",

  data() {
    return {
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
      windowWidth: window.innerWidth,
      slideHistory: [
        {
          text: "A Marcenaria Artesanal  desenvolve ambientes únicos a partir de soluções inovadoras para a criação de móveis personalizados, de acordo com o estilo de cada cliente.",
        },
        {
          text: "Com uma das maiores e mais modernas instalações no segmento de móveis sob medida, desenvolvemos projetos em parceria com os mais renomados arquitetos, decoradores e designers de interiores do estado de São Paulo.",
        },
        {
          text: "Desde 1991 fabricamos móveis de alta qualidade, com matéria prima de procedência certificada, além do design arrojado e exclusivo, tendo como premissa a responsabilidade com o meio ambiente.",
        },
        {
          text: "Com uma equipe de profissionais especializados no segmento moveleiro e equipamentos com a mais alta tecnologia, a Marcenaria Artesanal é referência em qualidade excelência em serviços e produtos.",
        },
        {
          text: "Instalada em um parque fabril com 6.500 m² está a sede da empresa, que conquistou um espaço importante no mercado mobiliário do estado paulista.",
        },
      ],
      videoUrl: `${new URL("https://youtu.be/shopq-fKYwE", import.meta.url)}`,
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
.hist-container {
  width: 100%;
  padding: 80px 5vw 30px 5vw;
  margin: 0 auto;
}
.hist-bg-text {
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.history-title-desktop {
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 90px;
}

.hist-bg-text h1 {
  font-family: Arboria-Thin;
  font-size: 60px;
  line-height: 50px;
}
.hist-bg-text span {
  display: inline-block;
  font-family: Arboria-Light;
  font-size: 15px;
  line-height: 15px;
  vertical-align: middle;
  margin: 0px 0 0px 10px;
}
.hist-text-intro {
  max-width: 485px;
  max-height: 385px;
}
.hist-text-intro-mobile {
  margin: 20px auto 40px auto;
  /* margin-top: 20px;
  margin-bottom: 40px; */
  max-width: 485px;
  max-height: 385px;
}
img {
  width: 90vw;
}
h3 {
  font-family: Arboria-Medium;
  font-size: 20px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 18px;
}
.hist-paragraph {
  font-family: Arboria-Light;
  font-size: 18px;
  margin: 20px 0 40px 0;
}
.video-container-mobile {
  margin: 50px 0 50px 0;
}
@media (min-width: 768px) {
  .hist-container {
    max-width: 1400px;
  }
  img {
    width: 95%;
    align-self: center;
  }
  .hist-intro-container {
    display: grid;
    grid-template-columns: 1fr;
    margin: 50px 0 50px 0;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  }
  .hist-bg-texts {
    align-self: center;
  }

  .hist-bg-text h1 {
    font-size: 96px;
  }
  .hist-text-intro {
    border: none;
    margin-left: 15%;
    font-size: 25px;
  }
  .hist-design-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr 7fr;
    margin-bottom: 0px;
  }
  .hist-design-container img {
    grid-column: 2;
    grid-row: 1 / span 2;
    justify-self: end;
    width: 85%;
  }
  .hist-design-container h3 {
    font-size: 24px;
    align-self: end;
    margin-bottom: 10px;
  }
  .hist-design-container p {
    margin-right: 15%;

    font-size: 24px;
    width: 80%;
    align-self: start;
    margin-top: 10px;
  }
  .hist-beleza-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr 7fr;
    margin-bottom: 0px;
  }
  .hist-beleza-container img {
    grid-column: 1;
    grid-row: 1 / span 2;
    justify-self: start;
    width: 85%;
  }

  .hist-beleza-container h3 {
    font-size: 24px;
    align-self: end;
    margin-bottom: 10px;
    margin-left: 15%;
  }
  .hist-beleza-container p {
    font-size: 24px;
    width: 80%;
    align-self: start;
    margin-top: 10px;
    margin-left: 15%;
  }
  .hist-sentido-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr 7fr;
    margin-bottom: 100px;
  }
  .hist-sentido-container img {
    grid-column: 2;
    grid-row: 1 / span 2;
    justify-self: end;
    width: 85%;
  }
  .hist-sentido-container h3 {
    font-size: 24px;
    align-self: end;
    margin-bottom: 10px;
  }
  .hist-sentido-container p {
    font-size: 24px;
    width: 80%;
    align-self: start;
    margin-top: 10px;
  }
  .video-container-mobile {
    margin: 20px auto 20px auto;
    width: 80%;
  }
}
.hist-bg-texts-mobile {
  margin-top: -50px;
}

@media (min-width: 1200px) {
  .hist-intro-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 50px 0 50px 0;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
    border: none;
  }
  .hist-text-intro {
    border: none;
    margin-left: 15%;
    font-size: 32px;
  }
  .hist-bg-texts {
    display: flex;
  }
  .hist-bg-text-projetos {
    margin-left: 50px;
  }
  .v-btn--variant-text {
    background-color: white;
  }
  .video-container-desktop {
    height: 370px;
    width: 500px;
  }
  .hist-design-container {
    margin-bottom: 100px;
  }
  .hist-beleza-container {
    margin-bottom: 100px;
  }
}
</style>
