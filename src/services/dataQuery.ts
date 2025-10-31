/**
 * 数据查询服务
 * 用于获取系统内的项目、成员等数据
 */

export interface MemberData {
  id?: number;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  riskNote?: string;
  bugCount?: number;
  workDays?: number;
}

export interface ProjectData {
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
  members: MemberData[];
  bugs: { total: number; byMember: any[] };
  tickets: { maintenance: number; repair: number };
}

// Mock 项目数据（与 projects/index.tsx 保持一致）
const mockProjects: ProjectData[] = [
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

/**
 * 获取所有项目数据
 */
export function getAllProjects(): ProjectData[] {
  return mockProjects;
}

/**
 * 获取所有成员数据（从所有项目中提取）
 */
export function getAllMembers(): MemberData[] {
  const members: MemberData[] = [];
  mockProjects.forEach((project) => {
    project.members.forEach((member) => {
      members.push({
        ...member,
        // 添加项目信息作为上下文
        projectName: project.name,
        projectStatus: project.status,
      } as any);
    });
  });
  return members;
}

/**
 * 根据项目 ID 获取项目
 */
export function getProjectById(id: string): ProjectData | undefined {
  return mockProjects.find((p) => p.id === id);
}

/**
 * 根据成员名称查找成员
 */
export function getMemberByName(name: string): MemberData[] {
  const members: MemberData[] = [];
  mockProjects.forEach((project) => {
    const found = project.members.filter((m) => m.name.includes(name));
    found.forEach((member) => {
      members.push({
        ...member,
        projectName: project.name,
        projectStatus: project.status,
      } as any);
    });
  });
  return members;
}

/**
 * 获取项目统计数据
 */
export function getProjectStats() {
  const totalProjects = mockProjects.length;
  const completedProjects = mockProjects.filter((p) => p.status === 'completed').length;
  const ongoingProjects = mockProjects.filter((p) => p.status === 'ongoing').length;
  const delayedProjects = mockProjects.filter((p) => p.status === 'delayed').length;
  const planningProjects = mockProjects.filter((p) => p.status === 'planning').length;

  const totalAmount = mockProjects.reduce((sum, p) => sum + p.amount, 0);
  const totalProfit = mockProjects.reduce((sum, p) => sum + p.profit, 0);
  const totalBugs = mockProjects.reduce((sum, p) => sum + (typeof p.bugs === 'number' ? p.bugs : p.bugs.total), 0);
  const totalTickets = mockProjects.reduce(
    (sum, p) => sum + (typeof p.tickets === 'number' ? p.tickets : p.tickets.maintenance + p.tickets.repair),
    0,
  );

  return {
    totalProjects,
    completedProjects,
    ongoingProjects,
    delayedProjects,
    planningProjects,
    totalAmount,
    totalProfit,
    totalBugs,
    totalTickets,
    profitRate: totalProfit / totalAmount,
  };
}

