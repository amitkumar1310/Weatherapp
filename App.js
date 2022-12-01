import React,{useState} from 'react'
import axios from 'axios'
import './App.css';
function App() {
  

  const[city,setcity]=useState("")
  const[data,setdata]=useState("")
 
  const getweatherdetails=(cityname)=>{
    const apikey="2921494b5e94ad2c2249664019b5b19f"
    if(!cityname) {
      const apikey="2921494b5e94ad2c2249664019b5b19f"
      const apiurl="http://api.openweathermap.org/data/2.5/weather?q=Patna&appid="+apikey
    axios.get(apiurl).then((response)=>{
    console.log("response",response.data)
    setdata(response.data)
  })
    }
    const apiurl1="http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid="+apikey
    axios.get(apiurl1).then((response)=>{
    console.log("response",response.data)
   
    setdata(response.data)
  })
  .catch((err)=>{
    console.log("err",err)
  })
  
  }

  const handlechange=(e)=>{
    console.log("value",e.target.value)
    setcity(e.target.value)
  }
  const handleClick=()=>{
    getweatherdetails(city)
  
  }

  return (
    <div className='container2'>
      
      <nav id='navbar'>
        <div className='logo'>
       <div className='img'> <img src="img1.png" alt="Weather" /></div>
       </div>
       <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#information">more</a></li>
        <li><a href="#fact1">fact</a></li>
        {/* <li><a href="#links">links</a></li> */}
        <div>
          {data.name!==undefined &&
        <li><a href="#">Country-:{data?.sys?.country} (lat-:{data?.coord?.lat} lon-:{data?.coord?.lon})</a></li>
}
        </div>
        </ul>
      </nav>
      
      <div className='container'>
      <section id='Home'>
      <h1 className='container1'>Weather App</h1>
<input type="text" className='firstinput' placeholder='Enter the city Name' value={city} onChange={handlechange} />
<button className='btn' type='submit' onClick={handleClick}>get details</button>
{data.name!==undefined &&
<div>
<h1 className='output' >{data?.name}</h1>
<h1 className='output'>{((data?.main?.temp-273.15).toFixed(2))}°C</h1>
<h2 className='feelslike'>Feels_Like-:{((data?.main?.feels_like-273.15).toFixed(2))}°C</h2>
</div>
}
</section>
</div>
<section id='information'>
  <div className='table1'>
    
    <table>
      {data.name!==undefined &&
    <div className='more'>
      <body>
        <tr className='tab1'>
        <div className='tab2'><th>Humidity-:</th><th>{data?.main?.humidity}</th></div>
        </tr>
        <tr className='tab1'>
        <div className='tab2'> <th>Pressure-:</th><th>{data?.main?.pressure} </th></div>
        </tr>
        <tr className='tab1'>
        <div className='tab2'><th>Max_temp-:</th><th>{((data?.main?.temp_max-273.15).toFixed(2))}°C</th></div>
        </tr>
        <tr className='tab1'>
        <div className='tab2'><th>Min_temp-:</th><th>{((data?.main?.temp_min-273.15).toFixed(2))}°C</th></div>
        </tr>
        <tr className='tab1'>
        <div className='tab2'><th>Visibility-:</th><th>{data?.visibility}</th></div>
        </tr>
        <tr className='tab1'>
        <div className='tab2'><th>Wind_speed-:</th><th>{data?.wind?.speed}</th></div>
        </tr>
        <tr className='tab1'>
        <div className='tab2'><th>Wind_deg-:</th><th>{data?.wind?.deg}</th></div>
        </tr>
      </body>
      </div>
}
    </table>
  </div>

</section>
<section id='fact1'>
  <div className='inf'>
  <div className='fact'>
    Wind comes from changes in pressure.
  </div>
<div className="fact">
  cirrus clouds are made of ice crystals.
</div>
<div className="fact">
  Hail develops during the thunderstorms.
</div>
<div className="fact">
  Elements of weather which affect us:
</div>
<div className="fact">temperature,wind,snow or rain,and sunlight and clouds.</div>
</div>
</section>
      </div>
      
    )
}

export default App