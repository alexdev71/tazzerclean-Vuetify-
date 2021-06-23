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
        Add SubCategory
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
            <v-select
              :items="SelectOption"
              v-model="primaryType"
              label="Standard"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="subcatCode"
              label="Code for SubCategory"
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
    primaryType: "",
    subcatCode: "",
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
    SelectOption() {
      return this.getParentTypes();
    }
  },
  methods: {
    getParentTypes() {
      var ParentTypes = this.$store.getters["admin/categoryType"];
      var selectdata = [];
      for (var i = 0; i < ParentTypes.length; i++) {
        var item = ParentTypes[i].id;
        selectdata.push(item);
      }
      return selectdata;
      
    },
    addType() {
      var category = {};
      category.name = this.name;
      category.description = this.description;
      category.iconPath = this.iconPath;
      category.deleted = this.deleted;
      category.primaryType = this.primaryType;
      category.subcatCode = this.subcatCode;
      this.$store.dispatch("admin/categorySubTypeAddOrUpdate", category);
      this.dialog = false;
      category.name = "";
      category.description = "";
      category.iconPath = "";
      category.deleted = false;
    },
  },
};
</script>

<style></style>
