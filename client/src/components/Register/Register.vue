<style scoped src="./register.css"></style>

<template>
    <div class="log-in-hold-outer">
        <div class="log-in-hold-inner">
            <div class="log-in-form">
                <div class="form-row">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="e.g. example@email.com"
                        v-model="email"/>
                </div>
                <div class="form-row">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="password"
                        v-model="password"/>
                </div>
                <div class="form-row">
                    <button class="submit-btn" v-on:click="register">Register</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AuthenticationService from './../../services/authentication'

export default {
  name: 'log-in',
  data () {
    return {
      email: 'hrdavidl@gmail.com',
      password: 'test'
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })

        console.log(response.data)
      } catch (err) {
        console.log(err.response)

        // TODO: add error message to UI instead of using this alert
        if (err.response) {
          alert(err.response.data.error)
        }
      }
    }
  }
}
</script>
