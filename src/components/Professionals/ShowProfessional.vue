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
            Show Professional
          </v-row>
        <v-card-text>
          <p class="display-1 text--primary" align="center">
            {{ professional.firstname }}&nbsp;{{ professional.lastname }}
          </p><br/><br/>
          <div class="text--primary">
            Phone Number: {{ professional.phone }}
          </div><br/>
          <div class="text--primary">
            Email Confirmed: {{ professional.emailConfirmed }}
          </div><br/>
          <div class="text--primary">
            Mobile Confirmed: {{ professional.mobileConfirmed }}
          </div>
        </v-card-text>

        <v-card-actions>
          <v-row justify="space-around" align="center">
            <v-btn rounded color="primary" @click="approveProfessionalAccount()">
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
  props: ["professional"],
  data: () => ({
    dialog: null,
    rules: [
      (value) => !!value || "Required.",
      (value) => (value || "").length <= 40 || "Max 40 characters",
    ],
  }),
  computed: {
    professionals() {
      return this.$store.getters["admin/professionals"];
    },
  },
  methods: {
    addType() {
      var professional = {};
      professional.id = this.professional.id;
      professional.Firstname = this.professional.Firstname;
      professional.Lastname = this.professional.Lastname;
      professional.Phone = this.professional.Phone;
      professional.AddressId = this.professional.AddressId;
      professional.EmailConfirmed = this.professional.Emailconfirmed;
      professional.MobileConfirmed = this.professional.MobileConfirmed;
      this.$store.dispatch("admin/ProfessionalsAddOrUpdate", professional);
      this.dialog = false;
    },
    approveProfessionalAccount(){
      var id = this.professional.id;
      if (confirm(`Are you sure you want to Approve ${this.professional.firstname} ?`)) {
        this.$store.dispatch("admin/activateProfessionalAccount", id);
        this.dialog = false;
      }
    },
  },

};
</script>

<style></style>
