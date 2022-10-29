import React from 'react';
import ReactECharts from 'echarts-for-react';
import "../css/BarChart.css"
import chartdata from "../data/Data"

let alcoholData=[]
let avgMalicAcidData=[]

//to get alcohol data into a separate array
{chartdata.map((item)=>{
    return (alcoholData.push(Number(item.Alcohol)))
})}

//to get average of malic acid data and make a separate array
while(chartdata.length!==0){
  let avgMalAcid=  chartdata.reduce((a,b)=>a+Number(b["MalicAcid"]),0)/chartdata.length
    
    avgMalicAcidData.push(avgMalAcid)
    
    chartdata.shift()
}


const BarChart = () => {
    
    
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      
      data: alcoholData,
     
    },
    yAxis: {},
    series: [
      {
        data: avgMalicAcidData,
        type: 'bar',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <>
  <section id='Bar-charts'>
  <h2 className='bar-chart-label'>Alcohol Vs Average Malic Acid Bar Chart</h2>
<h1 className='MalicAcidText'>Average Malic Acid</h1>
<h1 className='AlcoholText'>Alcohol</h1>
  <ReactECharts option={options} />
  </section>
  </>;
};

export default BarChart;