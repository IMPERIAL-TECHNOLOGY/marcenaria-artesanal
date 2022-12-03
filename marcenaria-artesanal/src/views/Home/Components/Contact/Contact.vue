<template>
  <div class="contact-container">TEST</div>
</template>

<script>
export default {
  name: "Contact",

  data() {
    return {
      img1: `${new URL(
        "../../../../assets/history/img1.jpg",
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
  background-color: aqua;
}
</style>
