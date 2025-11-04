# OutBook 项目管理系统

OutBook 是一个基于 UmiJS + Ant Design Pro + Node.js 的企业级项目管理系统，支持从飞书多维表格获取数据。

## ✨ 特性

- 📊 **数据统计** - 项目概览、趋势分析、财务数据
- 📁 **项目管理** - 项目列表、Bug 跟踪、工单管理
- 📝 **报告生成** - 月度报告、季度报告、AI 生成
- 📚 **知识库** - 文档管理、分类检索
- 🤖 **AI 助手** - 智能问答、Markdown 渲染
- 📱 **移动端适配** - 完整的响应式设计
- 🔗 **飞书集成** - 直接对接飞书多维表格

## 🚀 快速开始

### 方式 1: 一键启动（推荐）

**Linux/Mac:**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

**Windows:**
```bash
start-dev.bat
```

### 方式 2: 手动启动

#### 1. 安装依赖

```bash
npm install
```

#### 2. 配置后端

```bash
cd backend
npm install
npm run setup  # 交互式配置飞书
npm run test:feishu  # 测试飞书连接
```

#### 3. 启动服务

**启动后端:**
```bash
cd backend
npm run dev
# 后端服务: http://localhost:3000
```

**启动前端:**
```bash
# 在项目根目录
npm run dev
# 前端服务: http://localhost:8000
```

## 📚 文档

- [飞书对接指南](backend/docs/飞书对接指南.md) - 如何配置飞书应用和表格
- [快速开始](backend/docs/快速开始.md) - 后端快速上手
- [前后端对接指南](docs/前后端对接指南.md) - 前后端联调说明
- [完整部署指南](docs/完整部署指南.md) - 生产环境部署
- [后端开发总结](docs/后端开发完成总结.md) - 后端开发详情

## 🏗️ 技术栈

### 前端
- **UmiJS 4** - React 应用框架
- **React 19** - UI 库
- **Ant Design Pro** - 企业级 UI 组件
- **Ant Design X** - AI 组件
- **TypeScript** - 类型安全

### 后端
- **Node.js 18** - 运行环境
- **Express** - Web 框架
- **TypeScript** - 类型安全
- **@larksuiteoapi/node-sdk** - 飞书 SDK
- **Redis** - 缓存

### 部署
- **Docker** - 容器化
- **Nginx** - Web 服务器
- **PM2** - 进程管理

## 📋 可用脚本

### 前端

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览构建结果
npm run lint     # 代码检查
```

### 后端

```bash
cd backend
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm start            # 启动生产服务器
npm run setup        # 配置飞书
npm run test:feishu  # 测试飞书连接
```

## 🐳 Docker 部署

```bash
# 配置环境变量
cp backend/.env.example backend/.env
nano backend/.env  # 填入飞书配置

# 启动所有服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

## 🔧 环境变量

### 前端 (`.env.development`)

```env
USE_LOCAL_MOCK=false  # 是否使用本地 Mock 数据
API_URL=http://localhost:3000  # 后端 API 地址
```

### 后端 (`backend/.env`)

```env
# 飞书应用
FEISHU_APP_ID=cli_xxxxxxxxxx
FEISHU_APP_SECRET=xxxxxxxxxxxxxx

# 飞书表格
FEISHU_PROJECT_APP_TOKEN=bascnABC123xyz
FEISHU_PROJECT_TABLE_ID=tblXYZ789abc

# Redis（可选）
REDIS_HOST=localhost
REDIS_PORT=6379

# CORS
CORS_ORIGIN=http://localhost:8000
```

## 📊 飞书表格结构

系统需要以下飞书多维表格：

1. **项目表** - 项目信息、金额、成本、进度
2. **Bug 表** - Bug 记录、严重程度、状态
3. **工单表** - 维护工单、类型、优先级
4. **成员表** - 团队成员、工作天数、效率
5. **知识库表** - 文档、类型、状态

详细字段结构见 [飞书对接指南](backend/docs/飞书对接指南.md)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).
