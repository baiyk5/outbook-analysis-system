/**
 * 工作台服务
 */
import { request } from '@umijs/max';
import {
  shouldUseMockData,
  mockProjectNotice,
  mockActivities,
  mockChartData,
  mockResponse,
} from './mockData';

/**
 * 获取项目通知
 */
export async function getProjectNotice(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockProjectNotice);
  }
  
  return request('/api/project/notice', {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * 获取活动列表
 */
export async function getActivities(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockActivities);
  }
  
  return request('/api/activities', {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * 获取工作台图表数据
 */
export async function getWorkplaceChartData(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockChartData);
  }
  
  return request('/api/fake_workplace_chart_data', {
    method: 'GET',
    ...(options || {}),
  });
}

