<!-- @format -->

<template>
  <v-container fluid>
    <v-breadcrumbs :items="breadcrumbItems"></v-breadcrumbs>
    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="categories"
          :items-per-page="15"
          :search="search"
          class="elevation-3"
          :loading="loading"
          loading-text="Loading...please wait"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>Categories</v-toolbar-title>
              <v-divider
                class="mex-4"
                inset
                vertical
                style="margin-left:5px;"
              ></v-divider>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Find by name"
                single-line
                hide-details
                style="margin-right: 15px;"
              ></v-text-field>
              <AddCategory />
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-row justify="center" align="center">
              <EditCategory :category="item" />
              <v-btn color="#592A65" dark icon @click="deletesubCategory(item)">
                <v-icon color="black" small>fas fa-times</v-icon>
              </v-btn>
            </v-row>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditCategory from "@/components/Categories/EditCategory";
import AddCategory from "@/components/Categories/AddCategory";

export default {
  components: {
    EditCategory,
    AddCategory,
  },
  created() {
    this.$store.dispatch("admin/getAllCategory");
  },
  computed: {
    categories() {
      return this.$store.getters["admin/category"];
    },
    loading() {
      return this.$store.getters["admin/categoryLoading"];
    },
  },
  data: () => ({
    breadcrumbItems: [{ text: "Dashboard", href: "/dashboard" }],
    headers: [
      { text: "Name", value: "name" },
      { text: "Price", value: "price" },
      { text: "Type", value: "type" },
      { text: "Working Hours", value: "workingHours" },
      { text: "Pay by hour", value: "payPerHour" },
      { text: "Pay by size", value: "payPerSize" },
      { text: "Deleted", value: "deleted" },
      { text: "Actions", value: "actions" },
    ],
    search: "",
  }),
  methods: {
    deletesubCategory(item) {
      if (confirm(`Are you sure you want to delete ${item.name} ?`)) {
        this.$store.dispatch("admin/deleteCategory", item.id);
      }
    },
  },
};
</script>

<style></style>
