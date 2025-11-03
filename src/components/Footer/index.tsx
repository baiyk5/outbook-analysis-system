import { BarChartOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright="Authored by OutBook Customization Group"
      links={[
        {
          key: 'OutBook Customization Group',
          title: 'OutBook 定制组',
          href: 'http://localhost:8000',
          blankTarget: true,
        },
        {
          key: 'chart',
          title: <BarChartOutlined />,
          href: 'http://localhost:8000',
          blankTarget: true,
        },
        {
          key: 'Data Analytics System',
          title: '项目数据分析系统',
          href: 'http://localhost:8000',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
