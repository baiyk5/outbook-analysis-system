/**
 * 项目管理服务
 */
import { request } from '@umijs/max';
import { shouldUseMockData, mockProjectData, mockResponse } from './mockData';

/**
 * 获取项目列表
 */
export async function getProjects(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockProjectData);
  }
  
  return request('/api/projects', {
    method: 'GET',
    ...(options || {}),
  });
}

