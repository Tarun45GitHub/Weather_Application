const location_input=document.getElementById("location_input");
const search_Btn=document.getElementById("search_Btn");
const weather_data=document.getElementById("weather_data");


// const request_url=`http://api.weatherapi.com/v1/current.json?key=1da33a757e3043d98be131231230103&q=$london&aqi=yes`
// const request_url=`http://api.openweathermap.org/data/2.5/weather?q=${location_input}&appid=${apiKey}&units=metric`

async function getWheather(City_Name){
  const apiKey="267718b976e74b3e638e57314f7971b4"
  const request_url=`http://api.openweathermap.org/data/2.5/weather?q=${City_Name}&appid=${apiKey}&units=metric`
  const response= await fetch(request_url);
  return await response.json();
}
 
search_Btn.addEventListener('click',async()=>{
  const City_Name=location_input.value;
  const data=await getWheather(City_Name);
  console.log(data);

  const data_=document.createElement("div")
  weather_data.className="weather_data";
  weather_container.prepend(weather_data);

  const data_name=document.createElement("h2");
  data_name.className="data_name"; 
  weather_data.appendChild(data_name)
  data_name.innerText=`Weather of ${data.name}`;

  const data_details=document.createElement("div");
  data_details.className="data_details";
  weather_data.appendChild(data_details)
  data_name.innerText=`Sky Conditions: ${data.weather[0].description}
                       Temperature: ${data.main.temp}C
                       Wind Speed: ${data.wind.speed }km/h`;

})