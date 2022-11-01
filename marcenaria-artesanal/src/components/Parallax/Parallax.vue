<template>
  <v-parallax
      v-bind="$props"
      v-on="$listeners"
      :src="src"
  ></v-parallax>
</template>

<script>
  export default {
      name: 'Parallax',
    props: {
      src: String,
    },
  }
</script>
