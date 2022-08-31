import React, { useEffect, useState } from 'react'

function App() {

 const [city, setcity] = useState("");
 const [search, setsearch] = useState("");
 


 useEffect(  ()=> {
  const fetchApi = async ()=> {
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8d70776cdeb446bad57294026fff78b7`;
    const response = await fetch(url);
    const resJson = await response.json();
    setcity(resJson);
    
   
  };
  fetchApi();
    

 }, [search])



  return (
    <div className="app">
      <div className=" container search">
      <form className="example" >
        <input type="text" placeholder="Enter Location"
   name="search" className='input' onChange={(event) =>{setsearch(event.target.value)}}/>
      </form>
     </div>

     { !city? ( 
     <p>No Data</p>) : (
      <>
      <div className=" container city">
      {city.name}
     </div>
     <div className=" container temprature">
      {city.main ? <h1>{city.main.temp} °C</h1> : null}
    
      </div>
      <div className=" container tempratures">
      <span>
        <h4> {city.main ? <h4>{city.main.temp_min}°C</h4> : null}</h4>
       <p>Min Temp</p> 
      </span>

      <span>
        <h4> {city.main ? <h4>{city.main.temp_max}°C</h4> : null}</h4>
       <p>Max Temp</p> 
      </span>
    
      </div>
      <div className=' container weather'>
<h4> {city.weather ? <h4>{city.weather[0].main}</h4> : null}</h4>
</div>

     <div className="  content">
      <span>
        <h4> {city.main ? <h4>{city.main.feels_like}°C</h4> : null}</h4>
       <p>Feels Like</p> 
      </span>

      <span>
        <h4> {city.main ? <h4>{city.main.humidity}%</h4> : null}</h4>
       <p>Humdity</p> 
      </span>

      <span>
        <h4> {city.wind ? <h4>{city.wind.speed}MPH.</h4> : null}</h4>
       <p>Wind</p> 
      </span>
     </div>
     </>
     )


     } 

    </div>
  )
}

export default App
