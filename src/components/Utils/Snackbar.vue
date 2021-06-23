<!-- @format -->

<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="show" :color="color" :timeout="timeout">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="show = false"
          >Close</v-btn
        >
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  created: function () {
    this.$store.watch(
      (state) => state.utils.snackbarText,
      () => {
        const msg = this.$store.state.utils.snackbarText;
        if (msg !== "") {
          this.show = true;
          this.text = this.$store.state.utils.snackbarText;
          this.color = this.$store.state.utils.snackbarColor;
          this.$store.dispatch("utils/closeSnackbar");
        }
      }
    );
  },
  data: () => ({
    show: false,
    text: "",
    color: "success",
    timeout: 3000,
  }),
};
</script>

<style></style>
