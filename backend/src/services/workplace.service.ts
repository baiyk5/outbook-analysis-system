import dayjs from 'dayjs';
import { getProjects, getBugs, getTickets, getMembers } from './project.service';
import { getCache, setCache } from './cache';
import { config } from '../config';

/**
 * 获取项目通知
 */
export async function getProjectNotices() {
  const cacheKey = 'workplace:notices';
  
  const cached = await getCache(cacheKey);
  if (cached) return cached;
  
  const projects = await getProjects();
  
  // 生成通知（基于项目状态）
  const notices = projects
    .filter((p: any) => p.status === '进行中')
    .slice(0, 6)
    .map((p: any) => ({
      id: p.id,
      title: `${p.name} 项目进度更新`,
      description: `当前进度: ${p.progress}%`,
      type: 'info',
      datetime: dayjs().subtract(Math.random() * 7, 'day').format('YYYY-MM-DD HH:mm:ss'),
    }));
  
  await setCache(cacheKey, notices, config.cache.ttl.short);
  return notices;
}

/**
 * 获取活动列表
 */
export async function getActivities() {
  const cacheKey = 'workplace:activities';
  
  const cached = await getCache(cacheKey);
  if (cached) return cached;
  
  const [projects, bugs, tickets] = await Promise.all([
    getProjects(),
    getBugs(),
    getTickets(),
  ]);
  
  const activities: any[] = [];
  
  // 项目活动
  projects.slice(0, 2).forEach((p: any) => {
    activities.push({
      id: `project-${p.id}`,
      type: 'project',
      title: `创建了项目 ${p.name}`,
      description: `合同金额: ¥${p.amount?.toLocaleString()}`,
      datetime: p.startDate,
      user: p.manager?.name || '系统',
    });
  });
  
  // Bug 活动
  bugs.slice(0, 2).forEach((b: any) => {
    activities.push({
      id: `bug-${b.id}`,
      type: 'bug',
      title: `报告了 Bug: ${b.title}`,
      description: `项目: ${b.projectName}`,
      datetime: b.createdAt,
      user: b.reporter?.name || '未知',
    });
  });
  
  // 工单活动
  tickets.slice(0, 2).forEach((t: any) => {
    activities.push({
      id: `ticket-${t.id}`,
      type: 'ticket',
      title: `创建了工单: ${t.title}`,
      description: `类型: ${t.type}`,
      datetime: t.createdAt,
      user: '系统',
    });
  });
  
  // 按时间排序
  activities.sort((a, b) => {
    return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
  });
  
  await setCache(cacheKey, activities.slice(0, 6), config.cache.ttl.short);
  return activities.slice(0, 6);
}

/**
 * 获取工作台图表数据
 */
export async function getWorkplaceChartData() {
  const cacheKey = 'workplace:charts';
  
  const cached = await getCache(cacheKey);
  if (cached) return cached;
  
  const [projects, bugs, members] = await Promise.all([
    getProjects(),
    getBugs(),
    getMembers(),
  ]);
  
  // 访问量数据（模拟）
  const visitData = [];
  for (let i = 0; i < 7; i++) {
    visitData.push({
      x: dayjs().subtract(6 - i, 'day').format('YYYY-MM-DD'),
      y: Math.floor(Math.random() * 100) + 50,
    });
  }
  
  // 销售额数据（基于项目金额）
  const salesData = [];
  for (let i = 0; i < 12; i++) {
    const month = dayjs().subtract(11 - i, 'month');
    const monthStr = month.format('YYYY-MM');
    
    const monthProjects = projects.filter((p: any) => {
      const startMonth = dayjs(p.startDate).format('YYYY-MM');
      return startMonth === monthStr;
    });
    
    const amount = monthProjects.reduce((sum: number, p: any) => sum + (p.amount || 0), 0);
    
    salesData.push({
      x: monthStr,
      y: amount,
    });
  }
  
  // 雷达图数据（团队能力评估）
  const radarData = [
    { name: '技术能力', value: 85 },
    { name: '项目管理', value: 78 },
    { name: '沟通协作', value: 92 },
    { name: '创新能力', value: 75 },
    { name: '质量控制', value: 88 },
    { name: '客户满意度', value: 90 },
  ];
  
  // 排行榜数据（按项目金额）
  const rankingListData = projects
    .sort((a: any, b: any) => (b.amount || 0) - (a.amount || 0))
    .slice(0, 7)
    .map((p: any, index: number) => ({
      title: p.name,
      total: p.amount || 0,
    }));
  
  const chartData = {
    visitData,
    salesData,
    radarData,
    rankingListData,
  };
  
  await setCache(cacheKey, chartData, config.cache.ttl.short);
  return chartData;
}

