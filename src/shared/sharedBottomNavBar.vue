<template>
   <div class="fixBottom hidden-md-and-up" style="padding: 0 24;">
      <v-layout align-center>
         <v-flex sm3>
            <v-btn flat style="height: 100%">
               <v-layout column>
                  <v-flex>
                     <v-icon>history</v-icon>
                  </v-flex>
                  <v-flex>
                     <span style="font-size: .75rem;">Recent</span>
                  </v-flex>
               </v-layout>
            </v-btn>
         </v-flex>
         <v-flex sm3>
            <v-btn flat style="height: 100%">
               <v-layout column>
                  <v-flex>
                     <v-icon>favorite</v-icon>
                  </v-flex>
                  <v-flex>
                     <span style="font-size: .75rem;">Favorite</span>
                  </v-flex>
               </v-layout>
            </v-btn>
         </v-flex>
         <v-flex sm3>
            <v-btn flat style="height: 100%">
               <v-layout column>
                  <v-flex>
                     <v-icon>place</v-icon>
                  </v-flex>
                  <v-flex>
                     <span style="font-size: .75rem;">Nearby</span>
                  </v-flex>
               </v-layout>
            </v-btn>
         </v-flex>
         <v-flex sm3>
            <v-btn flat style="height: 100%">
               <v-layout column>
                  <v-flex>
                     <v-icon>history</v-icon>
                  </v-flex>
                  <v-flex>
                     <span style="font-size: .75rem;">Recent</span>
                  </v-flex>
               </v-layout>
            </v-btn>
         </v-flex>
      </v-layout>
   </div>
</template>


<style>
   .fixBottom {
      position: fixed;
      bottom: 0;
      display: flex;
      height: 56px;
      width: 100%;
      background-color: #FFFFFF;
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      text-align: center;
   }
   .testFlex {
      display: flex;
      flex-direction: column;
   }
</style>


