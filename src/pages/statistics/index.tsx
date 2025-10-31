import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, Statistic } from 'antd';
import { Pie, Column, Line, DualAxes, Area, WordCloud } from '@ant-design/plots';
import React from 'react';

const Statistics: React.FC = () => {
  // Mock 数据
  const overview = {
    totalProjects: 7,
    totalAmount: 746,
    totalBugs: 150,
    totalTickets: 36,
  };

  // 生成100个学校的Mock数据
  const wordCloudData = [
    { text: '北京大学', value: 1500 },
    { text: '清华大学', value: 1480 },
    { text: '上海交通大学', value: 1350 },
    { text: '浙江大学', value: 1320 },
    { text: '复旦大学', value: 1280 },
    { text: '中国科学技术大学', value: 1250 },
    { text: '南京大学', value: 1200 },
    { text: '华中科技大学', value: 1150 },
    { text: '武汉大学', value: 1120 },
    { text: '西安交通大学', value: 1080 },
    { text: '哈尔滨工业大学', value: 1050 },
    { text: '中山大学', value: 1020 },
    { text: '北京航空航天大学', value: 980 },
    { text: '同济大学', value: 950 },
    { text: '东南大学', value: 920 },
    { text: '北京师范大学', value: 890 },
    { text: '天津大学', value: 860 },
    { text: '南开大学', value: 830 },
    { text: '四川大学', value: 800 },
    { text: '山东大学', value: 780 },
    { text: '厦门大学', value: 750 },
    { text: '吉林大学', value: 720 },
    { text: '华东师范大学', value: 690 },
    { text: '中国人民大学', value: 660 },
    { text: '大连理工大学', value: 630 },
    { text: '西北工业大学', value: 600 },
    { text: '重庆大学', value: 580 },
    { text: '电子科技大学', value: 560 },
    { text: '湖南大学', value: 540 },
    { text: '东北大学', value: 520 },
    { text: '兰州大学', value: 500 },
    { text: '中南大学', value: 480 },
    { text: '北京理工大学', value: 460 },
    { text: '苏州大学', value: 440 },
    { text: '华南理工大学', value: 420 },
    { text: '南京航空航天大学', value: 400 },
    { text: '南京理工大学', value: 380 },
    { text: '西南大学', value: 360 },
    { text: '河海大学', value: 340 },
    { text: '暨南大学', value: 320 },
    { text: '云南大学', value: 300 },
    { text: '郑州大学', value: 285 },
    { text: '上海大学', value: 270 },
    { text: '北京科技大学', value: 255 },
    { text: '华东理工大学', value: 240 },
    { text: '中国农业大学', value: 225 },
    { text: '南京师范大学', value: 210 },
    { text: '西南交通大学', value: 195 },
    { text: '华中师范大学', value: 180 },
    { text: '陕西师范大学', value: 165 },
    { text: '东华大学', value: 150 },
    { text: '北京邮电大学', value: 140 },
    { text: '合肥工业大学', value: 130 },
    { text: '南昌大学', value: 120 },
    { text: '福州大学', value: 115 },
    { text: '北京交通大学', value: 110 },
    { text: '长安大学', value: 105 },
    { text: '中国地质大学', value: 100 },
    { text: '中国矿业大学', value: 95 },
    { text: '中国石油大学', value: 90 },
    { text: '河北工业大学', value: 85 },
    { text: '太原理工大学', value: 80 },
    { text: '内蒙古大学', value: 75 },
    { text: '辽宁大学', value: 72 },
    { text: '延边大学', value: 69 },
    { text: '东北师范大学', value: 66 },
    { text: '东北林业大学', value: 63 },
    { text: '东北农业大学', value: 60 },
    { text: '江南大学', value: 58 },
    { text: '安徽大学', value: 56 },
    { text: '河南大学', value: 54 },
    { text: '武汉理工大学', value: 52 },
    { text: '湖南师范大学', value: 50 },
    { text: '华南师范大学', value: 48 },
    { text: '广西大学', value: 46 },
    { text: '海南大学', value: 44 },
    { text: '贵州大学', value: 42 },
    { text: '西藏大学', value: 40 },
    { text: '西北大学', value: 38 },
    { text: '西北农林科技大学', value: 36 },
    { text: '新疆大学', value: 34 },
    { text: '石河子大学', value: 32 },
    { text: '宁夏大学', value: 30 },
    { text: '青海大学', value: 28 },
    { text: '中央民族大学', value: 26 },
    { text: '中国海洋大学', value: 24 },
    { text: '中国政法大学', value: 22 },
    { text: '对外经济贸易大学', value: 20 },
    { text: '中央财经大学', value: 19 },
    { text: '上海财经大学', value: 18 },
    { text: '西南财经大学', value: 17 },
    { text: '中南财经政法大学', value: 16 },
    { text: '北京外国语大学', value: 15 },
    { text: '上海外国语大学', value: 14 },
    { text: '北京中医药大学', value: 13 },
    { text: '天津医科大学', value: 12 },
    { text: '中国药科大学', value: 11 },
    { text: '北京体育大学', value: 10 },
    { text: '中央音乐学院', value: 9 },
  ];

  const bugMemberData = [
    { member: '李四', count: 25 },
    { member: '孙七', count: 22 },
    { member: '杨十八', count: 18 },
    { member: '郑十', count: 16 },
    { member: '王五', count: 15 },
    { member: '陈十二', count: 15 },
    { member: '褚十三', count: 10 },
    { member: '周八', count: 7 },
  ];

  const bugProjectData = [
    { project: '清华大学', bugs: 45 },
    { project: '北京大学', bugs: 32 },
    { project: '上海交大', bugs: 28 },
    { project: '中科大', bugs: 22 },
    { project: '复旦大学', bugs: 18 },
    { project: '浙江大学', bugs: 5 },
  ];

  const ticketTrendData = [
    { month: '1月', maintenance: 12, repair: 8 },
    { month: '2月', maintenance: 17, repair: 11 },
    { month: '3月', maintenance: 20, repair: 13 },
    { month: '4月', maintenance: 27, repair: 17 },
    { month: '5月', maintenance: 33, repair: 20 },
    { month: '6月', maintenance: 34, repair: 20 },
  ];

  const financialData = [
    { month: '1月', amount: 212, profit: 84.8 },
    { month: '2月', amount: 360, profit: 144 },
    { month: '3月', amount: 458, profit: 183.2 },
    { month: '4月', amount: 593, profit: 237.2 },
    { month: '5月', amount: 678, profit: 271.2 },
    { month: '6月', amount: 746, profit: 298.4 },
  ];

  const projectTrendData = [
    { month: '1月', value: 2 },
    { month: '2月', value: 3 },
    { month: '3月', value: 4 },
    { month: '4月', value: 5 },
    { month: '5月', value: 6 },
    { month: '6月', value: 7 },
  ];

  // 词云图配置
  const wordCloudConfig = {
    data: wordCloudData,
    layout: {
      spiral: 'archimedean',
    },
    colorField: 'text',
    wordStyle: {
      fontFamily: 'Verdana, Microsoft YaHei, sans-serif',
      rotation: 0,
    },
    interactions: [
      { type: 'element-active' },
    ],
    state: {
      active: {
        style: {
          lineWidth: 3,
          stroke: '#1890ff',
        },
      },
    },
    tooltip: {
      showTitle: false,
      formatter: (datum: any) => {
        return {
          name: datum.text,
          value: `成交金额: ¥${datum.value}万`,
        };
      },
    },
  };

  // 图表配置
  const bugMemberConfig = {
    data: bugMemberData,
    angleField: 'count',
    colorField: 'member',
    radius: 0.8,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-30%',
      content: '{value}',
      style: { textAlign: 'center', fontSize: 14 },
    },
    legend: { position: 'bottom' as const },
    statistic: {
      title: { content: 'BUG总数' },
      content: {
        style: { fontSize: '24px' },
        content: bugMemberData.reduce((sum, item) => sum + item.count, 0).toString(),
      },
    },
    autoFit: true,
    appendPadding: [10, 10, 10, 10],
  };

  const bugProjectConfig = {
    data: bugProjectData,
    xField: 'project',
    yField: 'bugs',
    label: {
      position: 'top' as const,
      style: { fill: '#000000', opacity: 0.6, fontSize: 12 },
    },
    xAxis: {
      label: {
        autoRotate: true, // 允许自动旋转
        autoHide: false, // 不自动隐藏
        style: {
          fontSize: 12,
        },
      },
    },
    yAxis: {
      label: {
        style: {
          fontSize: 12,
        },
      },
      // 确保 Y 轴从 0 开始
      min: 0,
    },
    meta: {
      project: { alias: '项目' },
      bugs: { alias: 'BUG数量' },
    },
    color: '#5B8FF9',
    autoFit: true, // 改回 autoFit
    // 添加内边距，防止标签被截断
    appendPadding: [10, 10, 20, 10], // 上、右、下、左
  };

  const financialConfig = {
    data: financialData,
    xField: 'month',
    autoFit: true, // 改回 autoFit
    appendPadding: [10, 10, 20, 10], // 添加内边距
    children: [
      {
        type: 'interval',
        yField: 'amount',
        style: {
          fill: '#5B8FF9',
          lineWidth: 2,
        },
        axis: {
          y: {
            title: '成交金额（万元）',
            style: {
              titleFill: '#5B8FF9',
            },
          },
        },
      },
      {
        type: 'line',
        yField: 'profit',
        shapeField: 'smooth',
        style: {
          stroke: '#5AD8A6',
          lineWidth: 2,
        },
        axis: {
          y: {
            position: 'right',
            title: '利润（万元）',
            style: {
              titleFill: '#5AD8A6',
            },
          },
        },
      },
    ],
  };

  const projectTrendConfig = {
    data: projectTrendData,
    xField: 'month',
    yField: 'value',
    smooth: true,
    areaStyle: { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' },
    line: { color: '#1890ff' },
    autoFit: true,
  };

  return (
    <PageContainer title="数据统计分析" subTitle="项目数据深度分析与可视化">
      {/* 统计卡片 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="项目总数"
              value={overview.totalProjects}
              suffix="个"
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="总成交金额"
              value={overview.totalAmount}
              precision={0}
              suffix="万元"
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="BUG总数"
              value={overview.totalBugs}
              suffix="个"
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="工单总数"
              value={overview.totalTickets}
              suffix="个"
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
      </Row>

      {/* 词云图 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={24}>
          <Card title="学校项目词云图" extra="基于成交金额权重">
            <WordCloud {...wordCloudConfig} style={{ height: 400 }} />
          </Card>
        </Col>
      </Row>

      {/* BUG分析 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col xs={24} lg={12}>
          <Card title="成员BUG占比分布" bodyStyle={{ padding: '20px' }}>
            <div style={{ height: 400 }}>
              <Pie {...bugMemberConfig} />
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="项目BUG率分析" bodyStyle={{ padding: '20px' }}>
            <div style={{ height: 400 }}>
              <Column {...bugProjectConfig} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* 工单趋势 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={24}>
          <Card title="工单趋势分析">
            <Line
              data={[
                ...ticketTrendData.map(item => ({ ...item, type: '维护工单', value: item.maintenance })),
                ...ticketTrendData.map(item => ({ ...item, type: '维修工单', value: item.repair })),
              ]}
              xField="month"
              yField="value"
              seriesField="type"
              smooth={true}
              legend={{ position: 'top' as const }}
              autoFit={true}
              style={{ height: 400 }}
            />
          </Card>
        </Col>
      </Row>

      {/* 财务数据 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={24}>
          <Card title="财务数据分析" extra="成交金额与利润对比" bodyStyle={{ padding: '20px' }}>
            <div style={{ height: 400 }}>
              <DualAxes {...financialConfig} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* 项目趋势 */}
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="项目数量趋势">
            <Area {...projectTrendConfig} style={{ height: 400 }} />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Statistics;
