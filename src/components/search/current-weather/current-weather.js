import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">City</p>
          <p className="weather-descripstion">Temp</p>
        </div>
      </div>
      <img alt="weather" className="weather-icon" src="icons/01d.png" />
    </div>
  );
};  

export default CurrentWeather;
