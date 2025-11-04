/**
 * 报告数据 Mock
 */

export const mockMonthlyReports = {
  success: true,
  data: [
    {
      id: 1,
      month: '2024-01',
      totalProjects: 2,
      activeProjects: 2,
      completedProjects: 0,
      totalAmount: 2120000,
      totalProfit: 848000,
      totalBugs: 67,
      totalTickets: 20,
      summary: '本月新增2个项目，整体进展顺利。',
      createdAt: '2024-02-01',
    },
    {
      id: 2,
      month: '2024-02',
      totalProjects: 3,
      activeProjects: 3,
      completedProjects: 0,
      totalAmount: 3600000,
      totalProfit: 1440000,
      totalBugs: 95,
      totalTickets: 28,
      summary: '本月新增1个项目，项目数量持续增长。',
      createdAt: '2024-03-01',
    },
    {
      id: 3,
      month: '2024-03',
      totalProjects: 4,
      activeProjects: 4,
      completedProjects: 0,
      totalAmount: 4580000,
      totalProfit: 1832000,
      totalBugs: 113,
      totalTickets: 33,
      summary: '本月新增1个项目，整体运营良好。',
      createdAt: '2024-04-01',
    },
    {
      id: 4,
      month: '2024-04',
      totalProjects: 5,
      activeProjects: 5,
      completedProjects: 0,
      totalAmount: 5930000,
      totalProfit: 2372000,
      totalBugs: 141,
      totalTickets: 44,
      summary: '本月新增1个项目，业务规模扩大。',
      createdAt: '2024-05-01',
    },
    {
      id: 5,
      month: '2024-05',
      totalProjects: 6,
      activeProjects: 5,
      completedProjects: 1,
      totalAmount: 6780000,
      totalProfit: 2712000,
      totalBugs: 145,
      totalTickets: 53,
      summary: '本月新增1个项目，完成1个项目。',
      createdAt: '2024-06-01',
    },
    {
      id: 6,
      month: '2024-06',
      totalProjects: 7,
      activeProjects: 3,
      completedProjects: 2,
      totalAmount: 7460000,
      totalProfit: 2984000,
      totalBugs: 150,
      totalTickets: 56,
      summary: '本月新增1个项目，完成1个项目，整体表现优秀。',
      createdAt: '2024-07-01',
    },
  ],
};

export const mockQuarterlyReports = {
  success: true,
  data: [
    {
      id: 1,
      quarter: '2024-Q1',
      totalProjects: 4,
      activeProjects: 4,
      completedProjects: 0,
      totalAmount: 4580000,
      totalProfit: 1832000,
      totalBugs: 113,
      totalTickets: 33,
      summary: '第一季度新增4个项目，业务开局良好，团队运作顺畅。',
      createdAt: '2024-04-01',
    },
    {
      id: 2,
      quarter: '2024-Q2',
      totalProjects: 7,
      activeProjects: 3,
      completedProjects: 2,
      totalAmount: 7460000,
      totalProfit: 2984000,
      totalBugs: 150,
      totalTickets: 56,
      summary: '第二季度新增3个项目，完成2个项目，业务持续增长，盈利能力稳定。',
      createdAt: '2024-07-01',
    },
  ],
};

export const mockGenerateReport = async (params: { type: 'monthly' | 'quarterly'; period: string }) => {
  // 模拟 AI 生成延迟
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { type, period } = params;

  if (type === 'monthly') {
    return {
      success: true,
      data: {
        period,
        content: `# ${period} 月度报告\n\n## 项目概况\n本月共有7个项目在进行中，其中3个项目处于活跃状态，2个项目已完成。\n\n## 财务数据\n- 总金额：¥7,460,000\n- 总利润：¥2,984,000\n- 平均利润率：40%\n\n## 质量指标\n- Bug总数：150个\n- Bug率：2.5%\n- 工单总数：56个\n\n## 总结\n本月整体表现优秀，项目进展顺利，财务状况良好。`,
      },
    };
  } else {
    return {
      success: true,
      data: {
        period,
        content: `# ${period} 季度报告\n\n## 季度概况\n本季度共有7个项目，其中3个项目处于活跃状态，2个项目已完成。\n\n## 财务数据\n- 总金额：¥7,460,000\n- 总利润：¥2,984,000\n- 平均利润率：40%\n\n## 质量指标\n- Bug总数：150个\n- 平均Bug率：2.5%\n- 工单总数：56个\n\n## 总结\n本季度业务持续增长，盈利能力稳定，团队协作良好。`,
      },
    };
  }
};

