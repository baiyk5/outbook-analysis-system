import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

export const config = {
  // 服务器配置
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // 飞书配置
  feishu: {
    appId: process.env.FEISHU_APP_ID || '',
    appSecret: process.env.FEISHU_APP_SECRET || '',
    
    // 多维表格配置
    tables: {
      project: {
        appToken: process.env.FEISHU_PROJECT_APP_TOKEN || '',
        tableId: process.env.FEISHU_PROJECT_TABLE_ID || '',
      },
      bug: {
        appToken: process.env.FEISHU_BUG_APP_TOKEN || '',
        tableId: process.env.FEISHU_BUG_TABLE_ID || '',
      },
      ticket: {
        appToken: process.env.FEISHU_TICKET_APP_TOKEN || '',
        tableId: process.env.FEISHU_TICKET_TABLE_ID || '',
      },
      member: {
        appToken: process.env.FEISHU_MEMBER_APP_TOKEN || '',
        tableId: process.env.FEISHU_MEMBER_TABLE_ID || '',
      },
      knowledge: {
        appToken: process.env.FEISHU_KNOWLEDGE_APP_TOKEN || '',
        tableId: process.env.FEISHU_KNOWLEDGE_TABLE_ID || '',
      },
    },
  },
  
  // Redis 配置
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    password: process.env.REDIS_PASSWORD || undefined,
    db: parseInt(process.env.REDIS_DB || '0', 10),
  },
  
  // 缓存配置
  cache: {
    ttl: {
      short: parseInt(process.env.CACHE_TTL_SHORT || '300', 10),
      medium: parseInt(process.env.CACHE_TTL_MEDIUM || '1800', 10),
      long: parseInt(process.env.CACHE_TTL_LONG || '3600', 10),
    },
  },
  
  // CORS 配置
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:8000',
  },
  
  // DeepSeek API 配置
  deepseek: {
    apiKey: process.env.DEEPSEEK_API_KEY || '',
    apiUrl: process.env.DEEPSEEK_API_URL || 'https://api.deepseek.com',
  },
};

// 验证必需的配置
export function validateConfig() {
  const required = [
    'FEISHU_APP_ID',
    'FEISHU_APP_SECRET',
  ];
  
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.warn(`⚠️  警告: 缺少以下环境变量: ${missing.join(', ')}`);
    console.warn('⚠️  部分功能可能无法正常工作');
  }
}

