import {
  analyzeByQuestion,
  getSystemDataSummary,
} from "@/services/dataAnalysis";
import { askQuestion } from "@/services/deepseek";
import { useResponsive } from "@/utils/responsive";
import { AliwangwangOutlined } from "@ant-design/icons";
import { Bubble, Sender } from "@ant-design/x";
import { useModel } from "@umijs/max";
import { Drawer, message } from "antd";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./index.less";

interface Message {
  key: string;
  role: "user" | "ai";
  content: string;
  loading?: boolean;
}

interface AIChatProps {
  open: boolean;
  onClose: () => void;
}

const AIChat: React.FC<AIChatProps> = ({ open, onClose }) => {
  const { isMobile } = useResponsive();
  const { initialState } = useModel("@@initialState");
  const currentUser = initialState?.currentUser;
  const [messages, setMessages] = useState<Message[]>([
    {
      key: "welcome",
      role: "ai",
      content: `你好！我是 OutBook AI 智能助手 🤖

我可以帮你分析系统内的项目数据，例如：
- 📊 "当前系统中谁的开发效率最高？"
- 💰 "哪个项目的利润率最高？"
- 🐛 "哪个成员的BUG数最多？"
- 📈 "有哪些项目延期了？"
- 📋 "项目统计情况如何？"

请随时向我提问！`,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  // 发送消息
  const handleSend = async (value: string) => {
    if (!value.trim()) {
      return;
    }

    const userMessage: Message = {
      key: `user-${Date.now()}`,
      role: "user",
      content: value,
    };

    const loadingMessage: Message = {
      key: `ai-${Date.now()}`,
      role: "ai",
      content: "",
      loading: true,
    };

    // 添加用户消息和加载状态
    setMessages((prev) => [...prev, userMessage, loadingMessage]);
    setInputValue("");

    try {
      console.log("用户问题:", value);

      // 1. 先尝试用本地数据分析回答
      const quickAnswer = analyzeByQuestion(value);

      if (quickAnswer) {
        // 如果本地分析能直接回答，就使用本地答案
        console.log("使用本地数据分析结果");
        setMessages((prev) =>
          prev.map((msg) =>
            msg.key === loadingMessage.key
              ? { ...msg, content: quickAnswer, loading: false }
              : msg
          )
        );
      } else {
        // 2. 否则调用 AI，并提供系统数据作为上下文
        console.log("调用 AI 进行深度分析");
        const dataContext = getSystemDataSummary();
        console.log("系统数据上下文已准备");

        const response = await askQuestion(value, {
          dataContext,
        });
        console.log("AI 响应:", response);

        // 更新 AI 回复
        setMessages((prev) =>
          prev.map((msg) =>
            msg.key === loadingMessage.key
              ? { ...msg, content: response, loading: false }
              : msg
          )
        );
      }
    } catch (error: any) {
      console.error("AI 回复失败 - 详细错误:", error);
      console.error("错误消息:", error?.message);
      console.error("错误堆栈:", error?.stack);

      const errorMessage = error?.message || "未知错误";
      message.error(`AI 回复失败: ${errorMessage}`);

      // 移除加载消息，添加错误消息
      setMessages((prev) =>
        prev.map((msg) =>
          msg.key === loadingMessage.key
            ? {
                ...msg,
                content: `抱歉，我遇到了一些问题：${errorMessage}`,
                loading: false,
              }
            : msg
        )
      );
    }
  };

  return (
    <Drawer
      title="OutBook AI 智能助手"
      placement="right"
      width={isMobile ? "100%" : 500}
      onClose={onClose}
      open={open}
      className="mobile-drawer"
      styles={{
        body: {
          padding: 0,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        },
      }}
    >
      <div className="ai-chat-container">
        <div className="ai-chat-messages">
          <Bubble.List
            items={messages.map((msg) => ({
              key: msg.key,
              role: msg.role,
              content:
                msg.role === "ai" ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      // 自定义标题样式
                      h1: ({ node, ...props }) => (
                        <h1
                          style={{
                            fontSize: "1.5em",
                            marginTop: "0.5em",
                            marginBottom: "0.5em",
                          }}
                          {...props}
                        />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2
                          style={{
                            fontSize: "1.3em",
                            marginTop: "0.5em",
                            marginBottom: "0.5em",
                          }}
                          {...props}
                        />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3
                          style={{
                            fontSize: "1.1em",
                            marginTop: "0.5em",
                            marginBottom: "0.5em",
                          }}
                          {...props}
                        />
                      ),
                      // 自定义列表样式
                      ul: ({ node, ...props }) => (
                        <ul
                          style={{
                            paddingInlineStart: "0.5em",
                            marginTop: "0.5em",
                            marginBottom: "0.5em",
                          }}
                          {...props}
                        />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol
                          style={{
                            marginLeft: "1.5em",
                            marginTop: "0.5em",
                            marginBottom: "0.5em",
                          }}
                          {...props}
                        />
                      ),
                      // 自定义段落样式
                      p: ({ node, ...props }) => (
                        <p
                          style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                          {...props}
                        />
                      ),
                      // 自定义代码块样式
                      code: ({ node, inline, ...props }: any) =>
                        inline ? (
                          <code
                            style={{
                              background: "#f5f5f5",
                              padding: "2px 6px",
                              borderRadius: "3px",
                              fontSize: "0.9em",
                            }}
                            {...props}
                          />
                        ) : (
                          <code
                            style={{
                              display: "block",
                              background: "#f5f5f5",
                              padding: "10px",
                              borderRadius: "5px",
                              fontSize: "0.9em",
                              overflowX: "auto",
                            }}
                            {...props}
                          />
                        ),
                      // 自定义加粗样式
                      strong: ({ node, ...props }) => (
                        <strong
                          style={{ fontWeight: 600, color: "#1677ff" }}
                          {...props}
                        />
                      ),
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                ) : (
                  msg.content
                ),
              loading: msg.loading,
              placement: msg.role === "user" ? "end" : "start",
              avatar:
                msg.role === "ai"
                  ? {
                      icon: <AliwangwangOutlined />,
                      style: { background: "#1677ff" },
                    }
                  : {
                      src: currentUser?.avatar,
                      // style: { background: '#87d068' },
                    },
              variant: msg.role === "user" ? "filled" : "outlined",
              typing:
                msg.role === "ai" && !msg.loading
                  ? { step: 5, interval: 20 }
                  : false,
            }))}
            roles={{
              ai: {
                placement: "start",
                variant: "outlined",
              },
              user: {
                placement: "end",
                variant: "filled",
              },
            }}
          />
        </div>
        <div className="ai-chat-input">
          <Sender
            value={inputValue}
            onChange={setInputValue}
            onSubmit={handleSend}
            placeholder="请输入你的问题..."
            loading={messages.some((msg) => msg.loading)}
          />
        </div>
      </div>
    </Drawer>
  );
};

export default AIChat;
