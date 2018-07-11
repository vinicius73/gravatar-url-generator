<script>
export default {
  name: 'page-footer',
  version: process.env.VUE_APP_VERSION
}
</script>

<template>
  <p class="text-lg">
    Made with
    <a href="https://vuejs.org" class="no-underline" target="_blank">
      <i title="Vue.js" aria-label="Vue.js" class="fab fa-vuejs"></i>
    </a>
    by
    <a class="no-underline" target="_blank" href="https://github.com/vinicius73">@vinicius73</a>
    <br>
    <a target="_blank" class="text-sm" href="https://github.com/vinicius73/gravatar-url-generator">
      fork it <i class="fas fa-code-branch"></i> v{{ $options.version }}
    </a>
  </p>
</template>

<style scoped>
  p {
    font-family: 'Ubuntu Mono', monospace;
  }
  a, p {
    color: #fff;
    text-decoration: none;
  }
</style>
