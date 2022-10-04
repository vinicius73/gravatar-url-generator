<script>
import LvDropdown from 'lightvue/dropdown'
import { sets, bgsets, sizes } from './options'

export default {
  components: { LvDropdown },
  sets,
  bgsets,
  sizes,
  props: {
    set: String,
    bgset: String,
    size: String
  },
  data: function () {
    return {
      selectedSet: this.set,
      selectedBgset: this.bgset,
      selectedSize: { value: this.size }
    }
  },
  methods: {
    updateValue (e) {
      console.log(e)
      // this.$emit('update:size', e.value.value)
    }
  }
}
</script>

<template>
  <div class="flex flex-wrap -mx-3 uppercase text-grey-darker text-xs">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <lv-dropdown  v-model="selectedSet" label="set" :options="$options.sets" optionLabel="label" optionValue="value"  @input="value => $emit('update:set', value)"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <lv-dropdown  v-model="selectedBgset" label="bg" :options="$options.bgsets" optionLabel="label" optionValue="value" @input="value => $emit('update:bgset', value)"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <lv-dropdown  v-model="selectedSize" label="size" :options="$options.sizes" optionLabel="value" @input="value => $emit('update:size', value.value.value)"/>
    </div>
  </div>
</template>
