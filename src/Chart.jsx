import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS,Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement,Filler } from "chart.js";
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import LightModeIcon from '@mui/icons-material/LightMode';

ChartJS.register(
    Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement,Filler
)

const Chartbox = () => {

  const [weather, setWeather] = useState([]);

  
  const mockWeatherData = [
    {per:"23%",temp:27},
    {per:"29%",temp:28},
    {per:"58%",temp:28},
    {per:"75%",temp:29},
    {per:"33%",temp:30},
    {per:"20%",temp:29},
    {per:"73%",temp:29},
    {per:"49%",temp:28},
  ];

  useEffect(()=>{
    setWeather(mockWeatherData)
  },[])

  const chartData = {
    labels:weather.map((date)=>date.temp),
    datasets: [
      {
        label:'Temperature (°C) at Time',
        data: weather.map((temp)=>temp.temp),
        borderColor: 'rgb(92,156,229)',
        backgroundColor: 'rgb(92,156,229)',
        borderWidth: 1,
        fill:true,
        showLine:false
      },
    ],
  };

 

  const options = {
    scales: {
      y:{
        display:false
      }
    },
  };

  return (
    <div className="graph">
      <div className="time">
        <div>
          <p>Now</p>
          <LightModeIcon/>
          <p>27</p>
        </div>
        <div>
          <p>11:00</p>
          <LightModeIcon/>
          <p>28</p>
        </div>
        <div>
          <p>12:00</p>
          <FilterDramaIcon/>
          <p>28</p>
        </div>
        <div>
          <p>13:00</p>
          <FilterDramaIcon/>
          <p>29</p>
        </div>
        <div>
          <p>14:00</p>
          <LightModeIcon/>
          <p>30</p>
        </div>
        <div>
          <p>15:00</p>
          <FilterDramaIcon/>
          <p>29</p>
        </div>
        <div>
          <p>16:00</p>
          <FilterDramaIcon/>
          <p>29</p>
        </div>
        <div>
          <p>17:00</p>
          <LightModeIcon/>
          <p>29</p>
        </div>
      </div>
      <Line data={chartData} options={options}/>
    </div>
  );
}

export default Chartbox;
