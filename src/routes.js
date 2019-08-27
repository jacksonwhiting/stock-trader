import Home from './pages/home.vue';
import Portfolio from './pages/portfolio.vue';
import Stocks from './pages/stocks.vue';
import Watchlist from './modules/stocks/subPages/stocksWatchlistTable.vue';
import dowStocks from './modules/stocks/subPages/stocksDowTable.vue';


export const routes = [
   {path: '/', component: Home, name: 'home'},
   {path: '/portfolio', component: Portfolio, name: 'portfolio'},
   {path: '/stocks', component: Stocks, name: 'stocks', children: [
      {path: '', component: dowStocks, name: 'dowStocks'},
      {path: 'watchlist', component: Watchlist, name: 'watchlist'}
   ]}
];