import baseURL from './env.js';

async function weatherApi() {
  const response = await fetch(baseURL);
  const weather = await response.json()
  return console.log("-------------\n", weather.current.temp_c, "\n-------------");
};

weatherApi();
