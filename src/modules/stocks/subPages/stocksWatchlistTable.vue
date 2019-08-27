<template>
   <app-stocks-table-template 
   :headers="headers"
   >
   </app-stocks-table-template>
</template>

<script>
import stocksTableTemplate from "../components/stocksTableTemplate.vue";
import {dowMixin} from "../stocksMixins.js";

export default {
   mixins: [dowMixin],
   components: {
    'appStocksTableTemplate': stocksTableTemplate
  }
}
</script>

<style>

</style>


