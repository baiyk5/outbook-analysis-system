import dayjs from 'dayjs';
import { getProjects, getBugs, getTickets, getMembers } from './project.service';
import { getCache, setCache } from './cache';
import { config } from '../config';

/**
 * 获取统计概览
 */
export async function getStatisticsOverview() {
  const cacheKey = 'statistics:overview';
  
  const cached = await getCache(cacheKey);
  if (cached) return cached;
  
  const [projects, bugs, tickets] = await Promise.all([
    getProjects(),
    getBugs(),
    getTickets(),
  ]);
  
  const totalProjects = projects.length;
  const totalAmount = projects.reduce((sum: number, p: any) => sum + (p.amount || 0), 0);
  const totalCost = projects.reduce((sum: number, p: any) => sum + (p.cost || 0), 0);
  const totalProfit = totalAmount - totalCost;
  const totalBugs = bugs.length;
  const totalTickets = tickets.length;
  
  const overview = {
    totalProjects,
    totalAmount,
    totalCost,
    totalProfit,
    profitRate: totalAmount > 0 ? ((totalProfit / totalAmount) * 100).toFixed(2) : '0',
    totalBugs,
    totalTickets,
    bugRate: totalBugs > 0 ? ((totalBugs / (totalProjects * 100)) * 100).toFixed(2) : '0',
  };
  
  await setCache(cacheKey, overview, config.cache.ttl.short);
  return overview;
}

/**
 * 获取趋势数据（最近6个月）
 */
export async function getStatisticsTrend() {
  const cacheKey = 'statistics:trend';
  
  const cached = await getCache(cacheKey);
  if (cached) return cached;
  
  const [projects, bugs] = await Promise.all([
    getProjects(),
    getBugs(),
  ]);
  
  const months = [];
  for (let i = 5; i >= 0; i--) {
    const month = dayjs().subtract(i, 'month').format('YYYY-MM');
    months.push(month);
  }
  
  const trend = months.map((month) => {
    // 这里简化处理，实际应该根据项目的开始/结束日期来统计
    const monthProjects = projects.filter((p: any) => {
      const startMonth = dayjs(p.startDate).format('YYYY-MM');
      return startMonth === month;
    });
    
    const monthBugs = bugs.filter((b: any) => {
      const bugMonth = dayjs(b.createdAt).format('YYYY-MM');
      return bugMonth === month;
    });
    
    const amount = monthProjects.reduce((sum: number, p: any) => sum + (p.amount || 0), 0);
    const cost = monthProjects.reduce((sum: number, p: any) => sum + (p.cost || 0), 0);
    
    return {
      month,
      projectCount: monthProjects.length,
      amount,
      cost,
      profit: amount - cost,
      bugCount: monthBugs.length,
    };
  });
  
  await setCache(cacheKey, trend, config.cache.ttl.medium);
  return trend;
}

/**
 * 获取学校词云数据
 */
export async function getSchoolWordcloud() {
  const cacheKey = 'statistics:wordcloud';
  
  const cached = await getCache(cacheKey);
  if (cached) return cached;
  
  const projects = await getProjects();
  
  const schoolCount: Record<string, number> = {};
  projects.forEach((p: any) => {
    const school = p.school || '未知';
    schoolCount[school] = (schoolCount[school] || 0) + 1;
  });
  
  const wordcloud = Object.entries(schoolCount).map(([name, value]) => ({
    name,
    value,
  }));
  
  await setCache(cacheKey, wordcloud, config.cache.ttl.long);
  return wordcloud;
}

/**
 * 获取 Bug 分析数据
 */
export async function getBugAnalysis() {
  const cacheKey = 'statistics:bug-analysis';
  
  const cached = await getCache(cacheKey);
  if (cached) return cached;
  
  const [projects, bugs] = await Promise.all([
    getProjects(),
    getBugs(),
  ]);
  
  // 按项目统计
  const byProject = projects.map((p: any) => {
    const projectBugs = bugs.filter((b: any) => b.projectId === p.id);
    return {
      projectName: p.name,
      bugCount: projectBugs.length,
      resolvedCount: projectBugs.filter((b: any) => b.status === '已解决').length,
    };
  }).sort((a, b) => b.bugCount - a.bugCount);
  
  // 按成员统计
  const memberBugs: Record<string, number> = {};
  bugs.forEach((b: any) => {
    const assignee = b.assignee?.name || '未分配';
    memberBugs[assignee] = (memberBugs[assignee] || 0) + 1;
  });
  
  const byMember = Object.entries(memberBugs)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
  
  // 趋势（最近6个月）
  const months = [];
  for (let i = 5; i >= 0; i--) {
    const month = dayjs().subtract(i, 'month').format('YYYY-MM');
    months.push(month);
  }
  
  const trend = months.map((month) => {
    const monthBugs = bugs.filter((b: any) => {
      const bugMonth = dayjs(b.createdAt).format('YYYY-MM');
      return bugMonth === month;
    });
    
    return {
      month,
      total: monthBugs.length,
      resolved: monthBugs.filter((b: any) => b.status === '已解决').length,
    };
  });
  
  const analysis = {
    total: bugs.length,
    resolved: bugs.filter((b: any) => b.status === '已解决').length,
    byProject: byProject.slice(0, 10), // 前10个项目
    byMember: byMember.slice(0, 10), // 前10个成员
    trend,
  };
  
  await setCache(cacheKey, analysis, config.cache.ttl.short);
  return analysis;
}

/**
 * 获取工单分析数据
 */
export async function getTicketAnalysis() {
  const cacheKey = 'statistics:ticket-analysis';
  
  const cached = await getCache(cacheKey);
  if (cached) return cached;
  
  const [projects, tickets] = await Promise.all([
    getProjects(),
    getTickets(),
  ]);
  
  // 按项目统计
  const byProject = projects.map((p: any) => {
    const projectTickets = tickets.filter((t: any) => t.projectId === p.id);
    return {
      projectName: p.name,
      ticketCount: projectTickets.length,
      completedCount: projectTickets.filter((t: any) => t.status === '已完成').length,
    };
  }).sort((a, b) => b.ticketCount - a.ticketCount);
  
  // 按类型统计
  const byType: Record<string, number> = {};
  tickets.forEach((t: any) => {
    const type = t.type || '其他';
    byType[type] = (byType[type] || 0) + 1;
  });
  
  // 趋势
  const months = [];
  for (let i = 5; i >= 0; i--) {
    const month = dayjs().subtract(i, 'month').format('YYYY-MM');
    months.push(month);
  }
  
  const trend = months.map((month) => {
    const monthTickets = tickets.filter((t: any) => {
      const ticketMonth = dayjs(t.createdAt).format('YYYY-MM');
      return ticketMonth === month;
    });
    
    return {
      month,
      total: monthTickets.length,
      completed: monthTickets.filter((t: any) => t.status === '已完成').length,
    };
  });
  
  const analysis = {
    total: tickets.length,
    completed: tickets.filter((t: any) => t.status === '已完成').length,
    byProject: byProject.slice(0, 10),
    byType,
    trend,
  };
  
  await setCache(cacheKey, analysis, config.cache.ttl.short);
  return analysis;
}

/**
 * 获取财务数据
 */
export async function getFinancialData() {
  const cacheKey = 'statistics:financial';
  
  const cached = await getCache(cacheKey);
  if (cached) return cached;
  
  const projects = await getProjects();
  
  // 按项目统计
  const byProject = projects.map((p: any) => ({
    projectName: p.name,
    amount: p.amount || 0,
    cost: p.cost || 0,
    profit: (p.amount || 0) - (p.cost || 0),
    profitRate: p.profitRate || 0,
  })).sort((a, b) => b.profit - a.profit);
  
  // 月度趋势
  const months = [];
  for (let i = 5; i >= 0; i--) {
    const month = dayjs().subtract(i, 'month').format('YYYY-MM');
    months.push(month);
  }
  
  const monthlyTrend = months.map((month) => {
    const monthProjects = projects.filter((p: any) => {
      const startMonth = dayjs(p.startDate).format('YYYY-MM');
      return startMonth === month;
    });
    
    const amount = monthProjects.reduce((sum: number, p: any) => sum + (p.amount || 0), 0);
    const cost = monthProjects.reduce((sum: number, p: any) => sum + (p.cost || 0), 0);
    
    return {
      month,
      amount,
      cost,
      profit: amount - cost,
    };
  });
  
  // 季度统计
  const currentQuarter = Math.floor(dayjs().month() / 3) + 1;
  const currentYear = dayjs().year();
  
  const quarters = [
    { year: currentYear, quarter: currentQuarter - 1 },
    { year: currentYear, quarter: currentQuarter },
  ];
  
  const quarterlyData = quarters.map(({ year, quarter }) => {
    const quarterProjects = projects.filter((p: any) => {
      const startDate = dayjs(p.startDate);
      const projectQuarter = Math.floor(startDate.month() / 3) + 1;
      return startDate.year() === year && projectQuarter === quarter;
    });
    
    const amount = quarterProjects.reduce((sum: number, p: any) => sum + (p.amount || 0), 0);
    const cost = quarterProjects.reduce((sum: number, p: any) => sum + (p.cost || 0), 0);
    
    return {
      quarter: `${year}-Q${quarter}`,
      amount,
      cost,
      profit: amount - cost,
    };
  });
  
  const financial = {
    byProject: byProject.slice(0, 10),
    monthlyTrend,
    quarterlyData,
  };
  
  await setCache(cacheKey, financial, config.cache.ttl.short);
  return financial;
}

