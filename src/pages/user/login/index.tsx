import { login } from "@/services/ant-design-pro/api";
import { LockOutlined, UserOutlined, SlackOutlined } from "@ant-design/icons";
import { LoginForm, ProFormText } from "@ant-design/pro-components";
import { Helmet, useIntl, useModel, history } from "@umijs/max";
import { Alert, App } from "antd";
import { createStyles } from "antd-style";
import React, { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";

const useStyles = createStyles(({ token }) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      overflow: "hidden",
      background: "linear-gradient(to bottom, #f0f2ff 0%, #ffffff 50%, #f5f5f5 100%)",
      position: "relative",
    },
    content: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 16px",
      position: "relative",
      zIndex: 1,
    },
    loginBox: {
      width: "100%",
      maxWidth: "500px",
      position: "relative",
      top: -100,
      '@media (max-width: 768px)': {
        maxWidth: "90%",
        top: -50,
        minWidth: "auto",
      },
      // 覆盖 ProComponents LoginForm 的默认最小宽度
      '& .ant-pro-form-login-container': {
        '@media (max-width: 768px)': {
          minWidth: "auto !important",
          width: "100% !important",
        },
      },
    },
    header: {
      textAlign: "center",
      marginBottom: "10px",
    },
    logoWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "16px",
      '@media (max-width: 768px)': {
        marginBottom: "12px",
      },
    },
    logoImage: {
      width: "44px",
      height: "44px",
      marginRight: "24px",
      '@media (max-width: 768px)': {
        width: "32px",
        height: "32px",
        marginRight: "12px",
      },
    },
    title: {
      fontSize: "33px",
      fontWeight: 600,
      color: "#1a1a1a",
      margin: '0 0 0 12px',
      '@media (max-width: 768px)': {
        fontSize: "22px",
        margin: '0 0 0 8px',
      },
      "& .text-char": {
        display: "inline-block",
        animation: "charFadeIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      },
    },
    "@keyframes charFadeIn": {
      "0%": {
        opacity: 0,
        transform: "translateY(-20px) scale(0.8)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0) scale(1)",
      },
    },
    subtitle: {
      fontSize: "14px",
      color: "#999",
      marginTop: "8px",
      '@media (max-width: 768px)': {
        fontSize: "12px",
        marginTop: "4px",
      },
    },
    tabs: {
      marginBottom: "24px",
      "& .ant-tabs-nav": {
        marginBottom: "24px",
      },
      "& .ant-tabs-tab": {
        fontSize: "16px",
        padding: "12px 0",
      },
    },
    footer: {
      textAlign: "center",
      padding: "24px 0",
      color: "#999",
      fontSize: "14px",
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1,
    },
    footerLinks: {
      marginBottom: "8px",
      "& a": {
        color: "#999",
        margin: "0 16px",
        textDecoration: "none",
        "&:hover": {
          color: token.colorPrimary,
        },
      },
    },
    floatingBall: {
      position: "absolute",
      borderRadius: "50%",
      opacity: 0.6,
      animation: "float 6s ease-in-out infinite both",
    },
    ball1: {
      width: "80px",
      height: "80px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      top: "10%",
      left: "10%",
      animationDelay: "0s",
    },
    ball2: {
      width: "60px",
      height: "60px",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      top: "60%",
      left: "5%",
      animationDelay: "2s",
    },
    ball3: {
      width: "100px",
      height: "100px",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      top: "15%",
      right: "10%",
      animationDelay: "1s",
    },
    ball4: {
      width: "70px",
      height: "70px",
      background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      bottom: "15%",
      right: "15%",
      animationDelay: "3s",
    },
    ball5: {
      width: "50px",
      height: "50px",
      background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      bottom: "30%",
      left: "8%",
      animationDelay: "4s",
    },
  };
});

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

// 文字动画组件
const AnimatedText: React.FC<{ text: string; interval?: number }> = ({
  text,
  interval = 30
}) => {
  const chars = text.split('');

  return (
    <>
      <style>
        {`
          @keyframes charFadeInAnim {
            0% {
              opacity: 0;
              transform: translateY(-20px) scale(0.8);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
      {chars.map((char, index) => (
        <span
          key={`char-${index}`}
          style={{
            display: 'inline-block',
            opacity: 0,
            animation: 'charFadeInAnim 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
            animationDelay: `${index * interval}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
};

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>("account");
  const { initialState, setInitialState } = useModel("@@initialState");
  const { styles } = useStyles();
  const { message } = App.useApp();
  const intl = useIntl();

  // 鼠标位置状态 - 使用 ref 来避免初始化问题
  const mousePositionRef = useRef({ x: 0.5, y: 0.5 });
  const ballRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 监听鼠标移动 - 陀螺仪效果
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 将鼠标位置转换为相对于屏幕的比例（0 到 1）
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mousePositionRef.current = { x, y };

      // 计算相对于中心的偏移量（-1 到 1）
      const offsetX = (x - 0.5) * 2;
      const offsetY = (y - 0.5) * 2;

      // 立即更新所有球的位置
      ballRefs.current.forEach((ball, index) => {
        if (ball) {
          // 不同的球有不同的移动速度（视差效果）
          const speeds = [20, 15, 25, 18, 12];
          const speed = speeds[index] || 15;

          const moveX = offsetX * speed;
          const moveY = offsetY * speed;

          // 使用 CSS 变量来设置偏移量
          ball.style.setProperty('--mouse-x', `${moveX}px`);
          ball.style.setProperty('--mouse-y', `${moveY}px`);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 临时方案：直接验证用户名密码，绕过 Mock 服务
      if (values.username === 'admin' && values.password === 'admin') {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: "pages.login.success",
          defaultMessage: "登录成功！",
        });
        message.success(defaultLoginSuccessMessage);

        // 保存登录状态到 localStorage
        localStorage.setItem('userToken', 'mock-token-' + Date.now());
        localStorage.setItem('currentUser', JSON.stringify({
          name: 'Admin',
          avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
          userid: '00000001',
          email: 'admin@example.com',
          signature: '系统管理员',
          title: '管理员',
          group: '定制项目组',
          access: 'admin',
        }));

        // 设置登录状态
        setUserLoginState({
          status: 'ok',
          type,
          currentAuthority: 'admin',
        });

        // 设置用户信息到全局状态
        flushSync(() => {
          setInitialState((s) => ({
            ...s,
            currentUser: {
              name: 'Admin',
              avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
              userid: '00000001',
              email: 'admin@example.com',
              signature: '系统管理员',
              title: '管理员',
              group: '定制项目组',
              access: 'admin',
            },
          }));
        });

        // 跳转到首页
        const urlParams = new URL(window.location.href).searchParams;
        const redirect = urlParams.get("redirect") || "/dashboard";

        // 使用 history.push 进行跳转
        setTimeout(() => {
          history.push(redirect);
        }, 100);
        return;
      }

      // 用户名或密码错误
      const defaultLoginFailureMessage = intl.formatMessage({
        id: "pages.login.failure",
        defaultMessage: "账户或密码错误！",
      });
      message.error(defaultLoginFailureMessage);
      setUserLoginState({
        status: 'error',
        type,
        currentAuthority: 'guest',
      });
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: "pages.login.failure",
        defaultMessage: "登录失败，请重试！",
      });
      console.log('登录异常:', error);
      message.error(defaultLoginFailureMessage);
    }
  };
  const { status, type: loginType } = userLoginState;

  return (
    <div className={styles.container}>
      <Helmet>
        <title>登录 - 数据分析系统</title>
      </Helmet>
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) translateY(0) translateX(0);
            }
            25% {
              transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) translateY(-20px) translateX(10px);
            }
            50% {
              transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) translateY(-10px) translateX(-10px);
            }
            75% {
              transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) translateY(-30px) translateX(5px);
            }
          }
        `}
      </style>

      {/* 浮动装饰球 */}
      <div
        ref={(el) => { ballRefs.current[0] = el; }}
        className={`${styles.floatingBall} ${styles.ball1}`}
      />
      <div
        ref={(el) => { ballRefs.current[1] = el; }}
        className={`${styles.floatingBall} ${styles.ball2}`}
      />
      <div
        ref={(el) => { ballRefs.current[2] = el; }}
        className={`${styles.floatingBall} ${styles.ball3}`}
      />
      <div
        ref={(el) => { ballRefs.current[3] = el; }}
        className={`${styles.floatingBall} ${styles.ball4}`}
      />
      <div
        ref={(el) => { ballRefs.current[4] = el; }}
        className={`${styles.floatingBall} ${styles.ball5}`}
      />

      <div className={styles.content}>
        <div className={styles.loginBox}>
          <div className={styles.header}>
            <div className={styles.logoWrapper}>
              <SlackOutlined style={{ fontSize: "36px", color: "#1890ff" }} />
              <h1 className={styles.title}>
                <AnimatedText text="OutBook Analysis System" interval={25} />
              </h1>
            </div>
            <div className={styles.subtitle}>
              OutBook - 让科技贴心校园，让工作更加高效！
            </div>
          </div>

          {status === "error" && <LoginMessage content="账户或密码错误" />}

          <LoginForm
            logo={false}
            title={false}
            subTitle={false}
            submitter={{
              searchConfig: {
                submitText: "登录",
              },
              resetButtonProps: {
                style: { display: "none" },
              },
              submitButtonProps: {
                size: "large",
                style: {
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                },
              },
            }}
            onFinish={async (values) => {
              await handleSubmit(values as API.LoginParams);
            }}
          >
            <div className={styles.tabs}>
              <div style={{ marginBottom: "24px", textAlign: "center" }}>
                <span
                  style={{
                    color: "#1890ff",
                    fontSize: "16px",
                    fontWeight: 500,
                    borderBottom: "2px solid #1890ff",
                    paddingBottom: "8px",
                    cursor: "pointer",
                  }}
                >
                  账号密码登录
                </span>
              </div>
            </div>

            <ProFormText
              name="username"
              fieldProps={{
                size: "large",
                prefix: <UserOutlined style={{ color: "#999" }} />,
                style: { width: "100%" },
              }}
              placeholder="admin"
              rules={[
                {
                  required: true,
                  message: "请输入用户名！",
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: "large",
                prefix: <LockOutlined style={{ color: "#999" }} />,
                style: { width: "100%" },
              }}
              placeholder="••••••"
              rules={[
                {
                  required: true,
                  message: "请输入密码！",
                },
              ]}
            />

            <div
              style={{
                marginBottom: "24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  defaultChecked
                  style={{ marginRight: "8px" }}
                />
                <span style={{ color: "#666" }}>自动登录</span>
              </label>
            </div>
          </LoginForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
