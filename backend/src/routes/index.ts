import { Router } from 'express';
import * as controller from '../controllers';

const router = Router();

// ==================== 用户相关 ====================
router.post('/api/login/account', controller.login);
router.get('/api/currentUser', controller.getCurrentUser);
router.post('/api/login/outLogin', controller.logout);
router.get('/api/notices', controller.getNotices);

// ==================== 项目相关 ====================
router.get('/api/projects', controller.getProjects);
router.get('/api/projects/:id', controller.getProjectById);

// ==================== 统计相关 ====================
router.get('/api/statistics/overview', controller.getStatisticsOverview);
router.get('/api/statistics/trend', controller.getStatisticsTrend);
router.get('/api/statistics/wordcloud', controller.getSchoolWordcloud);
router.get('/api/statistics/bug-analysis', controller.getBugAnalysis);
router.get('/api/statistics/ticket-analysis', controller.getTicketAnalysis);
router.get('/api/statistics/financial', controller.getFinancialData);

// ==================== 报告相关 ====================
router.get('/api/reports/monthly', controller.getMonthlyReports);
router.get('/api/reports/quarterly', controller.getQuarterlyReports);
router.post('/api/reports/generate', controller.generateReport);

// ==================== 知识库相关 ====================
router.get('/api/knowledge/documents', controller.getKnowledgeDocuments);
router.get('/api/knowledge/stats', controller.getKnowledgeStats);

// ==================== 工作台相关 ====================
router.get('/api/workplace/notices', controller.getProjectNotices);
router.get('/api/workplace/activities', controller.getActivities);
router.get('/api/workplace/charts', controller.getWorkplaceChartData);

// ==================== 分析相关 ====================
router.get('/api/analysis/charts', controller.getAnalysisChartData);

// ==================== 健康检查 ====================
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

export default router;

