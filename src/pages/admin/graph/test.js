import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Chart from 'react-apexcharts';

function Test() {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Session Duration',
        data: [45, 52, 38],
      },
      {
        name: 'Page Views',
        data: [35, 41, 62],
      },
    ],
  });
  return (
    <Chart
      series={chartData.series}
      options={STYLE.options}
      type="line"
      height={350}
    />
  );
}

export default Test;

const STYLE = {
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5],
    },
    title: {
      text: 'Page Statistics',
      align: 'left',
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return (
          val +
          ' - ' +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ''
        );
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: [
        '01 Jan',
        '02 Jan',
        '03 Jan',
        '04 Jan',
        '05 Jan',
        '06 Jan',
        '07 Jan',
        '08 Jan',
        '09 Jan',
        '10 Jan',
        '11 Jan',
        '12 Jan',
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + ' (mins)';
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val + ' per session';
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: '#f1f1f1',
    },
  },
};
