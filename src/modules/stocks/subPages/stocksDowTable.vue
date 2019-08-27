<template>
   <div>
     <app-stocks-mobile-table-template 
      :stocks="displayStocks"
      :headers="mobileHeaders"
      class="hidden-md-and-up"
      >
     </app-stocks-mobile-table-template>
     
     <app-stocks-table-template 
      :stocks="displayStocks"
      :headers="headers"
      class="hidden-sm-and-down"
      >
      </app-stocks-table-template>
   </div>
   
   
</template>

<script>
import { iexSandboxApi, iexSandboxToken } from "../../../shared/sharedAxiosInstances.js";
import stocksTableTemplate from "../components/stocksTableTemplate.vue";
import stocksMobileTableTemplate from "../components/stocksMobileTableTemplate.vue";
import {dowMixin} from "../stocksMixins.js";

export default {
  mixins: [dowMixin],
  components: {
    'appStocksTableTemplate': stocksTableTemplate,
    'appStocksMobileTableTemplate': stocksMobileTableTemplate
  },
  computed: {
    displayStocks() {
      return this.$store.getters.stocks;
    },
    dowToString() {
       return this.dowStocks.toString();
    }
  },
  methods: {
    addFunds() {
      this.$store.commit("addFunds");
      console.log(this.$store.state.funds);
    }
  },
  created() {
    iexSandboxApi
      .get(
         "stock/market/batch?symbols=" + this.dowToString + "&types=quote&filter=companyName,symbol,latestPrice,change,changePercent,week52High,week52Low"
         + "&token=" + iexSandboxToken
      )
      .then(res => {
         this.$store.dispatch("clearStocks");
        for (let key in res.data) {
          this.$store.dispatch("addStocks", res.data[key].quote);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
