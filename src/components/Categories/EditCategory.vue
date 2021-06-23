<!-- @format -->

<template>
  <v-dialog v-model="dialog" max-width="450">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="#592A65" dark v-bind="attrs" v-on="on" text>
        <v-icon color="black" v-bind="attrs" v-on="on" small
          >fas fa-edit</v-icon
        >
      </v-btn>
    </template>
    <v-card>
      <v-row justify="center" align="center">
        Edit Category
      </v-row>
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="category.name"
              label="Name"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="category.type"
              :items="categoryTypes"
              item-value="name"
              item-text="name"
              dense
              label="Category Sub Type"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="category.subType"
              :items="category.categorySubTypes"
              item-value="name"
              item-text="name"
              dense
              label="Category Types"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-text-field
              :rules="category.rules"
              v-model="category.workingHours"
              label="Min. Hour"
            ></v-text-field>
            <v-text-field
              :rules="rules"
              v-model="category.price"
              label="Hourly Rate"
              v-on:keyup.enter="addType"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-row justify="space-around" align="center">
          <v-btn rounded text @click="addType">
            Add
          </v-btn>
          <v-btn rounded text @click="dialog = !dialog">
            Cancel
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["category"],
  data: () => ({
    dialog: null,
    rules: [
      (value) => !!value || "Required.",
      (value) => (value || "").length <= 40 || "Max 40 characters",
    ],
  }),
  computed: {
    categoryTypes() {
      return this.$store.getters["admin/categoryType"];
    },
    categorySubTypes() {
      return this.$store.getters["admin/categorySubType"];
    },
  },
  methods: {
    addType() {
      var category = {};
      category.id = this.category.id;
      category.name = this.category.name;
      category.typeId = this.categoryTypes.find(
        (x) => x.name == this.category.type
      ).id;
      category.description = this.category.description;
      category.price = this.category.price;
      category.minimumHour = this.category.minimumHour;
      category.typeId = this.category.typeId;
      category.subType = this.category.subTypeId;
      this.$store.dispatch("admin/categoryAddOrUpdate", category);
      this.dialog = false;
    },
  },
};
</script>

<style></style>
