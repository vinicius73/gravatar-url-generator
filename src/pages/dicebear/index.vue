<script>
import Base from '../base'
import Options from './options/index.vue'
import LvProgressSpinner from 'lightvue/progress-spinner'

export default {
  name: 'page-dicebear',
  title: 'DiceBear',
  extends: Base,
  components: { Options, LvProgressSpinner },
  data: () => ({
    sprite: 'female'
  }),
  computed: {
    src () {
      const { hash, sprite } = this
      return `https://avatars.dicebear.com/v2/${sprite}/${hash}.svg`
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
      :sprite.sync="sprite" />

    <GeneratorLink href="https://avatars.dicebear.com" />
  </div>
</template>
