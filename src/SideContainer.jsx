import React from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import TelegramIcon from '@mui/icons-material/Telegram';
import LightModeIcon from '@mui/icons-material/LightMode';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SideContainer = ()=>{
    return(
        <>
        <div className="sidebar">
            <div className="box1">
            <div className="addbtn"><AddBoxIcon/></div>
            <div className="icons">
                <div className="mainbtn"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <div className="btnel">
                <p>°C</p><div className="btnbox"><div className="btn"></div></div><p>°F</p>
            </div>
            </div>
           <div className="box2">
                <div>
                    <h4><span><TelegramIcon/></span> NEW YORK, USA</h4>
                    <p>Today 28 Sept</p>
                </div>
                <div>
                    <div className="sunrise">
                    <div><LightModeIcon/></div><p>07:19</p>
                    </div>
                    <div className="sunset">
                    <div><WbTwilightIcon/></div><p>19:32</p>
                    </div>
                    
                </div>
           </div>
           <div className="box3">
            <div className="arrow"><ArrowBackIosIcon/></div> <p className="celsius">27°</p><div className="arrow"><ArrowForwardIosIcon/></div>
            </div>
            <p><span><LightModeIcon/></span> Sunny</p>   
            <div className="image">
              
            </div>
        </div>
        </>
    )
}


export default SideContainer