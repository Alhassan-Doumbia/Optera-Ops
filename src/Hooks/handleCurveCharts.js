// Fonction pour mettre à jour les données du graphique en fonction du nom
import datas from "../data/userData.json";  // données du JSON representant une réponse API à manipuler 
import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Enregistrer les composants nécessaires de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const updateCurveChart=(name="raissa")=>{
  const apiRes = datas; // Simulant un appel API pour le moment.
  let chartData = apiRes.find((element) => element.ops_name.toLowerCase() === name.toLowerCase());
  if (!chartData) {
      console.error("Aucune donnée trouvée pour", name);
      return null;
  }
  let chartLabel = chartData.avg_call_time_evo.map((element) => element.date);
  let chartAverageTime = chartData.avg_call_time_evo.map((element) => element.time);

  const data = {
    labels: chartLabel,
    datasets: [{
      label: `temps moyens/appel (${name})`,
      data: [...chartAverageTime,400],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
  console.log(chartAverageTime);
  return data;

}

