<template>
  <v-dialog
    v-bind="$props"
    @click:outside="closeDialog"
    content-class="elevation-0"
    overlay-opacity="0.9"
    overlay-color="grey darken-3"
  >
    <div v-if="!$vuetify.display.xs">
      <v-btn
        color="transparent"
        elevation="0"
        fab
        small
        class="btn-shadow"
        shadow

        @click="closeDialog">
        <v-icon
          class="close-btn-lg"
          size="40px"
          color="black"
        >
          mdi-close
        </v-icon>
      </v-btn>
    </div>
    <div v-else>
      <v-btn
        color="transparent"
        elevation="0"
        fab
        small
        class="btn-shadow"
        shadow

        @click="closeDialog">
        <v-icon
          class="close-btn"
          size="40px"
          color="black"
        >
          mdi-close
        </v-icon>
      </v-btn>
    </div>
    <div class="modalContainer">
      <v-img
      :src="src"
      cover
       />
    </div>
    <slot />
  </v-dialog>
</template>

<script lang="ts">
import ServicesApi, { Services } from '@/api/services.api';

export default {
  name: 'ServicesDetailModal',
  components: {},
  props: {
    value: Boolean,
    width: [String, Number],
    src: '',
  },
  methods: {
    closeDialog() {
      this.$emit('input', null);
    },
  },
};
</script>

<style scoped>
.modalContainer {
  margin: 0 auto;
  background-color: white;
  border-radius: 22px;
  max-width: 30em;
}
.modalTitle{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px 22px 0 0;
  color: white;
  margin-bottom: 25px;
  font-weight: bold;
  font-size: 17px;
  height: 80px;
}
.contentContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 25px;
  font-size: 17px;
}
.contentContainer p{
  margin-bottom: 10px;
}
.set-position {
  margin-top: 40px;
}
.close-btn {
  padding-top: 70px;
  padding-right: 15px;
}
.close-btn-lg {
  padding-top: 70px;
  padding-left: 120px;
}
.buttonContainer {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
  margin-top: 10px;
}
.deleteButton {
  margin: 0;
  width: 100%;
}
.deleteButton div{
  color: white;
}
.btnCancel div{
  color: white;
}
.sectionContainer {
  display: flex;
  justify-content: space-between;
}
.statusMargin {
  margin-right: 25px;
}
.descriptionContainer {
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  width: 15em;
}
.descriptionTextBox {
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-wrap: break-word;
  width: 80%;
}
.tooltip {
  font-size: 2vh;
}
</style>
