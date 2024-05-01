import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "@/components/Title";
import SearchBar from "@/components/SearchBar";
import Weather from "@/components/Weather";

const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
const initialCity = "Taipei";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=zh_tw`
      );
      // 溫度：預設為 standard 絕對溫度，參數 units=metric 轉換溫度 (攝氏 metric)
      setWeatherData(response.data);
    } catch (error) {
      console.error("抓取天氣數據時出現錯誤：", error);
    }
  };

  useEffect(() => {
    fetchWeatherData(initialCity);
  }, []);

  return (
    <>
      <div className="space-y-4">
        <Title />
        <SearchBar fetchWeatherData={fetchWeatherData} />
        {weatherData && <Weather weatherData={weatherData} />}{" "}
      </div>
    </>
  );
}
