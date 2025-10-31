// 报告数据 Mock
export default {
  'GET /api/reports/monthly': {
    success: true,
    data: [
      {
        id: 1,
        period: '2024-01',
        type: 'monthly',
        projectCount: 2,
        totalAmount: 2120000,
        totalProfit: 848000,
        avgBugRate: 0.035,
        totalTickets: 20,
        summary: '本月新增2个项目，整体进展顺利。清华大学项目按期推进，北大项目需求变更较多。',
        createdAt: '2024-02-01',
      },
      {
        id: 2,
        period: '2024-02',
        type: 'monthly',
        projectCount: 3,
        totalAmount: 3600000,
        totalProfit: 1440000,
        avgBugRate: 0.032,
        totalTickets: 25,
        summary: '本月新增1个项目，在建项目3个。北大项目进入开发高峰期，复旦项目启动顺利。',
        createdAt: '2024-03-01',
      },
      {
        id: 3,
        period: '2024-03',
        type: 'monthly',
        projectCount: 4,
        totalAmount: 4580000,
        totalProfit: 1832000,
        avgBugRate: 0.028,
        totalTickets: 28,
        summary: '本月新增1个项目，整体质量有所提升。清华项目进入收尾阶段，其他项目稳步推进。',
        createdAt: '2024-04-01',
      },
      {
        id: 4,
        period: '2024-04',
        type: 'monthly',
        projectCount: 5,
        totalAmount: 5930000,
        totalProfit: 2372000,
        avgBugRate: 0.026,
        totalTickets: 35,
        summary: '本月新增1个项目，上海交大项目启动。团队规模扩大，需要加强质量管控。',
        createdAt: '2024-05-01',
      },
      {
        id: 5,
        period: '2024-05',
        type: 'monthly',
        projectCount: 6,
        totalAmount: 6780000,
        totalProfit: 2712000,
        avgBugRate: 0.024,
        totalTickets: 36,
        summary: '本月新增1个项目，清华项目顺利交付。浙大项目启动，整体进展良好。',
        createdAt: '2024-06-01',
      },
      {
        id: 6,
        period: '2024-06',
        type: 'monthly',
        projectCount: 7,
        totalAmount: 7460000,
        totalProfit: 2984000,
        avgBugRate: 0.022,
        totalTickets: 36,
        summary: '本月新增1个项目，清华项目完成验收。南大项目启动，团队协作效率提升。',
        createdAt: '2024-07-01',
      },
    ],
  },
  'GET /api/reports/quarterly': {
    success: true,
    data: [
      {
        id: 1,
        period: '2024-Q1',
        type: 'quarterly',
        projectCount: 4,
        totalAmount: 4580000,
        totalProfit: 1832000,
        avgBugRate: 0.032,
        totalTickets: 73,
        summary:
          'Q1季度新增4个项目，总成交额458万元。清华、北大、复旦三所高校项目顺利启动，团队磨合良好。主要风险点在于需求变更频繁，已采取措施加强需求管理。',
        highlights: [
          '成功签约3所985高校',
          '团队规模扩大至15人',
          'Bug率控制在3.2%以内',
          '客户满意度达到92%',
        ],
        risks: ['需求变更频繁', '部分项目人员紧张', '技术难度超出预期'],
        nextQuarterPlan: [
          '加强需求评审流程',
          '引入自动化测试',
          '扩充技术团队',
          '建立知识库体系',
        ],
        createdAt: '2024-04-05',
      },
      {
        id: 2,
        period: '2024-Q2',
        type: 'quarterly',
        projectCount: 7,
        totalAmount: 7460000,
        totalProfit: 2984000,
        avgBugRate: 0.024,
        totalTickets: 107,
        summary:
          'Q2季度新增3个项目，总成交额746万元。清华项目顺利交付，北大、复旦项目进展顺利。上海交大、浙大、南大项目陆续启动，业务规模持续扩大。',
        highlights: [
          '清华项目成功交付并获好评',
          '新增3所高校合作',
          'Bug率降至2.4%',
          '利润率保持在40%',
        ],
        risks: ['项目并发数量增加', '质量管控压力大', '部分成员工作饱和'],
        nextQuarterPlan: [
          '优化项目管理流程',
          '加强代码审查机制',
          '合理分配人力资源',
          '提升自动化水平',
        ],
        createdAt: '2024-07-05',
      },
    ],
  },
  'POST /api/reports/generate': (req: any, res: any) => {
    const { period, type } = req.body;
    // 模拟 AI 生成报告
    setTimeout(() => {
      res.json({
        success: true,
        data: {
          id: Date.now(),
          period,
          type,
          content: `这是由AI生成的${type === 'monthly' ? '月度' : '季度'}报告（${period}）。\n\n基于数据分析，本期项目整体运行良好，各项指标符合预期。建议继续保持当前节奏，同时关注风险点的管控。`,
          createdAt: new Date().toISOString(),
        },
      });
    }, 2000);
  },
};

