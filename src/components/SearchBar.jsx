import React, { useState } from "react";

export default function SearchBar({ fetchWeatherData }) {
  const [city, setCity] = useState("");

  const searchCity = (event) => {
    if (event.key === "Enter") {
      fetchWeatherData(city); // 調用傳遞的函數來獲取資料
      setCity(""); // 清除輸入框
    }
  };

  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white shadow-md"
          placeholder="Enter City..."
          value={city}
          onChange={(event) => setCity(event.target.value)}
          onKeyDown={searchCity}
        />
      </div>
    </div>
  );
}
