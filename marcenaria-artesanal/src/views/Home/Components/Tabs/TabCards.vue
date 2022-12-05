<template>
  <v-card
    v-bind="$props"
    v-for="(item, i) in tabs" :key="i"
    style="background-color: transparent"
  >
    <v-hover
      v-slot="{ isHovering, props }"
    >
      <v-card-item
        class="portfolioItem"
        v-bind="props"
      >
        <div
          class="cardTab"
        >{{ item.title }}
        </div>
        <v-expand-transition>
          <div class="transition-fast-in-low-out v-card--reveal" v-if="isHovering">
            <v-card-item
              class="portfolioItemExpanded"
              style="height: 30vh; padding: 0.5em "
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
                  style="font-size: 1.6vh; padding: 1vh; height: 100%; margin-bottom: 1vh"
                >
                  contato
                </v-btn>
              </div>
            </v-card-item>
          </div>
        </v-expand-transition>
      </v-card-item>
    </v-hover>
  </v-card>
</template>
<script>
export default {
  name: 'TabCards',
  components: {},
  props: {
    tabs: Array
  },
  data() {
    return{

    }
  },
  methods: {
    setBackground(item) {
    const background = item.background
    this.$emit('background', background)
    },
  },
  computed: {}
}
</script>
<style scoped>
.portfolioItemExpanded {
  font-size: 2.2vh;
  padding: 1vw;
  margin: 0 auto;
  box-sizing: border-box;
  width: 12vw;
  height: 100%;
  background-color: #341818;
  cursor: pointer;

}
.portfolioItem {
  color: white;
  padding: 0;
  min-width: 12vw;
  height: 5vh;
  margin-top: 10vh;
  margin-right: 2vw ;
  margin-left: 2vw ;
  cursor: pointer;
}
.v-card--reveal {
  height: 100%;
  padding: 0;
  width: 12vw;
  bottom: 0;
  box-sizing: border-box;
  justify-content: flex-start;
  position: absolute;
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
  font-size: 1.7vh;
  height: 3.5vh !important;
  line-height: 2vh
}
.cardText {
  text-align: left;
  font-size: 1.6vh;
  height: 16vh;
  line-height: 2.3vh !important;
}
.cardTab {
  word-wrap:  normal;
  padding: 1vh;
  text-align: center;
  font-size: 2.4vh;
  min-width: 12vw;
}
</style>
