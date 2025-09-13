import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; // <-- add this line
const app = express();

app.use(cors()); // <-- add this line

let fun = async () => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=7d'; 
  // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&price_change_percentage=1h';

  const options = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'Authorization': 'Bearer CG-F8vXb1aFehKu75K9QbVJsC6h'  // <-- use Authorization instead
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }}


app.get('/getcoins', async (req, res) => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h';

   const options = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'Authorization': 'Bearer CG-F8vXb1aFehKu75K9QbVJsC6h'
    }
   }

   const response = await fetch(url, options);

  if (!response.ok) {
    console.log('Error fetching data:', response.statusText);
  }

  const data = await response.json();
  console.log("hello");
  
  console.log(data);
  console.log('Data fetched successfully');
  res.json(data); // now accessible from your frontend
});

app.listen(3000, () => console.log('Server running on port 3000'));