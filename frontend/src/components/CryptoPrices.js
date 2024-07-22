import axios from 'axios';

const fetchCryptoPrices = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true');
    return response.data;
  } catch (error) {
    console.error("Error fetching data from CoinGecko API:", error);
    return null;
  }
};

export default fetchCryptoPrices;
