<script>
export default {
  name: 'avatar-image',
  props: {
    email: String,
    src: String
  }
}
</script>

<template>
  <img class="w-full max-w-full" v-bind="{ src, alt: email, title: email }">
</template>
