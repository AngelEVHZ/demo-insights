"use client";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);
export default function Bar() {
  const labels = ['2023 - 01', '2023 - 02', '2023 - 03', '2023 - 04', '2023 - 05'];
  const options = {
 
  };
  const data = {
    labels,
    legend: {
      position: 'right',
    },
    datasets: [
      {
        type: 'line' as const,
        label: 'Tasa de aceptación neta Trax',
        borderColor: 'rgb(140, 140, 140)',
        borderWidth: 3,
        fill: false,
        data: [6, 8, 2, 3, 1],
      },
      {
        type: 'bar' as const,
        label: 'Aprobada',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(4, 50, 89)',
      },
      {
        type: 'bar' as const,
        label: 'Declinada',
        data: [6, 8, 2, 3, 1],
        backgroundColor: 'rgba(54, 136, 244)',
      },


    ],
  };

  return (
    <>
      <Chart type='bar' data={data} options={options} />
    </>
  )
}
