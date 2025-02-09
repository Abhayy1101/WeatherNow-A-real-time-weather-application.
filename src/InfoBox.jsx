import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
    const init="https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let rainy="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let hot="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cold="https://images.unsplash.com/photo-1736847303615-051864095c9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    

    if (info.city=="") {
        return null; 
    }
    return(
        <div className="InfoBox">
            <h2 className="heading">Weather Information</h2>

        <div className='cardContainer'>
        <Card className="card" sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80 ? rainy: info.temp>15? hot:cold}
            title="green "
        />
        <CardContent >
            <Typography gutterBottom variant="h6" component="div">
            <b>City: {info.city}  </b>
            {info.humidity>80 ? <ThunderstormIcon/>: info.temp>15? <WbSunnyIcon/>:<AcUnitIcon/>}
           
            <br />
            <b>Weather : <i>{info.weather}</i></b>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary' }} component={"span"}>
                <p><b>Temperature : {info.temp}&deg;C</b></p>
                <p><b>Humidity : {info.humidity}</b></p>
                <p><b>Min Temp : {info.tempMin}&deg;C</b></p>
                <p><b>Max Temp : {info.tempMax}&deg;C</b></p>
                <p><b>The Weather feels like : {info.feelslike}&deg;C</b></p>
            </Typography>
        </CardContent>
       
        </Card>
        </div>

        </div>
    )
}