<script>
import InputEmail from './components/input-email.vue'
import PageFooter from './components/footer.vue'
import randomEmail from './support/random-email'
import Navigation from './components/navigation.vue'

export default {
  name: 'root',
  components: { InputEmail, Navigation, PageFooter },
  data: () => ({
    email: '',
    ready: false,
    loading: true
  }),
  methods: {
    randomEmail () {
      this.loading = true
      randomEmail()
        .then(email => {
          this.email = email
          this.loading = false
          this.ready = true
        })
    }
  },
  mounted () {
    this.randomEmail()
  }
}
</script>

<template>
  <div id="app" class="container ml-auto mr-auto">
    <div class="flex h-screen w-full flex-wrap">
      <div class="p-2 ml-auto mr-auto">
        <div class="bg-white shadow-md rounded px-4 pt-3 pb-4 mb-4 main-container">
          <h1 class="text-3xl text-center mb-5 text-indigo-darkest">
            Avatar URL Generator
          </h1>
          <div class="mb-4">
            <InputEmail @call:generate="randomEmail" v-bind="{ loading }" v-model="email" />
          </div>
          <Navigation class="mb-4" />
          <div class="mb-4" v-if="ready">
            <router-view v-bind="{ email }" />
          </div>
        </div>
        <PageFooter class="text-center text-white text-xs mb-5" />
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --color-green: #009586;
  --color-blue: #2c3e50;
  --color-dark: #1a2420;
}
body {
  background-color: var(--color-green);
  font-family: 'Ubuntu', sans-serif;
}
.main-container {
  max-width: 400px;
}
</style>
