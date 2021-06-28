import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useParams } from 'react-router';
import { API } from '../../../config';

function Graph() {
  const [chartData, setChartData] = useState();
  const params = useParams();

  const getChartData = () => {
    fetch(`${API.ADMIN_DETAIL_GRAPH}/${params.id}`, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res => {
        let i = { ...res.data.result };
        i.data = Object.values(res.data.result.data);
        console.log(i);
        setChartData({ series: [i] });
      });
  };

  useEffect(() => {
    getChartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
