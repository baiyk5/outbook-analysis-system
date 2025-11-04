import { createClient } from 'redis';
import { config } from '../config';

// 创建 Redis 客户端
let redisClient: ReturnType<typeof createClient> | null = null;

/**
 * 初始化 Redis 连接
 */
export async function initRedis() {
  try {
    redisClient = createClient({
      socket: {
        host: config.redis.host,
        port: config.redis.port,
      },
      password: config.redis.password,
      database: config.redis.db,
    });

    redisClient.on('error', (err) => {
      console.error('Redis 错误:', err);
    });

    redisClient.on('connect', () => {
      console.log('✅ Redis 连接成功');
    });

    await redisClient.connect();
    return redisClient;
  } catch (error) {
    console.warn('⚠️  Redis 连接失败，将使用内存缓存:', error);
    return null;
  }
}

/**
 * 关闭 Redis 连接
 */
export async function closeRedis() {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
  }
}

// 内存缓存（当 Redis 不可用时使用）
const memoryCache = new Map<string, { value: any; expireAt: number }>();

/**
 * 设置缓存
 */
export async function setCache(key: string, value: any, ttl: number = config.cache.ttl.medium) {
  try {
    const stringValue = JSON.stringify(value);

    if (redisClient && redisClient.isOpen) {
      await redisClient.setEx(key, ttl, stringValue);
    } else {
      // 使用内存缓存
      memoryCache.set(key, {
        value: stringValue,
        expireAt: Date.now() + ttl * 1000,
      });
    }
  } catch (error) {
    console.error('设置缓存失败:', error);
  }
}

/**
 * 获取缓存
 */
export async function getCache<T = any>(key: string): Promise<T | null> {
  try {
    let stringValue: string | null = null;

    if (redisClient && redisClient.isOpen) {
      stringValue = await redisClient.get(key);
    } else {
      // 使用内存缓存
      const cached = memoryCache.get(key);
      if (cached) {
        if (Date.now() < cached.expireAt) {
          stringValue = cached.value;
        } else {
          memoryCache.delete(key);
        }
      }
    }

    if (stringValue) {
      return JSON.parse(stringValue) as T;
    }

    return null;
  } catch (error) {
    console.error('获取缓存失败:', error);
    return null;
  }
}

/**
 * 删除缓存
 */
export async function deleteCache(key: string) {
  try {
    if (redisClient && redisClient.isOpen) {
      await redisClient.del(key);
    } else {
      memoryCache.delete(key);
    }
  } catch (error) {
    console.error('删除缓存失败:', error);
  }
}

/**
 * 清空所有缓存
 */
export async function clearCache() {
  try {
    if (redisClient && redisClient.isOpen) {
      await redisClient.flushDb();
    } else {
      memoryCache.clear();
    }
  } catch (error) {
    console.error('清空缓存失败:', error);
  }
}

/**
 * 缓存装饰器 - 用于函数结果缓存
 */
export function withCache<T>(
  keyPrefix: string,
  ttl: number = config.cache.ttl.medium,
) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const cacheKey = `${keyPrefix}:${JSON.stringify(args)}`;

      // 尝试从缓存获取
      const cached = await getCache<T>(cacheKey);
      if (cached !== null) {
        console.log(`✅ 缓存命中: ${cacheKey}`);
        return cached;
      }

      // 缓存未命中，执行原方法
      console.log(`❌ 缓存未命中: ${cacheKey}`);
      const result = await originalMethod.apply(this, args);

      // 存入缓存
      await setCache(cacheKey, result, ttl);

      return result;
    };

    return descriptor;
  };
}

/**
 * 定期清理内存缓存中的过期项
 */
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of memoryCache.entries()) {
    if (now >= value.expireAt) {
      memoryCache.delete(key);
    }
  }
}, 60000); // 每分钟清理一次

