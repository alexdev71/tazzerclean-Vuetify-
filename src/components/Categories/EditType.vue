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
            <v-text-field
              :rules="rules"
              v-model="type.typeOrder"
              label="Category Order"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="type.catCode"
              label="Category Order"
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
  computed: {},
  methods: {
    editType() {
      var type = {};
      type.id = this.type.id;
      type.name = this.type.name;
      type.description = this.type.description;
      type.iconPath = this.type.iconPath;
      type.typeOrder = this.type.typeOrder;
      type.catCode = this.type.catCode;
      this.$store.dispatch("admin/categoryTypeAddOrUpdate", type);
      this.dialog = false;
    },
  },
};
</script>

<style></style>
