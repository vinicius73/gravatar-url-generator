<script>
export default {
  name: 'inpu-email',
  props: {
    value: String
  }
}
</script>

<template>
  <input
    class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight text-2xl text-center"
    type="text"
    placeholder="Gravatar e-mail"
    v-bind="{ value }"
    @input="event => $emit('input', event.target.value)">
</template>

<style lang="css">
</style>
