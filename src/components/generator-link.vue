<script>
export default {
  name: 'ganerator-link',
  props: {
    href: String
  }
}
</script>

<template lang="html">
  <div class="text-center text-sm">
    <a target="_blank" :href="href">{{ href }}</a>
  </div>
</template>

<style lang="scss" scoped>
  div {
    margin-top: 20px;
  }
  a {
    color: #aaa;
    text-decoration: none;
  }
</style>
