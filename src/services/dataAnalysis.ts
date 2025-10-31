/**
 * 数据分析服务
 * 用于分析项目和成员数据，回答用户问题
 */

import { getAllProjects, getAllMembers, getProjectStats, MemberData, ProjectData } from './dataQuery';

/**
 * 分析成员开发效率
 * 效率 = 工作天数 / BUG数（BUG数越少效率越高）
 */
export function analyzeMemberEfficiency() {
  const members = getAllMembers();
  
  // 过滤掉没有工作天数或BUG数据的成员
  const validMembers = members.filter((m) => m.workDays && m.workDays > 0);
  
  // 计算效率指标
  const membersWithEfficiency = validMembers.map((member) => {
    const bugRate = member.bugCount! / member.workDays!; // BUG率（每天产生的BUG数）
    const efficiency = 1 / (bugRate + 0.01); // 效率分数（BUG率越低，效率越高）
    
    return {
      ...member,
      bugRate: bugRate.toFixed(4),
      efficiencyScore: efficiency.toFixed(2),
    };
  });
  
  // 按效率排序（从高到低）
  membersWithEfficiency.sort((a, b) => parseFloat(b.efficiencyScore) - parseFloat(a.efficiencyScore));
  
  return membersWithEfficiency;
}

/**
 * 查找效率最高的成员
 */
export function findMostEfficientMember() {
  const members = analyzeMemberEfficiency();
  return members[0];
}

/**
 * 查找效率最低的成员
 */
export function findLeastEfficientMember() {
  const members = analyzeMemberEfficiency();
  return members[members.length - 1];
}

/**
 * 分析项目利润率
 */
export function analyzeProjectProfitability() {
  const projects = getAllProjects();
  
  const projectsWithProfitRate = projects.map((project) => ({
    ...project,
    profitRate: (project.profit / project.amount * 100).toFixed(2) + '%',
    profitRateValue: project.profit / project.amount,
  }));
  
  // 按利润率排序
  projectsWithProfitRate.sort((a, b) => b.profitRateValue - a.profitRateValue);
  
  return projectsWithProfitRate;
}

/**
 * 查找利润率最高的项目
 */
export function findMostProfitableProject() {
  const projects = analyzeProjectProfitability();
  return projects[0];
}

/**
 * 分析项目延期情况
 */
export function analyzeProjectDelays() {
  const projects = getAllProjects();
  
  const delayedProjects = projects
    .filter((p) => p.actualDays > p.estimatedDays || p.status === 'delayed')
    .map((project) => ({
      ...project,
      delayDays: project.actualDays - project.estimatedDays,
      delayRate: ((project.actualDays - project.estimatedDays) / project.estimatedDays * 100).toFixed(2) + '%',
    }));
  
  return delayedProjects;
}

/**
 * 分析成员BUG情况
 */
export function analyzeMemberBugs() {
  const members = getAllMembers();
  
  // 按BUG数排序
  const sortedMembers = [...members].sort((a, b) => (b.bugCount || 0) - (a.bugCount || 0));
  
  return sortedMembers;
}

/**
 * 查找BUG最多的成员
 */
export function findMemberWithMostBugs() {
  const members = analyzeMemberBugs();
  return members[0];
}

/**
 * 获取系统数据摘要（用于AI上下文）
 */
export function getSystemDataSummary(): string {
  const stats = getProjectStats();
  const mostEfficientMember = findMostEfficientMember();
  const mostProfitableProject = findMostProfitableProject();
  const allMembers = getAllMembers();
  const allProjects = getAllProjects();
  
  return `
【系统数据概览】
- 项目总数: ${stats.totalProjects}
- 已完成: ${stats.completedProjects}，进行中: ${stats.ongoingProjects}，已延期: ${stats.delayedProjects}，规划中: ${stats.planningProjects}
- 总成交金额: ¥${stats.totalAmount.toLocaleString()}
- 总预估利润: ¥${stats.totalProfit.toLocaleString()}
- 利润率: ${(stats.profitRate * 100).toFixed(2)}%
- 总BUG数: ${stats.totalBugs}
- 总工单数: ${stats.totalTickets}

【所有项目列表】
${allProjects.map((p, i) => `${i + 1}. ${p.name} (${p.school})
   - 状态: ${getStatusText(p.status)}
   - 金额: ¥${p.amount.toLocaleString()}，利润: ¥${p.profit.toLocaleString()}
   - 预计天数: ${p.estimatedDays}天，实际天数: ${p.actualDays}天
   - BUG数: ${typeof p.bugs === 'number' ? p.bugs : p.bugs.total}
   - 成员数: ${p.members.length}`).join('\n')}

【所有成员列表】
${allMembers.map((m, i) => `${i + 1}. ${m.name} - ${m.role}
   - 项目: ${(m as any).projectName}
   - 工作天数: ${m.workDays || 0}天
   - BUG数: ${m.bugCount || 0}
   - BUG率: ${m.workDays ? (m.bugCount! / m.workDays).toFixed(4) : 'N/A'} (每天)
   ${m.riskNote ? `- 风险: ${m.riskNote}` : ''}`).join('\n')}

【关键指标】
- 开发效率最高的成员: ${mostEfficientMember?.name} (${mostEfficientMember?.role})
  工作天数: ${mostEfficientMember?.workDays}天，BUG数: ${mostEfficientMember?.bugCount}，BUG率: ${mostEfficientMember?.bugRate}
  
- 利润率最高的项目: ${mostProfitableProject?.name}
  利润率: ${mostProfitableProject?.profitRate}
`;
}

/**
 * 获取状态文本
 */
function getStatusText(status: string): string {
  const statusMap: Record<string, string> = {
    planning: '规划中',
    ongoing: '进行中',
    completed: '已完成',
    delayed: '已延期',
  };
  return statusMap[status] || status;
}

/**
 * 根据问题类型分析数据
 */
export function analyzeByQuestion(question: string): string {
  const lowerQuestion = question.toLowerCase();
  
  // 效率相关问题
  if (lowerQuestion.includes('效率') || lowerQuestion.includes('开发') && lowerQuestion.includes('最高')) {
    const member = findMostEfficientMember();
    return `根据系统数据分析，开发效率最高的成员是：**${member.name}** (${member.role})
    
详细数据：
- 工作天数: ${member.workDays}天
- BUG数: ${member.bugCount}个
- BUG率: ${member.bugRate} (每天产生的BUG数)
- 效率分数: ${member.efficiencyScore}
- 所在项目: ${(member as any).projectName}

效率计算说明：效率 = 工作天数 / BUG数，BUG率越低，效率越高。`;
  }
  
  // 利润相关问题
  if (lowerQuestion.includes('利润') && (lowerQuestion.includes('最高') || lowerQuestion.includes('最好'))) {
    const project = findMostProfitableProject();
    return `根据系统数据分析，利润率最高的项目是：**${project.name}**
    
详细数据：
- 学校: ${project.school}
- 成交金额: ¥${project.amount.toLocaleString()}
- 预估利润: ¥${project.profit.toLocaleString()}
- 利润率: ${project.profitRate}
- 状态: ${getStatusText(project.status)}`;
  }
  
  // BUG相关问题
  if (lowerQuestion.includes('bug') && (lowerQuestion.includes('最多') || lowerQuestion.includes('最高'))) {
    const member = findMemberWithMostBugs();
    return `根据系统数据分析，BUG数最多的成员是：**${member.name}** (${member.role})
    
详细数据：
- BUG数: ${member.bugCount}个
- 工作天数: ${member.workDays}天
- BUG率: ${member.workDays ? (member.bugCount! / member.workDays).toFixed(4) : 'N/A'} (每天)
- 所在项目: ${(member as any).projectName}
${member.riskNote ? `- 风险备注: ${member.riskNote}` : ''}`;
  }
  
  // 延期相关问题
  if (lowerQuestion.includes('延期') || lowerQuestion.includes('超期')) {
    const delayedProjects = analyzeProjectDelays();
    if (delayedProjects.length === 0) {
      return '当前系统中没有延期的项目。';
    }
    return `根据系统数据分析，以下项目存在延期情况：

${delayedProjects.map((p, i) => `${i + 1}. **${p.name}**
   - 预计天数: ${p.estimatedDays}天
   - 实际天数: ${p.actualDays}天
   - 延期天数: ${p.delayDays}天
   - 延期率: ${p.delayRate}`).join('\n\n')}`;
  }
  
  // 项目统计问题
  if (lowerQuestion.includes('项目') && (lowerQuestion.includes('多少') || lowerQuestion.includes('统计'))) {
    const stats = getProjectStats();
    return `根据系统数据统计：

- 项目总数: ${stats.totalProjects}个
- 已完成: ${stats.completedProjects}个
- 进行中: ${stats.ongoingProjects}个
- 已延期: ${stats.delayedProjects}个
- 规划中: ${stats.planningProjects}个
- 总成交金额: ¥${stats.totalAmount.toLocaleString()}
- 总预估利润: ¥${stats.totalProfit.toLocaleString()}
- 平均利润率: ${(stats.profitRate * 100).toFixed(2)}%`;
  }
  
  // 如果没有匹配到特定问题，返回空字符串，让AI自己分析
  return '';
}

