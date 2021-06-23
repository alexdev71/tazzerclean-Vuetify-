<!-- @format -->

<template>
  <v-container fluid>
    <v-breadcrumbs :items="breadcrumbItems"></v-breadcrumbs>
    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="categoryTypes"
          :items-per-page="15"
          :search="search"
          class="elevation-3"
          :loading="loading"
          loading-text="Loading...please wait"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>Category types</v-toolbar-title>
              <v-divider
                class="mex-4"
                inset
                vertical
                style="margin-left:5px;"
              ></v-divider>
              <v-btn color="#448AFF" dark style="margin-left:15px;" @click="downloadCategoriesAsExcel()">
                Excel
              </v-btn>

              <v-btn color="#FF5252" dark style="margin-left:15px;" @click="downloadCategoriesAsPDF()">
                PDF
              </v-btn>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Find by name"
                single-line
                hide-details
                style="margin-right: 15px;"
              ></v-text-field>
              <AddType />
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-row justify="center" align="center">
              <EditType :type="item" />
              <v-btn color="#592A65" dark icon @click="deleteCategoryType(item)">
                <v-icon color="black" small>fas fa-times</v-icon>
              </v-btn>
            </v-row>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditType from "@/components/Categories/EditType";
import AddType from "@/components/Categories/AddType";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
const doc = new jsPDF();
export default {
  components: {
    EditType,
    AddType,
  },
  created() {
    this.$store.dispatch("admin/getAllCategoryType");
  },
  computed: {
    categoryTypes() {
      return this.$store.getters["admin/categoryType"];
    },
    loading() {
      return this.$store.getters["admin/categoryTypeLoading"];
    },
  },
  data: () => ({
    breadcrumbItems: [{ text: "Dashboard", href: "/dashboard" }],
    headers: [
      { text: "Id", value: "id" },
      { text: "Name", value: "name" },
      { text: "Description", value: "description" },
      { text: "Icon", value: "iconPath" },
      { text: "Type", value: "type" },
      { text: "TypeOrder", value: "typeOrder" },
      { text: "Category Code", value: "catCode" },
      { text: "Actions", value: "actions" },
    ],
    search: "",
  }),
  methods: {
    deleteCategoryType(item) {
      if (confirm(`Are you sure you want to delete ${item.name} ?`)) {
        this.$store.dispatch("admin/deleteCategoryType", item.id);
      }
    },
    downloadCategoriesAsExcel(){
      this.$store.dispatch("admin/downloadCategoriesAsExcel");
    },
    downloadCategoriesAsPDF(){
      var json = this.$store.getters["admin/categoryType"];
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
      doc.save('Categories.pdf');
    }
  },
};
</script>

<style></style>
