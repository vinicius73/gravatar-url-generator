<script>
export default {
}
</script>

<template>
  <div class="flex">
    <router-link :to="{ name: 'gravatar' }" class="flex-1 text-center text-white font-bold py-2 px-4 rounded-l">
      Gravatar
    </router-link>
    <router-link :to="{ name: 'robohash' }" class="flex-1 text-center text-white font-bold py-2 px-4 rounded-r">
      Robohash
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  a {
    background-color: var(--color-green);
    text-decoration: none;
    &:hover, &.router-link-exact-active {
      background-color: var(--color-blue);
    }
  }
</style>
