import { DualAxes } from '@ant-design/plots';
import React from 'react';

const DualAxesChart: React.FC = () => {
  const eventData = [
    { time: '1월', value: 100, type: 'Low' },
    { time: '1월', value: 60, type: 'Medium' },
    { time: '1월', value: 30, type: 'High' },
    { time: '2월', value: 120, type: 'Low' },
    { time: '2월', value: 80, type: 'Medium' },
    { time: '2월', value: 40, type: 'High' },
    { time: '3월', value: 90, type: 'Low' },
    { time: '3월', value: 70, type: 'Medium' },
    { time: '3월', value: 30, type: 'High' },
    { time: '4월', value: 70, type: 'Low' },
    { time: '4월', value: 50, type: 'Medium' },
    { time: '4월', value: 10, type: 'High' },
  ];
  const config = {
    height: 300,
    xField: 'time',
    children: [
      {
        data: eventData,
        type: 'interval',
        yField: 'value',
        stack: true,
        colorField: 'type',
        style: { maxWidth: 80 },
        label: { position: 'middle' },
        scale: { y: { domainMax: 250 } },
      },
    ],
    theme: {
      category10: ['#A0C4FF', '#BDB2FF', '#FFADAD', '#FFD6A5'],
    },
  };

  return <DualAxes {...config} />;
};

export default DualAxesChart;
