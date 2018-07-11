<script>
import InputEmail from './components/input-email.vue'
import GravatarImage from './components/gravatar-image.vue'

export default {
  name: 'app',
  components: { InputEmail, GravatarImage },
  data: () => ({
    email: 'luiz.vinicius73@gmail.com'
  })
}
</script>

<template>
  <div id="app" class="container">
    <div class="flex h-screen w-full content-center flex-wrap">
      <div class="p-2 ml-auto mr-auto self-center">
        <div class="bg-white max-w-5xl shadow-md rounded px-4 pt-3 pb-4 mb-4">
          <div class="mb-4">
            <InputEmail v-model="email" />
          </div>
          <div class="mb-4">
            <GravatarImage v-bind="{ email }" />
          </div>
        </div>
        <p class="text-center text-grey text-xs">
          ©2018 Vinicius Reis
        </p>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  background-color: #009586;
}
</style>
