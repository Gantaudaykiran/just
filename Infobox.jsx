import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infobox.css'


export default function Infobox({info}){

  let url="https://imgs.search.brave.com/qXdPjUr9t1pUyM_j4rkYNMRJhELgRJcIFb3FLtEyrQE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdW1t/ZXItZHVzdC1zdG9y/bS1yb2xsaW4tNTAx/OTYxNzkuanBn"
  // console.log(Info)
  // let info={
  //     city:"Delhi",
  //     feels_like:"mist",
  //     humidity: 17.1,
  //     temp:88,
  //     temp_max:17.05,
  //     temp_min:17.05,
  //     description:17.05,
  //   }
  
  return (
    <div className='infobox'>
    <h2>Weather conditions</h2>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temprature={info.temp}&deg;C</p>
          <p>Humidity:{info.humidity}</p>
          <p>Min Temp={info.temp_max}&deg;C</p>
          <p>Max Temp{info.temp_min}&deg;C</p>
          <p>The weather can be described as <i>{ info.feels_like} </i>this and feels like this {info.description }</p>
        </Typography>
      </CardContent>
    </Card>
  </div>);
}





