((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__user__login__index'],
{ "src/pages/user/login/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _antdstyle = __mako_require__("node_modules/antd-style/es/index.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reactdom = __mako_require__("node_modules/react-dom/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const useStyles = (0, _antdstyle.createStyles)(({ token })=>{
    return {
        container: {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            overflow: "hidden",
            background: "linear-gradient(to bottom, #f0f2ff 0%, #ffffff 50%, #f5f5f5 100%)",
            position: "relative"
        },
        content: {
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px 16px",
            position: "relative",
            zIndex: 1
        },
        loginBox: {
            width: "100%",
            maxWidth: "500px",
            position: "relative",
            top: -100
        },
        header: {
            textAlign: "center",
            marginBottom: "10px"
        },
        logoWrapper: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px"
        },
        logoImage: {
            width: "44px",
            height: "44px",
            marginRight: "24px"
        },
        title: {
            fontSize: "33px",
            fontWeight: 600,
            color: "#1a1a1a",
            margin: '0 0 0 12px',
            "& .text-char": {
                display: "inline-block",
                animation: "charFadeIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"
            }
        },
        "@keyframes charFadeIn": {
            "0%": {
                opacity: 0,
                transform: "translateY(-20px) scale(0.8)"
            },
            "100%": {
                opacity: 1,
                transform: "translateY(0) scale(1)"
            }
        },
        subtitle: {
            fontSize: "14px",
            color: "#999",
            marginTop: "8px"
        },
        tabs: {
            marginBottom: "24px",
            "& .ant-tabs-nav": {
                marginBottom: "24px"
            },
            "& .ant-tabs-tab": {
                fontSize: "16px",
                padding: "12px 0"
            }
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
            zIndex: 1
        },
        footerLinks: {
            marginBottom: "8px",
            "& a": {
                color: "#999",
                margin: "0 16px",
                textDecoration: "none",
                "&:hover": {
                    color: token.colorPrimary
                }
            }
        },
        floatingBall: {
            position: "absolute",
            borderRadius: "50%",
            opacity: 0.6,
            animation: "float 6s ease-in-out infinite both"
        },
        ball1: {
            width: "80px",
            height: "80px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            top: "10%",
            left: "10%",
            animationDelay: "0s"
        },
        ball2: {
            width: "60px",
            height: "60px",
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            top: "60%",
            left: "5%",
            animationDelay: "2s"
        },
        ball3: {
            width: "100px",
            height: "100px",
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            top: "15%",
            right: "10%",
            animationDelay: "1s"
        },
        ball4: {
            width: "70px",
            height: "70px",
            background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            bottom: "15%",
            right: "15%",
            animationDelay: "3s"
        },
        ball5: {
            width: "50px",
            height: "50px",
            background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            bottom: "30%",
            left: "8%",
            animationDelay: "4s"
        }
    };
});
const LoginMessage = ({ content })=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Alert, {
        style: {
            marginBottom: 24
        },
        message: content,
        type: "error",
        showIcon: true
    }, void 0, false, {
        fileName: "src/pages/user/login/index.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
};
_c = LoginMessage;
// 文字动画组件
const AnimatedText = ({ text, interval = 30 })=>{
    const chars = text.split('');
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("style", {
                children: `
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
        `
            }, void 0, false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            chars.map((char, index)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                    style: {
                        display: 'inline-block',
                        opacity: 0,
                        animation: 'charFadeInAnim 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                        animationDelay: `${index * interval}ms`
                    },
                    children: char === ' ' ? '\u00A0' : char
                }, `char-${index}`, false, {
                    fileName: "src/pages/user/login/index.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true);
};
_c1 = AnimatedText;
const Login = ()=>{
    _s();
    const [userLoginState, setUserLoginState] = (0, _react.useState)({});
    const [type, setType] = (0, _react.useState)("account");
    const { initialState, setInitialState } = (0, _max.useModel)("@@initialState");
    const { styles } = useStyles();
    const { message } = _antd.App.useApp();
    const intl = (0, _max.useIntl)();
    // 鼠标位置状态 - 使用 ref 来避免初始化问题
    const mousePositionRef = (0, _react.useRef)({
        x: 0.5,
        y: 0.5
    });
    const ballRefs = (0, _react.useRef)([]);
    // 监听鼠标移动 - 陀螺仪效果
    (0, _react.useEffect)(()=>{
        const handleMouseMove = (e)=>{
            // 将鼠标位置转换为相对于屏幕的比例（0 到 1）
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            mousePositionRef.current = {
                x,
                y
            };
            // 计算相对于中心的偏移量（-1 到 1）
            const offsetX = (x - 0.5) * 2;
            const offsetY = (y - 0.5) * 2;
            // 立即更新所有球的位置
            ballRefs.current.forEach((ball, index)=>{
                if (ball) {
                    // 不同的球有不同的移动速度（视差效果）
                    const speeds = [
                        20,
                        15,
                        25,
                        18,
                        12
                    ];
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
        return ()=>{
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    const handleSubmit = async (values)=>{
        try {
            // 临时方案：直接验证用户名密码，绕过 Mock 服务
            if (values.username === 'admin' && values.password === 'admin') {
                const defaultLoginSuccessMessage = intl.formatMessage({
                    id: "pages.login.success",
                    defaultMessage: "登录成功！"
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
                    access: 'admin'
                }));
                // 设置登录状态
                setUserLoginState({
                    status: 'ok',
                    type,
                    currentAuthority: 'admin'
                });
                // 设置用户信息到全局状态
                (0, _reactdom.flushSync)(()=>{
                    setInitialState((s)=>({
                            ...s,
                            currentUser: {
                                name: 'Admin',
                                avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
                                userid: '00000001',
                                email: 'admin@example.com',
                                signature: '系统管理员',
                                title: '管理员',
                                group: '定制项目组',
                                access: 'admin'
                            }
                        }));
                });
                // 跳转到首页
                const urlParams = new URL(window.location.href).searchParams;
                const redirect = urlParams.get("redirect") || "/dashboard";
                // 使用 history.push 进行跳转
                setTimeout(()=>{
                    _max.history.push(redirect);
                }, 100);
                return;
            }
            // 用户名或密码错误
            const defaultLoginFailureMessage = intl.formatMessage({
                id: "pages.login.failure",
                defaultMessage: "账户或密码错误！"
            });
            message.error(defaultLoginFailureMessage);
            setUserLoginState({
                status: 'error',
                type,
                currentAuthority: 'guest'
            });
        } catch (error) {
            const defaultLoginFailureMessage = intl.formatMessage({
                id: "pages.login.failure",
                defaultMessage: "登录失败，请重试！"
            });
            console.log('登录异常:', error);
            message.error(defaultLoginFailureMessage);
        }
    };
    const { status, type: loginType } = userLoginState;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: styles.container,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Helmet, {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("title", {
                    children: "登录 - 数据分析系统"
                }, void 0, false, {
                    fileName: "src/pages/user/login/index.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("style", {
                children: `
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
        `
            }, void 0, false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                ref: (el)=>{
                    ballRefs.current[0] = el;
                },
                className: `${styles.floatingBall} ${styles.ball1}`
            }, void 0, false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                ref: (el)=>{
                    ballRefs.current[1] = el;
                },
                className: `${styles.floatingBall} ${styles.ball2}`
            }, void 0, false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                ref: (el)=>{
                    ballRefs.current[2] = el;
                },
                className: `${styles.floatingBall} ${styles.ball3}`
            }, void 0, false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                ref: (el)=>{
                    ballRefs.current[3] = el;
                },
                className: `${styles.floatingBall} ${styles.ball4}`
            }, void 0, false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                ref: (el)=>{
                    ballRefs.current[4] = el;
                },
                className: `${styles.floatingBall} ${styles.ball5}`
            }, void 0, false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 392,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: styles.content,
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: styles.loginBox,
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: styles.header,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: styles.logoWrapper,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.SlackOutlined, {
                                            style: {
                                                fontSize: "36px",
                                                color: "#1890ff"
                                            }
                                        }, void 0, false, {
                                            fileName: "src/pages/user/login/index.tsx",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h1", {
                                            className: styles.title,
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(AnimatedText, {
                                                text: "OutBook Analysis System",
                                                interval: 25
                                            }, void 0, false, {
                                                fileName: "src/pages/user/login/index.tsx",
                                                lineNumber: 403,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/pages/user/login/index.tsx",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/user/login/index.tsx",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: styles.subtitle,
                                    children: "OutBook - 让科技贴心校园，让工作更加高效！"
                                }, void 0, false, {
                                    fileName: "src/pages/user/login/index.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/user/login/index.tsx",
                            lineNumber: 399,
                            columnNumber: 11
                        }, this),
                        status === "error" && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(LoginMessage, {
                            content: "账户或密码错误"
                        }, void 0, false, {
                            fileName: "src/pages/user/login/index.tsx",
                            lineNumber: 411,
                            columnNumber: 34
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.LoginForm, {
                            logo: false,
                            title: false,
                            subTitle: false,
                            submitter: {
                                searchConfig: {
                                    submitText: "登录"
                                },
                                resetButtonProps: {
                                    style: {
                                        display: "none"
                                    }
                                },
                                submitButtonProps: {
                                    size: "large",
                                    style: {
                                        width: "100%",
                                        height: "40px",
                                        fontSize: "16px"
                                    }
                                }
                            },
                            onFinish: async (values)=>{
                                await handleSubmit(values);
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: styles.tabs,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        style: {
                                            marginBottom: "24px",
                                            textAlign: "center"
                                        },
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                            style: {
                                                color: "#1890ff",
                                                fontSize: "16px",
                                                fontWeight: 500,
                                                borderBottom: "2px solid #1890ff",
                                                paddingBottom: "8px",
                                                cursor: "pointer"
                                            },
                                            children: "账号密码登录"
                                        }, void 0, false, {
                                            fileName: "src/pages/user/login/index.tsx",
                                            lineNumber: 439,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/user/login/index.tsx",
                                        lineNumber: 438,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/user/login/index.tsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                                    name: "username",
                                    fieldProps: {
                                        size: "large",
                                        prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.UserOutlined, {
                                            style: {
                                                color: "#999"
                                            }
                                        }, void 0, false, {
                                            fileName: "src/pages/user/login/index.tsx",
                                            lineNumber: 458,
                                            columnNumber: 25
                                        }, void 0),
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    placeholder: "admin",
                                    rules: [
                                        {
                                            required: true,
                                            message: "请输入用户名！"
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "src/pages/user/login/index.tsx",
                                    lineNumber: 454,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText.Password, {
                                    name: "password",
                                    fieldProps: {
                                        size: "large",
                                        prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LockOutlined, {
                                            style: {
                                                color: "#999"
                                            }
                                        }, void 0, false, {
                                            fileName: "src/pages/user/login/index.tsx",
                                            lineNumber: 473,
                                            columnNumber: 25
                                        }, void 0),
                                        style: {
                                            width: "100%"
                                        }
                                    },
                                    placeholder: "••••••",
                                    rules: [
                                        {
                                            required: true,
                                            message: "请输入密码！"
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "src/pages/user/login/index.tsx",
                                    lineNumber: 469,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    style: {
                                        marginBottom: "24px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    },
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("label", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            cursor: "pointer"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("input", {
                                                type: "checkbox",
                                                defaultChecked: true,
                                                style: {
                                                    marginRight: "8px"
                                                }
                                            }, void 0, false, {
                                                fileName: "src/pages/user/login/index.tsx",
                                                lineNumber: 500,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                style: {
                                                    color: "#666"
                                                },
                                                children: "自动登录"
                                            }, void 0, false, {
                                                fileName: "src/pages/user/login/index.tsx",
                                                lineNumber: 505,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/user/login/index.tsx",
                                        lineNumber: 493,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/user/login/index.tsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/user/login/index.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/user/login/index.tsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/user/login/index.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/user/login/index.tsx",
        lineNumber: 352,
        columnNumber: 5
    }, this);
};
_s(Login, "aO0gv0tKtKOE7ficuAPthaukqYg=", false, function() {
    return [
        _max.useModel,
        useStyles,
        _antd.App.useApp,
        _max.useIntl
    ];
});
_c2 = Login;
var _default = Login;
var _c;
var _c1;
var _c2;
$RefreshReg$(_c, "LoginMessage");
$RefreshReg$(_c1, "AnimatedText");
$RefreshReg$(_c2, "Login");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
 }]);
//# sourceMappingURL=p__user__login__index-async.js.map