<template>
  <div class="test">
    <v-tabs
        background-color="transparent"
        color="white"
        height="30"
    >
      <div class="header" v-for="(tab, i) in tabs" :key="i">
        <v-tab
            v-bind="$props"
            style="color: white; font-size: 1em"
            right
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