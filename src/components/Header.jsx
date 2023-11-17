import React from "react";
import { WiCloudRefresh } from "react-icons/wi";

import { WiDayLightWind } from "react-icons/wi";

const Header = () => {
  return (
    <div className="bg-slate-400 flex justify-between px-6 py-2 text-white items-center ">
      <div className="text-2xl font-bold  flex gap-3 items-center ">
        <WiDayLightWind className="text-4xl" />
        <div>Weather 99</div>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="text-2xl text-slate-400 bg-white rounded-full p-1">
          <WiCloudRefresh />
        </div>
        <div className="font-bold ">Refresh</div>
      </div>
    </div>
  );
};

export default Header;
