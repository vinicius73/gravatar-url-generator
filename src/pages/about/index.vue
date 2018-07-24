<script>
import AvatarImage from '../../components/image.vue'
import Links from './liks.vue'

export default {
  name: 'page-about',
  title: 'Vinicius Reis',
  components: { AvatarImage, Links }
}
</script>

<template>
  <div>
    <AvatarImage
      src="https://gravatar.com/avatar/f803c45d62a468e0cb990398c004bd3e?s=600&d=robohash&r=x" />

    <p>I am Full-Stack Severino-Developer, married and father a beautiful daughter. </p>
    <p>I like movies, books, manga, comics, games...</p>
    <p>That is, I like more things than I have time to do them.</p>
    <p>I record <a target="_blank" href="https://www.youtube.com/channel/UCTluPqMkm90zyw6mCde561A">videos</a> for  <a target="_blank" href="https://blog.codecasts.com.br">CodeCasts</a> and work on <a target="_blank" href="https://decision6.com">Decision6</a> as an Application Engineer.</p>

    <Links />
  </div>
</template>

<style scoped>
  a {
    color: #000
  }
</style>
