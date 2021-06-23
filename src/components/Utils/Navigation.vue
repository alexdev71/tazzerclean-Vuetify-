<!-- @format -->

<template>
  <div>
    <v-app-bar app clipped-right color="#001C85" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn text>RELEASE 1.0.0</v-btn>
      <v-btn text @click="logout">LOGOUT</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app color="#001C85" dark>
      <v-list shaped densed>
        <v-list-item @click="toDashboard" id="logo">
          <v-list-item-title>
            <v-row justify="center" align="center">
              <v-col cols="auto">
                <v-img
                  :src="require('@/assets/tazzerlogo.png')"
                  contain
                  width="100px"
                ></v-img>
              </v-col>
            </v-row>
          </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item @click="toDashboard">
          <v-list-item-action>
            <v-icon>fas fa-braille</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="toZipcodes">
          <v-list-item-action>
            <v-icon>fas fa-globe</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Zip codes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="toCategories">
          <v-list-item-action>
            <v-icon>fas fa-chart-pie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Categories</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="toSubTypes">
          <v-list-item-action>
            <v-icon>fas fa-chart-pie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sub types</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="toServices">
          <v-list-item-action>
            <v-icon>fas fa-tools</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Services</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="toProfessionals">
          <v-list-item-action>
            <v-icon>fas fa-briefcase</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Professionals</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="toPartners">
          <v-list-item-action>
            <v-icon>fas fa-handshake</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Partners</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="toUsers">
          <v-list-item-action>
            <v-icon>fas fa-users</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Users</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="toOrders">
          <v-list-item-action>
            <v-icon>fas fa-funnel-dollar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Orders</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="toRevenue">
          <v-list-item-action>
            <v-icon>fas fa-money-bill-wave</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Revenue</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="toReports">
          <v-list-item-action>
            <v-icon>fas fa-flag-checkered</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Reports</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="toContracts">
          <v-list-item-action>
            <v-icon>fas fa-file-signature</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contracts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-spacer></v-spacer>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
  methods: {
    toDashboard() {
      this.$router.push("/dashboard").catch(() => {});
    },
    toZipcodes() {
      this.$router.push("/zip-codes").catch(() => {});
    },
    toCategories() {
      this.$router.push("/categories").catch(() => {});
    },
    toSubTypes() {
      this.$router.push("/subtypes").catch(() => {});
    },
    toServices() {
      this.$router.push("/services").catch(() => {});
    },
    toProfessionals() {
      this.$router.push("/professionals").catch(() => {});
    },
    toPartners() {
      this.$router.push("/partners").catch(() => {});
    },
    toUsers() {
      this.$router.push("/users").catch(() => {});
    },
    toOrders() {
      this.$router.push("/orders").catch(() => {});
    },
    toRevenue() {
      this.$router.push("/revenue").catch(() => {});
    },
    toReports() {
      this.$router.push("/reports").catch(() => {});
    },
    toContracts() {
      this.$router.push("/contracts").catch(() => {});
    },
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/").catch(() => {});
    },
  },
};
</script>

<style></style>
