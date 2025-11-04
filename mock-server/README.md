# Mock 服务器部署指南

## 📋 问题说明

UmiJS 的 Mock 功能只在开发环境有效，打包后（`npm run build`）Mock 数据不会被包含在构建产物中。

如果你需要在生产环境也使用 Mock 数据（例如后端 API 还未准备好），需要部署一个独立的 Mock 服务器。

## 🚀 快速开始

### 1. 安装依赖

在项目根目录运行：

```bash
npm install express cors --save-dev
```

### 2. 启动 Mock 服务器

```bash
node mock-server/server.js
```

服务器会运行在 `http://localhost:3001`

### 3. 配置前端项目

修改前端项目的 API 请求地址，指向 Mock 服务器：

**方法 A：修改环境变量**

创建 `.env.production` 文件：

```env
API_URL=http://your-mock-server.com:3001
```

**方法 B：修改 proxy 配置**

在 `config/proxy.ts` 中添加生产环境配置。

## 🌐 部署到服务器

### 方案 1：与前端一起部署

1. 将整个项目（包括 `mock-server` 目录）上传到服务器
2. 在服务器上运行：

```bash
# 安装依赖
npm install

# 启动 Mock 服务器（后台运行）
nohup node mock-server/server.js > mock-server.log 2>&1 &

# 或使用 PM2（推荐）
pm2 start mock-server/server.js --name "mock-server"
```

### 方案 2：使用 Docker

创建 `mock-server/Dockerfile`：

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install express cors

COPY mock ./mock
COPY mock-server ./mock-server

EXPOSE 3001

CMD ["node", "mock-server/server.js"]
```

构建和运行：

```bash
docker build -t mock-server -f mock-server/Dockerfile .
docker run -d -p 3001:3001 --name mock-server mock-server
```

## ⚠️ 注意事项

### 当前限制

由于 Mock 文件是 TypeScript 格式（`.ts`），直接运行会报错。需要以下解决方案之一：

**方案 A：使用 ts-node（推荐）**

```bash
npm install ts-node @types/express --save-dev
npx ts-node mock-server/server.js
```

**方案 B：将 Mock 文件转换为 JavaScript**

将 `mock/*.ts` 文件重写为 `mock/*.js` 格式。

**方案 C：使用现成的 Mock 服务工具**

- [json-server](https://github.com/typicode/json-server)
- [mockoon](https://mockoon.com/)
- [Apifox](https://www.apifox.cn/)

## 🎯 推荐方案

### 短期方案（临时使用）

使用 **json-server** 快速搭建：

```bash
# 安装
npm install -g json-server

# 创建 db.json（手动整理 mock 数据）
# 启动
json-server --watch db.json --port 3001
```

### 长期方案（生产环境）

1. **最佳实践**：让后端团队提供真实的 API 接口
2. **备选方案**：使用专业的 Mock 平台（如 Apifox、YApi）

## 📞 需要帮助？

如果你需要我帮你：
1. ✅ 将 TypeScript Mock 文件转换为 JavaScript
2. ✅ 创建一个可直接运行的 Mock 服务器
3. ✅ 配置前端项目连接 Mock 服务器

请告诉我你的需求！

