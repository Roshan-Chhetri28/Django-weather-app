//write a function to change the background image according to the temperature
function changeackgroundImage(temp) {
    if (temp < 5) {
        document.getElementById('bg').style.backgroundImage = "url('/static/snow.jpg')";
        // document.getElementById('bg').style.height = "100%";
        // document.getElementById('bg').style.width = "80vw";
        document.getElementById('bg').style.backgroundRepeat = "norepeate";
        document.getElementById('bg').style.backgroundPosition = "center";
    } else if (temp <= 25 & temp > 5) {
        document.getElementById("bg").style.backgroundImage = "url('/static/cloudy.jpg')";
        document.getElementById('bg').style.backgroundRepeat = "norepeate";
        document.getElementById('bg').style.backgroundPosition = "center";
    } else if (temp > 25) {
        document.getElementById('bg').style.backgroundImage = "url('/static/IMG_20221006_125400.jpg')";
        document.getElementById('bg').style.backgroundRepeat = "norepeate";
        document.getElementById('bg').style.backgroundPosition = "center";
    }
}

var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4127d9aaedmsh90252c1c176ba0bp1ce763jsn88cae1107e5f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather=(city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
    .then((response) => {
        console.log(response);
        cityname.innerHTML=city
        temp.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        changeackgroundImage(response.temp);
})
    .catch((err) => console.error(err));
    
}

submit.addEventListener("click", (e)=>{
    e.preventDefault('')
    getweather(city.value)
})
getweather("Soreng")