/**
 * 分析页面服务
 */
import { request } from '@umijs/max';
import { shouldUseMockData, mockChartData, mockResponse } from './mockData';

/**
 * 获取分析图表数据
 */
export async function getAnalysisChartData(options?: { [key: string]: any }) {
  if (shouldUseMockData()) {
    return mockResponse(mockChartData);
  }
  
  return request('/api/fake_analysis_chart_data', {
    method: 'GET',
    ...(options || {}),
  });
}

