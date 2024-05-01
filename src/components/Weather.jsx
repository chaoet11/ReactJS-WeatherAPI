import React from "react";
import dayjs from "dayjs";

export default function Weather({ weatherData }) {
  if (!weatherData || !weatherData.weather) {
    return <div>No weather data available.</div>;
  }

  const dataTimestamp = weatherData?.dt;
  const formattedDateTime = dataTimestamp
    ? dayjs.unix(dataTimestamp).format("MM-DD HH:MM")
    : "N/A";

  return (
    <div className="w-[500px] h-[250px] bg-gray-200 shadow-lg rounded-xl m-auto relative px-6 top-[10%]">
      <div className="flex justify-between w-full">
        <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
          <div className="flex flex-col items-start justify-between h-full">
            <div>
              <p className="text-black text-xl">
                {weatherData.name}, {weatherData.sys.country}
              </p>
              <p className="text-black text-sm">
                {weatherData.weather[0].description}
              </p>
            </div>
            <div>
              <h1 className=" text-black text-6xl font-semibold">
                {weatherData.main.temp.toFixed()}°C
              </h1>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between items-end">
          {/* weather icon */}
          <div className="relative">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className="w-[120px]"
            />
          </div>
          <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
            <div className="flex justify-between gap-x-8">
              <p className="text-black">Date Time</p>
              <p className="text-black font-bold w-20">{formattedDateTime}</p>
            </div>
            <div className="flex justify-between gap-x-8">
              <p className="text-black">Main</p>
              <p className="text-black font-bold w-20">
                {weatherData.weather[0].main}
              </p>
            </div>
            <div className="flex justify-between gap-x-8">
              <p className="text-black">Feels Like</p>
              <p className="text-black font-bold w-20">
                {weatherData.main.feels_like.toFixed()}°C
              </p>
            </div>
            <div className="flex justify-between gap-x-8">
              <p className="text-black">Humidity</p>
              <p className="text-black font-bold w-20">
                {weatherData.main.humidity}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
