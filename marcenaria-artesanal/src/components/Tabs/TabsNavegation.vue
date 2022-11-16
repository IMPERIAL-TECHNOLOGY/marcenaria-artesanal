<template>
  <div class="test">
    <v-tabs
        background-color="transparent"
        color="white"
        height="30"
        hide-slider
    >
      <div class="header" v-for="(tab, i) in tabs" :key="i">
        <v-tab
            v-bind="$props"
            v-on="$listeners"
            style="color: white; font-size: 1.1em"
            right
            :to="{hash: tab.anchor}"
            @click="$emit('scrollMeTo')"
        >
          {{ tab.name }}
        </v-tab>
      </div>
    </v-tabs>
  </div>
</template>
<script>
export default {
  name: 'TabsNavegation',
  props: {
    tabs: Array
  },
  methods: {
    scrollMeTo(refName) {
      let element = this.$refs[refName];
      console.log('IUUUUUUUUUUUUU', element)
      element.scrollIntoView({behavior: "smooth"});
    }
  }
}
</script>
<style scoped>
test {
  width: 100%;
}
</style>