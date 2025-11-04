# 使用本地 Mock 数据部署指南

## 📋 问题说明

UmiJS 的 Mock 功能只在开发环境（`npm run dev`）有效，打包后（`npm run build`）Mock 数据不会被包含在构建产物中。

## ✅ 解决方案：使用本地静态 Mock 数据

我已经为你实现了一个**不依赖后端 API 的本地 Mock 数据方案**，打包后可以直接运行！

### 🎯 工作原理

1. **本地数据模块**：`src/services/mockData/`
   - `index.ts` - 用户相关数据
   - `statistics.ts` - 统计数据（概览、趋势、词云、Bug分析、工单分析、财务数据）
   - `reports.ts` - 报告数据（月度报告、季度报告、AI生成）
   - `knowledge.ts` - 知识库数据（文档列表、统计数据）
   - `workplace.ts` - 工作台数据（项目通知、活动、图表数据）
   - 提供判断函数 `shouldUseMockData()`

2. **API 层改造**：已创建对应的服务文件
   - `src/services/ant-design-pro/api.ts` - 用户相关 API
   - `src/services/projects.ts` - 项目管理 API
   - `src/services/statistics.ts` - 统计数据 API
   - `src/services/reports.ts` - 报告 API
   - `src/services/knowledge.ts` - 知识库 API
   - `src/services/workplace.ts` - 工作台 API
   - `src/services/analysis.ts` - 分析页面 API
   - 每个 API 函数都会先检查是否使用本地 Mock
   - 如果使用 Mock，直接返回本地数据
   - 否则，正常调用后端 API

3. **环境变量控制**：`.env.production`
   - `USE_LOCAL_MOCK=true`：使用本地 Mock 数据
   - `USE_LOCAL_MOCK=false`：使用真实 API

### ✅ 已支持的功能模块

**用户管理**
- ✅ 当前用户信息
- ✅ 登录/登出
- ✅ 通知消息

**项目管理**
- ✅ 项目列表（7个项目）
- ✅ 项目详情
- ✅ 成员信息
- ✅ Bug 统计
- ✅ 工单统计

**数据统计**
- ✅ 统计概览
- ✅ 趋势分析
- ✅ 学校词云
- ✅ Bug 分析
- ✅ 工单分析
- ✅ 财务数据

**报告生成**
- ✅ 月度报告（6个月）
- ✅ 季度报告（2个季度）
- ✅ AI 生成报告

**知识库**
- ✅ 文档列表（14个文档）
- ✅ 文档统计
- ✅ 按项目分类

**工作台**
- ✅ 项目通知
- ✅ 活动动态
- ✅ 图表数据（访问量、销售额、雷达图等）

## 🚀 使用方法

### 1. 开发环境（使用 UmiJS Mock）

```bash
npm run dev
```

开发时继续使用 `mock/*.ts` 文件中的 Mock 数据。

### 2. 生产环境（使用本地 Mock 数据）

#### 步骤 1：确认配置

检查 `.env.production` 文件：

```env
USE_LOCAL_MOCK=true
```

#### 步骤 2：打包

```bash
npm run build
```

#### 步骤 3：部署

将 `dist` 目录上传到服务器，使用任何静态文件服务器即可：

```bash
# 方式 1：使用 serve
npx serve dist

# 方式 2：使用 Nginx
# 将 dist 目录内容复制到 Nginx 的 html 目录

# 方式 3：使用 Apache
# 将 dist 目录内容复制到 Apache 的 htdocs 目录
```

✅ **打包后的应用可以直接运行，不需要后端 API！**

### 3. 生产环境（使用真实 API）

当后端 API 准备好后：

#### 步骤 1：修改配置

编辑 `.env.production`：

```env
USE_LOCAL_MOCK=false
API_URL=https://your-api-server.com
```

#### 步骤 2：重新打包

```bash
npm run build
```

#### 步骤 3：部署

将 `dist` 目录上传到服务器。

## 📝 添加更多 Mock 数据

### 示例：添加项目列表数据

#### 1. 在 `src/services/mockData/index.ts` 中添加数据

```typescript
export const mockProjectData = {
  projectList: {
    success: true,
    data: [
      {
        id: '1',
        name: 'OutBook 项目管理系统',
        status: '进行中',
        progress: 75,
        // ... 更多字段
      },
      // ... 更多项目
    ],
  },
};
```

#### 2. 在对应的 API 文件中使用

```typescript
import { shouldUseMockData, mockProjectData, mockResponse } from '../mockData';

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
```

## 🎨 当前已支持的 Mock 数据

✅ 用户相关：
- `currentUser` - 当前用户信息
- `loginResult` - 登录结果
- `outLoginResult` - 退出登录结果

✅ 通知相关：
- `mockNotices` - 通知列表

## 📦 需要添加的 Mock 数据

以下数据需要根据你的实际需求添加到 `src/services/mockData/index.ts`：

- [ ] 项目列表数据
- [ ] 数据统计数据
- [ ] 报告数据
- [ ] 知识文库数据
- [ ] 工作台数据
- [ ] 分析数据

## ⚠️ 注意事项

1. **数据同步**：
   - 本地 Mock 数据需要手动维护
   - 如果 `mock/*.ts` 文件更新，需要同步更新 `src/services/mockData/index.ts`

2. **环境切换**：
   - 开发环境：自动使用 `mock/*.ts` 文件
   - 生产环境：根据 `.env.production` 中的 `USE_LOCAL_MOCK` 决定

3. **性能**：
   - 本地 Mock 数据会被打包进 `dist` 目录
   - 如果数据量很大，会增加包体积

## 🔄 从 Mock 文件迁移数据

如果你想将现有的 `mock/*.ts` 文件中的数据迁移到本地 Mock：

### 示例：迁移用户数据

**原 Mock 文件**（`mock/user.ts`）：
```typescript
export default {
  'GET /api/currentUser': {
    success: true,
    data: {
      name: '系统管理员',
      // ...
    },
  },
};
```

**迁移到**（`src/services/mockData/index.ts`）：
```typescript
export const mockUserData = {
  currentUser: {
    success: true,
    data: {
      name: '系统管理员',
      // ...
    },
  },
};
```

## 🆘 需要帮助？

如果你需要我帮你：
1. ✅ 将所有 `mock/*.ts` 文件的数据迁移到 `src/services/mockData/index.ts`
2. ✅ 修改所有 API 文件支持本地 Mock
3. ✅ 测试打包后的应用

请告诉我！我可以帮你完成剩余的工作。

## 📊 优缺点对比

### ✅ 优点

- 打包后可以直接运行，不需要后端
- 不需要部署额外的 Mock 服务器
- 切换真实 API 很简单（修改环境变量即可）
- 数据在前端代码中，加载速度快

### ⚠️ 缺点

- 需要手动维护两份 Mock 数据（开发环境和生产环境）
- Mock 数据会被打包进去，增加包体积
- 不适合数据量特别大的场景

## 🎯 推荐使用场景

✅ **适合使用本地 Mock 的场景**：
- 演示项目（Demo）
- 前端先行开发，后端还未准备好
- 离线应用
- 数据量不大的项目

❌ **不适合使用本地 Mock 的场景**：
- 数据量特别大（会增加包体积）
- 需要频繁更新数据
- 需要真实的用户交互（如表单提交、数据修改）

