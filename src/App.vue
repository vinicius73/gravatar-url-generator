<script>
import InputEmail from './components/input-email.vue'
import GravatarImage from './components/gravatar-image.vue'
import PageFooter from './components/footer.vue'
import randomEmail from './support/random-email'

export default {
  name: 'root',
  components: { InputEmail, GravatarImage, PageFooter },
  data: () => ({
    email: '',
    loading: true
  }),
  mounted () {
    randomEmail()
      .then(email => {
        this.email = email
        this.loading = false
      })
  }
}
</script>

<template>
  <div id="app" class="container ml-auto mr-auto">
    <div class="flex h-screen w-full flex-wrap">
      <div class="p-2 ml-auto mr-auto">
        <div class="bg-white shadow-md rounded px-4 pt-3 pb-4 mb-4 main-container">
          <h1 class="text-3xl text-center mb-5 text-indigo-darkest">
            Gravatar URL Generator
          </h1>
          <div class="mb-4">
            <InputEmail v-model="email" />
          </div>
          <div class="mb-4" v-if="!loading">
            <GravatarImage v-bind="{ email }" />
          </div>
        </div>
        <PageFooter class="text-center text-white text-xs mb-5" />
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #009586;
  font-family: 'Ubuntu', sans-serif;
}
.main-container {
  max-width: 400px;
}
</style>
