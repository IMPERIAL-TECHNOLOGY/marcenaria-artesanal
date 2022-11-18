<template>
  <div class="test">
    <v-tabs
        background-color="transparent"
        color="white"
        height="10vh"
        hide-slider
    >
      <div class="header" v-for="(tab, i) in tabs" :key="i">
        <v-tab
            v-bind="$props"
            style="color: white ;font-size: 2.2vh"
            right
            :to="{name: tab.path, hash: tab.anchor}"
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
}
</script>
<style scoped>
test {
  width: 100%;
}
</style>
