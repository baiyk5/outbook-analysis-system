import { config } from '../config';
import { getTableRecords } from './feishu';
import { getCache, setCache } from './cache';
import { transformProject, transformBug, transformTicket, transformMember } from '../utils/transform';

/**
 * 获取所有项目
 */
export async function getProjects() {
  const cacheKey = 'projects:all';

  // 尝试从缓存获取
  const cached = await getCache(cacheKey);
  if (cached) {
    console.log('✅ 从缓存获取项目列表');
    return cached;
  }

  // 从飞书获取数据
  const { appToken, tableId } = config.feishu.tables.project;

  if (!appToken || !tableId) {
    throw new Error('项目表配置缺失，请在 .env 文件中配置 FEISHU_PROJECT_APP_TOKEN 和 FEISHU_PROJECT_TABLE_ID');
  }

  console.log('📡 从飞书获取项目列表');
  const records = await getTableRecords(appToken, tableId);
  const projects = records.map(transformProject);

  // 存入缓存（5分钟）
  await setCache(cacheKey, projects, config.cache.ttl.short);

  return projects;
}

/**
 * 获取单个项目
 */
export async function getProjectById(projectId: string) {
  const projects = await getProjects();
  return projects.find((p: any) => p.id === projectId);
}

/**
 * 获取所有 Bug
 */
export async function getBugs() {
  const cacheKey = 'bugs:all';
  
  const cached = await getCache(cacheKey);
  if (cached) {
    console.log('✅ 从缓存获取 Bug 列表');
    return cached;
  }
  
  console.log('📡 从飞书获取 Bug 列表');
  
  const { appToken, tableId } = config.feishu.tables.bug;
  
  if (!appToken || !tableId) {
    console.warn('⚠️  Bug 表配置缺失，返回空数据');
    return [];
  }
  
  const records = await getTableRecords(appToken, tableId);
  const bugs = records.map(transformBug);
  
  await setCache(cacheKey, bugs, config.cache.ttl.short);
  
  return bugs;
}

/**
 * 获取所有工单
 */
export async function getTickets() {
  const cacheKey = 'tickets:all';
  
  const cached = await getCache(cacheKey);
  if (cached) {
    console.log('✅ 从缓存获取工单列表');
    return cached;
  }
  
  console.log('📡 从飞书获取工单列表');
  
  const { appToken, tableId } = config.feishu.tables.ticket;
  
  if (!appToken || !tableId) {
    console.warn('⚠️  工单表配置缺失，返回空数据');
    return [];
  }
  
  const records = await getTableRecords(appToken, tableId);
  const tickets = records.map(transformTicket);
  
  await setCache(cacheKey, tickets, config.cache.ttl.short);
  
  return tickets;
}

/**
 * 获取所有成员
 */
export async function getMembers() {
  const cacheKey = 'members:all';
  
  const cached = await getCache(cacheKey);
  if (cached) {
    console.log('✅ 从缓存获取成员列表');
    return cached;
  }
  
  console.log('📡 从飞书获取成员列表');
  
  const { appToken, tableId } = config.feishu.tables.member;
  
  if (!appToken || !tableId) {
    console.warn('⚠️  成员表配置缺失，返回空数据');
    return [];
  }
  
  const records = await getTableRecords(appToken, tableId);
  const members = records.map(transformMember);
  
  await setCache(cacheKey, members, config.cache.ttl.short);
  
  return members;
}

/**
 * 按项目分组 Bug
 */
export async function getBugsByProject() {
  const bugs = await getBugs();
  const grouped: Record<string, any[]> = {};
  
  bugs.forEach((bug: any) => {
    const projectId = bug.projectId;
    if (!grouped[projectId]) {
      grouped[projectId] = [];
    }
    grouped[projectId].push(bug);
  });
  
  return grouped;
}

/**
 * 按项目分组工单
 */
export async function getTicketsByProject() {
  const tickets = await getTickets();
  const grouped: Record<string, any[]> = {};
  
  tickets.forEach((ticket: any) => {
    const projectId = ticket.projectId;
    if (!grouped[projectId]) {
      grouped[projectId] = [];
    }
    grouped[projectId].push(ticket);
  });
  
  return grouped;
}

/**
 * 按成员分组 Bug
 */
export async function getBugsByMember() {
  const bugs = await getBugs();
  const grouped: Record<string, any[]> = {};
  
  bugs.forEach((bug: any) => {
    const assigneeName = bug.assignee?.name || '未分配';
    if (!grouped[assigneeName]) {
      grouped[assigneeName] = [];
    }
    grouped[assigneeName].push(bug);
  });
  
  return grouped;
}

