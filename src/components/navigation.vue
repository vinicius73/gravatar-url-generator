<script>
export default {
}
</script>

<template>
  <div class="flex">
    <router-link :to="{ name: 'gravatar' }" class="flex-1 text-center text-white font-bold py-2 px-4 rounded-l">
      Gravatar
    </router-link>
    <router-link :to="{ name: 'robohash' }" class="flex-1 text-center text-white font-bold py-2 px-4">
      RoboHash
    </router-link>
    <router-link :to="{ name: 'adorable' }" class="flex-1 text-center text-white font-bold py-2 px-4">
      Adorable
    </router-link>
    <router-link :to="{ name: 'dicebear' }" class="flex-1 text-center text-white font-bold py-2 px-4 rounded-r">
      DiceBear
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  a {
    background-color: var(--color-green);
    text-decoration: none;
    font-size: 0.9em;
    &:hover, &.router-link-exact-active {
      background-color: var(--color-blue);
    }
  }
</style>
