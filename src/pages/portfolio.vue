<template>
   <v-container grid-list-xl>
      <v-layout row wrap>
         <v-flex v-for="(stock, index) in stocks" :key="stocks[index].company" xs12 md6 lg4 style="max-width: 400px">
            <v-card > 
               <v-toolbar class='indigo lighten-2'>
                  <v-toolbar-title class='white--text'> {{stocks[index].company}}</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-title class='white--text'> Price: {{stocks[index].price}} </v-toolbar-title>
               </v-toolbar>
               <v-container class="grey lighten-5">
                  <v-layout>
                     <v-flex xs8 mr-4>
                        <v-text-field solo label="Quantity"></v-text-field> 
                     </v-flex>
                     <v-flex>
                        <v-btn color='orange darken-2' class='white--text'>Buy</v-btn>
                     </v-flex>
                  </v-layout>
               </v-container>
            </v-card>
         </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      stocks: []
    };
  },
  mounted() {
    console.log("mounted");
    axios
      .get("/Stocks.json")
      .then(res => {
        console.log(res);
        let array = res.data["-LJjrSpOUQP4gijvmKCm"];
        array.forEach(el => {
          el.company = el.company.charAt(0).toUpperCase() + el.company.slice(1);
        });
        this.stocks = array;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
