
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart.js library

const data = {
    labels: ["Blue", "Red", "Yellow", "Green"],
  datasets: [
    {
      label: "Revenue",
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
      data: [12.21, 15.58, 11.25, 8.32],
    },
  ],
};

const PieChart = () => {
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
        type: "pie",
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

export default PieChart;
