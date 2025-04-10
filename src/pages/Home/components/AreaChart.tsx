import { Area } from '@ant-design/plots';

export const AreaChart: React.FC = () => {
  const config = {
    height: 300,
    data: [
      { year: '2021', value: 15900 },
      { year: '2022', value: 17409 },
      { year: '2023', value: 17000 },
      { year: '2024', value: 32040 },
      { year: '2025', value: 33233 },
    ],
    xField: 'year',
    yField: 'value',
    shapeField: 'hvh',
    label: {
      text: 'value',
      style: {
        fontSize: 10,
      },
    },
    style: {
      opacity: 0.4,
    },
    axis: {
      y: { labelFormatter: '~s' },
    },
    line: {},
  };
  return <Area {...config} />;
};

export default AreaChart;
