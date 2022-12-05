<template>
  <div class="hist-container" v-if="windowWidth >= 768">
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
      <div class="hist-bg-texts">
        <div class="hist-bg-text hist-bg-text-anos">
          <h1>32</h1>
          <span>anos</span>
        </div>
        <div class="hist-bg-text hist-bg-text-projetos">
          <h1>+10k</h1>
          <span>projetos</span>
        </div>
      </div>

      <p class="hist-text-intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan.
      </p>
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
  <div class="hist-container" v-if="windowWidth < 768">
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
      <div class="hist-bg-texts">
        <div class="hist-bg-text hist-bg-text-anos">
          <h1>32</h1>
          <span>anos</span>
        </div>
        <div class="hist-bg-text hist-bg-text-projetos">
          <h1>+10k</h1>
          <span>projetos</span>
        </div>
      </div>

      <p class="hist-text-intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan.
      </p>
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
  padding: 45px 5vw 30px 5vw;
  margin: 0 auto;
}
.hist-bg-text {
  display: flex;
  height: 50px;
  flex-wrap: no;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
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
  font-family: Arboria-Light;
  font-size: 20px;
  margin: 40px 0 30px 0;
  padding-bottom: 30px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
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
    grid-template-columns: 1fr 1fr;
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
    margin-bottom: 100px;
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
    margin-bottom: 100px;
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
}

@media (min-width: 1200px) {
  .hist-intro-container {
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
}
</style>
