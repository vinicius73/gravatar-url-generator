<script>
import Base from '../base'
import Options from './options/index.vue'

export default {
  name: 'page-dicebear',
  title: 'DiceBear',
  extends: Base,
  components: { Options },
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
  <div class="max-w-full relative">
    <ProgressBar v-if="loading" />
    <AvatarImage v-bind="{ src, email }" />
    <InputCopy class="mb-5" :value="src" />
    <Options
      :sprite.sync="sprite" />

    <GeneratorLink href="https://avatars.dicebear.com" />
  </div>
</template>
