import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components/macro';

function CampGraph() {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: '히어메이드',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: '아로마티카',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: '에코스토어',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          },
        },
      },
    },
  });

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={350}
    />
  );
}

export default CampGraph;
