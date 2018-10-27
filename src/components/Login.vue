<template>
  <div class="loginView">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="cyan">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="person"
                  name="login"
                  v-model="email"
                  label="Email"
                  type="email"
                ></v-text-field>
                <v-text-field
                  prepend-icon="lock"
                  name="password"
                  v-model="password"
                  label="Password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="cyan" dark @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login () {
      const token = AuthenticationService.login({
        email: this.email,
        password: this.password
      })
      if (token == null) { return }
      this.$store.dispatch('setToken', token)
      this.$store.dispatch('setUser', this.email)
      this.$router.push({
        name: 'MapView'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
