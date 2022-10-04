<script>
import LvDropdown from 'lightvue/dropdown'
import { makeOptions } from '../../support/options'

const sizes = makeOptions(['200', '400', '600', '800'])

export default {
  components: { LvDropdown },
  sizes,
  props: {
    size: String
  },
  data: function () {
    return {
      selectedSize: { value: this.size }
    }
  }
}
</script>

<template>
  <div class="flex flex-wrap -mx-3 uppercase text-grey-darker text-xs">
    <div class="w-full md:w-1/3 px-3 md:mb-0 mb-6">
      <lv-dropdown  v-model="selectedSize" label="size" :options="$options.sizes" optionLabel="value" @change="value => $emit('update:size', value.value.value)"/>
    </div>
  </div>
</template>
