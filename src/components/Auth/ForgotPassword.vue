<template>
  <v-dialog v-model="dialog" max-width="450">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="#592A65" dark v-bind="attrs" v-on="on" text>
        Click here
      </v-btn>
    </template>
    <v-card>
      <v-row justify="center" align="center">
        Forgot password
      </v-row>
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="12">
            <v-text-field
              :rules="emailRules"
              v-model="username"
              label="Username"
            ></v-text-field>
          </v-col>
        </v-row>
        <template v-if="emailSent">
          <v-row justify="center" align="center">
            <v-col cols="12">
              <v-text-field
                :rules="rules"
                v-model="code"
                label="Code"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-col cols="12">
              <v-text-field
                :rules="rules"
                v-model="newPassword"
                type="password"
                label="New password"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-col cols="12">
              <v-text-field
                :rules="rules"
                v-model="newPassword2"
                type="password"
                label="Comfirm new password"
              ></v-text-field>
            </v-col>
          </v-row>
        </template>
      </v-container>
      <v-card-actions>
        <template v-if="!emailSent">
          <v-row justify="space-around" align="center">
            <v-btn outlined rounded text @click="resetPasswordLink">
              Send me link
            </v-btn>
          </v-row>
        </template>
        <template v-else>
          <v-row justify="space-around" align="center">
            <v-btn outlined rounded text @click="changePassword">
              Change password
            </v-btn>
            <v-btn outlined rounded text @click="resetPasswordLink">
              Re-send link
            </v-btn>
          </v-row>
        </template>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    username: "",
    rules: [
      value => !!value || "Required.",
      value => (value || "").length <= 20 || "Max 20 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    dialog: null,
    code: "",
    newPassword: "",
    newPassword2: "",
    emailSent: false
  }),
  computed() {},
  methods: {
    resetPasswordLink() {
      var user = {};
      user.username = this.username;
      this.$store.dispatch("auth/forgotPasswordLink", user);
      this.emailSent = true;
    },
    changePassword() {
      var user = {};
      user.username = this.username;
      user.code = this.code;
      user.password = this.newPassword;
      user.passwordComfirm = this.newPassword2;
      this.$store.dispatch("auth/changePassword", user);
    }
  }
};
</script>

<style></style>
