import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import CitySearch from "./components/CitySearch";
import WeatherContainer from "./components/WeatherContainer";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState();
  const changeWeather = (cityData) => {
    setCity(cityData);
  };
  console.log()
  return (
    <div>
      <Header />
      <CitySearch changeWeather={changeWeather} />
      {city!==undefined && <WeatherContainer city={city} />}
    </div>
  );
};

export default App;
