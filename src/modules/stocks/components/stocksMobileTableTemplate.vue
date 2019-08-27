<template>
   <v-data-table
    :headers="headers"
    :items="stocks"
    class="elevation-5, text-xs-left"
    :rows-per-page-items="[10,20,30,{'text':'$vuetify.dataIterator.rowsPerPageAll','value':-1}]"
   >
      <template slot="items" slot-scope="props">
         <td class='text-xs-left'>{{ props.item.companyName }}</td>
         <td> {{ props.item.symbol }} </td>
         <td> {{ props.item.latestPrice }} </td>
         <td :class="[props.item.change > 0 ? 'green--text' : 'red--text']">
            {{ (props.item.changePercent * 100).toFixed(2) + '%' }}
            <v-icon 
               small :class="[props.item.change > 0 ? 'green--text' : 'red--text', 'font-weight-bold']"
               v-if="props.item.change > 0"> arrow_upward 
            </v-icon>
            <v-icon 
               small :class="[props.item.change > 0 ? 'green--text' : 'red--text', 'font-weight-bold']"
               v-else-if="props.item.change < 0"> arrow_downward 
            </v-icon>
            <v-icon v-else></v-icon>
         </td>
      </template>
  </v-data-table>
</template>

<script>
export default {
   props: {
      stocks: Array,
      headers: Array
   }
}
</script>

<style>

</style>

