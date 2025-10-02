import React from 'react'
import TickerCard from './TickerCard.jsx'

const stocks = [
  { ticker: 'NVDA' },
  { ticker: 'TSLA'},
  { ticker: 'GOOGL' },
  { ticker: 'AMZN' },
  { ticker: 'GLD' },
  { ticker: 'AAPL' },
  { ticker: 'SPLG'},
  { ticker: '005930.KS' },
//  { ticker: '005930.KS', name: '삼성전자', currentPrice: 85400, previousClose: 84700 },
]

function App() {
  return (
    <div className='bg-blue-100 min-h-screen p-8 flex flex-col items-center'>
      <h1 className="text-2xl font-bold text-red-800 mb-10"> 오늘의 주식 시세</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
        {
          stocks.map(stock => (
            <TickerCard 
              key={stock.ticker} 
              ticker={stock.ticker} 
            />
          ))
        }
      </div>
    </div>
  )
}



export default App