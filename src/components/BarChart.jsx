import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart.js library

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
    },
  ],
};

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const renderChart = () => {
      const chartRefCurrent = chartRef.current.getContext("2d");

      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'category', // Ensure "category" scale is registered
          },
        },
      };

      new Chart(chartRefCurrent, {
        type: "bar",
        data: data,
        options: chartOptions,
      });
    };

    renderChart();

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      // Retrieve the chart instance from the canvas element
      const chartInstance = Chart.getChart(chartRef.current);
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;
