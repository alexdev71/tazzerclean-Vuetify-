<template>
  <v-container fluid>
    <v-row class="mb-6" no-gutters justify="center" align="center">
      <v-col md="4" lg="3" xl="3">
        <v-card class="mx-auto cards" width="250" @click="goToUsers" style="margin: 10px">
          <v-img
            :src="require('@/assets/users.jpg')"
            contain
            height="150px"
          ></v-img>
          <v-card-title>
            <v-row justify="center" align="center">
              <h3>Users ({{ stats.userCount }})</h3>
            </v-row>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col md="4" lg="3" xl="3">
        <v-card class="mx-auto cards" width="250" @click="goToProfessionals" style="margin: 10px">
          <v-img
            :src="require('@/assets/professionals.jpg')"
            contain
            height="150px"
          ></v-img>
          <v-card-title>
            <v-row justify="center" align="center">
              <h3>Professionals ({{ stats.professionalsCount }})</h3>
            </v-row>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col md="4" lg="3" xl="3">
        <v-card class="mx-auto cards" width="250" @click="goToCategories" style="margin: 10px">
          <v-img
            :src="require('@/assets/categories.jpg')"
            contain
            height="150px"
          ></v-img>
          <v-card-title>
            <v-row justify="center" align="center">
              <h3>Categories ({{ stats.categoriesCount }})</h3>
            </v-row>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mb-6" no-gutters justify="center" align="center">
      <v-col md="4" lg="3" xl="3" >
        <v-card class="mx-auto cards" width="250" @click="goToZipCodes" style="margin: 10px">
          <v-img
            :src="require('@/assets/zipcodes.jpg')"
            contain
            height="150px"
          ></v-img>
          <v-card-title>
            <v-row justify="center" align="center">
              <h3>Post Code/Zip Code ({{ stats.zipCodesCount }})</h3>
            </v-row>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col md="4" lg="3" xl="3">
        <v-card class="mx-auto cards" width="250" @click="goToOrders" style="margin: 10px">
          <v-img
            :src="require('@/assets/orders.jpg')"
            contain
            height="150px"
          ></v-img>
          <v-card-title>
            <v-row justify="center" align="center">
              <h3>Orders ({{ stats.ordersCount }})</h3>
            </v-row>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col md="4" lg="3" xl="3">
        <v-card class="mx-auto cards" width="250" @click="goToOrders" style="margin: 10px">
          <v-img
            :src="require('@/assets/completedOrders.jpg')"
            contain
            height="150px"
          ></v-img>
          <v-card-title>
            <v-row justify="center" align="center">
              <h3>Completed Orders ({{ stats.completedOrdersCount }})</h3>
            </v-row>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mb-6" no-gutters justify="center" align="center">
      <v-col md="4" lg="3" xl="3">
        <v-card class="mx-auto cards" width="250" @click="goToPartners" style="margin: 10px">
          <v-img
            :src="require('@/assets/partners.jpg')"
            contain
            height="150px"
          ></v-img>
          <v-card-title>
            <v-row justify="center" align="center">
              <h3>Partners ({{ stats.partnersCount }})</h3>
            </v-row>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col md="4" lg="4" xl="4">
        <v-card class="mx-auto cards" width="250" @click="goToOrders" style="margin: 10px">
          <v-img
            :src="require('@/assets/cancelled.jpg')"
            contain
            height="150px"
          ></v-img>
          <v-card-title>
            <v-row justify="center" align="center">
              <h3>Canceled Orders ({{ stats.canceledOrdersCount }})</h3>
            </v-row>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("common/getDashboardStats");
  },
  computed: {
    stats() {
      return this.$store.getters["common/dashboardStats"];
    }
  },
  data: () => ({}),
  methods: {
    goToUsers() {
      this.$router.push("/users");
    },
    goToProfessionals() {
      this.$router.push("/professionals");
    },
    goToCategories() {
      this.$router.push("/categories");
    },
    goToZipCodes() {
      this.$router.push("/zip-codes");
    },
    goToOrders() {
      this.$router.push("/orders");
    },
    goToPartners() {
      this.$router.push("/partners");
    }
  }
};
</script>
