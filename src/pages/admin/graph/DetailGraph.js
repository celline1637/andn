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
        let data = [...res.data.result];
        for (let i of data) {
          i.data = Object.values(i.data);
        }
        setChartData({ series: data });
      });
  };

  console.log(chartData);

  useEffect(() => {
    getChartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return chartData ? (
    <Chart
      series={chartData.series}
      options={STYLE.options}
      type="line"
      height={350}
    />
  ) : null;
}

export default Graph;

const STYLE = {
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: true,
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
      text: '옵션 별 판매량',
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
      categories: ['지지난달', '지난달', '이번 달'],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val;
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
        // {
        //   title: {
        //     formatter: function (val) {
        //       return val;
        //     },
        //   },
        // },
      ],
    },
    grid: {
      borderColor: '#f1f1f1',
    },
  },
};
