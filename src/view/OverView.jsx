import React, { useRef, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { updateCurveChart } from "../Hooks/handleCurveCharts";

function OverView() {
    const curveChartRef = useRef(null);
    const profile = "diakité";
    const [curveChartData, setCurveChartData] = useState(null);

    useEffect(() => {
        const curveData = updateCurveChart(profile);
        setCurveChartData(curveData);
    }, [profile]);

    const curveChartOption = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
    };

    return (
        <>
            <section className="w-full h-fit px-4 flex flex-col gap-4">
                <div id="evolution" className="w-full h-fit flex flex-col gap-4">
                    <h2 className="font-semibold text-[20px]">Votre évolution</h2>
                    <div className="w-[90%] h-fit text-content font-content bg-white rounded-lg px-4 py-4">
                        {curveChartData ? (
                            <Line
                                ref={curveChartRef}
                                data={curveChartData}
                                options={curveChartOption}
                            />
                        ) : (
                            <p>Aucune donnée trouvée pour {profile}</p>
                        )}
                    </div>
                </div>

                <div id="leaderboard">
                  <h2 className="font-semibold text-[20px]">Classement</h2>

                </div>


            </section>
        </>
    );
}

export default OverView;
