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
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="type.name"
              label="Suburb"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="type.description"
              label="Country"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="type.iconPath"
              label="IconPath"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-select
              :items="SelectOption"
              label="Standard(Please Select Original Parent Type if you don't want to change it!)"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="type.subcatCode"
              label="Code for SubCategory"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-row justify="space-around" align="center">
          <v-btn rounded text @click="editType">
            Edit
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
  props: ["type"],
  data: () => ({
    dialog: null,
    rules: [
      (value) => !!value || "Required.",
      (value) => (value || "").length <= 40 || "Max 40 characters",
    ],
  }),
  computed: {
    SelectOption() {
      return this.getParentTypes();
    }
  },
  methods: {
    editType() {
      var type = {};
      type.id = this.type.id;
      type.name = this.type.name;
      type.description = this.type.description;
      type.iconPath = this.type.iconPath;
      type.primaryType = this.type.primaryType;
      type.subcatCode = this.type.subcatCode;
      this.$store.dispatch("admin/categorySubTypeAddOrUpdate", type);
      this.dialog = false;
    },
    getParentTypes() {
      var ParentTypes = this.$store.getters["admin/categoryType"];
      var selectdata = [];
      for (var i = 0; i < ParentTypes.length; i++) {
        var item = ParentTypes[i].id;
        selectdata.push(item);
      }
      return selectdata;
      
    },
  },
};
</script>

<style></style>
