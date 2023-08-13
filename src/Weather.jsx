import React from "react";
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

const Weather = ()=>{
    return(
        <>
         
        <div className="weatherdata">
          <div className="weathercards">
             <div className="card">
                <div style={{display:"flex",justifyContent:"space-around",padding:"5px"}}>
                <p>Humidity</p>
                <WaterIcon className="weathericon"/>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px",paddingTop:"5px"}}>
                <p style={{fontSize:"24px",fontWeight:"bold"}}>82%</p><p>bad</p>
                </div>

             
               <div style={{display:"flex",justifyContent:"center",gap:"10px",textAlign:"center",paddingTop:"5px",color:"gray",fontSize:"14px"}}>
                <div>
                    <p>good</p>
                    <div className="range"></div>
                </div>
                <div>
                    <p>normal</p>
                    <div className="range"></div>
                </div>
                <div>
                    <p>bad</p>
                    <div className="rangeel">
                        <div className="fill"></div>
                    </div>
                </div>
               </div>
             </div>
         
        
             <div className="card">
                <div style={{display:"flex",justifyContent:"space-around",padding:"5px"}}>
                <p>Wind</p>
                <AirIcon className="weathericon"/>
                </div>
                <div className="airrangebox">
                    <p className="speed1">0</p>
                    <p  className="speed2">5</p>
                    <p  className="speed3">20</p>
                    <p  className="speed4">30</p>
                    <p  className="speed5">40</p>
                    <p  className="speed6">50</p>
                    <div className="arrow"></div>
                    <div className="dot"></div>
                     <p>8km/h</p> 
                </div>

             </div>
          
          <div className="card"> 
          <div style={{display:"flex",justifyContent:"space-around",padding:"5px"}}>
                <p>Precipitation</p>
                <ThunderstormIcon className="weathericon"/>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px",paddingTop:"5px"}}>
                <p style={{fontSize:"24px",fontWeight:"bold"}}>1.4 cm</p>
                </div>
                <div className="rainbox">
                    <div>
                        <p>0</p>
                    <div className="rainrange1"></div>
                    </div>
                    <div>
                        <p>10</p>
                    <div className="rainrange2"></div>
                    </div>
                    <div>
                        <p>20</p>
                    <div className="rainrange"></div>
                    </div>
                    <div>
                        <p>30</p>
                    <div className="rainrange"></div>
                    </div>
                    <div>
                        <p>40</p>
                    <div className="rainrange"></div>
                    </div>
                    <div>
                        <p>50</p>
                    <div className="rainrange"></div>
                    </div>
                    <div>
                        <p>60</p>
                    <div className="rainrange"></div>
                    </div>
                    <div>
                        <p>70</p>
                    <div className="rainrange"></div>
                    </div>
                    <div>
                        <p>80</p>
                    <div className="rainrange"></div>
                    </div>
                    <div>
                        <p>90</p>
                    <div className="rainrange"></div>
                    </div>
                    
                    
                </div>
          </div>
          <div className="card">
          <div style={{display:"flex",justifyContent:"space-around",padding:"5px"}}>
                <p>UV index</p>
                <WbSunnyIcon className="weathericon"/>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px",paddingTop:"5px"}}>
                <p style={{fontSize:"24px",fontWeight:"bold"}}>4</p><p>medium</p>
                </div>
                <div className="uvindexbox">
                    <div>
                        <p>0-2</p>
                    <div className="uvindex1"></div>
                    </div>
                    <div>
                        <p>2-4</p>
                    <div className="uvindex2"></div>
                    </div>
                    <div>
                        <p>4-6</p>
                    <div className="uvindex"></div>
                    </div>
                    <div>
                        <p>6-8</p>
                    <div className="uvindex"></div>
                    </div>
                    <div>
                        <p>11+</p>
                    <div className="uvindex"></div>
                    </div>
                </div>
          </div>
          <div className="card">
          <div style={{display:"flex",justifyContent:"space-around",padding:"5px"}}>
                <p>Feels like</p>
                <ThermostatIcon className="weathericon"/>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px",paddingTop:"5px"}}>
                <p style={{fontSize:"24px",fontWeight:"bold",marginBottom:"20px"}}>30°</p>
                </div>
                <div className="temprange">
                    <p className="temp1">0°</p>
                    <p className="temp2">25°</p>
                    <p className="temp3">50°</p>
                </div>
          </div>
          <div className="card">
          <div style={{display:"flex",justifyContent:"space-around",padding:"5px"}}>
                <p>chance of rain</p>
                <UmbrellaIcon className="weathericon"/>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px",paddingTop:"5px"}}>
                <p style={{fontSize:"24px",fontWeight:"bold",marginBottom:"20px"}}>42%</p>
                </div>
                <div className="rainlevel">
                    <p className="level">0%</p>
                    <p className="level1">25%</p>
                    <p className="level2">50%</p>
                    <p className="level3">75%</p>
                    <p className="level4">100%</p>
                </div>
          </div>
          </div>
        </div>
        </>
    )
}

export default Weather

