import { useState } from "react";

const formatDate = (currentDate) => {
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

const InputWeather = ({ updateWeather }) => {
  const [date, setDate] = useState(formatDate(new Date()));
  const handleDate = (e) => {
    setDate(e.target.value);
    updateWeather(date);
  };
  return (
    <div className="flex flex-col gap-6 mt-20 font-medium font-serif">
      <div>
        <div className="text-sm text-gray-400 font-serif">Select Date</div>
        <input
          className="p-2 bg-slate-200 outline-black outline rounded"
          type="date"
          name=""
          value={date}
          onChange={handleDate}
          id=""
        />
      </div>
      <div>High temperature</div>
      <div>Low temperature</div>
      <div>Humidity</div>
      <div>Sunrise time</div>
      <div>Sunset temperature</div>
    </div>
  );
};

export default InputWeather;
