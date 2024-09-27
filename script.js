// const city=document.querySelector(".city");
// const temperature=document.querySelector(".temp");
// const humidity=document.querySelector(".humidity");
// const wind=document.querySelector(".wind");
// const searchBox=document.querySelector(".search input");
// const searchBtn=document.querySelector(".search button");

async function getWheather(City_Name){
  const apiKey="267718b976e74b3e638e57314f7971b4"
  const request_url=`httpS://api.openweathermap.org/data/2.5/weather?q=${City_Name}&appid=${apiKey}&units=metric`
  const response= await fetch(request_url);
  return await response.json();
}

document.querySelector(".search button")
.addEventListener("click",async()=>{
  const City_Name=document.querySelector(".search input").value;
  // console.log(City_Name);
  if(City_Name!=null) {
    var data = await getWheather(City_Name);
    console.log(data);
    if(data.name==undefined){
      document.querySelector(".city").innerHTML="city not found"
    }
    else{
      document.querySelector(".city").innerHTML=data.name;
      document.querySelector(".wind").innerHTML=data.wind.speed+"km\h";
      document.querySelector(".temp").innerHTML=data.main.temp+"°C";
      document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
      document.querySelector(".sky").innerHTML=data.weather[0].main;
      const weathericon=document.querySelector(".weathericon")
      // console.log(typeof(data.weather[0].main));
      switch(data.weather[0].main){
        case "Clouds":
          weathericon.src="img/cloudy.png";
          console.log("Clouds");
          break;
        case "Rain":
          weathericon.src="img/heavy-rain.png";
          console.log("Rain");
          break;
        case "Clear":
          weathericon.src="img/Weather_fabicon.png";
          console.log("Clear");
          break;
        case "Drizzle":
          weathericon.src="img/rain.png";
          console.log("Drizzle");
          break;
        case "Haze":
          weathericon.src="img/haze.png";
          console.log("Haze");
          break;
        default:
         weathericon.src="";

      }
      
    }
  }
  
  
})
