<script>
import LvDropdown from 'lightvue/dropdown'
import { fallbacks, sizes, ratings } from './options'

export default {
  name: 'gravatar-options',
  components: { LvDropdown },
  fallbacks,
  sizes,
  ratings,
  props: ['rating', 'size', 'fallback'],
  data: function () {
    return {
      selectedSize: { value: this.size },
      selectedFallBack: { value: this.fallback },
      selectedRating: { value: this.rating }
    }
  }
}
</script>

<template>
  <div class="flex flex-wrap -mx-3 mb-2 uppercase text-grey-darker text-xs mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <lv-dropdown  v-model="selectedSize" label="size" :options="$options.sizes" optionLabel="value" @change="value => $emit('update:size', value.value.value)"/>
    </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <lv-dropdown  v-model="selectedFallBack" label="default" :options="$options.fallbacks" optionLabel="value" @change="value => $emit('update:fallback', value.value.value)"/>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <lv-dropdown  v-model="selectedRating" label="rating" :options="$options.ratings" optionLabel="value" @change="value => $emit('update:rating', value.value.value)"/>
      </div>
  </div>
</template>
