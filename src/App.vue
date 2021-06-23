<!-- @format -->

<template>
  <div>
    <v-app>
      <template v-if="!isLoggedIn">
        <v-container fill-height>
          <Auth />
        </v-container>
      </template>
      <template v-else>
        <Navigation />
        <v-main> <router-view></router-view> </v-main>
      </template>
      <Snackbar />
    </v-app>
  </div>
</template>

<script>
import Navigation from "@/components/Utils/Navigation";
import Auth from "@/views/Auth";
import Snackbar from "@/components/Utils/Snackbar";

export default {
  name: "App",
  components: {
    Navigation,
    Auth,
    Snackbar,
  },
  created() {
    this.$store.dispatch("admin/getAllCategorySubType");
  },
  computed: {
    isLoggedIn() {
      var loggedIn = this.$store.getters["auth/isLoggedIn"];
      return loggedIn;
    },
  },
  data: () => ({}),
};
</script>
