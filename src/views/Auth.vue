<template>
  <v-row justify="center" align="center">
    <v-card class="mx-auto" outlined width="400" rounded="">
      <v-row justify="center" align="center" style="margin-top: 20px">
        <v-img
          :src="require('@/assets/tazzerlogo.png')"
          contain
          aspect-ratio="6"
        ></v-img>
      </v-row>
      <template v-if="isForgotPassword"></template>
      <template v-else>
        <v-row justify="center" align="center">
          <h4>Tazzer Clean Professional Login.</h4>
        </v-row>
        <v-container fluid>
          <v-row justify="center" align="center">
            <v-col cols="12">
              <v-text-field
                :rules="emailRules"
                v-model="username"
                label="Email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                :rules="rules"
                v-model="password"
                label="Password"
                type="password"
                @keydown.enter="login"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-container fluid>
            <v-row justify="center" align="center">
              <v-btn
                color="#592A65"
                dark
                @click="login"
                :loading="loginButtonLoading"
              >
                Login
              </v-btn>
            </v-row>
            <v-row justify="center" align="center" style="padding: 20px 10px">
              Forgot your password?
            </v-row>
            <v-row justify="center" align="center">
              <ForgotPassword />
            </v-row>
          </v-container>
        </v-card-actions>
      </template>
    </v-card>
  </v-row>
</template>

<script>
import ForgotPassword from "@/components/Auth/ForgotPassword";
export default {
  name: "Home",
  components: {
    ForgotPassword
  },
  computed: {
    isForgotPassword() {
      var route = this.$route.params;
      if (route.id === undefined) return false;
      return true;
    }
  },
  data: () => ({
    username: "",
    password: "",
    rules: [
      value => !!value || "Required.",
      value => (value || "").length <= 40 || "Max 40 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    loginButtonLoading: false
  }),
  methods: {
    login() {
      this.loginButtonLoading = true;
      var user = {};
      user.username = this.username;
      user.password = this.password;
      this.$store.dispatch("auth/login", user);
      this.loginButtonLoading = false;
    },
    register() {
      var user = {};
      user.username = this.username;
      user.password = this.password;
      user.role = 3;
      this.$store.dispatch("auth/register", user);
    }
  }
};
</script>
