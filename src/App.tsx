import "./App.css";
import WeatherApp from "./components/WeatherApp";

function App() {
  return (
    <>
      <div className="h-full w-full absolute flex justify-center items-center  bg-gradient-to-tr from-[#0F2027] via-[#203A43] to-[#2C5364] ">
        <WeatherApp />
      </div>
    </>
  );
}

export default App;
