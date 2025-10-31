import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button, Card, DatePicker, Form, List, Space, Tag, message, Modal, Spin, Select } from 'antd';
import { FileTextOutlined, DownloadOutlined, RobotOutlined, CalendarOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { request } from '@umijs/max';
import moment from 'moment';

const { RangePicker } = DatePicker;

interface ReportType {
  id: string;
  title: string;
  type: 'monthly' | 'quarterly';
  period: string;
  generatedAt: string;
  summary: string;
}

const Reports: React.FC = () => {
  const [aiModalVisible, setAiModalVisible] = useState(false);
  const [aiGenerating, setAiGenerating] = useState(false);
  const [form] = Form.useForm();

  // 内联 Mock 数据
  const monthlyReports: ReportType[] = [
    {
      id: '1',
      title: '2024年6月项目月报',
      type: 'monthly',
      period: '2024-06',
      generatedAt: '2024-07-01 10:30:00',
      summary: '本月完成3个项目，总成交金额746万元，利润298.4万元。项目整体进度良好，BUG修复率达95%。',
    },
    {
      id: '2',
      title: '2024年5月项目月报',
      type: 'monthly',
      period: '2024-05',
      generatedAt: '2024-06-01 10:30:00',
      summary: '本月完成2个项目，总成交金额678万元，利润271.2万元。新增项目2个，团队协作效率提升15%。',
    },
    {
      id: '3',
      title: '2024年4月项目月报',
      type: 'monthly',
      period: '2024-04',
      generatedAt: '2024-05-01 10:30:00',
      summary: '本月完成4个项目，总成交金额593万元，利润237.2万元。客户满意度达98%，获得多个好评。',
    },
    {
      id: '4',
      title: '2024年3月项目月报',
      type: 'monthly',
      period: '2024-03',
      generatedAt: '2024-04-01 10:30:00',
      summary: '本月完成3个项目，总成交金额458万元，利润183.2万元。技术难点攻克2个，团队能力提升显著。',
    },
  ];

  const quarterlyReports: ReportType[] = [
    {
      id: 'q1',
      title: '2024年第二季度项目报告',
      type: 'quarterly',
      period: '2024-Q2',
      generatedAt: '2024-07-05 14:00:00',
      summary: '第二季度完成项目12个，总成交金额1977万元，利润806.8万元。团队规模扩大20%，项目交付质量稳步提升。',
    },
    {
      id: 'q2',
      title: '2024年第一季度项目报告',
      type: 'quarterly',
      period: '2024-Q1',
      generatedAt: '2024-04-05 14:00:00',
      summary: '第一季度完成项目8个，总成交金额1230万元，利润492万元。成功开拓3所新高校客户，市场占有率提升10%。',
    },
  ];

  const fetchReports = async () => {
    // 使用内联数据，不需要请求
  };

  const handleGenerateReport = async (values: any) => {
    try {
      const response = await request('/api/reports/generate', {
        method: 'POST',
        data: values,
      });
      
      if (response.success) {
        message.success('报告生成成功！');
        fetchReports();
      }
    } catch (error) {
      message.error('报告生成失败！');
    }
  };

  const handleAIGenerate = async (values: any) => {
    setAiGenerating(true);
    try {
      // 这里预留 AI 接口调用
      await new Promise(resolve => setTimeout(resolve, 2000));
      message.success('AI 报告生成成功！（演示功能）');
      setAiModalVisible(false);
      fetchReports();
    } catch (error) {
      message.error('AI 报告生成失败！');
    } finally {
      setAiGenerating(false);
    }
  };

  const handleDownload = (report: ReportType) => {
    message.info(`下载报告: ${report.title}`);
    // 这里实现下载逻辑
  };

  return (
    <PageContainer
      title="报告生成"
      subTitle="生成月度和季度分析报告"
      extra={[
        <Button
          key="ai"
          type="primary"
          icon={<RobotOutlined />}
          onClick={() => setAiModalVisible(true)}
        >
          AI 智能生成
        </Button>,
      ]}
    >
      <ProCard split="vertical">
        <ProCard title="月度报告" colSpan="50%">
          <Form
            form={form}
            layout="inline"
            onFinish={handleGenerateReport}
            style={{ marginBottom: 16 }}
          >
            <Form.Item name="month" label="选择月份">
              <DatePicker picker="month" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                生成月度报告
              </Button>
            </Form.Item>
          </Form>

          <List
            dataSource={monthlyReports}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button
                    key="download"
                    type="link"
                    icon={<DownloadOutlined />}
                    onClick={() => handleDownload(item)}
                  >
                    下载
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={<FileTextOutlined style={{ fontSize: 24, color: '#1890ff' }} />}
                  title={
                    <Space>
                      {item.title}
                      <Tag color="blue">月度</Tag>
                    </Space>
                  }
                  description={
                    <div>
                      <p>{item.summary}</p>
                      <p style={{ color: '#999', fontSize: 12 }}>
                        <CalendarOutlined /> 生成时间: {item.generatedAt}
                      </p>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </ProCard>

        <ProCard title="季度报告" colSpan="50%">
          <Form
            layout="inline"
            onFinish={handleGenerateReport}
            style={{ marginBottom: 16 }}
          >
            <Form.Item name="quarter" label="选择季度">
              <DatePicker picker="quarter" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                生成季度报告
              </Button>
            </Form.Item>
          </Form>

          <List
            dataSource={quarterlyReports}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button
                    key="download"
                    type="link"
                    icon={<DownloadOutlined />}
                    onClick={() => handleDownload(item)}
                  >
                    下载
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={<FileTextOutlined style={{ fontSize: 24, color: '#52c41a' }} />}
                  title={
                    <Space>
                      {item.title}
                      <Tag color="green">季度</Tag>
                    </Space>
                  }
                  description={
                    <div>
                      <p>{item.summary}</p>
                      <p style={{ color: '#999', fontSize: 12 }}>
                        <CalendarOutlined /> 生成时间: {item.generatedAt}
                      </p>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </ProCard>
      </ProCard>

      {/* AI 生成报告弹窗 */}
      <Modal
        title={
          <Space>
            <RobotOutlined style={{ color: '#1890ff' }} />
            AI 智能生成报告
          </Space>
        }
        open={aiModalVisible}
        onCancel={() => setAiModalVisible(false)}
        footer={null}
      >
        <Spin spinning={aiGenerating} tip="AI 正在分析数据并生成报告...">
          <Form
            layout="vertical"
            onFinish={handleAIGenerate}
          >
            <Form.Item
              name="dateRange"
              label="选择时间范围"
              rules={[{ required: true, message: '请选择时间范围' }]}
            >
              <RangePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name="reportType"
              label="报告类型"
              rules={[{ required: true, message: '请选择报告类型' }]}
            >
              <Select
                style={{ width: '100%' }}
                placeholder="请选择报告类型"
                options={[
                  { label: '月度报告', value: 'monthly' },
                  { label: '季度报告', value: 'quarterly' },
                  { label: '年度报告', value: 'yearly' },
                ]}
              />
            </Form.Item>
            <Form.Item>
              <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
                <Button onClick={() => setAiModalVisible(false)}>
                  取消
                </Button>
                <Button type="primary" htmlType="submit" icon={<RobotOutlined />}>
                  AI 生成
                </Button>
              </Space>
            </Form.Item>
          </Form>
          <Card size="small" style={{ marginTop: 16, background: '#f0f2f5' }}>
            <p style={{ margin: 0, color: '#666' }}>
              💡 提示：AI 将根据选定时间范围内的项目数据，自动分析并生成包含关键指标、趋势分析和建议的智能报告。
            </p>
          </Card>
        </Spin>
      </Modal>
    </PageContainer>
  );
};

export default Reports;

