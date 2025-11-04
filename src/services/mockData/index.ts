/**
 * 本地 Mock 数据
 * 用于生产环境直接返回数据，不依赖后端 API
 *
 * 使用方法：
 * 1. 在 src/services 中导入这个模块
 * 2. 根据环境变量判断是否使用 Mock 数据
 * 3. 如果使用 Mock，直接返回这里的数据
 */

// 导入各模块的 Mock 数据
export * from './statistics';
export * from './reports';
export * from './knowledge';
export * from './workplace';

// 用户相关数据
export const mockUserData = {
  currentUser: {
    success: true,
    data: {
      name: '系统管理员',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'admin@outbook.com',
      signature: 'OutBook 项目管理系统',
      title: '系统管理员',
      group: '技术部',
      tags: [
        { key: '0', label: '很有想法的' },
        { key: '1', label: '专注设计' },
        { key: '2', label: '辣~' },
        { key: '3', label: '大长腿' },
        { key: '4', label: '川妹子' },
        { key: '5', label: '海纳百川' },
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      access: 'admin',
      geographic: {
        province: { label: '四川省', key: '510000' },
        city: { label: '成都市', key: '510100' },
      },
      address: '四川省成都市高新区',
      phone: '028-1234567',
    },
  },
  
  loginResult: {
    success: true,
    data: {
      status: 'ok',
      type: 'account',
      currentAuthority: 'admin',
    },
  },
  
  outLoginResult: {
    success: true,
    data: {},
  },
};

// 通知数据
export const mockNotices = {
  success: true,
  data: [
    {
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
      title: '你收到了 14 份新周报',
      datetime: '2024-01-08',
      type: 'notification',
    },
    {
      id: '000000002',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: '你推荐的 张三 已通过第三轮面试',
      datetime: '2024-01-08',
      type: 'notification',
    },
  ],
};

// 判断是否使用本地 Mock 数据
export const shouldUseMockData = () => {
  // 方式1：通过环境变量控制
  if (process.env.USE_LOCAL_MOCK === 'true') {
    return true;
  }
  
  // 方式2：在生产环境且没有配置真实 API 时使用 Mock
  if (process.env.NODE_ENV === 'production' && !process.env.API_URL) {
    return true;
  }
  
  return false;
};

/**
 * 模拟异步请求延迟
 */
export const mockDelay = (ms: number = 300) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * 包装 Mock 数据为 Promise
 */
export const mockResponse = async <T>(data: T, delay: number = 300): Promise<T> => {
  await mockDelay(delay);
  return data;
};

// ==================== 项目相关 ====================
export const mockProjectData = {
  success: true,
  data: [
    {
      id: 1,
      name: '清华大学智慧校园系统',
      school: '清华大学',
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      estimatedEndDate: '2024-06-15',
      status: 'completed',
      amount: 1200000,
      profit: 480000,
      profitRate: 0.4,
      members: [
        {
          id: 1,
          name: '张三',
          role: '项目经理',
          startDate: '2024-01-15',
          endDate: '2024-06-30',
          riskNote: '',
        },
        {
          id: 2,
          name: '李四',
          role: '前端开发',
          startDate: '2024-01-20',
          endDate: '2024-06-25',
          riskNote: '需求变更频繁',
        },
        {
          id: 3,
          name: '王五',
          role: '后端开发',
          startDate: '2024-01-20',
          endDate: '2024-06-28',
          riskNote: '',
        },
      ],
      bugs: {
        total: 45,
        byMember: [
          { memberId: 1, memberName: '张三', count: 5 },
          { memberId: 2, memberName: '李四', count: 25 },
          { memberId: 3, memberName: '王五', count: 15 },
        ],
      },
      tickets: {
        maintenance: 12,
        repair: 8,
      },
    },
    {
      id: 2,
      name: '北京大学在线教育平台',
      school: '北京大学',
      startDate: '2024-02-01',
      endDate: '2024-08-31',
      estimatedEndDate: '2024-08-15',
      status: 'in_progress',
      amount: 1500000,
      profit: 600000,
      profitRate: 0.4,
      members: [
        {
          id: 4,
          name: '赵六',
          role: '项目经理',
          startDate: '2024-02-01',
          endDate: '2024-08-31',
          riskNote: '',
        },
        {
          id: 5,
          name: '孙七',
          role: '全栈开发',
          startDate: '2024-02-05',
          endDate: '2024-08-25',
          riskNote: '技术难度较高',
        },
        {
          id: 6,
          name: '周八',
          role: 'UI设计师',
          startDate: '2024-02-01',
          endDate: '2024-05-31',
          riskNote: '',
        },
      ],
      bugs: {
        total: 32,
        byMember: [
          { memberId: 4, memberName: '赵六', count: 3 },
          { memberId: 5, memberName: '孙七', count: 22 },
          { memberId: 6, memberName: '周八', count: 7 },
        ],
      },
      tickets: {
        maintenance: 5,
        repair: 3,
      },
    },
    {
      id: 3,
      name: '复旦大学科研管理系统',
      school: '复旦大学',
      startDate: '2024-03-10',
      endDate: '2024-09-30',
      estimatedEndDate: '2024-09-20',
      status: 'in_progress',
      amount: 980000,
      profit: 392000,
      profitRate: 0.4,
      members: [
        {
          id: 7,
          name: '吴九',
          role: '项目经理',
          startDate: '2024-03-10',
          endDate: '2024-09-30',
          riskNote: '',
        },
        {
          id: 8,
          name: '郑十',
          role: '后端开发',
          startDate: '2024-03-15',
          endDate: '2024-09-25',
          riskNote: '',
        },
      ],
      bugs: {
        total: 18,
        byMember: [
          { memberId: 7, memberName: '吴九', count: 2 },
          { memberId: 8, memberName: '郑十', count: 16 },
        ],
      },
      tickets: {
        maintenance: 3,
        repair: 2,
      },
    },
    {
      id: 4,
      name: '上海交通大学学生管理平台',
      school: '上海交通大学',
      startDate: '2024-04-01',
      endDate: '2024-10-31',
      estimatedEndDate: '2024-10-15',
      status: 'in_progress',
      amount: 1350000,
      profit: 540000,
      profitRate: 0.4,
      members: [
        {
          id: 9,
          name: '冯十一',
          role: '项目经理',
          startDate: '2024-04-01',
          endDate: '2024-10-31',
          riskNote: '',
        },
        {
          id: 10,
          name: '陈十二',
          role: '前端开发',
          startDate: '2024-04-05',
          endDate: '2024-10-25',
          riskNote: '人员不足',
        },
        {
          id: 11,
          name: '褚十三',
          role: '后端开发',
          startDate: '2024-04-05',
          endDate: '2024-10-28',
          riskNote: '',
        },
      ],
      bugs: {
        total: 28,
        byMember: [
          { memberId: 9, memberName: '冯十一', count: 3 },
          { memberId: 10, memberName: '陈十二', count: 15 },
          { memberId: 11, memberName: '褚十三', count: 10 },
        ],
      },
      tickets: {
        maintenance: 7,
        repair: 4,
      },
    },
    {
      id: 5,
      name: '浙江大学图书馆管理系统',
      school: '浙江大学',
      startDate: '2024-05-01',
      endDate: '2024-11-30',
      estimatedEndDate: '2024-11-20',
      status: 'planning',
      amount: 850000,
      profit: 340000,
      profitRate: 0.4,
      members: [
        {
          id: 12,
          name: '卫十四',
          role: '项目经理',
          startDate: '2024-05-01',
          endDate: '2024-11-30',
          riskNote: '',
        },
        {
          id: 13,
          name: '蒋十五',
          role: '全栈开发',
          startDate: '2024-05-10',
          endDate: '2024-11-25',
          riskNote: '',
        },
      ],
      bugs: {
        total: 5,
        byMember: [
          { memberId: 12, memberName: '卫十四', count: 1 },
          { memberId: 13, memberName: '蒋十五', count: 4 },
        ],
      },
      tickets: {
        maintenance: 1,
        repair: 0,
      },
    },
    {
      id: 6,
      name: '南京大学实验室预约系统',
      school: '南京大学',
      startDate: '2024-06-01',
      endDate: '2024-12-31',
      estimatedEndDate: '2024-12-15',
      status: 'planning',
      amount: 680000,
      profit: 272000,
      profitRate: 0.4,
      members: [
        {
          id: 14,
          name: '沈十六',
          role: '项目经理',
          startDate: '2024-06-01',
          endDate: '2024-12-31',
          riskNote: '',
        },
      ],
      bugs: {
        total: 0,
        byMember: [],
      },
      tickets: {
        maintenance: 0,
        repair: 0,
      },
    },
    {
      id: 7,
      name: '中国科学技术大学课程管理系统',
      school: '中国科学技术大学',
      startDate: '2024-01-01',
      endDate: '2024-05-31',
      estimatedEndDate: '2024-05-20',
      status: 'completed',
      amount: 920000,
      profit: 368000,
      profitRate: 0.4,
      members: [
        {
          id: 15,
          name: '韩十七',
          role: '项目经理',
          startDate: '2024-01-01',
          endDate: '2024-05-31',
          riskNote: '',
        },
        {
          id: 16,
          name: '杨十八',
          role: '开发工程师',
          startDate: '2024-01-05',
          endDate: '2024-05-28',
          riskNote: '',
        },
      ],
      bugs: {
        total: 22,
        byMember: [
          { memberId: 15, memberName: '韩十七', count: 4 },
          { memberId: 16, memberName: '杨十八', count: 18 },
        ],
      },
      tickets: {
        maintenance: 6,
        repair: 3,
      },
    },
  ],
};

