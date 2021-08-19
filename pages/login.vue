<template>
    <div class="container">
      <v-card class="px-12 pb-12 pt-6 mx-auto product__panel" max-width="500" flat>
        <div class="px-6 mx-6">
          <div class="text-center">
            <h1 class="font-weight-bold">
                Login to Vici
            </h1>
          </div>
          <div class="pt-6">
            <v-btn
                rounded
                outlined
                class="text-capitalize"
                block
            >
              <v-avatar size="17" class="mr-4">
                <v-img src="/img/google-logo.png"></v-img>
              </v-avatar>
                Use Google Account
            </v-btn>
            <v-btn
                rounded
                color="#006699"
                class="text-capitalize white--text mt-4"
                block
                depressed
            >
              <v-avatar size="17" class="mr-4" tile color="transparent">
                <v-img src="/img/linkedin-logo.png"></v-img>
              </v-avatar>
                Use LinkedIn Account
            </v-btn>
          </div>
          <div class="or__divider--container mt-5">
            <div class="text-center mx-auto white or__divider--line caption">OR</div>
          </div>
          <div>
            <v-text-field
              v-model="email"
              color="primary"
              placeholder="Your Email Address"
              hide-details
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              v-model="password"
              color="primary"
              type="password"
              placeholder="Password"
              @keyup.enter="login"
            ></v-text-field>
          </div>
          <div>
            <v-btn
                rounded
                color="primary"
                class="text-capitalize white--text mt-4"
                block
                depressed
                @click="login"
                :loading="loading"
            >
              Login
            </v-btn>
          </div>
          <div class="text-center mt-6"><h5>Forgot Password?</h5></div>
          <div class="text-center mt-3 caption">
            Don't have an account?
            <a
              href="#"
              class="primary--text font-weight-bold text-decoration-none"
              @click="$router.push('/signup')"
            >Sign up</a>
          </div>
        </div>
      </v-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    async login () {
      const details = {
        email: this.email,
        password: this.password
      }
      this.loading = true
      try {
        await this.$auth.loginWith('local', {
          data: details
        })
        const notif = {
          type: 'account',
          display: true,
          color: 'primary',
          message: 'Thank you for signing in..'
        }
        this.$store.dispatch('addNotifications', notif)
        this.loading = false
        const params = {
          api_id: this.$auth.user.id,
          customer_id: this.$auth.user.id
        }
        this.$store.dispatch('getCartProducts', params)
      } catch (error) {
        console.log(error)
        const notif = {
          type: 'account',
          display: true,
          color: 'error',
          message: 'There was an issue signing in. Please try again.'
        }
        this.$store.dispatch('addNotifications', notif)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
}
.or__divider--container {
  position: relative;
}
.or__divider--container::before {
  background: #596366;
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0;
  bottom: 0;
  top: 11px;
}
.or__divider--line {
  width: 50px;
  z-index: 23;
  position: relative;
}
</style>
