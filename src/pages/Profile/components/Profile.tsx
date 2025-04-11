import {
  CalendarOutlined,
  EnvironmentOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Avatar, Col, Row, Tag, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from '../index.less';

const { Title, Text } = Typography;

interface Project {
  id: number;
  name: string;
  date: string;
  techStack: string[];
  description: string;
}

const techColors: Record<string, string> = {
  'React.js': 'blue',
  'Vue.js': 'green',
  'Svelte.js': 'volcano',
  'Angular.js': 'red',
  TypeScript: 'geekblue',
  JavaScript: 'gold',
  HTML: 'cyan',
  CSS: 'purple',
  Less: 'orange',
  Bootstrap: 'magenta',
  'Tailwind CSS': 'blue',
  RxJS: 'magenta',
  Vuetify: 'orange',
  'Vben Admin': 'cyan',
  'Ant Design': 'blue',
  'Ant Design Vue': 'blue',
  Konva: 'geekblue',
  CoreUI: 'orange',
  'Paper.js': 'lime',
  'Rete.js': 'cyan',
  Zustand: 'volcano',
  Vite: 'yellow',
  'Web API(Audio)': 'volcano',
  SSE: 'volcano',
  'Stomp.js': 'purple',
  rosLib: 'lime',
  SignalR: 'purple',
  'Mock Server': 'gray',
  MySQL: 'blue',
  MSSQL: 'green',
  Git: 'red',
  Zpline: 'lime',
  SVN: 'gray',
  Figma: 'pink',
};

const techStacksByCategory: Record<string, string[]> = {
  'UI & Framework': [
    'React.js',
    'Vue.js',
    'Angular.js',
    'Svelte.js',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Less',
    'Bootstrap',
    'RxJS',
    'Vuetify',
    'Vben Admin',
    'Ant Design',
    'Ant Design Vue',
    'Tailwind CSS',
    'Konva',
    'CoreUI',
    'Paper.js',
    'Rete.js',
    'Zustand',
    'Vite',
    'Web API(Audio)',
  ],
  'API & Integration': [
    'SSE',
    'Stomp.js',
    'rosLib',
    'SignalR',
    'Mock Server',
    'MySQL',
    'MSSQL',
  ],
  Etc: ['Git', 'Zpline', 'SVN', 'Figma'],
};

export const Profile: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const allTechStacks = Array.from(
    new Set(projects.flatMap((p) => p.techStack)),
  );

  useEffect(() => {
    fetch('mock/project.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Row gutter={[20, 20]}>
      <Col sm={24} md={12} xl={8}>
        <ProCard
          boxShadow
          bodyStyle={{ padding: 0 }}
          className={styles.cardHeight}
        >
          <div className="text-center">
            <div
              style={{ background: '#cbedf5', minHeight: 100 }}
              className="relative"
            >
              <div style={{ height: 150 }}></div>
              <div
                style={{ background: '#ffffff', height: 80 }}
                className="flex flex-wrap justify-center items-end px-4"
              >
                <Title level={4}>문지예</Title>
              </div>
              <Avatar
                size={140}
                src={require('@/assets/jiye.jpg')}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="px-4 pb-4 flex gap-2 flex-col">
              <Text type="secondary">
                Frontend Developer
                <br />
                코드와 사용자 경험 사이의 균형을 추구하는 사람
              </Text>
              <div>
                <EnvironmentOutlined /> 인천, 대한민국
              </div>
              <div>
                <CalendarOutlined /> 1996년 1월 17일
              </div>
              <div>
                <HeartOutlined /> 취미: 테니스, 헬스
              </div>
            </div>
          </div>
        </ProCard>
      </Col>

      <Col sm={24} md={12} xl={16}>
        <ProCard
          title="Technical Skills"
          boxShadow
          className={styles.cardHeight}
        >
          {Object.entries(techStacksByCategory).map(([category, techs]) => (
            <div key={category} className="mb-2">
              <p className="font-medium">{category}</p>
              <p className="flex gap-2 flex-wrap">
                {techs.map((tech, index) => (
                  <Tag
                    key={index}
                    color={
                      allTechStacks.includes(tech)
                        ? techColors[tech] || 'default'
                        : 'default'
                    }
                  >
                    {tech}
                  </Tag>
                ))}
              </p>
            </div>
          ))}
        </ProCard>
      </Col>

      <Col sm={24} md={12} xl={6}>
        <ProCard boxShadow title="🎓 Education" className={styles.cardHeight}>
          <p>
            2014.03 - 2018.02 <br />
            안양대학교 컴퓨터학과 졸업
          </p>
          <p>
            2011.03 - 2014.02 <br />
            가좌고등학교 이과계열 졸업
          </p>
        </ProCard>
      </Col>

      <Col sm={24} md={12} xl={6}>
        <ProCard
          boxShadow
          title="🏅 Certifications"
          className={styles.cardHeight}
        >
          <p>정보처리기사 (2017년 05월 취득)</p>
          <p>ICDL Certificate (2014년 12월 취득)</p>
        </ProCard>
      </Col>

      <Col sm={24} md={12} xl={6}>
        <ProCard boxShadow title="🔧 Projects" className={styles.cardHeight}>
          {projects?.length > 0 &&
            projects
              .slice(0, 3)
              .map((item: Project, index: number) => (
                <p key={index}>📌 {item.name} - Short description</p>
              ))}
        </ProCard>
      </Col>

      <Col sm={24} md={12} xl={6}>
        <ProCard boxShadow title="🤝 Contact" className={styles.cardHeight}>
          <p>✉️ jym6853@gmail.com</p>
          <p>
            <a>🔗 https://github.com/jiyemun</a>
          </p>
          <p>📞 010-9636-2141</p>
        </ProCard>
      </Col>
    </Row>
  );
};
