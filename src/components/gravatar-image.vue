<script>
import md5 from 'blueimp-md5'
import Options from './gravatar-options/index.vue'
import { debounce } from 'lodash-es'

export default {
  name: 'gravatar-image',
  components: { Options },
  props: {
    email: String
  },
  data: () => ({
    loading: true,
    fallback: 'robohash',
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
  watch: {
    src: 'load'
  },
  methods: {
    copy (e) {
      const el = this.$refs.input
      el.focus()
      el.select()

      document.execCommand('copy')
        ? this.opened = false
        : console.warn('FAIL_TO_COPY') // eslint-disable-line no-console
    },
    load: debounce(function load () {
      this.loading = true
      const img = new Image()

      img.onload = () => {
        this.$nextTick(() => {
          this.loading = false
        })
      }

      img.src = this.src
    }, 600)
  },
  mounted () {
    this.load()
  }
}
</script>

<template>
  <div class="max-w-full relative">
    <div v-if="loading" id="progress-bar"></div>
    <img class="w-full max-w-full" v-bind="{ src, alt: email, title: email }">
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

<style lang="scss">
  #progress-bar {
    position: absolute;
    left:0;
    right: 0;
    top: 0;
    bottom: 0;

    width: 100%;
    height: 4px;

    background: linear-gradient(124deg, #009586, #1a2420, #009586, #2c3e50, #009586, #1a2420, #009586, #2c3e50);
    background-size: 900% 900%;

    animation: progress 9s ease infinite;
  }

  @keyframes progress {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 200%; }
    100% {background-position: 0% 100%; }
  }
</style>
