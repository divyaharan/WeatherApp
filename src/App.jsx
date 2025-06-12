import React, { useState } from "react";


const api = {
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    key: "751ae0e498f0157f458b33c3465ea511",
};

const App = () => {
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState("");

    function handleSearch() {
        fetch(`${api.baseUrl}?q=${city}&appid=${api.key}&units=metric`)
            .then((res) => res.json())
            .then((d) => {
                setWeather(d);
                console.log(d);
            })
            .catch((err) => console.error("Error fetching data:", err));
    }

    return (
        <div className="weatherimage">
         <div className="container">
         <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" className='inputbox' />
            <button onClick={handleSearch}>Search</button>
            
            {weather.main ? (
                <div className="details">
                    
                    <h2> {weather.name}</h2>
                    <p> {weather.weather && weather.weather[0].main}</p>
                    <p> {weather.weather && weather.weather[0].description}</p>
                    <h1> {weather.main.temp}°C</h1>
                    <p>lon:{weather.coord.lon} lat:{weather.coord.lat}</p>
                    
                   
                </div>
            ) : (
                <p>Not found</p>
            )}
         </div>
           
        </div>
    );
};

export default App;