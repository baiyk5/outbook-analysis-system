# Mock 数据迁移示例

## 📋 概述

本文档展示如何将 `mock/*.ts` 文件中的数据迁移到 `src/services/mockData/index.ts`，以便在生产环境使用。

## 🎯 迁移步骤

### 步骤 1：从 Mock 文件中提取数据

以 `mock/projects.ts` 为例：

**原 Mock 文件**：
```typescript
// mock/projects.ts
export default {
  'GET /api/projects': {
    success: true,
    data: [
      {
        id: '1',
        name: 'OutBook 项目管理系统',
        status: '进行中',
        progress: 75,
      },
      // ... 更多项目
    ],
  },
  
  'GET /api/projects/:id': (req: Request, res: Response) => {
    const { id } = req.params;
    return res.json({
      success: true,
      data: {
        id,
        name: 'OutBook 项目管理系统',
        // ... 详细信息
      },
    });
  },
};
```

### 步骤 2：添加到 mockData/index.ts

```typescript
// src/services/mockData/index.ts

// 项目相关数据
export const mockProjectData = {
  // 项目列表
  projectList: {
    success: true,
    data: [
      {
        id: '1',
        name: 'OutBook 项目管理系统',
        status: '进行中',
        progress: 75,
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        budget: 1000000,
        spent: 750000,
        members: [
          { id: '1', name: '张三', role: '项目经理' },
          { id: '2', name: '李四', role: '开发工程师' },
        ],
      },
      {
        id: '2',
        name: '电商平台开发',
        status: '已完成',
        progress: 100,
        startDate: '2023-06-01',
        endDate: '2023-12-31',
        budget: 800000,
        spent: 780000,
        members: [
          { id: '3', name: '王五', role: '技术负责人' },
          { id: '4', name: '赵六', role: '前端工程师' },
        ],
      },
    ],
  },
  
  // 项目详情（根据 ID 返回）
  getProjectDetail: (id: string) => ({
    success: true,
    data: {
      id,
      name: 'OutBook 项目管理系统',
      description: '一个专业的项目管理和数据分析系统',
      status: '进行中',
      progress: 75,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      budget: 1000000,
      spent: 750000,
      members: [
        {
          id: '1',
          name: '张三',
          role: '项目经理',
          workDays: 180,
          bugCount: 5,
        },
        {
          id: '2',
          name: '李四',
          role: '开发工程师',
          workDays: 200,
          bugCount: 12,
        },
      ],
      tasks: [
        { id: '1', name: '需求分析', status: '已完成', progress: 100 },
        { id: '2', name: '系统设计', status: '已完成', progress: 100 },
        { id: '3', name: '开发实现', status: '进行中', progress: 75 },
        { id: '4', name: '测试验收', status: '未开始', progress: 0 },
      ],
    },
  }),
};
```

### 步骤 3：修改 API 文件

假设你有一个 `src/services/projects.ts` 文件：

```typescript
// src/services/projects.ts
import { request } from '@umijs/max';
import { shouldUseMockData, mockProjectData, mockResponse } from './mockData';

/** 获取项目列表 */
export async function getProjects(options?: { [key: string]: any }) {
  // 如果启用本地 Mock，直接返回本地数据
  if (shouldUseMockData()) {
    return mockResponse(mockProjectData.projectList);
  }
  
  return request('/api/projects', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取项目详情 */
export async function getProjectDetail(id: string, options?: { [key: string]: any }) {
  // 如果启用本地 Mock，直接返回本地数据
  if (shouldUseMockData()) {
    return mockResponse(mockProjectData.getProjectDetail(id));
  }
  
  return request(`/api/projects/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}
```

## 📝 常见场景示例

### 场景 1：简单的 GET 请求

**Mock 文件**：
```typescript
export default {
  'GET /api/statistics': {
    success: true,
    data: {
      totalProjects: 10,
      activeProjects: 5,
      totalMembers: 20,
    },
  },
};
```

**迁移后**：
```typescript
// mockData/index.ts
export const mockStatistics = {
  success: true,
  data: {
    totalProjects: 10,
    activeProjects: 5,
    totalMembers: 20,
  },
};

// API 文件
export async function getStatistics() {
  if (shouldUseMockData()) {
    return mockResponse(mockStatistics);
  }
  return request('/api/statistics', { method: 'GET' });
}
```

### 场景 2：带参数的 GET 请求

**Mock 文件**：
```typescript
export default {
  'GET /api/reports': (req: Request, res: Response) => {
    const { type } = req.query;
    return res.json({
      success: true,
      data: {
        type,
        content: `这是${type}报告`,
      },
    });
  },
};
```

**迁移后**：
```typescript
// mockData/index.ts
export const mockReports = {
  getReport: (type: string) => ({
    success: true,
    data: {
      type,
      content: `这是${type}报告`,
      generatedAt: new Date().toISOString(),
    },
  }),
};

// API 文件
export async function getReport(params: { type: string }) {
  if (shouldUseMockData()) {
    return mockResponse(mockReports.getReport(params.type));
  }
  return request('/api/reports', {
    method: 'GET',
    params,
  });
}
```

### 场景 3：POST 请求（创建数据）

**Mock 文件**：
```typescript
export default {
  'POST /api/projects': (req: Request, res: Response) => {
    const { name, description } = req.body;
    return res.json({
      success: true,
      data: {
        id: Date.now().toString(),
        name,
        description,
        createdAt: new Date().toISOString(),
      },
    });
  },
};
```

**迁移后**：
```typescript
// mockData/index.ts
export const mockProjectActions = {
  createProject: (data: { name: string; description: string }) => ({
    success: true,
    data: {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString(),
    },
  }),
};

// API 文件
export async function createProject(data: { name: string; description: string }) {
  if (shouldUseMockData()) {
    return mockResponse(mockProjectActions.createProject(data));
  }
  return request('/api/projects', {
    method: 'POST',
    data,
  });
}
```

## 🎨 完整的 mockData/index.ts 结构示例

```typescript
// src/services/mockData/index.ts

/**
 * 本地 Mock 数据
 */

// ==================== 用户相关 ====================
export const mockUserData = {
  currentUser: { /* ... */ },
  loginResult: { /* ... */ },
  outLoginResult: { /* ... */ },
};

// ==================== 项目相关 ====================
export const mockProjectData = {
  projectList: { /* ... */ },
  getProjectDetail: (id: string) => ({ /* ... */ }),
};

// ==================== 统计相关 ====================
export const mockStatistics = {
  overview: { /* ... */ },
  charts: { /* ... */ },
};

// ==================== 报告相关 ====================
export const mockReports = {
  monthlyReport: { /* ... */ },
  quarterlyReport: { /* ... */ },
};

// ==================== 知识文库相关 ====================
export const mockKnowledge = {
  documentList: { /* ... */ },
  categories: { /* ... */ },
};

// ==================== 工具函数 ====================
export const shouldUseMockData = () => {
  if (process.env.USE_LOCAL_MOCK === 'true') {
    return true;
  }
  if (process.env.NODE_ENV === 'production' && !process.env.API_URL) {
    return true;
  }
  return false;
};

export const mockDelay = (ms: number = 300) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const mockResponse = async <T>(data: T, delay: number = 300): Promise<T> => {
  await mockDelay(delay);
  return data;
};
```

## ✅ 迁移检查清单

完成迁移后，请检查：

- [ ] 所有 API 函数都添加了 `shouldUseMockData()` 判断
- [ ] Mock 数据结构与原 Mock 文件一致
- [ ] 带参数的 API 正确处理参数
- [ ] 异步延迟已添加（使用 `mockResponse`）
- [ ] `.env.production` 中设置了 `USE_LOCAL_MOCK=true`
- [ ] 打包测试通过（`npm run build && npm run preview`）

## 🧪 测试方法

### 1. 本地测试

```bash
# 设置环境变量
export USE_LOCAL_MOCK=true

# 打包
npm run build

# 预览
npm run preview
```

### 2. 检查网络请求

打开浏览器开发者工具 -> Network 标签：
- ✅ 应该看不到任何 API 请求（因为数据是本地返回的）
- ✅ 页面功能正常

### 3. 切换到真实 API

```bash
# 修改 .env.production
USE_LOCAL_MOCK=false
API_URL=https://your-api-server.com

# 重新打包
npm run build
```

## 🆘 常见问题

### Q1: 打包后数据没有显示？

**A**: 检查以下几点：
1. `.env.production` 中 `USE_LOCAL_MOCK=true`
2. `shouldUseMockData()` 函数返回 `true`
3. Mock 数据格式正确
4. 浏览器控制台没有错误

### Q2: 如何调试 Mock 数据？

**A**: 在 `shouldUseMockData()` 函数中添加日志：
```typescript
export const shouldUseMockData = () => {
  const useMock = process.env.USE_LOCAL_MOCK === 'true';
  console.log('USE_LOCAL_MOCK:', process.env.USE_LOCAL_MOCK);
  console.log('Should use mock:', useMock);
  return useMock;
};
```

### Q3: Mock 数据太大，包体积增加怎么办？

**A**: 考虑以下方案：
1. 减少 Mock 数据量（只保留必要的演示数据）
2. 使用代码分割（动态导入 Mock 数据）
3. 部署独立的 Mock 服务器

## 📚 相关文档

- [使用本地Mock数据部署.md](./使用本地Mock数据部署.md)
- [UmiJS Mock 文档](https://umijs.org/docs/guides/mock)

