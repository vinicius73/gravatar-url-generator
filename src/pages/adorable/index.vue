<script>
import Base from '../base'
import Options from './options.vue'
import LvProgressSpinner from 'lightvue/progress-spinner'

export default {
  name: 'page-dicebear',
  title: 'DiceBear',
  extends: Base,
  components: { Options, LvProgressSpinner },
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
  <div class="max-w-full relative flex-col flex">
    <lv-progress-spinner v-if="loading"  color="#38b2ac" />
    <AvatarImage v-else v-bind="{ src, email }" />
    <InputCopy class="mb-5" :value="src" />
    <Options
      :size.sync="size" />

    <GeneratorLink href="http://avatars.adorable.io/" />
  </div>
</template>
