<template>
  <v-app>
    <app-shared-nav-bar></app-shared-nav-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-shared-bottom-nav></app-shared-bottom-nav>
  </v-app>
</template>

<script>
import sharedNavBar from './shared/sharedNavBar.vue';
import Home from './pages/home.vue';
import Portfolio from './pages/portfolio.vue';
import Stocks from './pages/stocks.vue';
import sharedBottomNav from './shared/sharedBottomNavBar';

export default {
  components: {
    'appSharedNavBar': sharedNavBar,
    'appHome': Home,
    'appPortfolio': Portfolio,
    'appStocks': Stocks,
    'appSharedBottomNav': sharedBottomNav
  }
 
}
</script>

<style>

</style>
