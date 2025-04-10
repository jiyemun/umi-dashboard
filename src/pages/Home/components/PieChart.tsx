import { Pie } from '@ant-design/plots';

export const PieChart: React.FC = () => {
  const data = [
    { type: '실시간 위협 방지', value: 38 },
    { type: '악성 행위기반 방지', value: 30 },
    { type: '랜섬웨어 방지', value: 15 },
    { type: '네트워크 보호', value: 10 },
    { type: 'MBR 보호', value: 7 },
  ];

  const config = {
    height: 300,
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
    tooltip: 'type',
  };
  return <Pie {...config} />;
};

export default PieChart;
