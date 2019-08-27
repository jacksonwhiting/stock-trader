<template>
   <div>
      <v-card class="mb-3" v-for="stock in getSelectedStocks" :key="stock.symbol">
         <v-toolbar color="blue-grey" class="white--text">
            <v-layout row wrap align-center >
               <v-flex xs2 >
                  <v-toolbar-title > DAL
                  </v-toolbar-title> 
               </v-flex> 
               <v-flex xs6 offset-xs1 class="text-xs-center"> 
                  <v-toolbar-title > {{stock.companyName}}
                  </v-toolbar-title>    
                  <h4>{{stock.symbol}}</h4>
               </v-flex>     
            </v-layout> 
         </v-toolbar>  
           <v-list >
              <v-list-tile  >
                 <v-list-tile-content class="items" >
                     <v-list-tile-title>Latest Price:</v-list-tile-title>
                 </v-list-tile-content>
                 <v-list-tile-content>
                     <v-list-tile-title>{{stock.latestPrice}}</v-list-tile-title>
                 </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
            <v-list-tile >
                 <v-list-tile-content class="items">
                     <v-list-tile-title>Change:</v-list-tile-title>
                 </v-list-tile-content>
                 <v-list-tile-content>
                    <v-list-tile-title> {{stock.change}}</v-list-tile-title>
                 </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                 <v-list-tile-content style="flex: 1 1 0">
                     <v-list-tile-title >Change:</v-list-tile-title>
                 </v-list-tile-content>
                 <v-list-tile-content>
                    <v-list-tile-title >{{stock.change}}</v-list-tile-title>
                 </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                 <v-list-tile-content style="flex: 1 1 0">
                     <v-list-tile-title >Change:</v-list-tile-title>
                 </v-list-tile-content>
                 <v-list-tile-content>
                    <v-list-tile-title >{{stock.change}}</v-list-tile-title>
                 </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
           </v-list>
           
           <!-- <v-list-tile>
              <v-list-tile-content>
               <v-list-tile-title>Latest Price: </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-content>
               <v-list-tile-title>{{stock.latestPrice}} </v-list-tile-title>
            </v-list-tile-content>
           </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile class="text-xs-left">
               <v-list-tile-content xs6>
                  <v-list-tile-title>Change: </v-list-tile-title>
               </v-list-tile-content>
               <v-list-tile-content xs6>
                  <v-list-tile-title>{{stock.change}} </v-list-tile-title>
               </v-list-tile-content>
            </v-list-tile> -->
         <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            color="primary"
            flat
            @click="changeDialog"
            >
            I accept
            </v-btn>
         </v-card-actions>
      </v-card> 
   </div>
</template>

<script>
export default {
  methods: {
     changeDialog() {
         this.$store.commit('changeDialog');
      }
  },
  computed: {
     getSelectedStocks (){
        return this.$store.getters.selectedStocks;
     }
  }
}
</script>
<style>
   .items {
      flex: 1 1 0;
   }
</style>



