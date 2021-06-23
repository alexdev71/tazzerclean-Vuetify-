<template>
  <v-dialog v-model="dialog" max-width="350">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Register
      </v-btn>
    </template>
    <v-card>
      <v-row justify="center" align="center">
        Admin Register
      </v-row>
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="username"
              label="Username"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="password"
              label="Password"
              type="password"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-row justify="space-around" align="center">
          <v-btn outlined rounded text @click="register">
            Register
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: "",
    rules: [
      value => !!value || "Required.",
      value => (value || "").length <= 20 || "Max 20 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    dialog: null
  }),
  methods: {
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
