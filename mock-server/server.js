/**
 * 独立的 Mock 服务器
 * 用于生产环境部署时提供 Mock 数据
 * 
 * 使用方法：
 * 1. 安装依赖：npm install express cors
 * 2. 启动服务：node mock-server/server.js
 * 3. 服务会运行在 http://localhost:3001
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// 启用 CORS
app.use(cors());
app.use(express.json());

// 导入所有 mock 数据
const mockFiles = [
  '../mock/user.ts',
  '../mock/projects.ts',
  '../mock/workplace.mock.ts',
  '../mock/statistics.ts',
  '../mock/reports.ts',
  '../mock/knowledge.ts',
  '../mock/analysis.mock.ts',
  '../mock/monitor.mock.ts',
  '../mock/notices.ts',
  '../mock/listTableList.ts',
  '../mock/route.ts',
];

// 注册所有 mock 路由
console.log('🚀 正在加载 Mock 数据...\n');

mockFiles.forEach((file) => {
  try {
    // 注意：这里需要将 TypeScript 文件转换为 JavaScript
    // 或者使用 ts-node 来运行
    const mockModule = require(file);
    
    if (typeof mockModule === 'object') {
      Object.keys(mockModule).forEach((key) => {
        const [method, url] = key.split(' ');
        const handler = mockModule[key];
        
        if (method && url) {
          const expressMethod = method.toLowerCase();
          
          if (typeof handler === 'function') {
            app[expressMethod](url, (req, res) => {
              const result = handler(req, res);
              res.json(result);
            });
            console.log(`✅ 注册路由: ${method} ${url}`);
          } else {
            app[expressMethod](url, (req, res) => {
              res.json(handler);
            });
            console.log(`✅ 注册路由: ${method} ${url}`);
          }
        }
      });
    }
  } catch (error) {
    console.error(`❌ 加载 ${file} 失败:`, error.message);
  }
});

// 健康检查接口
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Mock Server is running' });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`\n✨ Mock 服务器已启动！`);
  console.log(`📍 地址: http://localhost:${PORT}`);
  console.log(`🔍 健康检查: http://localhost:${PORT}/health\n`);
});

