import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import { config, validateConfig } from './config';
import { initRedis, closeRedis } from './services/cache';
import routes from './routes';

// 验证配置
validateConfig();

// 创建 Express 应用
const app = express();

// ==================== 中间件 ====================

// 安全相关
app.use(helmet());

// CORS
app.use(
  cors({
    origin: config.cors.origin,
    credentials: true,
  }),
);

// 请求日志
if (config.nodeEnv === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// 请求体解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 响应压缩
app.use(compression());

// ==================== 路由 ====================

app.use(routes);

// ==================== 错误处理 ====================

// 404 处理
app.use((req, res) => {
  res.status(404).json({
    success: false,
    errorMessage: '接口不存在',
    errorCode: 404,
  });
});

// 全局错误处理
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('服务器错误:', err);
  
  res.status(err.status || 500).json({
    success: false,
    errorMessage: err.message || '服务器内部错误',
    errorCode: err.status || 500,
  });
});

// ==================== 启动服务器 ====================

async function startServer() {
  try {
    // 初始化 Redis
    await initRedis();
    
    // 启动 HTTP 服务器
    const server = app.listen(config.port, () => {
      console.log('');
      console.log('🚀 OutBook 后端服务启动成功!');
      console.log('');
      console.log(`📡 服务地址: http://localhost:${config.port}`);
      console.log(`🌍 环境: ${config.nodeEnv}`);
      console.log(`🔗 CORS 允许: ${config.cors.origin}`);
      console.log('');
      console.log('📚 API 文档:');
      console.log(`   - 健康检查: http://localhost:${config.port}/health`);
      console.log(`   - 项目列表: http://localhost:${config.port}/api/projects`);
      console.log(`   - 统计概览: http://localhost:${config.port}/api/statistics/overview`);
      console.log('');
      
      if (!config.feishu.appId || !config.feishu.appSecret) {
        console.log('⚠️  警告: 飞书配置缺失，部分功能可能无法正常工作');
        console.log('⚠️  请在 .env 文件中配置 FEISHU_APP_ID 和 FEISHU_APP_SECRET');
        console.log('');
      }
    });
    
    // 优雅关闭
    const gracefulShutdown = async () => {
      console.log('\n正在关闭服务器...');
      
      server.close(async () => {
        console.log('HTTP 服务器已关闭');
        
        await closeRedis();
        console.log('Redis 连接已关闭');
        
        process.exit(0);
      });
      
      // 强制关闭超时
      setTimeout(() => {
        console.error('强制关闭服务器');
        process.exit(1);
      }, 10000);
    };
    
    process.on('SIGTERM', gracefulShutdown);
    process.on('SIGINT', gracefulShutdown);
    
  } catch (error) {
    console.error('启动服务器失败:', error);
    process.exit(1);
  }
}

// 启动
startServer();

export default app;

