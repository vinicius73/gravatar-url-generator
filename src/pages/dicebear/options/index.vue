<script>
import LvDropdown from 'lightvue/dropdown'
import { sprites } from './options'

export default {
  components: { LvDropdown },
  sprites,
  props: {
    sprite: String
  },
  data: function () {
    return {
      selectedSprite: { value: this.sprite }
    }
  }
}
</script>

<template>
  <div class="flex flex-wrap -mx-3 uppercase text-grey-darker text-xs">
    <div class="w-full md:w-1/3 px-3 md:mb-0 mb-6">
      <lv-dropdown  v-model="selectedSprite " label="SPRITE" :options="$options.sprites" optionLabel="value" @change="value => $emit('update:sprite', value.value.value)"/>
    </div>
  </div>
</template>
