<template>
  <div class="test">
    <v-tabs
        color="white"
        height="70px"
        hide-slider
    >
      <div class="header" v-for="(tab, i) in tabs" :key="i">
        <v-tab
            v-bind="$props"
            right
            :to="{name: tab.path, hash: tab.anchor}"
        >
          <span style="color: white ;font-size: 1.5em; font-family: Arboria-Book, sans-serif">{{ tab.name }}</span>
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
</style>
