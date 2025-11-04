/**
 * 知识库服务
 */
import { request } from '@umijs/max';
import {
  shouldUseMockData,
  mockKnowledgeData,
  mockKnowledgeStats,
  mockResponse,
} from './mockData';

/**
 * 获取知识库文档列表
 */
export async function getKnowledgeDocuments(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockKnowledgeData);
  }
  
  return request('/api/knowledge', {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * 获取知识库统计数据
 */
export async function getKnowledgeStats(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockKnowledgeStats);
  }
  
  return request('/api/knowledge/stats', {
    method: 'GET',
    ...(options || {}),
  });
}

