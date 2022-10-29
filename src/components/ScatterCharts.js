import React from 'react';
import ReactECharts from 'echarts-for-react';
import "../css/Charts.css"
import chartdata from "../data/Data"

let hueData=[]
let colorIntensityData=[]

//to get hue data and ColorIntensity data into a separate array
{chartdata.map((item)=>{
    return (hueData.push(Number(item.Hue)) ,
    colorIntensityData.push(Number(item.ColorIntensity)))
})}


const Charts = () => {
    
    
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      
      data: colorIntensityData,
     
    },
    yAxis: {},
    series: [
      {
        data: hueData,
        type: 'scatter',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <>
  <section id='charts'>
  <h2 className='scater-chart-label'>Color Intensity Vs Hue Scatter Chart</h2>
<h1 className='hueText'>Hue</h1>
<h1 className='colorIntensityText'>Color Intensity</h1>
  <ReactECharts option={options} />
  </section>
  </>;
};

export default Charts;