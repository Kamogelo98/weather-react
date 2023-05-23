import React from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner';

export default function Weather(props){
     
    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }


    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=2513f3c728b1b5ff4f4347e1a6af22b8&units=metric`
    axios.get(apiUrl).then(handleResponse);
  
return( 
<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
);
    
}