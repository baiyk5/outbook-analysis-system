/**
 * 统计数据服务
 */
import { request } from '@umijs/max';
import {
  shouldUseMockData,
  mockStatisticsOverview,
  mockStatisticsTrend,
  mockSchoolWordcloud,
  mockBugAnalysis,
  mockTicketAnalysis,
  mockFinancialData,
  mockResponse,
} from './mockData';

/**
 * 获取统计概览
 */
export async function getStatisticsOverview(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockStatisticsOverview);
  }
  
  return request('/api/statistics/overview', {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * 获取趋势数据
 */
export async function getStatisticsTrend(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockStatisticsTrend);
  }
  
  return request('/api/statistics/trend', {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * 获取学校词云数据
 */
export async function getSchoolWordcloud(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockSchoolWordcloud);
  }
  
  return request('/api/statistics/school-wordcloud', {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * 获取 Bug 分析数据
 */
export async function getBugAnalysis(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockBugAnalysis);
  }
  
  return request('/api/statistics/bug-analysis', {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * 获取工单分析数据
 */
export async function getTicketAnalysis(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockTicketAnalysis);
  }
  
  return request('/api/statistics/ticket-analysis', {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * 获取财务数据
 */
export async function getFinancialData(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockFinancialData);
  }
  
  return request('/api/statistics/financial', {
    method: 'GET',
    ...(options || {}),
  });
}

