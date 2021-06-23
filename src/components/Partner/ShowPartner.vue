<!-- @format -->

<template>
  <v-dialog v-model="dialog" max-width="450">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="#592A65" dark v-bind="attrs" v-on="on" text>
        <v-icon color="black" v-bind="attrs" v-on="on" small
          >fas fa-eye</v-icon
        >
      </v-btn>
    </template>
    <template>
      <v-card class="pt-5">
        <v-card-actions style="float:right;" @click="dialog = !dialog" rounded>
          <v-row>
            <v-btn rounded text>
              X
            </v-btn>
          </v-row>
        </v-card-actions>
        <v-row justify="center" align="center">
            Show Partner
          </v-row>
        <v-card-text>
          <p class="display-1 text--primary" align="center">
            {{ partner.firstname }}&nbsp;{{ partner.lastname }}
          </p><br/><br/>
          <div class="text--primary">
            Phone Number: {{ partner.phone }}
          </div><br/>
          <div class="text--primary">
            Email Confirmed: {{ partner.emailConfirmed }}
          </div><br/>
          <div class="text--primary">
            Mobile Confirmed: {{ partner.mobileConfirmed }}
          </div>
        </v-card-text>

        <v-card-actions>
          <v-row justify="space-around" align="center">
            <v-btn rounded color="primary" @click="approvePartnerAccount()">
              Approve Account
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  props: ["partner"],
  data: () => ({
    dialog: null,
    rules: [
      (value) => !!value || "Required.",
      (value) => (value || "").length <= 40 || "Max 40 characters",
    ],
  }),
  computed: {
    partner() {
      return this.$store.getters["admin/partner"];
    },
  },
  methods: {
    approvePartnerAccount(){
      var id = this.partner.id;
      if (confirm(`Are you sure you want to Approve ${this.partner.firstname} ?`)) {
        this.$store.dispatch("admin/activatePartnerAccount", id);
        this.dialog = false;
      }
    },
  },

};
</script>

<style></style>
