<script>
export default {
  name: 'inpu-email',
  props: {
    value: String,
    loading: Boolean
  },
  methods: {
    generateEmail () {
      this.$emit('call:generate')
    }
  }
}
</script>

<template>
  <div class="flex items-center">
    <input
      class="appearance-none bg-transparent focus:outline-none border-none w-full text-grey-darker mr-3 py-2 px-3 text-2xl leading-tight"
      type="email"
      placeholder="Gravatar e-mail"
      :disabled="loading"
      v-bind="{ value }"
      @input="event => $emit('input', event.target.value)">
    <a class="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded cursor-pointer"
      title="Ganerate e-mail"
      @click="generateEmail">
      <i class="fas fa-sync-alt" :class="{ spin: loading }"></i>
    </a>
  </div>
</template>

<style scoped>
.spin {
  animation: spin 4s infinite linear
}

@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
</style>
