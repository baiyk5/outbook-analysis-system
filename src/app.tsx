import { AvatarDropdown, AvatarName, Footer } from "@/components";
import AIChat from "@/components/AIChat";
import GuideTour from "@/components/GuideTour";
import { currentUser as queryCurrentUser } from "@/services/ant-design-pro/api";
import {
  AliwangwangOutlined,
  LinkOutlined,
  SlackOutlined,
} from "@ant-design/icons";
import type { Settings as LayoutSettings } from "@ant-design/pro-components";
import { SettingDrawer } from "@ant-design/pro-components";
import "@ant-design/v5-patch-for-react-19";
import type { RequestConfig, RunTimeLayoutConfig } from "@umijs/max";
import { history, Link } from "@umijs/max";
import { Button, Tooltip } from "antd";
import { useState } from "react";
import defaultSettings from "../config/defaultSettings";
import { errorConfig } from "./requestErrorConfig";

const isDev = process.env.NODE_ENV === "development" || process.env.CI;
const loginPath = "/user/login";

/**
 * @see https://umijs.org/docs/api/runtime-config#getinitialstate
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      // 先尝试从 localStorage 读取用户信息
      const storedUser = localStorage.getItem("currentUser");
      const storedToken = localStorage.getItem("userToken");

      if (storedUser && storedToken) {
        return JSON.parse(storedUser);
      }

      const msg = await queryCurrentUser({
        skipErrorHandler: true,
      });
      return msg.data;
    } catch (_error) {
      // 不要自动跳转到登录页，让 onPageChange 处理
      return undefined;
    }
  };
  // 如果不是登录页面，执行
  const { location } = history;
  if (
    ![loginPath, "/user/register", "/user/register-result"].includes(
      location.pathname
    )
  ) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  const [aiChatOpen, setAiChatOpen] = useState(false);

  return {
    actionsRender: (props) => {
      // 移动端只显示 AI 助手图标，不显示文字提示
      if (props?.isMobile) {
        return [
          <Button
            key="ai-chat"
            type="text"
            icon={
              <AliwangwangOutlined style={{ fontSize: "18px", color: '#1890ff' }} />
            }
            onClick={() => setAiChatOpen(true)}
          />,
        ];
      }
      return [
        <Tooltip key="ai-chat" title="OutBook AI 智能助手">
          <Button
            type="text"
            icon={
              <AliwangwangOutlined style={{ fontSize: "18px", color: '#1890ff' }} />
            }
            onClick={() => setAiChatOpen(true)}
          />
        </Tooltip>,
        // <Question key="doc" />,
        // <SelectLang key="SelectLang" />,
      ];
    },
    avatarProps: {
      src: initialState?.currentUser?.avatar,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    waterMarkProps: {
      content: initialState?.currentUser?.name,
      fontSize: 14,
      gapX: 150,
      gapY: 150,
      width: 120,
      height: 64,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    bgLayoutImgList: [
      {
        src: "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr",
        left: 85,
        bottom: 100,
        height: "303px",
      },
      {
        src: "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr",
        bottom: -68,
        right: -45,
        height: "303px",
      },
      {
        src: "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr",
        bottom: 0,
        left: 0,
        width: "331px",
      },
    ],
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          <AIChat open={aiChatOpen} onClose={() => setAiChatOpen(false)} />
          <GuideTour autoStart={true} />
          {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
    logo: <SlackOutlined style={{ fontSize: "24px" }} />,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request: RequestConfig = {
  // 开发环境使用本地 Mock，生产环境使用真实 API
  // baseURL: "https://proapi.azurewebsites.net",
  ...errorConfig,
};
