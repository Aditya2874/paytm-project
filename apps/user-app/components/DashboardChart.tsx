"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions, ChartData } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardChart: React.FC = () => {
  const data: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
    datasets: [
      {
        label: 'Balance',
        data: [65, 590, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return <Line data={data} />;
};

export default DashboardChart;
