<script>
import md5 from 'blueimp-md5'
import Options from './options/index.vue'
import InputCopy from '../../components/input-copy.vue'
import ProgressBar from '../../components/progress-bar.vue'
import AvatarImage from '../../components/image.vue'
import { debounce } from 'lodash-es'

export default {
  name: 'gravatar-image',
  components: { Options, InputCopy, ProgressBar, AvatarImage },
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
    <ProgressBar v-if="loading" />
    <AvatarImage v-bind="{ src, email }" />
    <InputCopy :value="src" />

    <br>
    <br>

    <Options
      :fallback.sync="fallback"
      :size.sync="size"
      :rating.sync="rating" />
  </div>
</template>
