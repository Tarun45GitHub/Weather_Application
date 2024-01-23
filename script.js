const location_input=document.getElementById("location_input");
const search_Btn=document.getElementById("search_Btn");
const weather_data=document.getElementById("weather_data");
const data_name=document.getElementById("data_name");
const data_details=document.getElementById("data_details");



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
  if(data.name==undefined){
    data_name.innerHTML=`City not found`;
    data_details.innerText=``;
  }

 else{ data_name.innerHTML=`Weather of ${data.name}`;
  data_details.innerText=`Sky Conditions: ${data.weather[0].description}
                       Temperature: ${data.main.temp}C
                       Humidity:${data.main.humidity}%
                       Wind Speed: ${data.wind.speed }km/h`;}

})