<script>
import Base from '../base'
import Options from './options'
import LvProgressSpinner from 'lightvue/progress-spinner'

export default {
  name: 'page-robohash',
  title: 'RoboHash',
  components: { Options, LvProgressSpinner },
  extends: Base,
  data: () => ({
    set: 'set4',
    bgset: '',
    size: '400'
  }),
  computed: {
    src () {
      const { hash, set, bgset, size } = this
      return `https://robohash.org/${hash}?set=${set}&bgset=${bgset}&size=${size}x${size}`
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
      :set.sync="set"
      :size.sync="size"
      :bgset.sync="bgset" />

    <GeneratorLink href="https://robohash.org" />
  </div>
</template>
