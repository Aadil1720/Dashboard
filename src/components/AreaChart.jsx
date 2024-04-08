
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart.js library

const data = {
  labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
  datasets: [
    {
      label: "Sessions",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
    },
  ],
};

const AreaChart = () => {
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
        type: "line",
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

export default AreaChart;