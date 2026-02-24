import './current-weather.css';

const CurrentWeather =() =>{
return (
    <div className ="weather"> 
     <div className ="top"> 
        <p className="city">City</p> 
        <p className="weather-descripstion">Temp</p> 
     </div>
     <img alt ="weather" className ="weather-icon" src="icons/01d.png"/> 

    </div>
);
}

export default CurrentWeather;