import { Line } from '@ant-design/plots';

export const LineChart: React.FC = () => {
  const data = [
    { year: '2017', value: 100 },
    { year: '2018', value: 110 },
    { year: '2019', value: 200 },
    { year: '2020', value: 300 },
    { year: '2021', value: 400 },
    { year: '2022', value: 500 },
    { year: '2023', value: 600 },
    { year: '2024', value: 700 },
    { year: '2025', value: 1000 },
  ];
  const config = {
    data,
    height: 300,
    xField: 'year',
    yField: 'value',
    point: {
      shapeField: 'square',
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
  };
  return <Line {...config} />;
};

export default LineChart;
