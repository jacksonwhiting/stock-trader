<template>
   <v-autocomplete
      v-model="stockSymbol"
      :items="items"
      clearable
      chips
      hide-details
      hide-selected
      item-text="name"
      item-value="symbol"
      label="Search for a stock..."
      :filter="customFilter"
      solo
      multiple
      append-icon="search"
      @click:append.stop="openDialog"
      @keyup.enter.stop="openDialog"
      @click:clear="removeAllItems"
      >
      <template slot="no-data">
         <v-list-tile>
            <v-list-tile-title>
               Search for your favorite
               <strong>Stock</strong>
            </v-list-tile-title>
         </v-list-tile>
      </template>
      <template
         slot="selection"
         slot-scope="{ item, selected }"
         >
         <v-chip
            :selected="selected"
            color="blue-grey"
            class="white--text"
            close
            @input="remove(item)"
         >
            <v-icon left>monetization_on</v-icon>
            <span v-text="item.name"></span>
         </v-chip>
      </template>
      <template
         slot="item"
         slot-scope="{ item, tile }"
      >
         <v-list-tile-avatar
            color="indigo"
            class="headline font-weight-light white--text"
         >
            {{ item.name.charAt(0) }}
         </v-list-tile-avatar>
         <v-list-tile-content>
            <v-list-tile-title v-text="item.name"></v-list-tile-title>
            <v-list-tile-sub-title v-text="item.symbol"></v-list-tile-sub-title>
         </v-list-tile-content>
         <v-list-tile-action>
            <v-icon>monetization_on</v-icon>
         </v-list-tile-action>
      </template>
   </v-autocomplete>
</template>

<script>
import { iexApi } from "./sharedAxiosInstances.js";
export default {
  props: {
    items: Array
  },
  data() {
    return {
      stockSymbol: null,
      isLoading: false
    };
  },
  methods: {
    remove(item) {
      const index = this.stockSymbol.indexOf(item.symbol);
      if (index >= 0) {this.stockSymbol.splice(index, 1)}
      const stateIndex = this.$store.state.selectedStocks.indexOf(item.symbol);
      console.log(item.symbol);
      this.$store.dispatch('removeSelectedStocks', stateIndex);
    },
    removeAllItems (){
      this.$store.dispatch('removeAllSelectedStocks');
    },
    openDialog() {
      this.$store.commit("changeDialog");
      this.$store.dispatch('removeAllSelectedStocks');
      let stockSymbolString = this.stockSymbol.toString();
      iexApi
      .get(
        "/batch?symbols=" + stockSymbolString + "&types=quote&filter=companyName,symbol,latestPrice,change,changePercent,week52High,week52Low"
      )
      .then(res => {
        for (let key in res.data) {
          this.$store.dispatch("addSelectedStocks", res.data[key].quote);
        }
        console.log(this.$store.state.selectedStocks);
      })
      .catch(error => {
        console.log(error);
      });
    },
    customFilter (item, queryText) {
        const textOne = item.name.toLowerCase();
        const textTwo = item.symbol.toLowerCase();
        const searchText = queryText.toLowerCase();

        return textOne.indexOf(searchText) === 0 ||
               textTwo.indexOf(searchText) === 0
    }
  }
};
</script>

<style>
</style>


