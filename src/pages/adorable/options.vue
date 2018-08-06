<script>
import VSelect from '../../components/v-select.vue'
import { makeOptions } from '../../support/options'

const sizes = makeOptions(['200', '400', '600', '800'])

export default {
  components: { VSelect },
  sizes,
  props: {
    size: String
  }
}
</script>

<template>
  <div class="flex flex-wrap -mx-3 mb-2">
    <v-select class="w-full md:w-1/3 px-3 mb-6 md:mb-0"
      :options="$options.sizes"
      name="size"
      label="size"
      :value="size"
      @input="value => $emit('update:size', value)" />
  </div>
</template>
