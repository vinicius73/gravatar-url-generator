<script>
import VSelect from '../../../components/v-select.vue'
import { sets, bgsets, sizes } from './options'

export default {
  components: { VSelect },
  sets,
  bgsets,
  sizes,
  props: {
    set: String,
    size: String,
    bgset: String
  }
}
</script>

<template>
  <div class="flex flex-wrap -mx-3 mb-2">
    <v-select class="w-full md:w-1/3 px-3 mb-6 md:mb-0"
      :options="$options.sets"
      name="set"
      label="set"
      :value="set"
      @input="value => $emit('update:set', value)" />
    <v-select class="w-full md:w-1/3 px-3 mb-6 md:mb-0"
      :options="$options.bgsets"
      name="bg"
      label="bg"
      :value="bgset"
      @input="value => $emit('update:bgset', value)" />
    <v-select class="w-full md:w-1/3 px-3 mb-6 md:mb-0"
      :options="$options.sizes"
      name="size"
      label="size"
      :value="size"
      @input="value => $emit('update:size', value)" />
  </div>
</template>
