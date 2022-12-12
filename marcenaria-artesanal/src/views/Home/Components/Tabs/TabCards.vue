<template>
  <v-card
    v-bind="$props"
    v-for="(item, i) in tabs" :key="i"
    style="background-color: transparent"
  >
      <v-card-item
        class="portfolioItem"
        @mouseover.stop="tabHover(item)"
        @mouseleave.stop="tabLeave(item)"
      >
        <div
          class="cardTab"
        >{{ item.title }}
        </div>
        <div class="cardFooter"/>
        <v-expand-transition>
          <div
            v-if="item.active"
            class="transition-fast-in-low-out v-card--reveal" >
            <v-card-item
              class="portfolioItemExpanded"
              @mouseover.once="setBackground(item)"
            >
              <div>
                <v-card-title
                  class="cardTitle"
                >{{ item.title }}
                </v-card-title>
                <v-card-text
                  class="cardText"
                >{{ item.text }}
                </v-card-text>
                <v-btn
                  class="cardButton"
                  :to="{name: item.path, hash: item.anchor}"
                >
                  contato
                </v-btn>
              </div>
            </v-card-item>
          </div>
        </v-expand-transition>
      </v-card-item>
  </v-card>
</template>
<script>
export default {
  name: 'TabCards',
  components: {},
  emits: ["background"],
  props: {
    tabs: Array
  },
  inheritAttrs: false,
  data() {
    return{
    active: false,
    }
  },
  methods: {
    setBackground(item) {
    const background = item.background
    this.$emit('background', background)
    },
    tabHover(item) {
      item.active = true
    },
    tabLeave(item) {
      item.active = false
    },
  },
  computed: {},
}
</script>
<style scoped>
.portfolioItemExpanded {
  font-size: 2.2em;
  padding: 0.5em;
  margin: 0 auto;
  box-sizing: border-box;
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
  height: 30vh;
  cursor: pointer;
  border: 0.5px transparent;
}
.v-card--reveal {
  margin-top: 10em;
  padding: 0;
  bottom: 0;
  box-sizing: border-box;
  justify-content: space-between;
  position: absolute;
  border: 1px transparent;
}
.cardButton {
  width: 100%;
  justify-content: center;
  border: 0.5px white;
  background-color: #341818;
  color: white;
}
.cardTitle {
  margin-top: 1vh;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.6em;
  height: 3.5vh !important;
  line-height: 2vh;
  font-family: Arboria-Bold, sans-serif;
}
.cardText {
  text-align: left;
  font-size: 0.5em;
  height: 16vh;
  line-height: 1.2em !important;
  font-family: Arboria-Light, sans-serif;
}
.cardTab {
  word-wrap:  normal;
  padding: 1vh;
  text-align: center;
  font-size: 1.4em;
  font-family: Arboria-Bold, sans-serif;
}
</style>
