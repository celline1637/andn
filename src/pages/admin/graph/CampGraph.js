import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useHistory } from 'react-router';
import { API } from '../../../config';

function CampGraph() {
  const [chartData, setChartData] = useState();
  const history = useHistory();

  const getChartData = () => {
    fetch(API.ADMIN_LIST_GRAPH, {
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'EXPIRED_TOKEN') {
          alert('로그인 권한이 만료되었습니다. 다시 로그인해주세요.');
          localStorage.clear();
          history.push('/');
        }
        if (res.status === 'SUCCESS') {
          let data = [...res.data.result];
          for (let i of data) {
            i.data = Object.values(i.data);
          }
          setChartData({ series: data });
        }
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
