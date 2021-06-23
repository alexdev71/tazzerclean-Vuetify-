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
            <v-text-field
              :rules="rules"
              v-model="description"
              label="Description"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="iconPath"
              label="IconPath"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="typeOrder"
              label="Category Order"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="catCode"
              label="Category Code"
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
    description: "",
    iconPath: "",
    typeOrder: "",
    catCode: "",
    deleted: false,
    rules: [
      (value) => !!value || "Required.",
      (value) => (value || "").length <= 40 || "Max 40 characters",
    ],
  }),
  computed: {
    categoryTypes() {
      return this.$store.getters["admin/categoryType"];
    },
  },
  methods: {
    addType() {
      var category = {};
      category.name = this.name;
      category.description = this.description;
      category.iconPath = this.iconPath;
      category.deleted = this.deleted;
      category.typeOrder = this.typeOrder;
      category.catCode = this.catCode;
      this.$store.dispatch("admin/categoryTypeAddOrUpdate", category);
      this.dialog = false;
      category.name = "";
      category.description = "";
      category.iconPath = "";
      category.deleted = false;
      category.typeOrder = "";
    },
  },
};
</script>

<style></style>
