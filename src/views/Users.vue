<template>
  <v-container fluid>
    <v-breadcrumbs :items="breadcrumbItems"></v-breadcrumbs>
    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="users"
          :items-per-page="15"
          :search="search"
          class="elevation-3"
          :loading="loading"
          loading-text="Loading...please wait"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>Users</v-toolbar-title>
              <v-divider
                class="mex-4"
                inset
                vertical
                style="margin-left:5px;"
              ></v-divider>

              <v-btn color="#448AFF" dark style="margin-left:15px;" @click="downloadUsersAsExcel()">
                Excel
              </v-btn>

              <v-btn color="#FF5252" dark style="margin-left:15px;" @click="downloadUsersAsPDF()">
                PDF
              </v-btn>


              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Find by zip code"
                single-line
                hide-details
                style="margin-right: 15px;"
              ></v-text-field>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-row>
              <ShowUsers :users="item" />
              <v-btn color="#592A65" dark icon @click="deleteCustomer(item)">
                <v-icon color="black" small>fas fa-times</v-icon>
              </v-btn>
              <v-btn color="#592A65" dark icon @click="deactivateCustomerAccount(item)">
                <v-icon color="black" small>fas fa-user-slash</v-icon>
              </v-btn>
            </v-row>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ShowUsers from '@/components/Users/ShowUsers';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
const doc = new jsPDF('p', 'mm', [357, 210]);
export default {
  components:{
    ShowUsers
  },
  created() {
    this.$store.dispatch("admin/getAllCustomers");
  },
  computed: {
    users() {
      return this.$store.getters["admin/customers"];
    },
    loading() {
      return this.$store.getters["admin/customersLoading"];
    }
  },
  data: () => ({
    breadcrumbItems: [{ text: "Dashboard", href: "/dashboard" }],
    headers: [
      { text: "First Name", value: "firstname" },
      { text: "Last Name", value: "lastname" },
      { text: "Phone", value: "phone" },
      { text: "PostCode", value: "postCode" },
      { text: "Email Confirmed", value: "emailConfirmed" },
      { text: "Mobile Confirmed", value: "mobileConfirmed" },
      { text: "IsActive", value:"isActive" },
      { text: "Actions", value: "actions" },
    ],
    search: ""
  }),
  methods: {
    deleteCustomer(item) {
      if (confirm(`Are you sure you want to delete ${item.firstname} ?`)) {
        this.$store.dispatch("admin/deleteCustomer", item.id);
      }
    },
    deactivateCustomerAccount(item){
      if (confirm(`Are you sure you want to Deactivate ${item.firstname} ?`)) {
        this.$store.dispatch("admin/deactivateCustomerAccount", item.id);
      }
    },
    downloadUsersAsExcel(){
      this.$store.dispatch("admin/downloadUsersAsExcel");
    },
    downloadUsersAsPDF(){
      var json = this.$store.getters["admin/customers"];
      var customers = eval(json);
      var table = document.createElement("TABLE");
      table.border = "1";
      table.Id = "tblCustomers";

      var row = table.insertRow(-1);
      
      for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var index in customers[i]) {
            if(customers[i][index] != null){
              var cell = row.insertCell(-1);
              cell.innerHTML = customers[i][index];
            }
        }
      }
      console.log(table);
      doc.autoTable({ html: table });
      doc.save('Customers.pdf');
    },
  }
};
</script>

<style></style>
