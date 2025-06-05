
import Searchbox from './Searchbox'
import Infobox from './Infobox'
import { useState } from 'react';
export default  function Weatherapp(){
  let [info,setCity]=useState({})
  // console.log(info)
  let cityHandle=(val)=>{
   setCity(val)
   return null
  }
  return(
  <div>
    <Searchbox cityHandle={cityHandle}/>
    <Infobox info={info}/>
  </div>);
}