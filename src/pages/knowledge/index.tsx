import { PageContainer } from '@ant-design/pro-components';
import { Card, List, Tag, Space, Button, Input, Select, Statistic, Row, Col, Modal } from 'antd';
import { FileTextOutlined, FilePdfOutlined, FileWordOutlined, EyeOutlined, DownloadOutlined, SearchOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { request } from '@umijs/max';
import { useResponsive, getResponsiveModalWidth } from '@/utils/responsive';

const { Search } = Input;
const { Option } = Select;

interface DocumentType {
  id: string;
  title: string;
  type: string;
  project: string;
  uploadDate: string;
  size: string;
  tags: string[];
}

const Knowledge: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');
  const [previewVisible, setPreviewVisible] = useState(false);
  const [currentDoc, setCurrentDoc] = useState<DocumentType | null>(null);
  const { isMobile, isTablet, deviceType } = useResponsive();

  // 内联 Mock 数据
  const mockDocuments: DocumentType[] = [
    {
      id: '1',
      title: '清华大学在线教育平台需求报告',
      type: 'requirement',
      project: '清华大学在线教育平台',
      uploadDate: '2024-01-10',
      size: '2.3 MB',
      tags: ['需求分析', '在线教育', '清华大学'],
    },
    {
      id: '2',
      title: '清华大学在线教育平台验收报告',
      type: 'acceptance',
      project: '清华大学在线教育平台',
      uploadDate: '2024-07-01',
      size: '1.8 MB',
      tags: ['验收', '项目完成', '清华大学'],
    },
    {
      id: '3',
      title: '北京大学智慧校园系统设计文档',
      type: 'design',
      project: '北京大学智慧校园系统',
      uploadDate: '2024-03-05',
      size: '4.5 MB',
      tags: ['系统设计', '架构', '北京大学'],
    },
    {
      id: '4',
      title: '复旦大学数字图书馆需求报告',
      type: 'requirement',
      project: '复旦大学数字图书馆',
      uploadDate: '2024-02-05',
      size: '3.1 MB',
      tags: ['需求分析', '图书馆', '复旦大学'],
    },
    {
      id: '5',
      title: '复旦大学数字图书馆验收报告',
      type: 'acceptance',
      project: '复旦大学数字图书馆',
      uploadDate: '2024-07-25',
      size: '2.2 MB',
      tags: ['验收', '项目完成', '复旦大学'],
    },
    {
      id: '6',
      title: '上海交通大学选课系统设计文档',
      type: 'design',
      project: '上海交通大学选课系统',
      uploadDate: '2024-04-10',
      size: '3.8 MB',
      tags: ['系统设计', '选课', '上海交大'],
    },
    {
      id: '7',
      title: '浙江大学实验室管理需求报告',
      type: 'requirement',
      project: '浙江大学实验室管理',
      uploadDate: '2024-04-25',
      size: '2.7 MB',
      tags: ['需求分析', '实验室', '浙江大学'],
    },
    {
      id: '8',
      title: '南京大学学生管理系统设计文档',
      type: 'design',
      project: '南京大学学生管理系统',
      uploadDate: '2024-05-28',
      size: '4.2 MB',
      tags: ['系统设计', '学生管理', '南京大学'],
    },
    {
      id: '9',
      title: '中国科技大学科研平台需求报告',
      type: 'requirement',
      project: '中国科技大学科研平台',
      uploadDate: '2024-06-25',
      size: '3.5 MB',
      tags: ['需求分析', '科研', '中科大'],
    },
    {
      id: '10',
      title: '项目管理规范文档',
      type: 'other',
      project: '通用',
      uploadDate: '2024-01-05',
      size: '1.2 MB',
      tags: ['规范', '管理', '通用'],
    },
  ];

  const [documents] = useState<DocumentType[]>(mockDocuments);
  const [filteredDocuments, setFilteredDocuments] = useState<DocumentType[]>(mockDocuments);

  const stats = {
    total: mockDocuments.length,
    requirement: mockDocuments.filter(d => d.type === 'requirement').length,
    acceptance: mockDocuments.filter(d => d.type === 'acceptance').length,
    design: mockDocuments.filter(d => d.type === 'design').length,
  };

  useEffect(() => {
    filterDocuments();
  }, [filterType]);

  const fetchData = async () => {
    // 使用内联数据，不需要请求
  };

  const filterDocuments = () => {
    if (filterType === 'all') {
      setFilteredDocuments(documents);
    } else {
      setFilteredDocuments(documents.filter(doc => doc.type === filterType));
    }
  };

  const handleSearch = (value: string) => {
    if (!value) {
      filterDocuments();
      return;
    }
    const filtered = documents.filter(doc =>
      doc.title.toLowerCase().includes(value.toLowerCase()) ||
      doc.project.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDocuments(filtered);
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'requirement':
        return <FileTextOutlined style={{ fontSize: 24, color: '#1890ff' }} />;
      case 'acceptance':
        return <FilePdfOutlined style={{ fontSize: 24, color: '#52c41a' }} />;
      case 'design':
        return <FileWordOutlined style={{ fontSize: 24, color: '#faad14' }} />;
      default:
        return <FileTextOutlined style={{ fontSize: 24, color: '#999' }} />;
    }
  };

  const getTypeTag = (type: string) => {
    const typeMap: Record<string, { color: string; text: string }> = {
      requirement: { color: 'blue', text: '需求报告' },
      acceptance: { color: 'green', text: '验收报告' },
      design: { color: 'orange', text: '设计文档' },
      other: { color: 'default', text: '其他' },
    };
    const config = typeMap[type] || typeMap.other;
    return <Tag color={config.color}>{config.text}</Tag>;
  };

  const handlePreview = (doc: DocumentType) => {
    setCurrentDoc(doc);
    setPreviewVisible(true);
  };

  const handleDownload = (doc: DocumentType) => {
    console.log('下载文档:', doc.title);
    // 实现下载逻辑
  };

  return (
    <PageContainer
      title="知识文库"
      subTitle="项目文档管理与查询"
      extra={[
        <Button key="upload" type="primary">
          上传文档
        </Button>,
      ]}
    >
      {/* 统计卡片 */}
      <Row gutter={isMobile ? [8, 8] : 16} style={{ marginBottom: isMobile ? 12 : 24 }} className="mobile-gutter mobile-statistic">
        <Col xs={6} sm={6} md={6} lg={6}>
          <Card className="mobile-card">
            <Statistic
              title="文档总数"
              value={stats.total || 0}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <Card className="mobile-card">
            <Statistic
              title="需求报告"
              value={stats.requirement || 0}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <Card className="mobile-card">
            <Statistic
              title="验收报告"
              value={stats.acceptance || 0}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <Card className="mobile-card">
            <Statistic
              title="设计文档"
              value={stats.design || 0}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
      </Row>

      {/* 搜索和筛选 */}
      <Card style={{ marginBottom: isMobile ? 12 : 16 }} className="mobile-card">
        <Space size={isMobile ? 'small' : 'large'} style={{ width: '100%' }} direction={isMobile ? 'vertical' : 'horizontal'}>
          <Search
            placeholder={isMobile ? "搜索文档" : "搜索文档标题或项目名称"}
            allowClear
            enterButton={<SearchOutlined />}
            size={isMobile ? 'middle' : 'large'}
            onSearch={handleSearch}
            style={{ width: isMobile ? '100%' : 400 }}
          />
          <Select
            value={filterType}
            onChange={setFilterType}
            style={{ width: isMobile ? '100%' : 200 }}
            size={isMobile ? 'middle' : 'large'}
          >
            <Option value="all">全部类型</Option>
            <Option value="requirement">需求报告</Option>
            <Option value="acceptance">验收报告</Option>
            <Option value="design">设计文档</Option>
            <Option value="other">其他</Option>
          </Select>
        </Space>
      </Card>

      {/* 文档列表 */}
      <Card className="mobile-card">
        <List
          itemLayout="horizontal"
          dataSource={filteredDocuments}
          className="mobile-list"
          size={isMobile ? 'small' : 'default'}
          pagination={{
            pageSize: isMobile ? 5 : 10,
            showSizeChanger: !isMobile,
            showTotal: (total) => `共 ${total} 个文档`,
            simple: isMobile,
          }}
          renderItem={(item) => (
            <List.Item
              actions={isMobile ? [
                <Button
                  key="preview"
                  type="link"
                  size="small"
                  icon={<EyeOutlined />}
                  onClick={() => handlePreview(item)}
                />,
              ] : [
                <Button
                  key="preview"
                  type="link"
                  icon={<EyeOutlined />}
                  onClick={() => handlePreview(item)}
                >
                  预览
                </Button>,
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
                avatar={getFileIcon(item.type)}
                title={
                  <Space>
                    {item.title}
                    {getTypeTag(item.type)}
                  </Space>
                }
                description={
                  <div>
                    <p>项目: {item.project}</p>
                    <Space>
                      <span>上传时间: {item.uploadDate}</span>
                      <span>大小: {item.size}</span>
                    </Space>
                    <div style={{ marginTop: 8 }}>
                      {item.tags?.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Card>

      {/* 预览弹窗 */}
      <Modal
        title={currentDoc?.title}
        open={previewVisible}
        onCancel={() => setPreviewVisible(false)}
        width={getResponsiveModalWidth(deviceType)}
        className="mobile-modal"
        footer={[
          <Button
            key="download"
            type="primary"
            icon={<DownloadOutlined />}
            onClick={() => currentDoc && handleDownload(currentDoc)}
            size={isMobile ? 'small' : 'middle'}
          >
            {isMobile ? '' : '下载'}
          </Button>,
          <Button key="close" onClick={() => setPreviewVisible(false)} size={isMobile ? 'small' : 'middle'}>
            关闭
          </Button>,
        ]}
      >
        {currentDoc && (
          <div style={{ padding: 24, background: '#f5f5f5', minHeight: 400 }}>
            <p style={{ textAlign: 'center', color: '#999' }}>
              文档预览功能开发中...
            </p>
            <p style={{ textAlign: 'center', color: '#999' }}>
              文档: {currentDoc.title}
            </p>
          </div>
        )}
      </Modal>
    </PageContainer>
  );
};

export default Knowledge;

