<script>
import Options from './options/index.vue'
import Base from '../base'

export default {
  name: 'gravatar-image',
  components: { Options },
  extends: Base,
  props: {
    email: String
  },
  data: () => ({
    loading: true,
    fallback: 'robohash',
    rating: 'x',
    size: '400'
  }),
  computed: {
    src () {
      const { hash, fallback, size, rating } = this
      return `//gravatar.com/avatar/${hash}?s=${size}&d=${fallback}&r=${rating}`
    }
  }
}
</script>

<template>
  <div class="max-w-full relative">
    <ProgressBar v-if="loading" />
    <AvatarImage v-bind="{ src, email }" />
    <InputCopy class="mb-5" :value="src" />

    <Options
      :fallback.sync="fallback"
      :size.sync="size"
      :rating.sync="rating" />
  </div>
</template>
