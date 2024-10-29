import React, { useRef, useState, useEffect } from "react";
import { updateCurveChart } from "../Hooks/handleCurveCharts";

function OverView() {
    const curveChartRef=useRef(null);
    const profile="a name" ; // sera chargé depuis dans le localStorage ( après quand i ya aura l'API , ça ne sera plus mis dans le ocalstorage mais dans un state ainsi les données sont pas accessibles par l'utilisateur)
    const[curveChartData,setCurveChartData]=useState(null);
    useEffect(()=>{
        const curveData=updateCurveChart(profile);
        setCurveChartData(curveData)
    },[profile]);
    
    const curveChartOption={
        scales:{
          y:{
            beginAtZero:true
          }
          
        }
      }
    
  return (
    <>
      <section className="w-full h-fit px-4">
        <div id="evolution" className="w-full h-fit flex flex-col gap-4">
          <h2 className="font-semibold text-[20px]">Votre évolution</h2>
          <div className="w-[50%] h-full text-content font-content bg-white rounded-lg px-3 py-3">
            {/* {chartData && <Bar ref={chartRef} data={chartData} options={options} />} */}
            {barChartData ? (
              <Line
                ref={curveChartRef}
                data={curveChartData}
                options={curveChartOption}
              />
            ) : (
              <p>Aucune données trouvées pour {profile}</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default OverView;
