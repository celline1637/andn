import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components/macro';

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
    <Wrapper>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="500"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet()};
`;

export default Graph;
