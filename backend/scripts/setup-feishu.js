#!/usr/bin/env node

/**
 * 飞书配置向导
 * 帮助用户快速配置飞书应用和文档信息
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function main() {
  console.log('\n🚀 OutBook 飞书配置向导\n');
  console.log('这个向导将帮助你配置飞书应用和文档信息\n');

  // 1. 飞书应用配置
  console.log('📱 第一步：飞书应用配置');
  console.log('请访问 https://open.feishu.cn/ 创建企业自建应用\n');

  const appId = await question('请输入 App ID (cli_xxxxx): ');
  const appSecret = await question('请输入 App Secret: ');

  console.log('\n✅ 飞书应用配置完成！\n');

  // 2. 多维表格配置
  console.log('📊 第二步：多维表格配置');
  console.log('请打开你的飞书多维表格，从 URL 中提取信息\n');
  console.log('URL 格式: https://xxx.feishu.cn/base/{app_token}?table={table_id}\n');

  const useMultiTable = await question('你是否使用多维表格？(y/n): ');

  let config = {
    FEISHU_APP_ID: appId,
    FEISHU_APP_SECRET: appSecret,
  };

  if (useMultiTable.toLowerCase() === 'y') {
    console.log('\n配置项目表:');
    const projectAppToken = await question('  项目表 app_token: ');
    const projectTableId = await question('  项目表 table_id: ');
    config.FEISHU_PROJECT_APP_TOKEN = projectAppToken;
    config.FEISHU_PROJECT_TABLE_ID = projectTableId;

    const configureBug = await question('\n是否配置 Bug 表？(y/n): ');
    if (configureBug.toLowerCase() === 'y') {
      const bugAppToken = await question('  Bug 表 app_token: ');
      const bugTableId = await question('  Bug 表 table_id: ');
      config.FEISHU_BUG_APP_TOKEN = bugAppToken;
      config.FEISHU_BUG_TABLE_ID = bugTableId;
    }

    const configureTicket = await question('\n是否配置工单表？(y/n): ');
    if (configureTicket.toLowerCase() === 'y') {
      const ticketAppToken = await question('  工单表 app_token: ');
      const ticketTableId = await question('  工单表 table_id: ');
      config.FEISHU_TICKET_APP_TOKEN = ticketAppToken;
      config.FEISHU_TICKET_TABLE_ID = ticketTableId;
    }

    const configureMember = await question('\n是否配置成员表？(y/n): ');
    if (configureMember.toLowerCase() === 'y') {
      const memberAppToken = await question('  成员表 app_token: ');
      const memberTableId = await question('  成员表 table_id: ');
      config.FEISHU_MEMBER_APP_TOKEN = memberAppToken;
      config.FEISHU_MEMBER_TABLE_ID = memberTableId;
    }

    const configureKnowledge = await question('\n是否配置知识库表？(y/n): ');
    if (configureKnowledge.toLowerCase() === 'y') {
      const knowledgeAppToken = await question('  知识库表 app_token: ');
      const knowledgeTableId = await question('  知识库表 table_id: ');
      config.FEISHU_KNOWLEDGE_APP_TOKEN = knowledgeAppToken;
      config.FEISHU_KNOWLEDGE_TABLE_ID = knowledgeTableId;
    }
  }

  // 3. 生成 .env 文件
  console.log('\n📝 生成配置文件...\n');

  const envPath = path.join(__dirname, '..', '.env');
  const envExamplePath = path.join(__dirname, '..', '.env.example');

  // 读取 .env.example 作为模板
  let envContent = '';
  if (fs.existsSync(envExamplePath)) {
    envContent = fs.readFileSync(envExamplePath, 'utf-8');
  }

  // 替换配置值
  for (const [key, value] of Object.entries(config)) {
    const regex = new RegExp(`^${key}=.*$`, 'm');
    if (envContent.match(regex)) {
      envContent = envContent.replace(regex, `${key}=${value}`);
    } else {
      envContent += `\n${key}=${value}`;
    }
  }

  // 写入 .env 文件
  fs.writeFileSync(envPath, envContent);

  console.log('✅ 配置文件已生成: .env\n');

  // 4. 显示配置摘要
  console.log('📋 配置摘要:');
  console.log('─────────────────────────────────');
  console.log(`App ID: ${appId}`);
  console.log(`App Secret: ${appSecret.substring(0, 10)}...`);
  if (config.FEISHU_PROJECT_APP_TOKEN) {
    console.log(`项目表: ${config.FEISHU_PROJECT_APP_TOKEN} / ${config.FEISHU_PROJECT_TABLE_ID}`);
  }
  if (config.FEISHU_BUG_APP_TOKEN) {
    console.log(`Bug 表: ${config.FEISHU_BUG_APP_TOKEN} / ${config.FEISHU_BUG_TABLE_ID}`);
  }
  if (config.FEISHU_TICKET_APP_TOKEN) {
    console.log(`工单表: ${config.FEISHU_TICKET_APP_TOKEN} / ${config.FEISHU_TICKET_TABLE_ID}`);
  }
  console.log('─────────────────────────────────\n');

  // 5. 下一步提示
  console.log('🎉 配置完成！\n');
  console.log('下一步:');
  console.log('  1. 确保飞书应用已申请相应权限');
  console.log('  2. 确保飞书文档已添加应用为协作者');
  console.log('  3. 运行 npm run dev 启动服务');
  console.log('  4. 访问 http://localhost:3000/api/projects 测试\n');

  rl.close();
}

main().catch((error) => {
  console.error('配置失败:', error);
  rl.close();
  process.exit(1);
});

