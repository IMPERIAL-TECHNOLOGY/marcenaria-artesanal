<template>
  <v-carousel
    v-if="$vuetify.display.xs || $vuetify.display.sm || $vuetify.display.md"
    dark
    height="90%"
    cycle
    :show-arrows="false"
    hide-delimiters
    hide-delimiter-background
  >
    <template v-for="(item, index) in carouselItems">
      <v-carousel-item
        v-if="(index + 1) % columns === 1 || columns === 1"
        :key="index"
      >
        <v-row class="flex-nowrap" style="height: 100%; margin: 0 -22px">
          <template v-for="(n, i) in columns">
            <template @click="openDialog(item)" v-if="+index + i < carouselItems.length">
              <v-col :key="i">
                <v-sheet
                  style="background-color: #EFEFEF"
                  v-if="+index + i < carouselItems.length"
                  class="carouselItem"
                >
                  <v-img
                    height="60%"
                    :src="carouselItems[+index + i].image"
                    :alt="carouselItems[+index + i].description"
                    cover
                  />
                  <h4
                    style="
                      height: 15vh;
                      font-size: 15px;
                      font-family: Arboria-Light;
                      padding-top: 20px;
                      color: rgba(0, 0, 0, 0.6);
                      @media (min-width: 768px) {
                        font-size: 24px;
                        margin-top: 14px;
                      }
                    "
                  >
                    {{ carouselItems[+index + i].description }}
                  </h4>
                </v-sheet>
              </v-col>
            </template>
          </template>
        </v-row>
      </v-carousel-item>
    </template>
    <ImageModal
      v-if="dialog"
      :value="dialog"
      :src="imgModal"
      @input="closeDialog"
      width="670px"
    />
  </v-carousel>
  <v-carousel
    v-else
    height="90%"
    cycle
    hide-delimiters
    hide-delimiter-background
    show-arrows="hover"
  >
    <template v-for="(item, index) in carouselItems">
      <v-carousel-item
        style="background-color: #EFEFEF"
        v-if="(index + 1) % columns === 1 || columns === 1"
        :key="index"
      >
        <v-row class="flex-nowrap" style="height: 100%; margin: 0 -22px">
          <template v-for="(n, i) in columns">
            <template  @click="openDialog(item)" v-if="+index + i < carouselItems.length">
              <v-col :key="i">
                <v-sheet
                  style="background-color: #EFEFEF"
                  v-if="+index + i < carouselItems.length"
                  class="carouselItem"
                >
                  <v-img
                    height="60%"
                    :src="carouselItems[+index + i].image"
                    :alt="carouselItems[+index + i].description"
                    cover
                  />
                  <h4
                    style="
                      height: 15vh;
                      font-size: 15px;
                      font-family: Arboria-Light;
                      padding-top: 20px;
                      color: rgba(0, 0, 0, 0.6);
                      @media (min-width: 768px) {
                        font-size: 24px;
                        margin-top: 14px;
                      }
                    "
                  >
                    {{ carouselItems[+index + i].description }}
                  </h4>
                </v-sheet>
              </v-col>
            </template>
          </template>
        </v-row>
      </v-carousel-item>
    </template>
    <ImageModal
      v-if="dialog"
      :value="dialog"
      :src="imgModal"
      @input="closeDialog"
      width="670px"
    />
  </v-carousel>

</template>
<script>
import ImageModal from "@/views/Home/Components/Carousel/ImageModal";
export default {
  name: "Home",
  components: {ImageModal},
  data() {
    return {
      logo: `${new URL("@/assets/images/logo.png", import.meta.url)}`,
      carouselItems: [
        {
          image: `${new URL(
            "@/assets/carousel/image1.png",
            import.meta.url
          )}`
        },
        {
          image: `${new URL(
            "@/assets/carousel/image2.png",
            import.meta.url
          )}`
        },
        {
          image: `${new URL(
            "@/assets/carousel/image3.png",
            import.meta.url
          )}`
        },
        {
          image: `${new URL(
            "@/assets/carousel/image4.png",
            import.meta.url
          )}`
        },
        {
          image: `${new URL(
            "@/assets/carousel/image5.png",
            import.meta.url
          )}`
        },
        {
          image: `${new URL(
            "@/assets/carousel/image9.png",
            import.meta.url
          )}`
        },
        {
          image: `${new URL(
            "@/assets/carousel/image6.png",
            import.meta.url
          )}`
        },
        {
          image: `${new URL(
            "@/assets/carousel/image7.png",
            import.meta.url
          )}`
        },
        {
          image: `${new URL(
            "@/assets/carousel/image8.png",
            import.meta.url
          )}`
        },
        {
          image: `${new URL(
            "@/assets/carousel/image10.png",
            import.meta.url
          )}`
        },
        {
          image: `${new URL(
            "@/assets/carousel/image11.png",
            import.meta.url
          )}`
        },
        {
          image: `${new URL(
            "@/assets/carousel/image12.png",
            import.meta.url
          )}`
        },
      ],
      dialog: false,
      imgModal: '',
      actionsWidth: 100,
    };
  },
  computed: {
    columns() {
      if (this.$vuetify.display.xs) {
        return 1;
      }
      if (this.$vuetify.display.mdAndDown) {
        return 2;
      }

      return 3;
    },
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    openDialog(item) {
      this.dialog = true;
      this.imgModal = item.image;
      console.log(111111111, this.imgModal)
    },
  },
  mounted() {
    const actionSlots = this.$refs.actionSlot;
    if (actionSlots && actionSlots.length) {
      const actionSlot = actionSlots[0];
      this.actionsWidth = actionSlot.offsetWidth;
    }
  },
};
</script>
<style>
.carouselItem {
  margin-right: 10px;
  margin-left: 10px;
  height: 60vh;
}
</style>
