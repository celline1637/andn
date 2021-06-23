import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components/macro';

function Graph() {
  const [chartData, setChartData] = useState();

  const getChartData = () => {
    fetch('/data/detailGraphData.json')
      .then(res => res.json())
      .then(res => {
        let i = { ...res.result };
        i.data = Object.values(res.result.data);
        setChartData({ series: [i] });
      });
  };

  useEffect(() => {
    getChartData();
  }, []);
  return chartData ? (
    <Chart options={STYLE.options} series={chartData.series} type="line" />
  ) : null;
}

export default Graph;

const STYLE = {
  options: {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['5월', '6월', '7월'],
    },
  },
};
