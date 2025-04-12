import AreaChart from '@/pages/Home/components/AreaChart';
import DualAxesChart from '@/pages/Home/components/DualAxesChart';
import LineChart from '@/pages/Home/components/LineChart';
import PieChart from '@/pages/Home/components/PieChart';
import RadarChart from '@/pages/Home/components/RadarChart';
import {
  DollarOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Col, Row } from 'antd';
import React from 'react';
import styles from '../index.less';
const Dashboard: React.FC = () => {
  const list = [
    {
      title: 'Today’s Sales',
      content: '$10,000',
      persent: '+30%',
      icon: <DollarOutlined />,
    },
    {
      title: 'Today’s Users',
      content: '30,100',
      persent: '+20%',
      icon: <UserOutlined />,
    },
    {
      title: 'New Clients',
      content: '+1,600',
      persent: '+30%',
      icon: <TeamOutlined />,
    },
    {
      title: 'New Orders',
      content: '20,200',
      persent: '+40%',
      icon: <ShoppingCartOutlined />,
    },
  ];

  return (
    <Row gutter={[20, 20]}>
      {list.map((item, index) => (
        <Col key={index} xs={24} sm={24} md={24} lg={12} xl={6}>
          <ProCard boxShadow>
            <h3>{item.title}</h3>
            <div className="number">
              <Row align="middle" gutter={[24, 0]}>
                <Col xs={18} className="font-medium">
                  <span className="text-4xl">{item.content}</span>
                  <span className="text-green-600 ml-2">{item.persent}</span>
                </Col>
                <Col xs={6} className="flex justify-end">
                  <div
                    className="bg-blue-400 text-white text-2xl flex items-center justify-center rounded"
                    style={{ width: '40px', height: '40px' }}
                  >
                    {item.icon}
                  </div>
                </Col>
              </Row>
            </div>
          </ProCard>
        </Col>
      ))}
      <Col xs={24} sm={24} md={12}>
        <ProCard
          title="월별 보안 이벤트 발생 건수"
          boxShadow
          className={styles.cardHeight}
        >
          <DualAxesChart />
        </ProCard>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProCard
          title="탐지된 위협 건수 추이"
          boxShadow
          className={styles.cardHeight}
        >
          <LineChart />
        </ProCard>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <ProCard
          title="탐지된 위협 유형 분포"
          boxShadow
          className={styles.cardHeight}
        >
          <PieChart />
        </ProCard>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <ProCard title="위험 등급 분포" boxShadow className={styles.cardHeight}>
          <RadarChart />
        </ProCard>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <ProCard
          title="위협 대응 진행 상황"
          boxShadow
          className={styles.cardHeight}
        >
          <AreaChart />
        </ProCard>
      </Col>
    </Row>
  );
};

export default Dashboard;
