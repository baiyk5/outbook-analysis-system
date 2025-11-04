import * as lark from '@larksuiteoapi/node-sdk';
import { config } from '../config';

// 创建飞书客户端
export const feishuClient = new lark.Client({
  appId: config.feishu.appId,
  appSecret: config.feishu.appSecret,
  appType: lark.AppType.SelfBuild,
  domain: lark.Domain.Feishu,
});

/**
 * 获取多维表格记录列表
 */
export async function getTableRecords(appToken: string, tableId: string, pageSize = 500) {
  try {
    const allRecords: any[] = [];
    let pageToken: string | undefined = undefined;
    let hasMore = true;

    while (hasMore) {
      const res = await feishuClient.bitable.appTableRecord.list({
        path: {
          app_token: appToken,
          table_id: tableId,
        },
        params: {
          page_size: pageSize,
          page_token: pageToken,
        },
      });

      if (res.code !== 0) {
        throw new Error(`飞书 API 错误: ${res.msg}`);
      }

      if (res.data?.items) {
        allRecords.push(...res.data.items);
      }

      hasMore = res.data?.has_more || false;
      pageToken = res.data?.page_token;
    }

    return allRecords;
  } catch (error: any) {
    console.error('获取飞书表格数据失败:', error);
    throw new Error(`获取飞书表格数据失败: ${error.message}`);
  }
}

/**
 * 获取单条记录
 */
export async function getTableRecord(appToken: string, tableId: string, recordId: string) {
  try {
    const res = await feishuClient.bitable.appTableRecord.get({
      path: {
        app_token: appToken,
        table_id: tableId,
        record_id: recordId,
      },
    });

    if (res.code !== 0) {
      throw new Error(`飞书 API 错误: ${res.msg}`);
    }

    return res.data?.record;
  } catch (error: any) {
    console.error('获取飞书记录失败:', error);
    throw new Error(`获取飞书记录失败: ${error.message}`);
  }
}

/**
 * 创建记录
 */
export async function createTableRecord(appToken: string, tableId: string, fields: any) {
  try {
    const res = await feishuClient.bitable.appTableRecord.create({
      path: {
        app_token: appToken,
        table_id: tableId,
      },
      data: {
        fields,
      },
    });

    if (res.code !== 0) {
      throw new Error(`飞书 API 错误: ${res.msg}`);
    }

    return res.data?.record;
  } catch (error: any) {
    console.error('创建飞书记录失败:', error);
    throw new Error(`创建飞书记录失败: ${error.message}`);
  }
}

/**
 * 更新记录
 */
export async function updateTableRecord(
  appToken: string,
  tableId: string,
  recordId: string,
  fields: any,
) {
  try {
    const res = await feishuClient.bitable.appTableRecord.update({
      path: {
        app_token: appToken,
        table_id: tableId,
        record_id: recordId,
      },
      data: {
        fields,
      },
    });

    if (res.code !== 0) {
      throw new Error(`飞书 API 错误: ${res.msg}`);
    }

    return res.data?.record;
  } catch (error: any) {
    console.error('更新飞书记录失败:', error);
    throw new Error(`更新飞书记录失败: ${error.message}`);
  }
}

/**
 * 删除记录
 */
export async function deleteTableRecord(appToken: string, tableId: string, recordId: string) {
  try {
    const res = await feishuClient.bitable.appTableRecord.delete({
      path: {
        app_token: appToken,
        table_id: tableId,
        record_id: recordId,
      },
    });

    if (res.code !== 0) {
      throw new Error(`飞书 API 错误: ${res.msg}`);
    }

    return true;
  } catch (error: any) {
    console.error('删除飞书记录失败:', error);
    throw new Error(`删除飞书记录失败: ${error.message}`);
  }
}

/**
 * 批量获取记录（带过滤条件）
 */
export async function searchTableRecords(
  appToken: string,
  tableId: string,
  filter?: string,
  sort?: any[],
) {
  try {
    const res = await feishuClient.bitable.appTableRecord.search({
      path: {
        app_token: appToken,
        table_id: tableId,
      },
      data: {
        filter,
        sort,
        page_size: 500,
      },
    });

    if (res.code !== 0) {
      throw new Error(`飞书 API 错误: ${res.msg}`);
    }

    return res.data?.items || [];
  } catch (error: any) {
    console.error('搜索飞书记录失败:', error);
    throw new Error(`搜索飞书记录失败: ${error.message}`);
  }
}

