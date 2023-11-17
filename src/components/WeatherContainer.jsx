import React, { useEffect, useState } from "react";
import InputWeather from "./InputWeather";
import axios from "axios";
import Weather from "./Weather";

const WeatherContainer = ({ city }) => {
  const indices = [1, 9, 17, 25, 33];
  const [weather, setWeather] = useState();
  const [cityData, setCityData] = useState();
  let k = -1;
  const weatherCard =
    weather &&
    indices.map((e) => {
      const weatherInfo = {
        date: weather[e].dt_txt,
        maxTemp: weather[e].main.temp_max,
        lowTemp: weather[e].main.temp_min,
        humidity: weather[e].main.humidity,
        pressure: weather[e].main.pressure,
        seaLevel: weather[e].main.sea_level,
        icon: weather[e].weather[0].icon,
        main: weather[e].weather[0].main,
        description: weather[e].weather[0].description,
        sunrise: cityData.sunrise,
        sunset: cityData.sunset,
      };

      for (let i = k + 1; i <= e; i++) {
        if (weather[i].main.temp_max > weatherInfo.maxTemp)
          weatherInfo.maxTemp = weather[i].main.temp_max;
        if (weather[i].main.temp_min < weatherInfo.minTemp)
          weatherInfo.minTemp = weather[i].main.temp_min;
      }
      k = e;
      return <Weather key={weatherInfo.date} data={weatherInfo} />;
    });

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=d03e82f98419372d31747c5e300d9434&units=metric`
      );
      const data = res.data;
      if (data.list.length == 0) return "";
      setCityData(data.city);
      weatherData(data.list);
      setWeather(data.list);
    };
    fetchWeather();
  }, [city]);
  const weatherData = (data) => {
    let date = new Date(data[0].dt * 1000).getDay();
    const indices = data
      .map((e, i) => {
        const eDate = new Date(e.dt * 1000).getDay();
        if (date !== eDate) {
          date = eDate;
          return i;
        }
      })
      .filter((e) => e !== undefined);
  };

  return (
    <div className="flex  gap-5 items-center px-6 md:justify-center w-screen overflow-y-auto">
      <InputWeather />
      <div className="flex gap-4">{true && weatherCard}</div>
    </div>
  );
};

export default WeatherContainer;
