import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState ({})
  const [location, setLocation] = useState ('') //state for the location

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=377033de1ffa48f4f164793563f371cc`

const searchLocation = (event) => {
  if(event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}
  return (
  <div className="app">
    <div className="search">
      <input
      value={location}
      onChange={event =>setLocation(event.target.value)}
      onKeyPress={searchLocation}
      placeholder="Enter Location"
      type="text"/>
      </div>
    <div className="container"></div>
    <div className="top">
      <div className="location">
        <p>{data.name}</p>
      </div>
      <div className="temp">
      {/* toFixed permet d'arrondir la temp et pas avoir de 11.11 degres par ex */}
        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1>: null} 
      </div>
      <div className="description">
        {data.weather ? <p>{data.weather[0].main}</p> : null}
      </div>
    </div>

{/* si aucune data n'est entree, ne pas afficher le humidity,ressenti etc */}
{data.name != undefined &&

<div className="bottom">
<div className="feels">
  {data.main ? <p className="bold">{data.main.feels_like.toFixed}°F</p> : null}
  <p>Ressenti</p>
</div>
<div className="humidity">
  {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
<p>Humidity</p>
</div>
<div className="wind">
  {data.wind ? <p className="bold"> {data.wind.speed.toFixed}MPH</p> : null}
<p>Vitesse du vent</p>
</div>
</div>

}


  
</div>)
}

export default App;
