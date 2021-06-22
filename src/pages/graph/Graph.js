import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function Graph() {
  const [chartData, SetChartData] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: ['1월', '2월', '3월'],
      },
    },
    series: [
      {
        name: '판매량',
        data: [30, 50, 91],
      },
    ],
  });

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      width="500"
    />
  );
}

export default Graph;
