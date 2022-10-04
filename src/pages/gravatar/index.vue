<script>
import Options from './options/index.vue'
import LvProgressSpinner from 'lightvue/progress-spinner'
import Base from '../base'

export default {
  name: 'page-gravatar',
  title: 'Gravatar',
  components: { Options, LvProgressSpinner },
  extends: Base,
  data: () => ({
    fallback: 'robohash',
    rating: 'x',
    size: '400'
  }),
  computed: {
    src () {
      const { hash, fallback, size, rating } = this
      return `https://gravatar.com/avatar/${hash}?s=${size}&d=${fallback}&r=${rating}`
    }
  }
}
</script>

<template>
  <div class="max-w-full relative flex-col flex">
    <lv-progress-spinner v-if="loading"  color="#38b2ac" />
    <AvatarImage v-else v-bind="{ src, email }" />
    <InputCopy class="mb-5" :value="src" />

    <Options
      :fallback.sync="fallback"
      :size.sync="size"
      :rating.sync="rating" />

    <GeneratorLink href="https://gravatar.com" />
  </div>
</template>
