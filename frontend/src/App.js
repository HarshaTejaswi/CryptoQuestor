import React, { useEffect, useState } from 'react';
import fetchCryptoPrices from './components/CryptoPrices';

const App = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const getPrices = async () => {
      const data = await fetchCryptoPrices();
      if (data) {
        setPrices(data);
      }
    };

    getPrices();
    const interval = setInterval(getPrices, 60000); // Refresh every 60 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD', 
      maximumFractionDigits: 0 
    }).format(num);
  };

  return (
    <div>
      <h1>Crypto Prices</h1>
      <ul>
        {Object.keys(prices).map((crypto) => (
          <li key={crypto}>
            {crypto.charAt(0).toUpperCase() + crypto.slice(1)}: {formatNumber(prices[crypto].usd)} <br />
            Market Cap: {formatNumber(prices[crypto].usd_market_cap)} <br />
            24h Change: {prices[crypto].usd_24h_change.toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
