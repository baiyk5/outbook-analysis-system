/**
 * DeepSeek API 服务
 * 用于调用 DeepSeek AI 接口
 */

// DeepSeek API 配置
const DEEPSEEK_API_KEY = 'sk-43957a76241748268718f62415e5f69b';
// 使用代理路径避免 CORS 问题
const DEEPSEEK_API_URL = '/deepseek-api/v1/chat/completions';

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatCompletionRequest {
  model?: string;
  messages: ChatMessage[];
  temperature?: number;
  max_tokens?: number;
  stream?: boolean;
}

export interface ChatCompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: ChatMessage;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

/**
 * 调用 DeepSeek Chat API
 */
export async function chatCompletion(
  messages: ChatMessage[],
  options?: {
    model?: string;
    temperature?: number;
    max_tokens?: number;
  }
): Promise<ChatCompletionResponse> {
  const requestBody: ChatCompletionRequest = {
    model: options?.model || 'deepseek-chat',
    messages,
    temperature: options?.temperature || 0.7,
    max_tokens: options?.max_tokens || 2000,
    stream: false,
  };

  try {
    console.log('发送请求到 DeepSeek API:', DEEPSEEK_API_URL);
    console.log('请求体:', JSON.stringify(requestBody, null, 2));

    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });

    console.log('响应状态:', response.status, response.statusText);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API 错误响应:', errorData);
      throw new Error(
        `DeepSeek API 错误: ${response.status} - ${errorData.error?.message || response.statusText}`
      );
    }

    const data: ChatCompletionResponse = await response.json();
    console.log('API 成功响应:', data);
    return data;
  } catch (error) {
    console.error('DeepSeek API 调用失败 - 详细信息:', error);
    throw error;
  }
}

/**
 * 简化的问答接口（支持数据上下文）
 */
export async function askQuestion(
  question: string,
  options?: {
    systemPrompt?: string;
    dataContext?: string;
  }
): Promise<string> {
  const messages: ChatMessage[] = [];

  // 添加系统提示词
  const systemPrompt = options?.systemPrompt || `你是 OutBook 项目管理系统的 AI 智能助手，专门帮助用户分析和理解项目数据。

你的职责：
1. 基于系统提供的真实数据回答问题
2. 进行数据分析和洞察
3. 提供专业的项目管理建议
4. 用简洁、清晰的语言回答

重要规则：
- 只使用系统提供的真实数据，不要编造数据
- 如果数据中没有相关信息，请明确告知用户
- 回答要准确、专业、有数据支撑
- 可以使用 Markdown 格式让回答更清晰`;

  messages.push({
    role: 'system',
    content: systemPrompt,
  });

  // 如果有数据上下文，添加到消息中
  if (options?.dataContext) {
    messages.push({
      role: 'system',
      content: `以下是系统的真实数据，请基于这些数据回答用户的问题：\n\n${options.dataContext}`,
    });
  }

  // 添加用户问题
  messages.push({
    role: 'user',
    content: question,
  });

  const response = await chatCompletion(messages);
  return response.choices[0]?.message?.content || '抱歉，我无法回答这个问题。';
}

/**
 * 多轮对话接口
 */
export async function chat(
  conversationHistory: ChatMessage[],
  newMessage: string
): Promise<string> {
  const messages = [
    ...conversationHistory,
    {
      role: 'user' as const,
      content: newMessage,
    },
  ];

  const response = await chatCompletion(messages);
  return response.choices[0]?.message?.content || '抱歉，我无法回答这个问题。';
}

/**
 * 生成项目报告
 */
export async function generateReport(
  projectData: any,
  reportType: 'monthly' | 'quarterly' | 'yearly'
): Promise<string> {
  const reportTypeMap = {
    monthly: '月度',
    quarterly: '季度',
    yearly: '年度',
  };

  const systemPrompt = `你是一个专业的项目数据分析师，擅长生成项目分析报告。
请根据提供的项目数据，生成一份专业的${reportTypeMap[reportType]}报告。
报告应包含：
1. 数据概览
2. 关键指标分析
3. 趋势分析
4. 问题和风险
5. 改进建议

请使用清晰的结构和专业的语言。`;

  const userPrompt = `请根据以下项目数据生成${reportTypeMap[reportType]}报告：

${JSON.stringify(projectData, null, 2)}

请生成一份详细的分析报告。`;

  const messages: ChatMessage[] = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ];

  const response = await chatCompletion(messages, {
    max_tokens: 3000,
    temperature: 0.7,
  });

  return response.choices[0]?.message?.content || '报告生成失败';
}

