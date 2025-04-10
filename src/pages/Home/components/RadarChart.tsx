import { Radar } from '@ant-design/plots';

export const RadarChart: React.FC = () => {
  const data = [
    { name: 'Low', count: 320 },
    { name: 'Medium', count: 360 },
    { name: 'High', count: 210 },
    { name: 'Critical', count: 200 },
  ];

  const config = {
    height: 300,
    data: data.map((d) => ({ ...d, star: Math.sqrt(d.count) })),
    xField: 'name',
    yField: 'count',
    area: {
      style: {
        fillOpacity: 0.2,
      },
    },
    scale: {
      x: {
        padding: 0.5,
        align: 0,
      },
      y: {
        nice: true,
      },
    },
    axis: {
      x: {
        title: false,
        grid: true,
      },
      y: {
        gridAreaFill: 'rgba(0, 0, 0, 0.04)',
        label: false,
        title: false,
      },
    },
  };
  return <Radar {...config} />;
};
export default RadarChart;
