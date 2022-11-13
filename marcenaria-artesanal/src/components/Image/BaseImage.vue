<template>
  <div>
    <v-img v-bind="$props" />
  </div>
</template>

<script>
export default {
  name: 'BaseImage',
  props: {
    src: { type: String, default: '' },
    alt: String,
    contain: Boolean,
    externalSrc: { type: Boolean, default: false },
    height: { type: String, default: '100%' },
    maxHeight: { type: String, default: '100%' },
    width: { type: String, default: '100%' },
    maxWidth: { type: String, default: '100%' },
  },
};
</script>
