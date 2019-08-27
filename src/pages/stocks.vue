<template>
   <v-container class="mt-3 pa-2 stockBackground">
      <v-toolbar dense flat color="white">
         <v-toolbar-items>
            <v-btn flat tag="li" :to="{name: 'watchlist'}" active-class="activeTab" class="subheading">Watchlist</v-btn>
            <v-btn flat exact tag="li" :to="{name: 'dowStocks'}" active-class="activeTab" class="subheading" >DOW</v-btn>
         </v-toolbar-items>
         <v-spacer></v-spacer>
         <app-shared-stock-search-bar :items="items"></app-shared-stock-search-bar>
      </v-toolbar>
      <app-shared-company-dialog-box></app-shared-company-dialog-box>
      <router-view class="mt-2"></router-view>
   </v-container> 
</template>

<script>
import { iexSandboxApi, iexSandboxToken } from "../shared/sharedAxiosInstances.js";
import {dowMixin} from "../modules/stocks/stocksMixins.js";
import sharedStockSearchBar from "../shared/sharedStockSearchBar.vue";
import sharedCompanyDialogBox from "../shared/sharedCompanyDialogueBox.vue";

export default {
  mixins: [dowMixin],
  data() {
    return {
      dowStocks: "dow-stocks",
      items: []
      }
    },
    created() {
      iexSandboxApi
         .get("/ref-data/symbols" + "?token=" + iexSandboxToken)
         .then(res => {
            this.items = res.data;
         })
         .catch(error => {
         console.log(error);
         });
    },
  components: {
    'appSharedStockSearchBar': sharedStockSearchBar,
    'appSharedCompanyDialogBox': sharedCompanyDialogBox
  },
  computed: {
    dowToString() {
       return this.dowStocks.toString();
    },
    statusDialog() {
       return this.dialog;
    }
  }
};
</script>

<style>
   .activeTab {
      border-bottom: 2px solid #FF3D00;
      background-color: #F5F5F5
   }
   .stockBackground {
      background-color: #EEEEEE;
   }
</style>


