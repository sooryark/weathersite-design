import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import personimage from "./images/person.avif"
import Chartbox from "./Chart";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Weather from "./Weather";


const MainContainer = ()=>{
    
    return(
        <>
        <div className="maincontainer">
            <div className="navbar">
                <div>
                <h4>Welcome back soorya!</h4>
                <p>check out today's weather information</p>
                </div>
                <div>
                 <div className="personicon">
                    <MoreHorizIcon/>
                    <img src={personimage} alt="person" id="personimg"/>
                 </div>
                </div>
                
            </div>
            <div className="chartbox">
            <div className="graphnav">
        <p>Upcoming Hours</p>
        <div style={{display:"flex",gap:"5px"}}>
          <div className="graphbtn">Rain Precipitation <KeyboardArrowDownIcon/> </div>
          <div className="graphbtnnext">Next days <NavigateNextIcon/></div>
        </div>
      </div>
            <Chartbox/>
            </div>
            <div>
            <p style={{marginLeft:"30px",paddingTop:"20px",fontWeight:"bold"}}>More details of today's Weather</p>
            <Weather/>
            </div>
           
        </div>
        </>
    )
}

export default MainContainer