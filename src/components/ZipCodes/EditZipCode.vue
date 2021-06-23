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
              v-model="zipcode.suburb"
              label="Suburb"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="zipcode.country"
              label="Country"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="zipcode.postcode"
              label="Post Code"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="zipcode.latitude"
              label="Latitude"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="zipcode.longitude"
              label="Longitude"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :rules="rules"
              v-model="zipcode.type"
              label="Type"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-row justify="space-around" align="center">
          <v-btn rounded text @click="editZipCode">
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
  props: ["zipcode"],
  data: () => ({
    dialog: null,
    rules: [
      value => !!value || "Required.",
      value => (value || "").length <= 40 || "Max 40 characters"
    ]
  }),
  computed: {},
  methods: {
    editZipCode() {
      var postal = {};
      postal.id = this.zipcode.id;
      postal.suburb = this.zipcode.suburb;
      postal.country = this.zipcode.country;
      postal.postcode = this.zipcode.postcode;
      postal.latitude = this.zipcode.latitude;
      postal.longitude = this.zipcode.longitude;
      postal.type = this.zipcode.type;

      this.$store.dispatch("admin/addOrUpdate", postal);
      this.dialog = false;
    }
  }
};
</script>

<style></style>
