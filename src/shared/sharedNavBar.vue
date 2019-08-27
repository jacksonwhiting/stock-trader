<template>
   <div>
      <div  class="hidden-md-and-up deep-orange accent-3 mobileNavBar">
         <v-layout>
            <v-flex xs12>
               <v-btn flat to='/' style="font-size: 1.5em; color: white;"> Stock Trader </v-btn>
               <v-btn style="color: white;" flat class="subheading" to='/portfolio'> Portfolio </v-btn>
            </v-flex>
            <v-spacer></v-spacer>
               <v-btn flat class="subheading white--text" style="cursor: default"> Funds: ${{ funds }} </v-btn>       
         </v-layout>
      </div>
      
      <v-toolbar class="hidden-sm-and-down" dark color="deep-orange accent-3">
         <v-btn flat to='/' style="font-size: 1.5em"> Stock Trader </v-btn>
         <v-btn flat class="subheading" to='/portfolio'> Portfolio </v-btn>
         <v-btn flat class="subheading" to='/stocks'> Stocks </v-btn>
         <v-spacer></v-spacer>
         <v-btn flat class="subheading"> End Day </v-btn>
         <v-menu offset-y>
            <v-btn
            flat
            class="subheading"
            slot="activator"
            >
            Save & Load
            <i class="material-icons"> arrow_drop_down </i>
            </v-btn>
               <v-list>
               <v-list-tile
                     v-for="(item, index) in items"
                     :key="index"
               >
                     <v-list-tile-title>{{ item.title }}</v-list-tile-title>
               </v-list-tile>
               </v-list>
         </v-menu>
         <v-btn flat class="subheading" style="cursor: default"> Funds: ${{ funds }} </v-btn> 
      </v-toolbar>
   </div>
   
   
</template>

<script>
export default {
   data() {
      return {
         items: [
            {title: 'Save data'},
            {title: 'Load data'}
         ],
         bottomNav: 'recent'
      }
   },
   computed: {
      funds() {
         return this.$store.state.funds;
      }
   }
}
</script>

<style>
 .mobileNavBar {
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
 }
</style>


