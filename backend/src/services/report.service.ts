import dayjs from 'dayjs';
import { getProjects, getBugs, getTickets } from './project.service';
import { getCache, setCache } from './cache';
import { config } from '../config';

/**
 * 生成月度报告数据
 */
async function generateMonthlyReportData(year: number, month: number) {
  const [projects, bugs, tickets] = await Promise.all([
    getProjects(),
    getBugs(),
    getTickets(),
  ]);
  
  const monthStr = `${year}-${String(month).padStart(2, '0')}`;
  
  // 筛选该月的项目
  const monthProjects = projects.filter((p: any) => {
    const startMonth = dayjs(p.startDate).format('YYYY-MM');
    return startMonth === monthStr;
  });
  
  // 筛选该月的 Bug
  const monthBugs = bugs.filter((b: any) => {
    const bugMonth = dayjs(b.createdAt).format('YYYY-MM');
    return bugMonth === monthStr;
  });
  
  // 筛选该月的工单
  const monthTickets = tickets.filter((t: any) => {
    const ticketMonth = dayjs(t.createdAt).format('YYYY-MM');
    return ticketMonth === monthStr;
  });
  
  const totalAmount = monthProjects.reduce((sum: number, p: any) => sum + (p.amount || 0), 0);
  const totalCost = monthProjects.reduce((sum: number, p: any) => sum + (p.cost || 0), 0);
  const totalProfit = totalAmount - totalCost;
  
  return {
    period: monthStr,
    type: 'monthly',
    projectCount: monthProjects.length,
    totalAmount,
    totalCost,
    totalProfit,
    profitRate: totalAmount > 0 ? ((totalProfit / totalAmount) * 100).toFixed(2) : '0',
    bugCount: monthBugs.length,
    ticketCount: monthTickets.length,
    projects: monthProjects.map((p: any) => ({
      name: p.name,
      amount: p.amount,
      profit: p.profit,
      status: p.status,
    })),
    summary: `本月共完成 ${monthProjects.length} 个项目，总金额 ¥${totalAmount.toLocaleString()}，利润 ¥${totalProfit.toLocaleString()}，利润率 ${((totalProfit / totalAmount) * 100).toFixed(2)}%。`,
  };
}

/**
 * 获取月度报告列表（最近6个月）
 */
export async function getMonthlyReports() {
  const cacheKey = 'reports:monthly';
  
  const cached = await getCache(cacheKey);
  if (cached) return cached;
  
  const reports = [];
  const now = dayjs();
  
  for (let i = 0; i < 6; i++) {
    const date = now.subtract(i, 'month');
    const report = await generateMonthlyReportData(date.year(), date.month() + 1);
    reports.push(report);
  }
  
  await setCache(cacheKey, reports, config.cache.ttl.medium);
  return reports;
}

/**
 * 生成季度报告数据
 */
async function generateQuarterlyReportData(year: number, quarter: number) {
  const [projects, bugs, tickets] = await Promise.all([
    getProjects(),
    getBugs(),
    getTickets(),
  ]);
  
  // 筛选该季度的项目
  const quarterProjects = projects.filter((p: any) => {
    const startDate = dayjs(p.startDate);
    const projectQuarter = Math.floor(startDate.month() / 3) + 1;
    return startDate.year() === year && projectQuarter === quarter;
  });
  
  // 筛选该季度的 Bug
  const quarterBugs = bugs.filter((b: any) => {
    const bugDate = dayjs(b.createdAt);
    const bugQuarter = Math.floor(bugDate.month() / 3) + 1;
    return bugDate.year() === year && bugQuarter === quarter;
  });
  
  // 筛选该季度的工单
  const quarterTickets = tickets.filter((t: any) => {
    const ticketDate = dayjs(t.createdAt);
    const ticketQuarter = Math.floor(ticketDate.month() / 3) + 1;
    return ticketDate.year() === year && ticketQuarter === quarter;
  });
  
  const totalAmount = quarterProjects.reduce((sum: number, p: any) => sum + (p.amount || 0), 0);
  const totalCost = quarterProjects.reduce((sum: number, p: any) => sum + (p.cost || 0), 0);
  const totalProfit = totalAmount - totalCost;
  
  return {
    period: `${year}-Q${quarter}`,
    type: 'quarterly',
    projectCount: quarterProjects.length,
    totalAmount,
    totalCost,
    totalProfit,
    profitRate: totalAmount > 0 ? ((totalProfit / totalAmount) * 100).toFixed(2) : '0',
    bugCount: quarterBugs.length,
    ticketCount: quarterTickets.length,
    projects: quarterProjects.map((p: any) => ({
      name: p.name,
      amount: p.amount,
      profit: p.profit,
      status: p.status,
    })),
    summary: `本季度共完成 ${quarterProjects.length} 个项目，总金额 ¥${totalAmount.toLocaleString()}，利润 ¥${totalProfit.toLocaleString()}，利润率 ${((totalProfit / totalAmount) * 100).toFixed(2)}%。`,
  };
}

/**
 * 获取季度报告列表（最近2个季度）
 */
export async function getQuarterlyReports() {
  const cacheKey = 'reports:quarterly';
  
  const cached = await getCache(cacheKey);
  if (cached) return cached;
  
  const reports = [];
  const now = dayjs();
  const currentQuarter = Math.floor(now.month() / 3) + 1;
  const currentYear = now.year();
  
  // 当前季度
  reports.push(await generateQuarterlyReportData(currentYear, currentQuarter));
  
  // 上一季度
  let prevQuarter = currentQuarter - 1;
  let prevYear = currentYear;
  if (prevQuarter === 0) {
    prevQuarter = 4;
    prevYear = currentYear - 1;
  }
  reports.push(await generateQuarterlyReportData(prevYear, prevQuarter));
  
  await setCache(cacheKey, reports, config.cache.ttl.medium);
  return reports;
}

/**
 * AI 生成报告（模拟）
 */
export async function generateReport(params: { type: string; period: string }) {
  // 模拟 AI 生成延迟
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  const { type, period } = params;
  
  let reportData;
  if (type === 'monthly') {
    const [year, month] = period.split('-').map(Number);
    reportData = await generateMonthlyReportData(year, month);
  } else if (type === 'quarterly') {
    const [year, quarter] = period.split('-Q').map(Number);
    reportData = await generateQuarterlyReportData(year, quarter);
  } else {
    throw new Error('不支持的报告类型');
  }
  
  // 添加 AI 生成的内容
  return {
    ...reportData,
    aiGenerated: true,
    generatedAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    content: `
# ${period} ${type === 'monthly' ? '月度' : '季度'}报告

## 概览
${reportData.summary}

## 项目详情
本期共有 ${reportData.projectCount} 个项目：
${reportData.projects.map((p: any, i: number) => `${i + 1}. ${p.name} - ¥${p.amount.toLocaleString()} (${p.status})`).join('\n')}

## Bug 和工单
- Bug 总数: ${reportData.bugCount}
- 工单总数: ${reportData.ticketCount}

## 财务分析
- 总金额: ¥${reportData.totalAmount.toLocaleString()}
- 总成本: ¥${reportData.totalCost.toLocaleString()}
- 总利润: ¥${reportData.totalProfit.toLocaleString()}
- 利润率: ${reportData.profitRate}%

## 建议
基于本期数据分析，建议：
1. 继续保持当前的项目管理节奏
2. 关注 Bug 率较高的项目，加强质量控制
3. 优化成本控制，提高利润率
    `.trim(),
  };
}

