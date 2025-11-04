import dayjs from 'dayjs';

/**
 * 从飞书记录中安全获取字段值
 */
export function getField(record: any, fieldName: string, defaultValue: any = null) {
  return record?.fields?.[fieldName] ?? defaultValue;
}

/**
 * 获取字符串字段
 */
export function getStringField(record: any, fieldName: string, defaultValue = ''): string {
  const value = getField(record, fieldName, defaultValue);
  return String(value || defaultValue);
}

/**
 * 获取数字字段
 */
export function getNumberField(record: any, fieldName: string, defaultValue = 0): number {
  const value = getField(record, fieldName, defaultValue);
  const num = Number(value);
  return isNaN(num) ? defaultValue : num;
}

/**
 * 获取日期字段（时间戳转换为日期字符串）
 */
export function getDateField(record: any, fieldName: string, format = 'YYYY-MM-DD'): string {
  const value = getField(record, fieldName);
  if (!value) return '';
  
  // 飞书日期字段通常是时间戳（毫秒）
  return dayjs(value).format(format);
}

/**
 * 获取选项字段（单选）
 */
export function getSelectField(record: any, fieldName: string, defaultValue = ''): string {
  const value = getField(record, fieldName);
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object' && value.text) return value.text;
  return defaultValue;
}

/**
 * 获取多选字段
 */
export function getMultiSelectField(record: any, fieldName: string): string[] {
  const value = getField(record, fieldName, []);
  if (Array.isArray(value)) {
    return value.map((item: any) => {
      if (typeof item === 'string') return item;
      if (item && typeof item === 'object' && item.text) return item.text;
      return String(item);
    });
  }
  return [];
}

/**
 * 获取人员字段
 */
export function getPersonField(record: any, fieldName: string): any {
  const value = getField(record, fieldName);
  if (Array.isArray(value) && value.length > 0) {
    return {
      id: value[0].id,
      name: value[0].name,
      en_name: value[0].en_name,
    };
  }
  return null;
}

/**
 * 获取多人员字段
 */
export function getPersonsField(record: any, fieldName: string): any[] {
  const value = getField(record, fieldName, []);
  if (Array.isArray(value)) {
    return value.map((person: any) => ({
      id: person.id,
      name: person.name,
      en_name: person.en_name,
    }));
  }
  return [];
}

/**
 * 转换项目数据
 */
export function transformProject(record: any) {
  return {
    id: record.record_id,
    name: getStringField(record, '项目名称'),
    school: getStringField(record, '学校名称'),
    amount: getNumberField(record, '合同金额'),
    cost: getNumberField(record, '实际成本'),
    profit: getNumberField(record, '利润'),
    profitRate: getNumberField(record, '利润率'),
    status: getSelectField(record, '状态', '进行中'),
    startDate: getDateField(record, '开始日期'),
    endDate: getDateField(record, '结束日期'),
    manager: getPersonField(record, '项目经理'),
    members: getPersonsField(record, '团队成员'),
    description: getStringField(record, '项目描述'),
    progress: getNumberField(record, '进度', 0),
    bugCount: getNumberField(record, 'Bug数量', 0),
    ticketCount: getNumberField(record, '工单数量', 0),
  };
}

/**
 * 转换 Bug 数据
 */
export function transformBug(record: any) {
  return {
    id: record.record_id,
    projectId: getStringField(record, '所属项目'),
    projectName: getStringField(record, '项目名称'),
    title: getStringField(record, 'Bug标题'),
    description: getStringField(record, 'Bug描述'),
    severity: getSelectField(record, '严重程度', '中'),
    status: getSelectField(record, '状态', '待处理'),
    assignee: getPersonField(record, '负责人'),
    reporter: getPersonField(record, '报告人'),
    createdAt: getDateField(record, '创建时间', 'YYYY-MM-DD HH:mm:ss'),
    resolvedAt: getDateField(record, '解决时间', 'YYYY-MM-DD HH:mm:ss'),
  };
}

/**
 * 转换工单数据
 */
export function transformTicket(record: any) {
  return {
    id: record.record_id,
    projectId: getStringField(record, '所属项目'),
    projectName: getStringField(record, '项目名称'),
    title: getStringField(record, '工单标题'),
    type: getSelectField(record, '工单类型', '维护'),
    status: getSelectField(record, '状态', '待处理'),
    priority: getSelectField(record, '优先级', '中'),
    assignee: getPersonField(record, '负责人'),
    createdAt: getDateField(record, '创建时间', 'YYYY-MM-DD HH:mm:ss'),
    completedAt: getDateField(record, '完成时间', 'YYYY-MM-DD HH:mm:ss'),
  };
}

/**
 * 转换成员数据
 */
export function transformMember(record: any) {
  return {
    id: record.record_id,
    name: getStringField(record, '姓名'),
    position: getStringField(record, '职位'),
    projects: getMultiSelectField(record, '所属项目'),
    workDays: getNumberField(record, '工作天数', 0),
    bugCount: getNumberField(record, 'Bug数量', 0),
    efficiency: getNumberField(record, '效率分数', 0),
  };
}

/**
 * 转换知识库文档数据
 */
export function transformKnowledgeDoc(record: any) {
  return {
    id: record.record_id,
    title: getStringField(record, '文档标题'),
    type: getSelectField(record, '文档类型', '需求'),
    projectId: getStringField(record, '所属项目'),
    projectName: getStringField(record, '项目名称'),
    status: getSelectField(record, '状态', '草稿'),
    author: getPersonField(record, '作者'),
    content: getStringField(record, '内容'),
    url: getStringField(record, '文档链接'),
    createdAt: getDateField(record, '创建时间', 'YYYY-MM-DD'),
    updatedAt: getDateField(record, '更新时间', 'YYYY-MM-DD'),
  };
}

/**
 * 计算利润率
 */
export function calculateProfitRate(amount: number, cost: number): number {
  if (amount === 0) return 0;
  return Math.round(((amount - cost) / amount) * 10000) / 100;
}

/**
 * 计算 Bug 率
 */
export function calculateBugRate(bugCount: number, totalLines: number): number {
  if (totalLines === 0) return 0;
  return Math.round((bugCount / totalLines) * 10000) / 100;
}

/**
 * 格式化金额（添加千分位）
 */
export function formatAmount(amount: number): string {
  return amount.toLocaleString('zh-CN', {
    style: 'currency',
    currency: 'CNY',
  });
}

/**
 * 格式化百分比
 */
export function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}

