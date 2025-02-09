import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
export default function WeatherApp(){
    let[weatherInfo,setWeatherInfo]=useState({
        city:"",
        feelslike:null,
        temp:null,
        tempMin:null,
        tempMax:null,
        humidity:null,
        weather:"",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyC8gReZ4RtauxTzgODM1Zi2qt8wx8ZGK1g&s')`, backgroundSize: "cover",}}>
        <SearchBox updateInfo={updateInfo} />
        <br /> <br />
        <InfoBox info={weatherInfo}/>
        </div>
    )
}