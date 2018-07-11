<script>
import VSelect from './select.vue'
import { fallbacks, sizes, ratings } from './options'

export default {
  name: 'gravatar-options',
  components: { VSelect },
  fallbacks,
  sizes,
  ratings,
  props: ['rating', 'size', 'fallback']
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
    <v-select class="w-full md:w-1/3 px-3 mb-6 md:mb-0"
      :options="$options.fallbacks"
      name="fallback"
      label="default"
      :value="fallback"
      @input="value => $emit('update:fallback', value)" />
    <v-select class="w-full md:w-1/3 px-3 mb-6 md:mb-0"
      :options="$options.ratings"
      name="ratings"
      label="rating"
      :value="rating"
      @input="value => $emit('update:rating', value)" />
  </div>
</template>
