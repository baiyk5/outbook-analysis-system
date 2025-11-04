/**
 * 飞书连接测试脚本
 * 用于测试飞书 API 连接和数据获取
 */

import * as dotenv from 'dotenv';
import { feishuClient } from '../src/services/feishu';
import { config } from '../src/config';

// 加载环境变量
dotenv.config();

async function testFeishuConnection() {
  console.log('\n🧪 开始测试飞书连接...\n');

  try {
    // 1. 测试应用凭证
    console.log('1️⃣ 测试应用凭证...');
    console.log(`   App ID: ${config.feishu.appId}`);
    console.log(`   App Secret: ${config.feishu.appSecret ? '已配置' : '未配置'}`);

    if (!config.feishu.appId || !config.feishu.appSecret) {
      console.log('   ❌ 应用凭证未配置');
      console.log('   请在 .env 文件中配置 FEISHU_APP_ID 和 FEISHU_APP_SECRET\n');
      return;
    }

    // 获取 tenant_access_token
    const tokenResponse = await feishuClient.auth.tenantAccessToken.internal({
      data: {
        app_id: config.feishu.appId,
        app_secret: config.feishu.appSecret,
      },
    });

    if (tokenResponse.code !== 0) {
      console.log(`   ❌ 获取 token 失败: ${tokenResponse.msg}`);
      return;
    }

    console.log('   ✅ 应用凭证验证成功\n');

    // 2. 测试项目表
    if (config.feishu.tables.project.appToken && config.feishu.tables.project.tableId) {
      console.log('2️⃣ 测试项目表连接...');
      console.log(`   App Token: ${config.feishu.tables.project.appToken}`);
      console.log(`   Table ID: ${config.feishu.tables.project.tableId}`);

      try {
        const response = await feishuClient.bitable.appTableRecord.list({
          path: {
            app_token: config.feishu.tables.project.appToken,
            table_id: config.feishu.tables.project.tableId,
          },
          params: {
            page_size: 5,
          },
        });

        if (response.code !== 0) {
          console.log(`   ❌ 获取项目数据失败: ${response.msg}`);
          console.log('   可能的原因:');
          console.log('     - 应用没有权限访问该表格');
          console.log('     - app_token 或 table_id 不正确');
          console.log('     - 表格未添加应用为协作者\n');
        } else {
          const recordCount = response.data?.items?.length || 0;
          console.log(`   ✅ 成功获取项目数据，共 ${recordCount} 条记录`);

          if (recordCount > 0) {
            console.log('\n   📋 第一条记录的字段:');
            const firstRecord = response.data?.items?.[0];
            if (firstRecord?.fields) {
              Object.keys(firstRecord.fields).forEach((key) => {
                console.log(`      - ${key}`);
              });
            }
          }
          console.log('');
        }
      } catch (error: any) {
        console.log(`   ❌ 请求失败: ${error.message}\n`);
      }
    } else {
      console.log('2️⃣ 项目表未配置，跳过测试\n');
    }

    // 3. 测试 Bug 表
    if (config.feishu.tables.bug.appToken && config.feishu.tables.bug.tableId) {
      console.log('3️⃣ 测试 Bug 表连接...');
      console.log(`   App Token: ${config.feishu.tables.bug.appToken}`);
      console.log(`   Table ID: ${config.feishu.tables.bug.tableId}`);

      try {
        const response = await feishuClient.bitable.appTableRecord.list({
          path: {
            app_token: config.feishu.tables.bug.appToken,
            table_id: config.feishu.tables.bug.tableId,
          },
          params: {
            page_size: 5,
          },
        });

        if (response.code !== 0) {
          console.log(`   ❌ 获取 Bug 数据失败: ${response.msg}\n`);
        } else {
          const recordCount = response.data?.items?.length || 0;
          console.log(`   ✅ 成功获取 Bug 数据，共 ${recordCount} 条记录\n`);
        }
      } catch (error: any) {
        console.log(`   ❌ 请求失败: ${error.message}\n`);
      }
    } else {
      console.log('3️⃣ Bug 表未配置，跳过测试\n');
    }

    // 4. 测试工单表
    if (config.feishu.tables.ticket.appToken && config.feishu.tables.ticket.tableId) {
      console.log('4️⃣ 测试工单表连接...');
      console.log(`   App Token: ${config.feishu.tables.ticket.appToken}`);
      console.log(`   Table ID: ${config.feishu.tables.ticket.tableId}`);

      try {
        const response = await feishuClient.bitable.appTableRecord.list({
          path: {
            app_token: config.feishu.tables.ticket.appToken,
            table_id: config.feishu.tables.ticket.tableId,
          },
          params: {
            page_size: 5,
          },
        });

        if (response.code !== 0) {
          console.log(`   ❌ 获取工单数据失败: ${response.msg}\n`);
        } else {
          const recordCount = response.data?.items?.length || 0;
          console.log(`   ✅ 成功获取工单数据，共 ${recordCount} 条记录\n`);
        }
      } catch (error: any) {
        console.log(`   ❌ 请求失败: ${error.message}\n`);
      }
    } else {
      console.log('4️⃣ 工单表未配置，跳过测试\n');
    }

    // 5. 测试成员表
    if (config.feishu.tables.member.appToken && config.feishu.tables.member.tableId) {
      console.log('5️⃣ 测试成员表连接...');
      console.log(`   App Token: ${config.feishu.tables.member.appToken}`);
      console.log(`   Table ID: ${config.feishu.tables.member.tableId}`);

      try {
        const response = await feishuClient.bitable.appTableRecord.list({
          path: {
            app_token: config.feishu.tables.member.appToken,
            table_id: config.feishu.tables.member.tableId,
          },
          params: {
            page_size: 5,
          },
        });

        if (response.code !== 0) {
          console.log(`   ❌ 获取成员数据失败: ${response.msg}\n`);
        } else {
          const recordCount = response.data?.items?.length || 0;
          console.log(`   ✅ 成功获取成员数据，共 ${recordCount} 条记录\n`);
        }
      } catch (error: any) {
        console.log(`   ❌ 请求失败: ${error.message}\n`);
      }
    } else {
      console.log('5️⃣ 成员表未配置，跳过测试\n');
    }

    // 6. 测试知识库表
    if (config.feishu.tables.knowledge.appToken && config.feishu.tables.knowledge.tableId) {
      console.log('6️⃣ 测试知识库表连接...');
      console.log(`   App Token: ${config.feishu.tables.knowledge.appToken}`);
      console.log(`   Table ID: ${config.feishu.tables.knowledge.tableId}`);

      try {
        const response = await feishuClient.bitable.appTableRecord.list({
          path: {
            app_token: config.feishu.tables.knowledge.appToken,
            table_id: config.feishu.tables.knowledge.tableId,
          },
          params: {
            page_size: 5,
          },
        });

        if (response.code !== 0) {
          console.log(`   ❌ 获取知识库数据失败: ${response.msg}\n`);
        } else {
          const recordCount = response.data?.items?.length || 0;
          console.log(`   ✅ 成功获取知识库数据，共 ${recordCount} 条记录\n`);
        }
      } catch (error: any) {
        console.log(`   ❌ 请求失败: ${error.message}\n`);
      }
    } else {
      console.log('6️⃣ 知识库表未配置，跳过测试\n');
    }

    console.log('🎉 测试完成！\n');
  } catch (error: any) {
    console.error('❌ 测试失败:', error.message);
    console.error(error);
  }
}

// 运行测试
testFeishuConnection();

