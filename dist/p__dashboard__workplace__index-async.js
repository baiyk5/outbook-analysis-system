((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__dashboard__workplace__index'],
{ "src/pages/dashboard/workplace/components/EditableLinkGroup/index.style.ts": function (module, exports, __mako_require__){
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
var _antdstyle = __mako_require__("node_modules/antd-style/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const useStyles = (0, _antdstyle.createStyles)(({ token })=>{
    return {
        linkGroup: {
            fontSize: '0',
            '& > a': {
                display: 'inline-block',
                width: '25%',
                // marginBottom: '13px',
                color: token.colorText,
                fontSize: token.fontSize,
                '&:hover': {
                    color: token.colorPrimary
                }
            }
        }
    };
});
var _default = useStyles;
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
"src/pages/dashboard/workplace/components/EditableLinkGroup/index.tsx": function (module, exports, __mako_require__){
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
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _indexstyle = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/dashboard/workplace/components/EditableLinkGroup/index.style.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const EditableLinkGroup = (props)=>{
    _s();
    const { styles } = (0, _indexstyle.default)();
    const { links = [], linkElement = 'a', onAdd = ()=>{} } = props;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: styles.linkGroup,
        children: links.map((link)=>/*#__PURE__*/ (0, _react.createElement)(linkElement, {
                key: `linkGroup-item-${link.id || link.title}`,
                to: link.href,
                href: link.href
            }, link.title))
    }, void 0, false, {
        fileName: "src/pages/dashboard/workplace/components/EditableLinkGroup/index.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
_s(EditableLinkGroup, "1BGFRu6BGAbhzJ8kKgs1GUjvI6w=", false, function() {
    return [
        _indexstyle.default
    ];
});
_c = EditableLinkGroup;
var _default = EditableLinkGroup;
var _c;
$RefreshReg$(_c, "EditableLinkGroup");
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
"src/pages/dashboard/workplace/index.tsx": function (module, exports, __mako_require__){
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
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _plots = __mako_require__("node_modules/@ant-design/plots/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _dayjs = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dayjs/dayjs.min.js"));
var _relativeTime = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/dayjs/plugin/relativeTime.js"));
var _EditableLinkGroup = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/dashboard/workplace/components/EditableLinkGroup/index.tsx"));
var _stylestyle = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/dashboard/workplace/style.style.ts"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
var _s1 = $RefreshSig$();
var _s2 = $RefreshSig$();
_dayjs.default.extend(_relativeTime.default);
const links = [
    {
        title: '项目管理',
        href: '/projects'
    },
    {
        title: '数据统计',
        href: '/statistics'
    },
    {
        title: '报告生成',
        href: '/reports'
    },
    {
        title: '知识文库',
        href: '/knowledge'
    },
    {
        title: '团队协作',
        href: ''
    },
    {
        title: '系统设置',
        href: ''
    }
];
const PageHeaderContent = ({ currentUser })=>{
    _s();
    const { styles } = (0, _stylestyle.default)();
    const loading = currentUser && Object.keys(currentUser).length;
    if (!loading) return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Skeleton, {
        avatar: true,
        paragraph: {
            rows: 1
        },
        active: true
    }, void 0, false, {
        fileName: "src/pages/dashboard/workplace/index.tsx",
        lineNumber: 48,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: styles.pageHeaderContent,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: styles.avatar,
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Avatar, {
                    size: "large",
                    src: currentUser.avatar
                }, void 0, false, {
                    fileName: "src/pages/dashboard/workplace/index.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/dashboard/workplace/index.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: styles.content,
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: styles.contentTitle,
                        children: [
                            "早安，",
                            currentUser.name,
                            "，祝你开心每一天！"
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/dashboard/workplace/index.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: [
                            currentUser.title,
                            " | ",
                            currentUser.group
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/dashboard/workplace/index.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/dashboard/workplace/index.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/dashboard/workplace/index.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
};
_s(PageHeaderContent, "1BGFRu6BGAbhzJ8kKgs1GUjvI6w=", false, function() {
    return [
        _stylestyle.default
    ];
});
_c = PageHeaderContent;
const ExtraContent = ()=>{
    _s1();
    const { styles } = (0, _stylestyle.default)();
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: styles.extraContent,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: styles.statItem,
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Statistic, {
                    title: "项目总数",
                    value: 56,
                    suffix: "个"
                }, void 0, false, {
                    fileName: "src/pages/dashboard/workplace/index.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/dashboard/workplace/index.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: styles.statItem,
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Statistic, {
                    title: "团队成员",
                    value: 7,
                    suffix: "人"
                }, void 0, false, {
                    fileName: "src/pages/dashboard/workplace/index.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/dashboard/workplace/index.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: styles.statItem,
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Statistic, {
                    title: "总成交额",
                    value: 2223,
                    suffix: "万"
                }, void 0, false, {
                    fileName: "src/pages/dashboard/workplace/index.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/dashboard/workplace/index.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/dashboard/workplace/index.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
};
_s1(ExtraContent, "1BGFRu6BGAbhzJ8kKgs1GUjvI6w=", false, function() {
    return [
        _stylestyle.default
    ];
});
_c1 = ExtraContent;
const Workplace = ()=>{
    var _data_radarData;
    _s2();
    const { styles } = (0, _stylestyle.default)();
    // 使用内联 Mock 数据，避免 API 请求慢的问题
    const projectLoading = false;
    const projectNotice = [
        {
            id: 'xxx1',
            title: '清华大学在线教育平台',
            logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
            description: '在线教育平台开发，包含直播、录播、作业系统等功能模块',
            updatedAt: new Date(),
            member: '定制项目组',
            href: '',
            memberLink: ''
        },
        {
            id: 'xxx2',
            title: '北京大学智慧校园系统',
            logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
            description: '智慧校园一体化解决方案，涵盖教务、学工、后勤等多个系统',
            updatedAt: new Date('2024-10-15'),
            member: '定制项目组',
            href: '',
            memberLink: ''
        },
        {
            id: 'xxx3',
            title: '复旦大学数字图书馆',
            logo: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
            description: '数字图书馆系统，支持在线阅读、借阅管理、资源检索',
            updatedAt: new Date(),
            member: '定制项目组',
            href: '',
            memberLink: ''
        },
        {
            id: 'xxx4',
            title: '上海交通大学选课系统',
            logo: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
            description: '新一代选课系统，支持智能推荐、冲突检测、容量管理',
            updatedAt: new Date('2024-10-20'),
            member: '定制项目组',
            href: '',
            memberLink: ''
        },
        {
            id: 'xxx5',
            title: '浙江大学实验室管理',
            logo: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
            description: '实验室综合管理平台，包含设备管理、预约系统、安全监控',
            updatedAt: new Date('2024-10-18'),
            member: '定制项目组',
            href: '',
            memberLink: ''
        },
        {
            id: 'xxx6',
            title: '南京大学学生管理系统',
            logo: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
            description: '学生信息管理系统，支持学籍管理、成绩管理、奖惩记录',
            updatedAt: new Date('2024-10-22'),
            member: '定制项目组',
            href: '',
            memberLink: ''
        }
    ];
    const activitiesLoading = false;
    const activities = [
        {
            id: 'trend-1',
            updatedAt: new Date(),
            user: {
                name: '曲丽丽',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
            },
            group: {
                name: '定制项目组',
                link: 'http://github.com/'
            },
            project: {
                name: '清华大学在线教育平台',
                link: 'http://github.com/'
            },
            template: '在 @{group} 新建项目 @{project}'
        },
        {
            id: 'trend-2',
            updatedAt: new Date(),
            user: {
                name: '付小小',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png'
            },
            group: {
                name: '定制项目组',
                link: 'http://github.com/'
            },
            project: {
                name: '北京大学智慧校园系统',
                link: 'http://github.com/'
            },
            template: '在 @{group} 新建项目 @{project}'
        },
        {
            id: 'trend-3',
            updatedAt: new Date(),
            user: {
                name: '林东东',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png'
            },
            group: {
                name: '定制项目组',
                link: 'http://github.com/'
            },
            project: {
                name: '复旦大学数字图书馆',
                link: 'http://github.com/'
            },
            template: '在 @{group} 新建项目 @{project}'
        },
        {
            id: 'trend-4',
            updatedAt: new Date(),
            user: {
                name: '周星星',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png'
            },
            project: {
                name: '上海交通大学选课系统',
                link: 'http://github.com/'
            },
            template: '将 @{project} 更新至已发布状态'
        },
        {
            id: 'trend-5',
            updatedAt: new Date(),
            user: {
                name: '朱偏右',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png'
            },
            project: {
                name: '浙江大学实验室管理',
                link: 'http://github.com/'
            },
            comment: {
                name: '验收报告',
                link: 'http://github.com/'
            },
            template: '在 @{project} 发布了 @{comment}'
        },
        {
            id: 'trend-6',
            updatedAt: new Date(),
            user: {
                name: '乐哥',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
            },
            group: {
                name: '定制项目组',
                link: 'http://github.com/'
            },
            project: {
                name: '南京大学学生管理系统',
                link: 'http://github.com/'
            },
            template: '在 @{group} 新建项目 @{project}'
        }
    ];
    // 雷达图数据
    const radarOriginData = [
        {
            name: '个人',
            ref: 10,
            koubei: 8,
            output: 4,
            contribute: 5,
            hot: 7
        },
        {
            name: '团队',
            ref: 3,
            koubei: 9,
            output: 6,
            contribute: 3,
            hot: 1
        },
        {
            name: '部门',
            ref: 4,
            koubei: 1,
            output: 6,
            contribute: 5,
            hot: 7
        }
    ];
    const radarTitleMap = {
        ref: '引用',
        koubei: '口碑',
        output: '产量',
        contribute: '贡献',
        hot: '热度'
    };
    const radarData = [];
    radarOriginData.forEach((item)=>{
        Object.keys(item).forEach((key)=>{
            if (key !== 'name') radarData.push({
                name: item.name,
                label: radarTitleMap[key],
                value: item[key]
            });
        });
    });
    const data = {
        radarData
    };
    const renderActivities = (item)=>{
        const events = item.template.split(/@\{([^{}]*)\}/gi).map((key)=>{
            if (item[key]) {
                const value = item[key];
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                    href: value === null || value === void 0 ? void 0 : value.link,
                    children: value.name
                }, value === null || value === void 0 ? void 0 : value.name, false, {
                    fileName: "src/pages/dashboard/workplace/index.tsx",
                    lineNumber: 316,
                    columnNumber: 11
                }, this);
            }
            return key;
        });
        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List.Item, {
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List.Item.Meta, {
                avatar: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Avatar, {
                    src: item.user.avatar
                }, void 0, false, {
                    fileName: "src/pages/dashboard/workplace/index.tsx",
                    lineNumber: 326,
                    columnNumber: 19
                }, void 0),
                title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            className: styles.username,
                            children: item.user.name
                        }, void 0, false, {
                            fileName: "src/pages/dashboard/workplace/index.tsx",
                            lineNumber: 329,
                            columnNumber: 15
                        }, void 0),
                        " ",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            className: styles.event,
                            children: events
                        }, void 0, false, {
                            fileName: "src/pages/dashboard/workplace/index.tsx",
                            lineNumber: 331,
                            columnNumber: 15
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/dashboard/workplace/index.tsx",
                    lineNumber: 328,
                    columnNumber: 13
                }, void 0),
                description: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                    className: styles.datetime,
                    title: item.updatedAt,
                    children: (0, _dayjs.default)(item.updatedAt).fromNow()
                }, void 0, false, {
                    fileName: "src/pages/dashboard/workplace/index.tsx",
                    lineNumber: 335,
                    columnNumber: 13
                }, void 0)
            }, void 0, false, {
                fileName: "src/pages/dashboard/workplace/index.tsx",
                lineNumber: 325,
                columnNumber: 9
            }, this)
        }, item.id, false, {
            fileName: "src/pages/dashboard/workplace/index.tsx",
            lineNumber: 324,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.PageContainer, {
        content: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(PageHeaderContent, {
            currentUser: {
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
                name: '白宇堃',
                userid: '00000001',
                email: 'antdesign@alipay.com',
                signature: '海纳百川，有容乃大',
                title: '前端开发工程师',
                group: '傲博教育-定制项目组-前端开发工程师'
            }
        }, void 0, false, {
            fileName: "src/pages/dashboard/workplace/index.tsx",
            lineNumber: 347,
            columnNumber: 9
        }, void 0),
        extraContent: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(ExtraContent, {}, void 0, false, {
            fileName: "src/pages/dashboard/workplace/index.tsx",
            lineNumber: 360,
            columnNumber: 21
        }, void 0),
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
            gutter: 24,
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                    xl: 16,
                    lg: 24,
                    md: 24,
                    sm: 24,
                    xs: 24,
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            className: styles.projectList,
                            style: {
                                marginBottom: 24
                            },
                            title: "进行中的项目",
                            variant: "borderless",
                            extra: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Link, {
                                to: "/projects",
                                children: "全部项目"
                            }, void 0, false, {
                                fileName: "src/pages/dashboard/workplace/index.tsx",
                                lineNumber: 371,
                                columnNumber: 20
                            }, void 0),
                            loading: projectLoading,
                            children: projectNotice.map((item)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card.Grid, {
                                    className: styles.projectGrid,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card.Meta, {
                                            title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                className: styles.cardTitle,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Avatar, {
                                                        size: "small",
                                                        src: item.logo
                                                    }, void 0, false, {
                                                        fileName: "src/pages/dashboard/workplace/index.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 23
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Link, {
                                                        to: item.href || '/',
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "src/pages/dashboard/workplace/index.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 23
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/dashboard/workplace/index.tsx",
                                                lineNumber: 378,
                                                columnNumber: 21
                                            }, void 0),
                                            description: item.description,
                                            style: {
                                                width: '100%'
                                            }
                                        }, void 0, false, {
                                            fileName: "src/pages/dashboard/workplace/index.tsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            className: styles.projectItemContent,
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.Link, {
                                                    to: item.memberLink || '/',
                                                    children: item.member || ''
                                                }, void 0, false, {
                                                    fileName: "src/pages/dashboard/workplace/index.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 19
                                                }, this),
                                                item.updatedAt && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    className: styles.datetime,
                                                    title: item.updatedAt,
                                                    children: (0, _dayjs.default)(item.updatedAt).fromNow()
                                                }, void 0, false, {
                                                    fileName: "src/pages/dashboard/workplace/index.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/dashboard/workplace/index.tsx",
                                            lineNumber: 388,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "src/pages/dashboard/workplace/index.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "src/pages/dashboard/workplace/index.tsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            styles: {
                                body: {
                                    padding: activitiesLoading ? 16 : 0
                                }
                            },
                            variant: "borderless",
                            className: styles.activeCard,
                            title: "动态",
                            loading: activitiesLoading,
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List, {
                                loading: activitiesLoading,
                                renderItem: (item)=>renderActivities(item),
                                dataSource: activities,
                                className: styles.activitiesList,
                                size: "large"
                            }, void 0, false, {
                                fileName: "src/pages/dashboard/workplace/index.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/dashboard/workplace/index.tsx",
                            lineNumber: 399,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/dashboard/workplace/index.tsx",
                    lineNumber: 363,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                    xl: 8,
                    lg: 24,
                    md: 24,
                    sm: 24,
                    xs: 24,
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            style: {
                                marginBottom: 24
                            },
                            title: "便捷导航",
                            variant: "borderless",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_EditableLinkGroup.default, {
                                onAdd: ()=>{},
                                links: links,
                                linkElement: _max.Link
                            }, void 0, false, {
                                fileName: "src/pages/dashboard/workplace/index.tsx",
                                lineNumber: 427,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/dashboard/workplace/index.tsx",
                            lineNumber: 420,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            style: {
                                marginBottom: 24
                            },
                            variant: "borderless",
                            title: "团队能力指数",
                            loading: (data === null || data === void 0 ? void 0 : (_data_radarData = data.radarData) === null || _data_radarData === void 0 ? void 0 : _data_radarData.length) === 0,
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_plots.Radar, {
                                height: 343,
                                data: (data === null || data === void 0 ? void 0 : data.radarData) || [],
                                xField: "label",
                                colorField: "name",
                                yField: "value",
                                shapeField: "smooth",
                                area: {
                                    style: {
                                        fillOpacity: 0.4
                                    }
                                },
                                axis: {
                                    y: {
                                        gridStrokeOpacity: 0.5
                                    }
                                },
                                legend: {
                                    color: {
                                        position: 'bottom',
                                        layout: {
                                            justifyContent: 'center'
                                        }
                                    }
                                }
                            }, void 0, false, {
                                fileName: "src/pages/dashboard/workplace/index.tsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/dashboard/workplace/index.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            styles: {
                                body: {
                                    paddingTop: 12,
                                    paddingBottom: 12
                                }
                            },
                            variant: "borderless",
                            title: "团队",
                            loading: projectLoading,
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                className: styles.members,
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                                    gutter: 48,
                                    children: projectNotice.map((item)=>{
                                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                            span: 12,
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Avatar, {
                                                        src: item.logo,
                                                        size: "small"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/dashboard/workplace/index.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                        className: styles.member,
                                                        children: item.member.substring(0, 3)
                                                    }, void 0, false, {
                                                        fileName: "src/pages/dashboard/workplace/index.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/dashboard/workplace/index.tsx",
                                                lineNumber: 482,
                                                columnNumber: 23
                                            }, this)
                                        }, `members-item-${item.id}`, false, {
                                            fileName: "src/pages/dashboard/workplace/index.tsx",
                                            lineNumber: 481,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "src/pages/dashboard/workplace/index.tsx",
                                    lineNumber: 478,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "src/pages/dashboard/workplace/index.tsx",
                                lineNumber: 477,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/dashboard/workplace/index.tsx",
                            lineNumber: 466,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/dashboard/workplace/index.tsx",
                    lineNumber: 419,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/dashboard/workplace/index.tsx",
            lineNumber: 362,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/dashboard/workplace/index.tsx",
        lineNumber: 345,
        columnNumber: 5
    }, this);
};
_s2(Workplace, "1BGFRu6BGAbhzJ8kKgs1GUjvI6w=", false, function() {
    return [
        _stylestyle.default
    ];
});
_c2 = Workplace;
var _default = Workplace;
var _c;
var _c1;
var _c2;
$RefreshReg$(_c, "PageHeaderContent");
$RefreshReg$(_c1, "ExtraContent");
$RefreshReg$(_c2, "Workplace");
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
"src/pages/dashboard/workplace/style.style.ts": function (module, exports, __mako_require__){
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
var _antdstyle = __mako_require__("node_modules/antd-style/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const useStyles = (0, _antdstyle.createStyles)(({ token })=>{
    return {
        activitiesList: {
            padding: 0
        },
        username: {
            color: token.colorText
        },
        event: {
            fontWeight: 'normal'
        },
        pageHeaderContent: {
            display: 'flex',
            [`@media screen and (max-width: ${token.screenSM}px)`]: {
                display: 'block'
            }
        },
        avatar: {
            flex: '0 1 72px',
            '& > span': {
                display: 'block',
                width: '72px',
                height: '72px',
                borderRadius: '72px'
            }
        },
        content: {
            position: 'relative',
            top: '4px',
            flex: '1 1 auto',
            marginLeft: '24px',
            color: token.colorTextSecondary,
            lineHeight: '22px',
            [`@media screen and (max-width: ${token.screenSM}px)`]: {
                marginLeft: '0'
            }
        },
        contentTitle: {
            marginBottom: '12px',
            color: token.colorTextHeading,
            fontWeight: '500',
            fontSize: '20px',
            lineHeight: '28px'
        },
        extraContent: {
            zoom: '1',
            '&::before, &::after': {
                display: 'table',
                content: "' '"
            },
            '&::after': {
                clear: 'both',
                height: '0',
                fontSize: '0',
                visibility: 'hidden'
            },
            float: 'right',
            whiteSpace: 'nowrap',
            [`@media screen and (max-width: ${token.screenXL}px) and (min-width: @screen-lg)`]: {
                marginLeft: '-44px'
            },
            [`@media screen and (max-width: ${token.screenLG}px)`]: {
                float: 'none',
                marginRight: '0'
            },
            [`@media screen and (max-width: ${token.screenMD}px)`]: {
                marginLeft: '-16px'
            }
        },
        statItem: {
            position: 'relative',
            display: 'inline-block',
            padding: '0 32px',
            '> p:first-child': {
                marginBottom: '4px',
                color: token.colorTextSecondary,
                fontSize: token.fontSize,
                lineHeight: '22px'
            },
            '> p': {
                margin: '0',
                color: token.colorTextHeading,
                fontSize: '30px',
                lineHeight: '38px',
                '> span': {
                    color: token.colorTextSecondary,
                    fontSize: '20px'
                }
            },
            '&::after': {
                position: 'absolute',
                top: '8px',
                right: '0',
                width: '1px',
                height: '40px',
                backgroundColor: token.colorSplit,
                content: "''"
            },
            '&:last-child': {
                paddingRight: '0',
                '&::after': {
                    display: 'none'
                }
            },
            [`@media screen and (max-width: ${token.screenXL}px) and (min-width: @screen-lg)`]: {
                padding: '0 16px'
            },
            [`@media screen and (max-width: ${token.screenLG}px)`]: {
                padding: '0 16px',
                textAlign: 'left',
                '&::after': {
                    display: 'none'
                }
            },
            [`@media screen and (max-width: ${token.screenSM}px)`]: {
                float: 'none'
            }
        },
        members: {
            a: {
                display: 'block',
                height: '24px',
                margin: '12px 0',
                color: token.colorText,
                transition: 'all 0.3s',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                wordBreak: 'break-all',
                '&:hover': {
                    color: token.colorPrimary
                }
            },
            [`@media screen and (max-width: ${token.screenXL}px) and (min-width: @screen-lg)`]: {
                marginBottom: '0'
            },
            [`@media screen and (max-width: ${token.screenLG}px)`]: {
                marginBottom: '0'
            }
        },
        member: {
            marginLeft: '12px',
            fontSize: token.fontSize,
            lineHeight: '24px',
            verticalAlign: 'top'
        },
        projectList: {
            '.ant-card-meta-description': {
                height: '44px',
                overflow: 'hidden',
                color: token.colorTextSecondary,
                lineHeight: '22px'
            }
        },
        cardTitle: {
            fontSize: '0',
            a: {
                display: 'inline-block',
                height: '24px',
                marginLeft: '12px',
                color: token.colorTextHeading,
                fontSize: token.fontSize,
                lineHeight: '24px',
                verticalAlign: 'top',
                '&:hover': {
                    color: token.colorPrimary
                }
            }
        },
        projectGrid: {
            width: '33.33%',
            [`@media screen and (max-width: ${token.screenMD}px)`]: {
                width: '50%'
            },
            [`@media screen and (max-width: ${token.screenXS}px)`]: {
                width: '100%'
            }
        },
        projectItemContent: {
            display: 'flex',
            height: '20px',
            marginTop: '8px',
            overflow: 'hidden',
            fontSize: '12px',
            gap: 'epx',
            lineHeight: '20px',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            wordBreak: 'break-all',
            a: {
                display: 'inline-block',
                flex: '1 1 0',
                color: token.colorTextSecondary,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                wordBreak: 'break-all',
                '&:hover': {
                    color: token.colorPrimary
                }
            }
        },
        datetime: {
            flex: '0 0 auto',
            color: token.colorTextDisabled
        },
        activeCard: {
            [`@media screen and (max-width: ${token.screenXL}px) and (min-width: @screen-lg)`]: {
                marginBottom: '24px'
            },
            [`@media screen and (max-width: ${token.screenLG}px)`]: {
                marginBottom: '24px'
            }
        }
    };
});
var _default = useStyles;
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
//# sourceMappingURL=p__dashboard__workplace__index-async.js.map