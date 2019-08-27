export const dowMixin = {
   data() {
      return {
         dowStocks: [
            'MMM', 'AXP', 'AAPL', 'BA', 'CAT', 'CVX', 'CSCO',
            'KO', 'DIS', 'DWDP', 'XOM', 'GS', 'HD', 'IBM', 'INTC'
         ],
         headers: [
            {
              text: 'Company Name',
              align: 'left',
              sortable: false,
              value: 'companyName'
            },
            { text: 'Symbol', value: 'symbol' },
            { text: 'Latest Price', value: 'latestPrice' },
            { text: 'Change', value: 'change' },
            { text: 'Percent Change', value: 'changePercent' },
            { text: '52 Week High', value: 'week52High' },
            { text: '52 Week Low', value: 'week52Low'}
         ],
         mobileHeaders: [
            {
              text: 'Company Name',
              align: 'left',
              sortable: false,
              value: 'companyName'
            },
            { text: 'Symbol', value: 'symbol' },
            { text: 'Latest Price', value: 'latestPrice' },
            { text: 'Change', value: 'change' }
         ]
      }
   }
}