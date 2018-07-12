import HashMixin from '../support/hash-mixin'
import InputCopy from '../components/input-copy.vue'
import ProgressBar from '../components/progress-bar.vue'
import AvatarImage from '../components/image.vue'
import { debounce } from 'lodash-es'

export default {
  mixins: [HashMixin()],
  components: { InputCopy, ProgressBar, AvatarImage },
  data: () => ({
    loading: true
  }),
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
