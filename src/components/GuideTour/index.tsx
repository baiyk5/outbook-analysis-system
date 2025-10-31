/**
 * 操作引导组件
 * 用于引导新用户了解系统功能
 */

import React, { useState, useEffect } from 'react';
import { Tour, Button } from 'antd';
import type { TourProps } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

interface GuideTourProps {
  // 是否自动开始（首次访问时）
  autoStart?: boolean;
}

const GuideTour: React.FC<GuideTourProps> = ({ autoStart = true }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 检查是否是首次访问
    const hasVisited = localStorage.getItem('hasVisitedGuideTour');
    
    if (autoStart && !hasVisited) {
      // 延迟1秒后显示引导，让页面先加载完成
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [autoStart]);

  const handleClose = () => {
    setOpen(false);
    // 标记用户已经看过引导
    localStorage.setItem('hasVisitedGuideTour', 'true');
  };

  const steps: TourProps['steps'] = [
    {
      title: '欢迎使用 OutBook 项目管理系统 🎉',
      description: (
        <div>
          <p>这是一个专业的定制项目数据分析系统。</p>
          <p>让我带你快速了解系统的主要功能！</p>
        </div>
      ),
      target: null, // 居中显示
    },
    {
      title: '📊 仪表盘 & 📁 项目管理',
      description: (
        <div>
          <p><strong>核心功能区</strong></p>
          <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
            <li><strong>仪表盘</strong>：查看项目总览、收入趋势、进度统计</li>
            <li><strong>项目管理</strong>：管理项目列表、查看成员详情、项目看板</li>
          </ul>
          <p style={{ marginTop: '8px', color: '#666' }}>
            💡 在项目列表中点击展开按钮可以查看每个项目的成员工作情况
          </p>
        </div>
      ),
      target: () => {
        // 查找仪表盘菜单项
        const dashboardMenu = document.querySelector('[data-menu-id$="dashboard"]');
        return dashboardMenu as HTMLElement;
      },
    },
    {
      title: '📈 数据统计 & 📝 报告中心',
      description: (
        <div>
          <p><strong>数据分析与报告</strong></p>
          <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
            <li><strong>数据统计</strong>：可视化图表、收入分析、BUG统计</li>
            <li><strong>报告中心</strong>：生成月度/季度报告、AI 智能报告</li>
          </ul>
        </div>
      ),
      target: () => {
        const statisticsMenu = document.querySelector('[data-menu-id$="statistics"]');
        return statisticsMenu as HTMLElement;
      },
    },
    {
      title: '🤖 AI 智能助手（重点推荐！）',
      description: (
        <div>
          <p><strong>你的专属数据分析助手，就在右上角！👆</strong></p>
          <p style={{ marginTop: '8px' }}>可以帮你：</p>
          <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
            <li>分析系统内的<strong>真实数据</strong></li>
            <li>回答项目相关问题</li>
            <li>提供数据洞察和建议</li>
          </ul>
          <p style={{ marginTop: '12px', padding: '8px', background: '#e6f7ff', borderRadius: '4px', color: '#1890ff' }}>
            💡 试试问它："当前系统中谁的开发效率最高？"
          </p>
        </div>
      ),
      target: () => {
        // 查找 AI 助手按钮 - 使用更精确的选择器
        const aiButton = document.querySelector('button[title="OutBook AI 智能助手"]')
          || document.querySelector('.ant-btn-text .anticon-aliwangwang')?.closest('button');
        return aiButton as HTMLElement;
      },
      placement: 'bottomRight', // 从右下方指向按钮
    },
    {
      title: '🎯 开始使用吧！',
      description: (
        <div>
          <p>引导结束！你已经了解了系统的主要功能。</p>
          <p style={{ marginTop: '12px' }}>
            <strong>小贴士：</strong>
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
            <li>点击<strong>右下角的帮助按钮</strong>可以随时重新查看引导</li>
            <li>点击<strong>右上角的 AI 助手</strong>获取智能数据分析</li>
          </ul>
          <p style={{ marginTop: '12px', color: '#52c41a', fontWeight: 'bold' }}>
            祝你使用愉快！🎉
          </p>
        </div>
      ),
      target: null,
    },
  ];

  return (
    <>
      {/* 帮助按钮 - 固定在右下角 */}
      <Button
        type="primary"
        shape="circle"
        size="large"
        icon={<QuestionCircleOutlined />}
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed',
          right: '24px',
          bottom: '24px',
          zIndex: 999,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        }}
        title="查看操作引导"
      />

      {/* Tour 引导 */}
      <Tour
        open={open}
        onClose={handleClose}
        steps={steps}
        indicatorsRender={(current, total) => (
          <span>
            {current + 1} / {total}
          </span>
        )}
      />
    </>
  );
};

export default GuideTour;

