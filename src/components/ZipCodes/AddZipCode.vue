<template>
  <v-dialog v-model="dialog" max-width="450">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="#592A65" dark v-bind="attrs" v-on="on">
        Add
      </v-btn>
    </template>
    <v-card>
      <v-row justify="center" align="center">
        Add Zip Code
      </v-row>
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="suburb"
              label="Suburb"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="country"
              label="Country"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="postcode"
              label="Post Code"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="latitude"
              label="Latitude"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="longitude"
              label="Longitude"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="type"
              label="Type"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-row justify="space-around" align="center">
          <v-btn rounded text @click="addZipCode">
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
    suburb: "",
    country: "",
    postcode: "",
    latitude: "",
    longitude: "",
    type: "",
    rules: [
      value => !!value || "Required.",
      value => (value || "").length <= 40 || "Max 40 characters"
    ]
  }),
  computed: {},
  methods: {
    addZipCode() {
      var postal = {};
      postal.suburb = this.suburb;
      postal.country = this.country;
      postal.postcode = this.postcode;
      postal.latitude = this.latitude;
      postal.longitude = this.longitude;
      postal.type = this.type;

      this.$store.dispatch("admin/addOrUpdate", postal);
      this.dialog = false;
      postal.suburb = "";
      postal.country = "";
      postal.postcode = "";
      postal.latitude = "";
      postal.longitude = "";
      postal.type = "";
    }
  }
};
</script>

<style></style>
