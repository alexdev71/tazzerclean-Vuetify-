<template>

  <v-container fluid>
    <v-breadcrumbs :items="breadcrumbItems"></v-breadcrumbs>
    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <div ref="content" id="content">
    <v-row justify="center" align="center">
      <v-col cols="12">
      
        <v-data-table
          :headers="headers"
          :items="zipCodes"
          :items-per-page="15"
          :search="search"
          class="elevation-3"
          :loading="loading"
          loading-text="Loading...please wait"
          
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>Zip codes</v-toolbar-title>
              <v-divider
                class="mex-4"
                inset
                vertical
                style="margin-left:5px;"
              ></v-divider>
              
              <v-btn color="#448AFF" dark style="margin-left:15px;" @click="downloadZipCodeAsExcel()">
                Excel
              </v-btn>

              <v-btn color="#FF5252" dark style="margin-left:15px;" @click="downloadZipCodeAsPDF()">
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
              <AddZipCode />
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <EditZipeCode :zipcode="item" />
            <v-btn color="#592A65" dark icon @click="deleteZipCode(item)">
              <v-icon color="black" small>fas fa-times</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        
      </v-col>
    </v-row>
    </div>
  </v-container>
</template>

<script>
import EditZipeCode from "@/components/ZipCodes/EditZipCode";
import AddZipCode from "@/components/ZipCodes/AddZipCode";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
const doc = new jsPDF('p', 'mm', [357, 210]);
export default {
  components: {
    EditZipeCode,
    AddZipCode
  },
  created() {
    this.$store.dispatch("admin/getAllZipCodes");
  },
  computed: {
    zipCodes() {
      return this.$store.getters["admin/zipCodes"];
    },
    loading() {
      return this.$store.getters["admin/zipCodesLoading"];
    }
  },
  data: () => ({
    breadcrumbItems: [{ text: "Dashboard", href: "/dashboard" }],
    headers: [
      { text: "Country", value: "country" },
      { text: "Suburb", value: "suburb" },
      { text: "Post Code", value: "postcode" },
      { text: "Latitude", value: "latitude" },
      { text: "Longitude", value: "longitude" },
      { text: "Type", value: "type" },
      { text: "Actions", value: "actions" }
    ],
    search: ""
  }),
  methods: {
    deleteZipCode(item) {
      if (confirm(`Are you sure you want to delete ${item.postcode} ?`)) {
        this.$store.dispatch("admin/deleteZipCode", item.id);
      }
    },
    downloadZipCodeAsExcel(){
      this.$store.dispatch("admin/downloadZipCodeAsExcel");
    },
    downloadZipCodeAsPDF(){
      var json = this.$store.getters["admin/zipCodes"];
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
      doc.save('ZipCodes.pdf');
    },
  }
};
</script>

<style></style>
