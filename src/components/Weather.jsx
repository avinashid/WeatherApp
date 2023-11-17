import React, { useState } from "react";
import { FaMoneyBillWheat } from "react-icons/fa6";

const Weather = ({ data }) => {
  const celToFar = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };
  console.log(data);
  const iconUrl = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
  const sunset = new Date(data.sunset * 1000).toLocaleTimeString();
  const sunrise = new Date(data.sunrise * 1000).toLocaleTimeString();

  return (
    <div className="">
      <div className="font-bold mt-8 bg-slate-300 flex justify-center rounded-t-md">
        {data.date.slice(0, 11)}
      </div>
      <div className="bg-green-950 text-white font-bold rounded-b-lg shadow-xl p-3 px-10 ">
        <div className="flex  justify-center  items-center my-8 mt-4">
          <img className="" src={iconUrl} alt="Weather Icon" />
          <div className="text-xl">{data.main}</div>
        </div>
        <hr />
        <div className="flex flex-col gap-6 justify-center items-center my-8">
          <div>
            {Math.round(data.maxTemp)} C / {Math.round(celToFar(data.maxTemp))}F
          </div>
          <div>
            {Math.round(data.lowTemp)} C / {Math.round(celToFar(data.lowTemp))}F
          </div>
          <div>{data.humidity}</div>
          <div>{sunrise.toUpperCase()}</div>
          <div>{sunset.toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
