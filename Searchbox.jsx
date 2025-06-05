import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css'
import { useState } from 'react';
export default function Searchbox({cityHandle}){
  let [value,setValue]=useState("")
  let API_URL="https://api.openweathermap.org/data/2.5/weather?";
  let API_KEY="56296c3e01f9a5fb4cac2c8c7a1607e3";

  let getWeatherInfo=async()=>{
    let responce=await fetch(`${API_URL}q=${value}&appid=${API_KEY}&units=metric`)
    let res= await responce.json();
    let result={
      city:value,
      feels_like:res.main.feels_like,
      humidity: res.main.humidity,
      temp:res.main.temp,
      temp_max:res.main.temp_max,
      temp_min:res.main.temp_min,
      description:res.weather[0].description
    }
    // console.log(result)
    return result
  }


  let changehandle=(event)=>{
    setValue(event.target.value)
  }

  let handle=async(event)=>{
    event.preventDefault();
  //  console.log(value)
   let info= await getWeatherInfo()
   let v= cityHandle(info)
   setValue('')
  }

 return (
  <div className='searchbox'>
    <h3>Search for the Weather</h3>
    <form onSubmit={handle}>
    <TextField id="city" label="City Name" variant="outlined" value={value}  required  onChange={changehandle}/>
    <br></br><br></br>
    <Button variant="contained" type='submit'>Submit</Button>
    </form>
  </div>
 );
}