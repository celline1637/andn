import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

function CampGraph() {
  const [chartData, setChartData] = useState();

  const getChartData = () => {
    fetch('/data/campGraphData.json')
      .then(res => res.json())
      .then(res => {
        let data = [...res.result];
        for (let i of data) {
          i.data = Object.values(i.data);
        }
        setChartData({ series: data });
      });
  };

  useEffect(() => {
    getChartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return chartData ? (
    <Chart
      options={STYLE.options}
      series={chartData?.series}
      type="bar"
      height={350}
    />
  ) : null;
}

export default CampGraph;

const STYLE = {
  options: {
    theme: {
      palette: 'palette1',
    },
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
      categories: ['May', 'Jun', 'Jul'],
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val}개`;
        },
      },
    },
  },
};
