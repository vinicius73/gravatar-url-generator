<script>
import Base from '../base'
import Options from './options.vue'

export default {
  name: 'page-dicebear',
  title: 'DiceBear',
  extends: Base,
  components: { Options },
  data: () => ({
    size: '400'
  }),
  computed: {
    src () {
      const { hash, size } = this
      return `https://api.adorable.io/avatars/${size}/${hash}.png`
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
      :size.sync="size" />

    <GeneratorLink href="http://avatars.adorable.io/" />
  </div>
</template>
