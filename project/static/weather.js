let options1 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4127d9aaedmsh90252c1c176ba0bp1ce763jsn88cae1107e5f",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getweather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options1)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // temp.innerHTML=response.temp
      cityname.innerHTML = city;
      // cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      // wind_degrees2.innerHTML = response.wind_degrees;
      //     sunrise.innerHTML = response.sunrise;
      //     sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

getweather("Soreng");
let opt = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4127d9aaedmsh90252c1c176ba0bp1ce763jsn88cae1107e5f",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
const getweather2 = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    opt
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // temp.innerHTML=response.temp
      cityname2.innerHTML = city;
      // cloud_pct.innerHTML = response.cloud_pct;
      feels_like2.innerHTML = response.feels_like;
      humidity2.innerHTML = response.humidity;
      min_temp2.innerHTML = response.min_temp;
      max_temp2.innerHTML = response.max_temp;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees2.innerHTML = response.wind_degrees;
      // wind_degrees2.innerHTML = response.wind_degrees;
      //     sunrise.innerHTML = response.sunrise;
      //     sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

getweather2("Gangtok");
let opti = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4127d9aaedmsh90252c1c176ba0bp1ce763jsn88cae1107e5f",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
const getweather3 = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    opti
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cityname3.innerHTML = city;
      // cloud_pct.innerHTML = response.cloud_pct;
      feels_like3.innerHTML = response.feels_like;
      humidity3.innerHTML = response.humidity;
      min_temp3.innerHTML = response.min_temp;
      max_temp3.innerHTML = response.max_temp;
      wind_speed3.innerHTML = response.wind_speed;
      wind_degrees3.innerHTML = response.wind_degrees;
      // wind_degrees2.innerHTML = response.wind_degrees;
      //     sunrise.innerHTML = response.sunrise;
      //     sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));;
};
getweather3("Namchi");
