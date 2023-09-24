import  { useRef } from "react";
import Clear_icon from "../assets/clear.png";
import Humidity_icon from "../assets/humidity.png";
import Wind_icon from "../assets/wind.png";
import Search_icon from "../assets/search.png";

function WeatherApp() {
  const api_key = "dec191961fd56485973094690e9816d1";

  const cityRef = useRef(null);
  const humidityRef = useRef(null);
  const windRef = useRef(null);
  const tempRef = useRef(null);
  const locationRef = useRef(null);
  const skyRef = useRef(null);

  const search = async () => {
    if (!cityRef.current.value) {
      return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityRef.current.value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    humidityRef.current.textContent = `${data.main.humidity}%`;
    windRef.current.textContent = `${Math.round(data.wind.speed)} km/h`;
    tempRef.current.textContent = `${Math.round(data.main.temp)}°C`;
    locationRef.current.textContent = data.name;
    skyRef.current.textContent = `${data.weather[0].main}`;

  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-[#12c2e9] to-[#2C5364] h-2/5 w-3/5 rounded-3xl shadow-2xl text-white">
        <div className="">
          <div className="flex justify-between items-center flex-col mb-12">
            <div className="flex justify-between items-center">
              <div className="flex flex-row space-x-4">
                <div className="text-4xl font-bold flex flex-col justify-center items-center">
                  <p id="temp" ref={tempRef}>
                 32°C
                  </p>
                  <p id="location" ref={locationRef}>
                    London
                  </p>
                </div>
                <div className="text-4xl font-bold"><br/>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-12">
              <img src={Clear_icon} className="w-50 h-50" alt="Weather Icon" />
              <div className="text-xl font-semibold" ref={skyRef}>
  cloud
</div>
            </div>
            <div className="flex flex-row space-x-22">
              <div className="text-xl font-semibold flex flex-row justify-center items-center space-x-3">
                <img src={Humidity_icon} className="mr-3" alt="Humidity Icon" />
                <p id="humidity" ref={humidityRef}>
                  32%
                </p>
              </div>
              <div className="text-xl font-semibold flex flex-row justify-center items-center space-x-3">
                <img src={Wind_icon} className="mr-3" alt="Wind Icon" />
                <p id="wind" ref={windRef}>
                  12 km/h
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="search-box flex justify-center items-center flex-row space-x-4">
          <input
            id="search-box-input"
            ref={cityRef}
            type="text"
            className="w-full rounded-3xl indent py-2 shadow-2xl text-black"
            placeholder="Search place..."
            autoComplete="off"
          />
          <button
            className="cursor-pointer bg-white rounded-full h-9 w-10 justify-center items-center p-2 shadow-2xl"
            onClick={() => {
              search();
            }}
          >
            <img src={Search_icon} alt="Search Icon"  />
            
          </button>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
