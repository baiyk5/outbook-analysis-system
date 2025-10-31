import { PageContainer, ProTable, ProColumns } from '@ant-design/pro-components';
import { Tag, Space, Button, Drawer, Descriptions, Timeline, Progress, Card, Row, Col, Statistic, List, Divider, Badge } from 'antd';
import { useState, useRef } from 'react';
import { request } from '@umijs/max';
import {
  EyeOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  DollarOutlined,
  TeamOutlined,
  BugOutlined,
  FileTextOutlined,
  CalendarOutlined,
  RiseOutlined,
  FallOutlined
} from '@ant-design/icons';
import type { ActionType } from '@ant-design/pro-components';
import moment from 'moment';
import { useResponsive, getResponsiveDrawerWidth } from '@/utils/responsive';

interface MemberType {
  id?: number;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  risk?: string;
  riskNote?: string;
  bugCount?: number;
  workDays?: number;
}

interface ProjectType {
  id: string;
  name: string;
  school: string;
  startDate: string;
  endDate: string;
  estimatedDays: number;
  actualDays: number;
  status: string;
  amount: number;
  profit: number;
  members: MemberType[];
  bugs: number | { total: number; byMember: any[] };
  tickets: number | { maintenance: number; repair: number };
}

const Projects: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(null);
  const actionRef = useRef<ActionType>();
  const { isMobile, isTablet, deviceType } = useResponsive();

  // 内联 Mock 数据
  const mockProjects: ProjectType[] = [
    {
      id: '1',
      name: '清华大学在线教育平台',
      school: '清华大学',
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      estimatedDays: 150,
      actualDays: 145,
      status: 'completed',
      amount: 1500000,
      profit: 600000,
      members: [
        {
          id: 1,
          name: '张三',
          role: '项目经理',
          startDate: '2024-01-15',
          endDate: '2024-06-30',
          bugCount: 5,
          workDays: 167,
        },
        {
          id: 2,
          name: '李四',
          role: '前端开发',
          startDate: '2024-01-20',
          endDate: '2024-06-25',
          bugCount: 12,
          workDays: 157,
          riskNote: '需求变更频繁',
        },
        {
          id: 3,
          name: '王五',
          role: '后端开发',
          startDate: '2024-01-20',
          endDate: '2024-06-25',
          bugCount: 6,
          workDays: 157,
        },
      ],
      bugs: { total: 23, byMember: [] },
      tickets: { maintenance: 5, repair: 3 },
    },
    {
      id: '2',
      name: '北京大学智慧校园系统',
      school: '北京大学',
      startDate: '2024-03-01',
      endDate: '2024-08-31',
      estimatedDays: 180,
      actualDays: 120,
      status: 'ongoing',
      amount: 3600000,
      profit: 1440000,
      members: [
        {
          id: 4,
          name: '赵六',
          role: '项目经理',
          startDate: '2024-03-01',
          endDate: '2024-08-31',
          bugCount: 3,
          workDays: 120,
        },
        {
          id: 5,
          name: '孙七',
          role: '架构师',
          startDate: '2024-03-05',
          endDate: '2024-08-31',
          bugCount: 12,
          workDays: 116,
          riskNote: '技术难度较高',
        },
      ],
      bugs: { total: 15, byMember: [] },
      tickets: { maintenance: 3, repair: 2 },
    },
    {
      id: '3',
      name: '复旦大学数字图书馆',
      school: '复旦大学',
      startDate: '2024-02-10',
      endDate: '2024-07-20',
      estimatedDays: 160,
      actualDays: 165,
      status: 'completed',
      amount: 4580000,
      profit: 1832000,
      members: [
        {
          id: 6,
          name: '周八',
          role: '项目经理',
          startDate: '2024-02-10',
          endDate: '2024-07-20',
          bugCount: 8,
          workDays: 161,
        },
        {
          id: 7,
          name: '吴九',
          role: '全栈开发',
          startDate: '2024-02-15',
          endDate: '2024-07-18',
          bugCount: 23,
          workDays: 154,
        },
      ],
      bugs: { total: 31, byMember: [] },
      tickets: { maintenance: 8, repair: 4 },
    },
    {
      id: '4',
      name: '上海交通大学选课系统',
      school: '上海交通大学',
      startDate: '2024-04-01',
      endDate: '2024-09-30',
      estimatedDays: 180,
      actualDays: 195,
      status: 'delayed',
      amount: 5930000,
      profit: 2372000,
      members: [
        {
          id: 8,
          name: '郑十',
          role: '项目经理',
          startDate: '2024-04-01',
          endDate: '2024-09-30',
          bugCount: 10,
          workDays: 183,
          riskNote: '进度延期，需加快开发',
        },
        {
          id: 9,
          name: '王十一',
          role: '前端开发',
          startDate: '2024-04-05',
          endDate: '2024-09-28',
          bugCount: 18,
          workDays: 176,
        },
        {
          id: 10,
          name: '李十二',
          role: '后端开发',
          startDate: '2024-04-05',
          endDate: '2024-09-28',
          bugCount: 14,
          workDays: 176,
        },
      ],
      bugs: { total: 42, byMember: [] },
      tickets: { maintenance: 10, repair: 5 },
    },
    {
      id: '5',
      name: '浙江大学实验室管理',
      school: '浙江大学',
      startDate: '2024-05-01',
      endDate: '2024-10-31',
      estimatedDays: 180,
      actualDays: 90,
      status: 'ongoing',
      amount: 6780000,
      profit: 2712000,
      members: [
        {
          id: 11,
          name: '赵十三',
          role: '项目经理',
          startDate: '2024-05-01',
          endDate: '2024-10-31',
          bugCount: 6,
          workDays: 90,
        },
        {
          id: 12,
          name: '孙十四',
          role: '全栈开发',
          startDate: '2024-05-10',
          endDate: '2024-10-28',
          bugCount: 12,
          workDays: 81,
        },
      ],
      bugs: { total: 18, byMember: [] },
      tickets: { maintenance: 4, repair: 2 },
    },
    {
      id: '6',
      name: '南京大学学生管理系统',
      school: '南京大学',
      startDate: '2024-06-01',
      endDate: '2024-11-30',
      estimatedDays: 180,
      actualDays: 60,
      status: 'ongoing',
      amount: 7460000,
      profit: 2984000,
      members: [
        {
          id: 13,
          name: '钱十五',
          role: '项目经理',
          startDate: '2024-06-01',
          endDate: '2024-11-30',
          bugCount: 4,
          workDays: 60,
        },
        {
          id: 14,
          name: '周十六',
          role: '开发工程师',
          startDate: '2024-06-05',
          endDate: '2024-11-28',
          bugCount: 8,
          workDays: 56,
        },
      ],
      bugs: { total: 12, byMember: [] },
      tickets: { maintenance: 3, repair: 1 },
    },
    {
      id: '7',
      name: '中国科技大学科研平台',
      school: '中国科技大学',
      startDate: '2024-07-01',
      endDate: '2024-12-31',
      estimatedDays: 180,
      actualDays: 30,
      status: 'planning',
      amount: 8200000,
      profit: 3280000,
      members: [],
      bugs: { total: 0, byMember: [] },
      tickets: { maintenance: 0, repair: 0 },
    },
  ];

  // 成员子表格列配置
  const memberColumns: ProColumns<MemberType>[] = [
    {
      title: '成员姓名',
      dataIndex: 'name',
      key: 'name',
      width: 120,
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      width: 120,
    },
    {
      title: '开始时间',
      dataIndex: 'startDate',
      key: 'startDate',
      valueType: 'date',
      width: 120,
    },
    {
      title: '结束时间',
      dataIndex: 'endDate',
      key: 'endDate',
      valueType: 'date',
      width: 120,
    },
    {
      title: '工作天数',
      dataIndex: 'workDays',
      key: 'workDays',
      width: 100,
      render: (text) => `${text || 0} 天`,
    },
    {
      title: 'BUG数',
      dataIndex: 'bugCount',
      key: 'bugCount',
      width: 80,
      render: (text) => <Tag color="red">{text || 0}</Tag>,
    },
    {
      title: '风险备注',
      dataIndex: 'riskNote',
      key: 'riskNote',
      width: 200,
      render: (text) => text ? (
        <span style={{ color: '#ff4d4f' }}>
          <WarningOutlined /> {text}
        </span>
      ) : '-',
    },
  ];

  const columns: ProColumns<ProjectType>[] = [
    {
      title: '项目名称',
      dataIndex: 'name',
      key: 'name',
      fixed: isMobile ? false : 'left',
      width: isMobile ? 150 : 200,
    },
    {
      title: '学校',
      dataIndex: 'school',
      key: 'school',
      width: 150,
      hideInTable: isMobile,
    },
    {
      title: '开始时间',
      dataIndex: 'startDate',
      key: 'startDate',
      valueType: 'date',
      width: 120,
      hideInTable: isMobile,
    },
    {
      title: '结束时间',
      dataIndex: 'endDate',
      key: 'endDate',
      valueType: 'date',
      width: 120,
      hideInTable: isMobile,
    },
    {
      title: '预计天数',
      dataIndex: 'estimatedDays',
      key: 'estimatedDays',
      width: 100,
      render: (text) => `${text} 天`,
      hideInTable: isMobile,
    },
    {
      title: '实际天数',
      dataIndex: 'actualDays',
      key: 'actualDays',
      width: 100,
      render: (text, record) => {
        const isOvertime = record.actualDays > record.estimatedDays;
        return (
          <span style={{ color: isOvertime ? '#ff4d4f' : '#52c41a' }}>
            {text} 天
            {isOvertime && ` (+${record.actualDays - record.estimatedDays})`}
          </span>
        );
      },
      hideInTable: isMobile,
    },
    {
      title: '完成进度',
      key: 'progress',
      width: isMobile ? 120 : 180,
      hideInTable: isMobile,
      render: (_, record) => {
        const percent = record.status === 'completed'
          ? 100
          : Math.min(Math.round((record.actualDays / record.estimatedDays) * 100), 99);

        const isOvertime = record.actualDays > record.estimatedDays;
        const status = record.status === 'completed'
          ? 'success'
          : isOvertime
          ? 'exception'
          : 'active';

        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Progress
              percent={percent}
              size="small"
              status={status}
              strokeColor={
                record.status === 'completed'
                  ? '#52c41a'
                  : isOvertime
                  ? '#ff4d4f'
                  : '#1890ff'
              }
              style={{ flex: 1, margin: 0 }}
            />
            <span style={{
              fontSize: '13px',
              fontWeight: 600,
              color: record.status === 'completed'
                ? '#52c41a'
                : isOvertime
                ? '#ff4d4f'
                : '#1890ff',
              minWidth: '38px',
              textAlign: 'right'
            }}>
              {percent}%
            </span>
          </div>
        );
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: string) => {
        const statusMap: Record<string, { color: string; text: string; icon: any }> = {
          planning: { color: 'blue', text: '规划中', icon: <ClockCircleOutlined /> },
          ongoing: { color: 'processing', text: '进行中', icon: <ClockCircleOutlined /> },
          completed: { color: 'success', text: '已完成', icon: <CheckCircleOutlined /> },
          delayed: { color: 'error', text: '已延期', icon: <WarningOutlined /> },
        };
        const config = statusMap[status] || statusMap.ongoing;
        return <Tag color={config.color} icon={config.icon}>{config.text}</Tag>;
      },
    },
    {
      title: '成交金额',
      dataIndex: 'amount',
      key: 'amount',
      width: 120,
      render: (text) => `¥${text.toLocaleString()}`,
      hideInTable: isMobile,
    },
    {
      title: '预估利润',
      dataIndex: 'profit',
      key: 'profit',
      width: 120,
      render: (text) => `¥${text.toLocaleString()}`,
      hideInTable: isMobile,
    },
    {
      title: 'BUG总数',
      dataIndex: 'bugs',
      key: 'bugs',
      width: 90,
      render: (bugs) => {
        const total = typeof bugs === 'number' ? bugs : bugs.total;
        return <Tag color="red">{total}</Tag>;
      },
      hideInTable: isMobile,
    },
    {
      title: '工单数',
      dataIndex: 'tickets',
      key: 'tickets',
      width: 90,
      render: (tickets) => {
        const total = typeof tickets === 'number'
          ? tickets
          : tickets.maintenance + tickets.repair;
        return <Tag color="orange">{total}</Tag>;
      },
      hideInTable: isMobile,
    },
    {
      title: '成员数',
      dataIndex: 'members',
      key: 'memberCount',
      width: 80,
      render: (members) => <Tag color="blue">{members?.length || 0}</Tag>,
      hideInTable: isMobile,
    },
    {
      title: '操作',
      key: 'action',
      fixed: isMobile ? false : 'right',
      width: isMobile ? 80 : 100,
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            icon={<EyeOutlined />}
            onClick={() => {
              setCurrentProject(record);
              setDrawerVisible(true);
            }}
            size={isMobile ? 'small' : 'middle'}
          >
            {isMobile ? '' : '详情'}
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <PageContainer
      title="项目管理"
      subTitle={isMobile ? "" : "查看和管理所有定制项目"}
      className="mobile-page-header"
    >
      <ProTable<ProjectType>
        columns={columns}
        actionRef={actionRef}
        dataSource={mockProjects}
        rowKey="id"
        search={isMobile ? false : {
          labelWidth: 'auto',
        }}
        pagination={{
          pageSize: isMobile ? 5 : 10,
          simple: isMobile,
        }}
        scroll={{ x: isMobile ? 400 : 1800 }}
        dateFormatter="string"
        toolBarRender={() => [
          <Button key="export" type="primary" size={isMobile ? 'small' : 'middle'}>
            导出数据
          </Button>,
        ]}
        className="mobile-table"
        expandable={{
          expandedRowRender: (record) => {
            if (!record.members || record.members.length === 0) {
              return <div style={{ padding: '16px', color: '#999' }}>暂无成员信息</div>;
            }
            return (
              <ProTable<MemberType>
                columns={memberColumns}
                dataSource={record.members}
                rowKey="id"
                search={false}
                pagination={false}
                options={false}
                showHeader={true}
                style={{ marginBottom: 0 }}
              />
            );
          },
          rowExpandable: (record) => record.members && record.members.length > 0,
        }}
      />

      {/* 项目详情抽屉 */}
      <Drawer
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FileTextOutlined style={{ fontSize: isMobile ? '16px' : '20px', color: '#1890ff' }} />
            <span style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: 600 }}>项目详情</span>
          </div>
        }
        width={getResponsiveDrawerWidth(deviceType)}
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        className="mobile-drawer"
      >
        {currentProject && (
          <div>
            {/* 关键指标卡片 */}
            <Row gutter={isMobile ? [8, 8] : 16} style={{ marginBottom: isMobile ? 12 : 24 }} className="mobile-gutter mobile-statistic">
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card className="mobile-card">
                  <Statistic
                    title="成交金额"
                    value={currentProject.amount}
                    precision={0}
                    prefix={<DollarOutlined />}
                    suffix="元"
                    valueStyle={{ color: '#3f8600', fontSize: isMobile ? '16px' : '20px' }}
                  />
                </Card>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card className="mobile-card">
                  <Statistic
                    title="预估利润"
                    value={currentProject.profit}
                    precision={0}
                    prefix={<RiseOutlined />}
                    suffix="元"
                    valueStyle={{ color: '#cf1322', fontSize: isMobile ? '16px' : '20px' }}
                  />
                </Card>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card className="mobile-card">
                  <Statistic
                    title="团队成员"
                    value={currentProject.members?.length || 0}
                    prefix={<TeamOutlined />}
                    suffix="人"
                    valueStyle={{ color: '#1890ff', fontSize: isMobile ? '16px' : '20px' }}
                  />
                </Card>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card className="mobile-card">
                  <Statistic
                    title="BUG总数"
                    value={typeof currentProject.bugs === 'number' ? currentProject.bugs : currentProject.bugs.total}
                    prefix={<BugOutlined />}
                    suffix="个"
                    valueStyle={{ color: '#ff4d4f', fontSize: isMobile ? '16px' : '20px' }}
                  />
                </Card>
              </Col>
            </Row>

            {/* 基本信息 */}
            <Card title="基本信息" style={{ marginBottom: isMobile ? 12 : 16 }} className="mobile-card mobile-descriptions">
              <Descriptions column={isMobile ? 1 : 2} bordered size={isMobile ? 'small' : 'default'}>
                <Descriptions.Item label="项目名称" span={2}>
                  <strong style={{ fontSize: '15px' }}>{currentProject.name}</strong>
                </Descriptions.Item>
                <Descriptions.Item label="学校">
                  {currentProject.school}
                </Descriptions.Item>
                <Descriptions.Item label="项目状态">
                  {currentProject.status === 'completed' ? (
                    <Badge status="success" text="已完成" />
                  ) : currentProject.status === 'ongoing' ? (
                    <Badge status="processing" text="进行中" />
                  ) : (
                    <Badge status="default" text="规划中" />
                  )}
                </Descriptions.Item>
                <Descriptions.Item label="开始时间">
                  <CalendarOutlined /> {currentProject.startDate}
                </Descriptions.Item>
                <Descriptions.Item label="结束时间">
                  <CalendarOutlined /> {currentProject.endDate}
                </Descriptions.Item>
                <Descriptions.Item label="预计天数">
                  {currentProject.estimatedDays} 天
                </Descriptions.Item>
                <Descriptions.Item label="实际天数">
                  <Tag color={currentProject.actualDays > currentProject.estimatedDays ? 'red' : 'green'}>
                    {currentProject.actualDays} 天
                  </Tag>
                </Descriptions.Item>
              </Descriptions>
            </Card>

            {/* 项目进度 */}
            <Card title="项目进度" style={{ marginBottom: isMobile ? 12 : 16 }} className="mobile-card mobile-progress">
              <div style={{ marginBottom: 16 }}>
                <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
                  <span>整体完成度</span>
                  <span style={{ fontWeight: 600 }}>
                    {currentProject.status === 'completed'
                      ? '100%'
                      : `${Math.min(Math.round((currentProject.actualDays / currentProject.estimatedDays) * 100), 95)}%`}
                  </span>
                </div>
                <Progress
                  percent={
                    currentProject.status === 'completed'
                      ? 100
                      : Math.min(
                          Math.round((currentProject.actualDays / currentProject.estimatedDays) * 100),
                          95
                        )
                  }
                  status={
                    currentProject.status === 'completed'
                      ? 'success'
                      : currentProject.actualDays > currentProject.estimatedDays
                      ? 'exception'
                      : 'active'
                  }
                  strokeWidth={12}
                />
              </div>
              <Row gutter={16}>
                <Col span={12}>
                  <div style={{ padding: '12px', background: '#f0f2f5', borderRadius: '4px' }}>
                    <div style={{ color: '#666', marginBottom: 4 }}>时间进度</div>
                    <div style={{ fontSize: '18px', fontWeight: 600 }}>
                      {currentProject.actualDays} / {currentProject.estimatedDays} 天
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ padding: '12px', background: '#f0f2f5', borderRadius: '4px' }}>
                    <div style={{ color: '#666', marginBottom: 4 }}>利润率</div>
                    <div style={{ fontSize: '18px', fontWeight: 600, color: '#3f8600' }}>
                      {((currentProject.profit / currentProject.amount) * 100).toFixed(1)}%
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>

            {/* 质量统计 */}
            <Card title="质量统计" style={{ marginBottom: isMobile ? 12 : 16 }} className="mobile-card">
              <Row gutter={isMobile ? [8, 8] : 16} className="mobile-gutter">
                <Col span={12}>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
                      <span><BugOutlined /> BUG总数</span>
                      <span style={{ fontWeight: 600, color: '#ff4d4f' }}>
                        {typeof currentProject.bugs === 'number' ? currentProject.bugs : currentProject.bugs.total}
                      </span>
                    </div>
                    <Progress
                      percent={100}
                      strokeColor="#ff4d4f"
                      showInfo={false}
                      strokeWidth={8}
                    />
                  </div>
                  {typeof currentProject.bugs !== 'number' && currentProject.bugs.byMember && currentProject.bugs.byMember.length > 0 && (
                    <div style={{ marginTop: 16 }}>
                      <Divider orientation="left" plain style={{ margin: '12px 0' }}>成员BUG分布</Divider>
                      <List
                        size="small"
                        dataSource={currentProject.bugs.byMember}
                        renderItem={(item: any) => (
                          <List.Item>
                            <div style={{ width: '100%' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                                <span>{item.memberName}</span>
                                <span style={{ fontWeight: 600 }}>{item.count}</span>
                              </div>
                              <Progress
                                percent={(item.count / (typeof currentProject.bugs === 'number' ? currentProject.bugs : currentProject.bugs.total)) * 100}
                                strokeColor="#ff4d4f"
                                size="small"
                              />
                            </div>
                          </List.Item>
                        )}
                      />
                    </div>
                  )}
                </Col>
                <Col span={12}>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
                      <span><FileTextOutlined /> 工单总数</span>
                      <span style={{ fontWeight: 600, color: '#fa8c16' }}>
                        {typeof currentProject.tickets === 'number'
                          ? currentProject.tickets
                          : currentProject.tickets.maintenance + currentProject.tickets.repair}
                      </span>
                    </div>
                    <Progress
                      percent={100}
                      strokeColor="#fa8c16"
                      showInfo={false}
                      strokeWidth={8}
                    />
                  </div>
                  {typeof currentProject.tickets !== 'number' && (
                    <div style={{ marginTop: 16 }}>
                      <Divider orientation="left" plain style={{ margin: '12px 0' }}>工单类型分布</Divider>
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <span>维护工单</span>
                          <span style={{ fontWeight: 600 }}>{currentProject.tickets.maintenance}</span>
                        </div>
                        <Progress
                          percent={(currentProject.tickets.maintenance / (currentProject.tickets.maintenance + currentProject.tickets.repair)) * 100}
                          strokeColor="#52c41a"
                          size="small"
                        />
                      </div>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <span>修复工单</span>
                          <span style={{ fontWeight: 600 }}>{currentProject.tickets.repair}</span>
                        </div>
                        <Progress
                          percent={(currentProject.tickets.repair / (currentProject.tickets.maintenance + currentProject.tickets.repair)) * 100}
                          strokeColor="#fa8c16"
                          size="small"
                        />
                      </div>
                    </div>
                  )}
                </Col>
              </Row>
            </Card>

            {/* 项目成员 */}
            <Card title="项目成员" style={{ marginBottom: isMobile ? 12 : 16 }} className="mobile-card">
              <List
                className="mobile-list"
                size={isMobile ? 'small' : 'default'}
                dataSource={currentProject.members}
                renderItem={(member: MemberType, index: number) => {
                  const workProgress = member.workDays
                    ? Math.min((member.workDays / currentProject.estimatedDays) * 100, 100)
                    : 0;
                  const hasRisk = member.riskNote && member.riskNote.trim() !== '';

                  return (
                    <List.Item key={index}>
                      <div style={{ width: '100%' }}>
                        <Row gutter={16} align="middle">
                          <Col span={6}>
                            <div>
                              <div style={{ fontWeight: 600, fontSize: '15px', marginBottom: 4 }}>
                                {member.name}
                              </div>
                              <Tag color="blue">{member.role}</Tag>
                            </div>
                          </Col>
                          <Col span={10}>
                            <div>
                              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: '12px', color: '#666' }}>
                                <span>工作进度</span>
                                <span>{member.workDays || 0} 天</span>
                              </div>
                              <Progress
                                percent={workProgress}
                                size="small"
                                status={hasRisk ? 'exception' : 'active'}
                                strokeColor={hasRisk ? '#ff4d4f' : '#1890ff'}
                              />
                            </div>
                          </Col>
                          <Col span={4}>
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontSize: '12px', color: '#666', marginBottom: 4 }}>BUG数</div>
                              <Tag color="red" style={{ fontSize: '14px', fontWeight: 600 }}>
                                {member.bugCount || 0}
                              </Tag>
                            </div>
                          </Col>
                          <Col span={4}>
                            {hasRisk && (
                              <Tag icon={<WarningOutlined />} color="error">
                                有风险
                              </Tag>
                            )}
                          </Col>
                        </Row>
                        {hasRisk && (
                          <div style={{
                            marginTop: 12,
                            padding: '8px 12px',
                            background: '#fff2e8',
                            borderLeft: '3px solid #ff4d4f',
                            borderRadius: '4px'
                          }}>
                            <div style={{ fontSize: '12px', color: '#666', marginBottom: 2 }}>风险备注</div>
                            <div style={{ color: '#ff4d4f', fontSize: '13px' }}>{member.riskNote}</div>
                          </div>
                        )}
                        <div style={{ marginTop: 8, fontSize: '12px', color: '#999' }}>
                          <CalendarOutlined /> {member.startDate} ~ {member.endDate}
                        </div>
                      </div>
                    </List.Item>
                  );
                }}
              />
            </Card>
          </div>
        )}
      </Drawer>
    </PageContainer>
  );
};

export default Projects;

