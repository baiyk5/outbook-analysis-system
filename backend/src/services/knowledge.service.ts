import { config } from '../config';
import { getTableRecords } from './feishu';
import { getCache, setCache } from './cache';
import { transformKnowledgeDoc } from '../utils/transform';

/**
 * 获取知识库文档列表
 */
export async function getKnowledgeDocuments() {
  const cacheKey = 'knowledge:documents';
  
  const cached = await getCache(cacheKey);
  if (cached) {
    console.log('✅ 从缓存获取知识库文档');
    return cached;
  }
  
  console.log('📡 从飞书获取知识库文档');
  
  const { appToken, tableId } = config.feishu.tables.knowledge;
  
  if (!appToken || !tableId) {
    console.warn('⚠️  知识库表配置缺失，返回空数据');
    return [];
  }
  
  const records = await getTableRecords(appToken, tableId);
  const documents = records.map(transformKnowledgeDoc);
  
  await setCache(cacheKey, documents, config.cache.ttl.medium);
  
  return documents;
}

/**
 * 获取知识库统计数据
 */
export async function getKnowledgeStats() {
  const cacheKey = 'knowledge:stats';
  
  const cached = await getCache(cacheKey);
  if (cached) return cached;
  
  const documents = await getKnowledgeDocuments();
  
  // 按类型统计
  const byType: Record<string, number> = {};
  documents.forEach((doc: any) => {
    const type = doc.type || '其他';
    byType[type] = (byType[type] || 0) + 1;
  });
  
  // 按状态统计
  const byStatus: Record<string, number> = {};
  documents.forEach((doc: any) => {
    const status = doc.status || '草稿';
    byStatus[status] = (byStatus[status] || 0) + 1;
  });
  
  // 按项目统计
  const byProject: Record<string, number> = {};
  documents.forEach((doc: any) => {
    const project = doc.projectName || '未分类';
    byProject[project] = (byProject[project] || 0) + 1;
  });
  
  // 最近更新
  const recentUpdates = documents
    .sort((a: any, b: any) => {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    })
    .slice(0, 10)
    .map((doc: any) => ({
      id: doc.id,
      title: doc.title,
      type: doc.type,
      updatedAt: doc.updatedAt,
    }));
  
  const stats = {
    total: documents.length,
    byType,
    byStatus,
    byProject,
    recentUpdates,
  };
  
  await setCache(cacheKey, stats, config.cache.ttl.medium);
  return stats;
}

