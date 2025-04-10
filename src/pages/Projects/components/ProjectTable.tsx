import { ProTable } from '@ant-design/pro-components';
import { Tag } from 'antd';
import dayjs from 'dayjs';

type ProjectItem = {
  id: number;
  name: string;
  date: string;
  techStack: string[];
  description: string;
};

export const ProjectTable = () => {
  return (
    <ProTable<ProjectItem>
      columns={[
        {
          title: '프로젝트 이름',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '날짜',
          dataIndex: 'dateRange',
          key: 'dateRange',
          valueType: 'dateRange',
          hideInTable: true,
          search: {
            transform: (value: string[]) => ({
              startDate: value?.[0],
              endDate: value?.[1],
            }),
          },
        },
        {
          title: '날짜',
          dataIndex: 'date',
          key: 'date',
          valueType: 'date',
          sorter: (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix(),
          hideInSearch: true,
        },
        {
          title: '기술 스택',
          dataIndex: 'techStack',
          key: 'techStack',
          valueType: 'select',
          fieldProps: {
            mode: 'multiple',
            options: [
              { label: 'Vue.js', value: 'Vue.js' },
              { label: 'JavaScript', value: 'JavaScript' },
              { label: 'TypeScript', value: 'TypeScript' },
              { label: 'CSS', value: 'CSS' },
              { label: 'Git', value: 'Git' },
              { label: 'Zpline', value: 'Zpline' },
              { label: 'Paper.js', value: 'Paper.js' },
              { label: 'Ant Design Vue', value: 'Ant Design Vue' },
              { label: 'CoreUI', value: 'CoreUI' },
              { label: 'Konva.js', value: 'Konva.js' },
              { label: 'Stomp.js', value: 'Stomp.js' },
              { label: 'Mock Server', value: 'Mock Server' },
              { label: 'RxJS', value: 'RxJS' },
              { label: 'Rete.js', value: 'Rete.js' },
              { label: 'Svelte.js', value: 'Svelte.js' },
              { label: 'React.js', value: 'React.js' },
              { label: 'Vite', value: 'Vite' },
              { label: 'Tailwind CSS', value: 'Tailwind CSS' },
              { label: 'Ant Design', value: 'Ant Design' },
              { label: 'SignalR', value: 'SignalR' },
              { label: 'Zustand', value: 'Zustand' },
            ],
          },
          render: (_, record) => (
            <>
              {record.techStack.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </>
          ),
        },
        {
          title: '설명',
          dataIndex: 'description',
          key: 'description',
          search: false,
        },
      ]}
      request={async (params) => {
        const res = await fetch('mock/project.json');
        const data: ProjectItem[] = await res.json();

        const { name, startDate, endDate, techStack } = params;
        let filtered = [...data];

        if (name) {
          filtered = filtered.filter((item) =>
            item.name.toLowerCase().includes(name.toLowerCase()),
          );
        }

        if (startDate && endDate) {
          filtered = filtered.filter((item) => {
            return (
              dayjs(item.date).isAfter(dayjs(startDate).subtract(1, 'day')) &&
              dayjs(item.date).isBefore(dayjs(endDate).add(1, 'day'))
            );
          });
        }

        if (techStack && techStack.length > 0) {
          filtered = filtered.filter((item) =>
            techStack.every((stack: any) => item.techStack.includes(stack)),
          );
        }

        filtered.sort((a, b) => b.id - a.id);

        return {
          data: filtered,
          success: true,
          total: filtered.length,
        };
      }}
      rowKey="id"
      pagination={{
        pageSize: 10,
      }}
      search={{
        labelWidth: 'auto',
      }}
      dateFormatter="string"
      headerTitle="프로젝트 목록"
    />
  );
};
