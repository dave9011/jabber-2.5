<template>
    <div>
        <div>
            <v-form ref="registrationForm" class="log-in-form elevation-4 pa-4">
                <v-text-field
                    label="Email"
                    v-model="email"
                    hint="e.g. example@email.com"
                    :rules="emailRules"
                    type="email"
                ></v-text-field>
                <v-text-field
                    label="Password"
                    v-model="password"
                    :rules="passwordRules"
                    type="password"
                ></v-text-field>
                <v-btn
                    class="submit-btn"
                    @click="register">
                    Register
                </v-btn>
            </v-form>
        </div>
    </div>
</template>

<script>
import AuthenticationService from './../../services/authentication'

export default {
  name: 'log-in',
  data () {
    return {
      email: null,
      password: null,
      emailRules: [
        (v) => !!v || 'Email is required'
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length >= 8 && v.length <= 32) || 'Password must be 8-32 characters a-z, A-Z, 0-9'
      ]
    }
  },
  methods: {
    async register () {
      if (!this.$refs.registrationForm.validate()) {
        return
      }

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
