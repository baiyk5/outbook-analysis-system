import { Request, Response } from 'express';
import * as projectService from '../services/project.service';
import * as statisticsService from '../services/statistics.service';
import * as reportService from '../services/report.service';
import * as knowledgeService from '../services/knowledge.service';
import * as workplaceService from '../services/workplace.service';

/**
 * 统一响应格式
 */
function successResponse(data: any) {
  return {
    success: true,
    data,
    errorMessage: null,
  };
}

function errorResponse(message: string, code = 500) {
  return {
    success: false,
    data: null,
    errorMessage: message,
    errorCode: code,
  };
}

/**
 * 异步处理器包装
 */
function asyncHandler(fn: (req: Request, res: Response) => Promise<any>) {
  return async (req: Request, res: Response) => {
    try {
      const result = await fn(req, res);
      res.json(successResponse(result));
    } catch (error: any) {
      console.error('API 错误:', error);
      res.status(500).json(errorResponse(error.message || '服务器内部错误'));
    }
  };
}

// ==================== 用户相关 ====================

export const login = asyncHandler(async (req: Request) => {
  const { username, password } = req.body;
  
  // 简单的模拟登录（实际应该验证飞书用户）
  if (username === 'admin' && password === 'ant.design') {
    return {
      status: 'ok',
      type: 'account',
      currentAuthority: 'admin',
    };
  }
  
  throw new Error('用户名或密码错误');
});

export const getCurrentUser = asyncHandler(async () => {
  // 返回模拟用户信息（实际应该从飞书获取）
  return {
    name: '管理员',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'admin@outbook.com',
    signature: 'OutBook 项目管理系统',
    title: '系统管理员',
    group: '管理组',
    tags: [
      { key: '0', label: '很有想法的' },
      { key: '1', label: '专注设计' },
      { key: '2', label: '辣~' },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    access: 'admin',
    geographic: {
      province: { label: '北京市', key: '110000' },
      city: { label: '北京市', key: '110100' },
    },
    address: '北京市朝阳区',
    phone: '010-12345678',
  };
});

export const logout = asyncHandler(async () => {
  return { success: true };
});

export const getNotices = asyncHandler(async () => {
  return [
    {
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '你收到了 14 份新周报',
      datetime: '2024-11-04',
      type: 'notification',
    },
    {
      id: '000000002',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      title: '你推荐的 清华大学智慧校园系统 已通过审核',
      datetime: '2024-11-03',
      type: 'notification',
    },
  ];
});

// ==================== 项目相关 ====================

export const getProjects = asyncHandler(async () => {
  return await projectService.getProjects();
});

export const getProjectById = asyncHandler(async (req: Request) => {
  const { id } = req.params;
  return await projectService.getProjectById(id);
});

// ==================== 统计相关 ====================

export const getStatisticsOverview = asyncHandler(async () => {
  return await statisticsService.getStatisticsOverview();
});

export const getStatisticsTrend = asyncHandler(async () => {
  return await statisticsService.getStatisticsTrend();
});

export const getSchoolWordcloud = asyncHandler(async () => {
  return await statisticsService.getSchoolWordcloud();
});

export const getBugAnalysis = asyncHandler(async () => {
  return await statisticsService.getBugAnalysis();
});

export const getTicketAnalysis = asyncHandler(async () => {
  return await statisticsService.getTicketAnalysis();
});

export const getFinancialData = asyncHandler(async () => {
  return await statisticsService.getFinancialData();
});

// ==================== 报告相关 ====================

export const getMonthlyReports = asyncHandler(async () => {
  return await reportService.getMonthlyReports();
});

export const getQuarterlyReports = asyncHandler(async () => {
  return await reportService.getQuarterlyReports();
});

export const generateReport = asyncHandler(async (req: Request) => {
  const { type, period } = req.body;
  return await reportService.generateReport({ type, period });
});

// ==================== 知识库相关 ====================

export const getKnowledgeDocuments = asyncHandler(async () => {
  return await knowledgeService.getKnowledgeDocuments();
});

export const getKnowledgeStats = asyncHandler(async () => {
  return await knowledgeService.getKnowledgeStats();
});

// ==================== 工作台相关 ====================

export const getProjectNotices = asyncHandler(async () => {
  return await workplaceService.getProjectNotices();
});

export const getActivities = asyncHandler(async () => {
  return await workplaceService.getActivities();
});

export const getWorkplaceChartData = asyncHandler(async () => {
  return await workplaceService.getWorkplaceChartData();
});

// ==================== 分析相关 ====================

export const getAnalysisChartData = asyncHandler(async () => {
  // 复用工作台的图表数据
  return await workplaceService.getWorkplaceChartData();
});

