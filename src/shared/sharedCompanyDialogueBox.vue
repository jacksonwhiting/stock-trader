<template>
   <v-dialog
   v-model="this.$store.state.dialog"
   width="500"
   persistent
   >
      <app-shared-company-dialog-template></app-shared-company-dialog-template>
   </v-dialog>
</template>
   

      <!-- <v-card>
         <v-layout row justify-center align-center>
               <v-avatar
                  v-if="noError"
                  tile
                  size="125px"
                  color="light-grey"
               >
                  <img :src="url + 'HD.png'" @error="noPicture">
               </v-avatar>
               <v-avatar
                  v-if="error"
                  size="100px"
                  color="indigo"
                  class="display-2 font-weight-light white--text"
               >
               P
               </v-avatar>
         </v-layout>
         
        <v-divider></v-divider>
         <v-card-title>
            class="headline grey lighten-2"
            primary-title
         >
            Privacy Policy
         </v-card-title>
         <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </v-card-text>
         <v-divider></v-divider>
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
      </v-card> -->

<script>
import sharedCompanyDialogTemplate from "../shared/sharedStockDialogTemplate.vue";
export default {
   data() {
      return {
         url: "https://storage.googleapis.com/iex/api/logos/",
         noError: true,
         error: false,
         items: [
            {
               name: 'Frozen Yogurt',
               calories: 159,
               fat: 6.0,
               carbs: 24,
               protein: 4.0,
               sodium: 87,
               calcium: '14%',
               iron: '1%'
            },
            {
               name: 'Ice cream sandwich',
               calories: 237,
               fat: 9.0,
               carbs: 37,
               protein: 4.3,
               sodium: 129,
               calcium: '8%',
               iron: '1%'
            },
            {
               name: 'Eclair',
               calories: 262,
               fat: 16.0,
               carbs: 23,
               protein: 6.0,
               sodium: 337,
               calcium: '6%',
               iron: '7%'
            },
            {
               name: 'Cupcake',
               calories: 305,
               fat: 3.7,
               carbs: 67,
               protein: 4.3,
               sodium: 413,
               calcium: '3%',
               iron: '8%'
            }
         ],
         rowsPerPageItems: [4, 8, 12],
         pagination: {
            rowsPerPage: 4
         }
      }
   },
   methods: {
      noPicture() {
         this.noError = false;
         this.error = true;
      }
   },
   components: {
      'appSharedCompanyDialogTemplate': sharedCompanyDialogTemplate
   }
};
</script>

<style>
.overlap {
   margin-top: -5em;
}
</style>

