<template>
  <v-card
    v-bind="$props"
    v-for="(item, i) in tabs"
    :key="i"
    style="background-color: transparent"
    flat
  >
    <v-card-item
      class="portfolioItem"
      @mouseover.stop="tabHover(item)"
      @mouseleave.stop="tabLeave(item)"
    >
      <div class="cardTab">{{ item.title }}</div>
      <div class="cardFooter" />
      <v-expand-transition>
        <div
          v-if="item.active"
          class="transition-fast-in-low-out v-card--reveal"
        >
          <v-card-item
            class="portfolioItemExpanded"
            @mouseover.once="setBackground(item)"
          >
            <div
              class="cardContainer"
              @mouseover.once="setSloganColor(item)"
            >
              <div class="cardTitle">
                <v-card-title>{{ item.title }} </v-card-title>
              </div>
              <div
                class="cardText"
              >
                <v-card-text
                  style="font-family: Arboria-Light, sans-serif"
                >
                  {{ item.text }}
                </v-card-text>
              </div>
              <div class="buttonContainer">
                <v-btn
                  class="cardButton"
                  :to="{ name: item.path, hash: item.anchor }"
                >
                  <span style="color: white">SAIBA MAIS</span>
                </v-btn>
              </div>
            </div>
          </v-card-item>
        </div>
      </v-expand-transition>
    </v-card-item>
  </v-card>
</template>
<script>
export default {
  name: "TabCards",
  components: {},
  emits: ["background"],
  props: {
    tabs: Array,
  },
  inheritAttrs: false,
  data() {
    return {
      active: false,
    };
  },
  methods: {
    setBackground(item) {
      const background = item.background;
      this.$emit("background", background);
    },
    setSloganColor(item) {
      const slogan = item.slogan;
      this.$emit("slogan", slogan);
    },
    tabHover(item) {
      item.active = true;
    },
    tabLeave(item) {
      item.active = false;
    },
  },
  computed: {},
};
</script>
<style scoped>
.portfolioItemExpanded {
  font-size: 2.2em;
  padding: 0.5em;
  margin: 0 auto;
  height: 100%;
  background-color: #341818;
  cursor: pointer;
  border: 0.5px transparent;
}
.cardFooter {
  background-color: #341818;
  height: 0.7em;
  margin-top: 16vh;
}
.portfolioItem {
  margin-top: 7vh;
  min-width: 15em;
  color: white;
  padding: 0;
  height: 100%;
  cursor: pointer;
}
.v-card--reveal {
  transition: 0.4s;
  height: 100%;
  margin-top: 10em;
  padding: 0;
  bottom: 0;
  position: absolute;
}
.cardButton {
  width: 8em;
  font-family: Arboria-Book, sans-serif;
  border: 0.1em solid white;
  background-color: transparent;
}
.cardButton:hover {
  color: white;
}
.cardTitle {
  background-color: #341818;
  font-size: 0.6em;
  text-align: center;
  height: 3.5vh !important;
  line-height: 2vh;
  font-family: Arboria-Bold, sans-serif;
}
.cardText {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 0.5em;
  height: 16vh;
  line-height: 1.2em !important;
  font-family: Arboria-Light, sans-serif;
}
.cardTab {
  word-wrap: normal;
  padding: 1vh;
  text-align: center;
  font-size: 1.4em;
  font-family: Arboria-Light, sans-serif;

}
.cardContainer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
}
.buttonContainer {
  margin: 0 auto;
}
</style>
