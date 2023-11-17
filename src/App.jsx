import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import CitySearch from "./components/CitySearch";
import WeatherContainer from "./components/WeatherContainer";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState();
  const changeWeather = (cityData) => {
    console.log(cityData);
    setCity(cityData);
  };
  return (
    <div>
      <Header />
      <CitySearch changeWeather={changeWeather} />
      {city && <WeatherContainer city={city} />}
    </div>
  );
};

export default App;
