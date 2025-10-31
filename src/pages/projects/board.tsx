import { PageContainer } from '@ant-design/pro-components';
import { Card, Row, Col, Select, Space, Tag } from 'antd';
import { Column, Bar } from '@ant-design/plots';
import { useState } from 'react';

const { Option } = Select;

const ProjectBoard: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState('1');

  // 项目列表
  const projects = [
    { id: '1', name: '清华大学在线教育平台' },
    { id: '2', name: '北京大学智慧校园系统' },
    { id: '3', name: '复旦大学数字图书馆' },
    { id: '4', name: '上海交通大学选课系统' },
    { id: '5', name: '浙江大学实验室管理' },
  ];

  // 任务进展数据（柱状图）
  const taskProgressData = [
    { stage: '项目启动', count: 3, status: '已完成' },
    { stage: '需求分析', count: 5, status: '已完成' },
    { stage: '系统设计', count: 8, status: '已完成' },
    { stage: '前端开发', count: 12, status: '进行中' },
    { stage: '后端开发', count: 15, status: '进行中' },
    { stage: 'UI设计', count: 6, status: '已完成' },
    { stage: '测试', count: 4, status: '待开始' },
    { stage: '运维', count: 2, status: '待开始' },
  ];

  // 项目成员甘特图数据（使用日期格式）
  const ganttData = [
    {
      name: '张三 - 项目经理',
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      role: '项目启动',
      days: 167
    },
    {
      name: '李四 - 前端开发',
      startDate: '2024-02-01',
      endDate: '2024-06-15',
      role: '前端开发',
      days: 135
    },
    {
      name: '王五 - 后端开发',
      startDate: '2024-01-20',
      endDate: '2024-06-20',
      role: '后端开发',
      days: 152
    },
    {
      name: '赵六 - UI设计师',
      startDate: '2024-01-15',
      endDate: '2024-03-30',
      role: 'UI设计',
      days: 75
    },
    {
      name: '孙七 - 测试工程师',
      startDate: '2024-04-01',
      endDate: '2024-06-30',
      role: '测试',
      days: 91
    },
    {
      name: '周八 - 运维工程师',
      startDate: '2024-05-15',
      endDate: '2024-06-30',
      role: '运维',
      days: 46
    },
  ];

  // 任务进展柱状图配置
  const taskProgressConfig = {
    data: taskProgressData,
    xField: 'stage',
    yField: 'count',
    colorField: 'status',
    label: {
      text: 'count',
      position: 'top' as const,
      style: {
        fill: '#000',
        fontSize: 14,
        fontWeight: 'bold',
      },
    },
    legend: {
      position: 'top' as const,
    },
    color: ({ status }: any) => {
      if (status === '已完成') return '#52c41a';
      if (status === '进行中') return '#1890ff';
      return '#faad14';
    },
    axis: {
      y: {
        title: '任务数量',
      },
      x: {
        title: '任务阶段',
      },
    },
  };

  // 甘特图配置 - 转换数据为时间范围格式
  const ganttChartData = ganttData.map(item => ({
    name: item.name,
    startDate: new Date(item.startDate).getTime(),
    endDate: new Date(item.endDate).getTime(),
    role: item.role,
    startDateStr: item.startDate,
    endDateStr: item.endDate,
    days: item.days,
  }));

  const ganttConfig = {
    data: ganttChartData,
    xField: 'name',
    yField: ['endDate', 'startDate'],
    colorField: 'role',
    label: {
      text: (datum: any) => `${datum.days}天`,
      position: 'inside' as const,
      style: {
        fill: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
      },
    },
    axis: {
      y: {
        title: '时间轴',
        labelFormatter: (val: number) => {
          const date = new Date(val);
          return `${date.getMonth() + 1}/${date.getDate()}`;
        },
      },
      x: {
        title: '项目成员',
      },
    },
    legend: {
      position: 'top' as const,
      title: '任务类型',
    },
    tooltip: {
      title: 'name',
      items: [
        {
          field: 'startDateStr',
          name: '开始时间',
        },
        {
          field: 'endDateStr',
          name: '结束时间',
        },
        {
          field: 'days',
          name: '工作天数',
          valueFormatter: (v: number) => `${v} 天`,
        },
      ],
    },
  };

  return (
    <PageContainer
      title="项目看板"
      subTitle="任务进展与成员甘特图"
      extra={[
        <Space key="filter">
          <span>选择项目：</span>
          <Select
            value={selectedProject}
            onChange={setSelectedProject}
            style={{ width: 250 }}
          >
            {projects.map(p => (
              <Option key={p.id} value={p.id}>{p.name}</Option>
            ))}
          </Select>
        </Space>,
      ]}
    >
      {/* 任务进展看板 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={24}>
          <Card
            title="任务进展看板"
            extra={
              <Space>
                <Tag color="green">✅ 已完成</Tag>
                <Tag color="blue">🔄 进行中</Tag>
                <Tag color="orange">⏰ 待开始</Tag>
              </Space>
            }
          >
            <div style={{ width: '100%', height: 400 }}>
              <Column {...taskProgressConfig} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* 项目成员甘特图 */}
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="项目成员甘特图" extra={<Tag color="green">时间安排</Tag>}>
            <div style={{ width: '100%', height: 450 }}>
              <Bar {...ganttConfig} />
            </div>
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ProjectBoard;

