import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox({updateInfo}){

    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="4682428d583fadca761258593bbc08c6";
   

    let getWeatherInfo=async ()=>{
        try{
            let result=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await result.json();
          
            console.log(jsonResponse);
    
            let res={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelslike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            }
            console.log(res);
            return res;
        }
        catch(err)
        {
            throw err;
        }
      
    };
   

    let handleChange=(event)=>{
        setCity(event.target.value);
    };

    let handleSubmit=async (event)=>{
        try{

            event.preventDefault();
            console.log(city);
            setError(false);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
            
        }
        catch(err)
        {
            setError(true);
        
        }
       
        
        
    };

    return (
        <div className="SearchBox">
            <h2 className="heading"> Weather App</h2>
            <form onSubmit={handleSubmit}>
                <TextField 
        
                id="city" 
                label="City Name" 
                variant="outlined" 
                required
                value={city}
                onChange={handleChange}
                InputLabelProps={{
                    style: { color: "pink" }  // Change label color
                }}/>

                <br /><br />

                <Button variant="contained" type="submit" >Search</Button>
                {error && <p style={{color:"red"}}>No such place exists !</p>}
            </form>
        </div>
    )
}