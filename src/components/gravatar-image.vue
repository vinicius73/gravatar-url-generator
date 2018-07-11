<script>
import md5 from 'blueimp-md5'
import Options from './gravatar-options/index.vue'

export default {
  name: 'gravatar-image',
  components: { Options },
  props: {
    email: String
  },
  data: () => ({
    fallback: 'monsterid',
    rating: 'x',
    size: '400'
  }),
  computed: {
    hash () {
      return md5(this.email)
    },
    src () {
      const { hash, fallback, size, rating } = this
      return `//gravatar.com/avatar/${hash}?s=${size}&d=${fallback}&r=${rating}`
    }
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
  <div>
    <img class="w-full" v-bind="{ src, alt: email, title: email }">
    <div class="flex items-center border-b border-b-2 border-teal py-2">
      <input
        readonly
        class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight"
        ref="input"
        type="text"
        v-bind="{ value: src }">
      <a class="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded cursor-pointer"
        @click="copy">
        <i class="fas fa-copy"></i>
      </a>
    </div>

    <br>
    <br>

    <Options
      :fallback.sync="fallback"
      :size.sync="size"
      :rating.sync="rating" />
  </div>
</template>
