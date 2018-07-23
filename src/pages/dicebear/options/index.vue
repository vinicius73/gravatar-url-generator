<script>
import VSelect from '../../../components/v-select.vue'
import { sprites } from './options'

export default {
  components: { VSelect },
  sprites,
  props: {
    sprite: String
  }
}
</script>

<template>
  <div class="flex flex-wrap -mx-3 mb-2">
    <v-select class="w-full md:w-1/3 px-3 mb-6 md:mb-0"
      :options="$options.sprites"
      name="sprite"
      label="sprite"
      :value="sprite"
      @input="value => $emit('update:sprite', value)" />
  </div>
</template>
