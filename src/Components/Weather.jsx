import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const Weather =() => {
    const navigate=useNavigate();

    const [data,setData] = useState('');
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5e0baeb78bb1cb1cbba053001fc24375`;


    const searchLocation = (event) => {
        if (event.key === 'Enter'){
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(1, response.data)
            })
        }  
        
    }

   


  return (
    <>
       <div className='nav-container'>
            <button type="submit" onClick={() => navigate("/")}>Back</button>
            <div className="search">
                <input type="text" value={location} onChange={event => setLocation(event.target.value)} placeholder='Enter Location' onKeyDown={searchLocation}/>
            </div>
        </div>
        
        <div className="location">
            <h1>{data.name}</h1>
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1>: null}
        </div>
        <div className="weather-description">
            <div className="temp">
            {data.main ? <h2>{data.main.feels_like.toFixed()}°F</h2>: null}
                <p>Feels like</p>
            </div>
            <div className="humidity">
            {data.main ? <h2>{data.main.humidity}%</h2>: null}
                <p>Humidity</p>
            </div>
            <div className="wind">
            {data.main ? <h2>{data.wind.speed}MPH</h2>: null}
                <p>Wind Speed</p>
            </div>
        </div>
    </>
  )
}

export default Weather

