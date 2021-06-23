<!-- @format -->

<template>
  <v-dialog v-model="dialog" max-width="450">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="#592A65" dark v-bind="attrs" v-on="on">
        Add
      </v-btn>
    </template>
    <v-card>
      <v-row justify="center" align="center">
        Add Category
      </v-row>
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="name"
              label="Name"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="typeId"
              :items="categoryTypes"
              item-value="id"
              item-text="name"
              dense
              label="Category Sub Type"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="subTypeId"
              :items="categorySubTypes"
              item-value="id"
              item-text="name"
              dense
              label="Category Types"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="minimumHour"
              label="Min. Hour"
            ></v-text-field>
            <v-text-field
              :rules="rules"
              v-model="price"
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
  data: () => ({
    dialog: null,
    name: "",
    typeId: "",
    type: "",
    description: "",
    price: "",
    minimumHour: "",
    subTypeId: "",
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
      category.name = this.name;
      category.typeId = this.typeId;
      category.description = "";
      category.price = this.price;
      category.minimumHour = this.minimumHour;
      category.typeId = this.typeId;
      category.subType = this.subTypeId;
      this.$store.dispatch("admin/categoryAddOrUpdate", category);
      this.name = "";
      this.price = "";
      this.minimumHour = "";
    },
  },
};
</script>

<style></style>
