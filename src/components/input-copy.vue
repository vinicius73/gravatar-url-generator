<script>
export default {
  name: 'input-copy',
  props: {
    value: String
  },
  methods: {
    copy (e) {
      const el = this.$refs.input
      el.focus()
      el.select()

      document.execCommand('copy')
        ? this.opened = false
        : console.warn('FAIL_TO_COPY') // eslint-disable-line no-console
    }
  }
}
</script>

<template>
  <div class="flex items-center border-b border-b-2 border-teal py-2">
    <input
      readonly
      class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight"
      ref="input"
      type="text"
      v-bind="{ value }">
    <a class="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded cursor-pointer"
      @click="copy">
      <i class="fas fa-copy"></i>
    </a>
  </div>
</template>
