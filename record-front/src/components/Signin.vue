<template>
  <div class="max-v-sm m-auto my-8">
    <div class="border p10 border-grey-light shadow rounded">
      <h3 class="text-2xl mb-6 text-grey-darkest">Sign In</h3>
      <form @submit.prevent="signin">
        <div class="text-red" v-if="error"></div>

        <div class="mb-6">
          <label for="email">E-mail Address</label>
          <input type="email" v-model="email" id="email">
        </div>

        <div class="mb-6">
          <label for="login">Login</label>
          <input type="login" v-model="login" id="login">
        </div>

        <div class="mb-6">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password">
        </div>

        <button type="submit" class="font-sans font-bold px-4 rounded cursor-pointer no-underline
        bg-green hover:bg-green-dark block w-full py-4 text-white items-center justify-center">Save</button>

        <div class="my-4">
          <router-link to="/signup">Sign Up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  created () {
    this.checkSignedIn()
  },
  updated () {
    this.checkSignedIn()
  },
  methods: {
    signin () {
      this.$https.plain.post('/signin') // нужно прописать в routes.rb путь + контроллер на сессию
    }
  }
}
</script>
