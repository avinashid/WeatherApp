import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Cookies from "js-cookie";
import axios from "axios";

const CitySearch = ({ changeWeather }) => {
  const [city, setCity] = useState(Cookies.get("currentCity") || "New Delhi");
  const [err, setErr] = useState("");
  const [cityData, setCityData] = useState({
    name: "",
    state: "",
    lat: "",
    lon: "",
    country: "",
  });

  useEffect(() => {
    setErr("Loading");
    const data = async () => {
      const res = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=d03e82f98419372d31747c5e300d9434`
      );

      setCity("");
      setCityData(res.data[0]);
      changeWeather(res.data[0]);
      setErr("")
    };
    data();
  }, []);

  const handleCity = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=d03e82f98419372d31747c5e300d9434`
    );
    if (res.data.length == 0) {
      setErr("City Not found");
      return "";
    }
    Cookies.set("currentCity", city);
    setCityData(res.data[0]);
    setCity("");
    changeWeather(res.data[0]);
  };
  const getDegree = (deg) => {
    const degree = Math.floor(deg);
    const minute = Math.floor((deg - degree) * 60);
    const second = Math.floor(((deg - degree) * 60 - minute) * 60);
    return `${degree}° ${minute}' ${second}"`;
  };
  return (
    <div>
      <div className="flex justify-between px-4 md:flex-row flex-col md:mt-12 gap-4 mb-2 md:px-20">
        <div className="text-3xl font-bold flex  order-2 md:order-1 gap-3 mx-1">
          <div>
            <FaLocationDot />
          </div>
          <div className="text-2xl font-semibold">
            <div>
              {err ||
                `${cityData.name}, ${cityData.state}, ${cityData.country}`}
            </div>
            {cityData.lat && (
              <div className="font-light text-gray-400 text-base">
                {cityData.lat &&
                  !err &&
                  `${getDegree(cityData.lat)} N & ${getDegree(cityData.lon)} S`}
              </div>
            )}
          </div>
        </div>
        <div className="w-fit m-auto mt-6 md:order-1 md:m-0 md:mt-1">
          <form
            onSubmit={handleCity}
            className="bg-white p-3  px-12 rounded-xl shadow-md flex items-center justify-between"
          >
            <input
              className="focus:outline-none placeholder:italic"
              placeholder="Search your city here..."
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <button type="submit">
              <FaMagnifyingGlass />
            </button>
          </form>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CitySearch;
