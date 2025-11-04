/**
 * 报告服务
 */
import { request } from '@umijs/max';
import {
  shouldUseMockData,
  mockMonthlyReports,
  mockQuarterlyReports,
  mockGenerateReport,
  mockResponse,
} from './mockData';

/**
 * 获取月度报告列表
 */
export async function getMonthlyReports(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockMonthlyReports);
  }
  
  return request('/api/reports/monthly', {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * 获取季度报告列表
 */
export async function getQuarterlyReports(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockQuarterlyReports);
  }
  
  return request('/api/reports/quarterly', {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * AI 生成报告
 */
export async function generateReport(
  params: { type: 'monthly' | 'quarterly'; period: string },
  options?: { [key: string]: any },
) {
  if (shouldUseMockData()) {
    return mockGenerateReport(params);
  }
  
  return request('/api/reports/generate', {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

