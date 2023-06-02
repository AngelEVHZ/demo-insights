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
export default function BarStack() {
  const labels = ['Visa', 'Master Card', 'American Express'];
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'BCP',
        data: [55, 55, 100],
        backgroundColor: 'rgba(18, 51, 97)',
      },
      {
        type: 'bar' as const,
        label: 'BBVA',
        data: [25, 45],
        backgroundColor: 'rgba(74, 127, 200)',
      },
      {
        type: 'bar' as const,
        label: 'Interbank',
        data: [17],
        backgroundColor: 'rgba(65, 102, 155)',
      },
      {
        type: 'bar' as const,
        label: 'Otras',
        data: [3],
        backgroundColor: 'rgba(132, 150, 174, 1)',
      },


    ],
  };

  return (
    <>
      <Chart type='bar' data={data} options={options}/>
    </>
  )
}
