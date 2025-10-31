((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__projects__index'],
{ "src/pages/projects/index.tsx": function (module, exports, __mako_require__){
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
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = __mako_require__("node_modules/react/index.js");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const Projects = ()=>{
    var _currentProject_members;
    _s();
    const [drawerVisible, setDrawerVisible] = (0, _react.useState)(false);
    const [currentProject, setCurrentProject] = (0, _react.useState)(null);
    const actionRef = (0, _react.useRef)();
    // 内联 Mock 数据
    const mockProjects = [
        {
            id: '1',
            name: '清华大学在线教育平台',
            school: '清华大学',
            startDate: '2024-01-15',
            endDate: '2024-06-30',
            estimatedDays: 150,
            actualDays: 145,
            status: 'completed',
            amount: 1500000,
            profit: 600000,
            members: [
                {
                    id: 1,
                    name: '张三',
                    role: '项目经理',
                    startDate: '2024-01-15',
                    endDate: '2024-06-30',
                    bugCount: 5,
                    workDays: 167
                },
                {
                    id: 2,
                    name: '李四',
                    role: '前端开发',
                    startDate: '2024-01-20',
                    endDate: '2024-06-25',
                    bugCount: 12,
                    workDays: 157,
                    riskNote: '需求变更频繁'
                },
                {
                    id: 3,
                    name: '王五',
                    role: '后端开发',
                    startDate: '2024-01-20',
                    endDate: '2024-06-25',
                    bugCount: 6,
                    workDays: 157
                }
            ],
            bugs: {
                total: 23,
                byMember: []
            },
            tickets: {
                maintenance: 5,
                repair: 3
            }
        },
        {
            id: '2',
            name: '北京大学智慧校园系统',
            school: '北京大学',
            startDate: '2024-03-01',
            endDate: '2024-08-31',
            estimatedDays: 180,
            actualDays: 120,
            status: 'ongoing',
            amount: 3600000,
            profit: 1440000,
            members: [
                {
                    id: 4,
                    name: '赵六',
                    role: '项目经理',
                    startDate: '2024-03-01',
                    endDate: '2024-08-31',
                    bugCount: 3,
                    workDays: 120
                },
                {
                    id: 5,
                    name: '孙七',
                    role: '架构师',
                    startDate: '2024-03-05',
                    endDate: '2024-08-31',
                    bugCount: 12,
                    workDays: 116,
                    riskNote: '技术难度较高'
                }
            ],
            bugs: {
                total: 15,
                byMember: []
            },
            tickets: {
                maintenance: 3,
                repair: 2
            }
        },
        {
            id: '3',
            name: '复旦大学数字图书馆',
            school: '复旦大学',
            startDate: '2024-02-10',
            endDate: '2024-07-20',
            estimatedDays: 160,
            actualDays: 165,
            status: 'completed',
            amount: 4580000,
            profit: 1832000,
            members: [
                {
                    id: 6,
                    name: '周八',
                    role: '项目经理',
                    startDate: '2024-02-10',
                    endDate: '2024-07-20',
                    bugCount: 8,
                    workDays: 161
                },
                {
                    id: 7,
                    name: '吴九',
                    role: '全栈开发',
                    startDate: '2024-02-15',
                    endDate: '2024-07-18',
                    bugCount: 23,
                    workDays: 154
                }
            ],
            bugs: {
                total: 31,
                byMember: []
            },
            tickets: {
                maintenance: 8,
                repair: 4
            }
        },
        {
            id: '4',
            name: '上海交通大学选课系统',
            school: '上海交通大学',
            startDate: '2024-04-01',
            endDate: '2024-09-30',
            estimatedDays: 180,
            actualDays: 195,
            status: 'delayed',
            amount: 5930000,
            profit: 2372000,
            members: [
                {
                    id: 8,
                    name: '郑十',
                    role: '项目经理',
                    startDate: '2024-04-01',
                    endDate: '2024-09-30',
                    bugCount: 10,
                    workDays: 183,
                    riskNote: '进度延期，需加快开发'
                },
                {
                    id: 9,
                    name: '王十一',
                    role: '前端开发',
                    startDate: '2024-04-05',
                    endDate: '2024-09-28',
                    bugCount: 18,
                    workDays: 176
                },
                {
                    id: 10,
                    name: '李十二',
                    role: '后端开发',
                    startDate: '2024-04-05',
                    endDate: '2024-09-28',
                    bugCount: 14,
                    workDays: 176
                }
            ],
            bugs: {
                total: 42,
                byMember: []
            },
            tickets: {
                maintenance: 10,
                repair: 5
            }
        },
        {
            id: '5',
            name: '浙江大学实验室管理',
            school: '浙江大学',
            startDate: '2024-05-01',
            endDate: '2024-10-31',
            estimatedDays: 180,
            actualDays: 90,
            status: 'ongoing',
            amount: 6780000,
            profit: 2712000,
            members: [
                {
                    id: 11,
                    name: '赵十三',
                    role: '项目经理',
                    startDate: '2024-05-01',
                    endDate: '2024-10-31',
                    bugCount: 6,
                    workDays: 90
                },
                {
                    id: 12,
                    name: '孙十四',
                    role: '全栈开发',
                    startDate: '2024-05-10',
                    endDate: '2024-10-28',
                    bugCount: 12,
                    workDays: 81
                }
            ],
            bugs: {
                total: 18,
                byMember: []
            },
            tickets: {
                maintenance: 4,
                repair: 2
            }
        },
        {
            id: '6',
            name: '南京大学学生管理系统',
            school: '南京大学',
            startDate: '2024-06-01',
            endDate: '2024-11-30',
            estimatedDays: 180,
            actualDays: 60,
            status: 'ongoing',
            amount: 7460000,
            profit: 2984000,
            members: [
                {
                    id: 13,
                    name: '钱十五',
                    role: '项目经理',
                    startDate: '2024-06-01',
                    endDate: '2024-11-30',
                    bugCount: 4,
                    workDays: 60
                },
                {
                    id: 14,
                    name: '周十六',
                    role: '开发工程师',
                    startDate: '2024-06-05',
                    endDate: '2024-11-28',
                    bugCount: 8,
                    workDays: 56
                }
            ],
            bugs: {
                total: 12,
                byMember: []
            },
            tickets: {
                maintenance: 3,
                repair: 1
            }
        },
        {
            id: '7',
            name: '中国科技大学科研平台',
            school: '中国科技大学',
            startDate: '2024-07-01',
            endDate: '2024-12-31',
            estimatedDays: 180,
            actualDays: 30,
            status: 'planning',
            amount: 8200000,
            profit: 3280000,
            members: [],
            bugs: {
                total: 0,
                byMember: []
            },
            tickets: {
                maintenance: 0,
                repair: 0
            }
        }
    ];
    // 成员子表格列配置
    const memberColumns = [
        {
            title: '成员姓名',
            dataIndex: 'name',
            key: 'name',
            width: 120
        },
        {
            title: '角色',
            dataIndex: 'role',
            key: 'role',
            width: 120
        },
        {
            title: '开始时间',
            dataIndex: 'startDate',
            key: 'startDate',
            valueType: 'date',
            width: 120
        },
        {
            title: '结束时间',
            dataIndex: 'endDate',
            key: 'endDate',
            valueType: 'date',
            width: 120
        },
        {
            title: '工作天数',
            dataIndex: 'workDays',
            key: 'workDays',
            width: 100,
            render: (text)=>`${text || 0} 天`
        },
        {
            title: 'BUG数',
            dataIndex: 'bugCount',
            key: 'bugCount',
            width: 80,
            render: (text)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                    color: "red",
                    children: text || 0
                }, void 0, false, {
                    fileName: "src/pages/projects/index.tsx",
                    lineNumber: 338,
                    columnNumber: 25
                }, this)
        },
        {
            title: '风险备注',
            dataIndex: 'riskNote',
            key: 'riskNote',
            width: 200,
            render: (text)=>text ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                    style: {
                        color: '#ff4d4f'
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.WarningOutlined, {}, void 0, false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this),
                        " ",
                        text
                    ]
                }, void 0, true, {
                    fileName: "src/pages/projects/index.tsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, this) : '-'
        }
    ];
    const columns = [
        {
            title: '项目名称',
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
            width: 200
        },
        {
            title: '学校',
            dataIndex: 'school',
            key: 'school',
            width: 150
        },
        {
            title: '开始时间',
            dataIndex: 'startDate',
            key: 'startDate',
            valueType: 'date',
            width: 120
        },
        {
            title: '结束时间',
            dataIndex: 'endDate',
            key: 'endDate',
            valueType: 'date',
            width: 120
        },
        {
            title: '预计天数',
            dataIndex: 'estimatedDays',
            key: 'estimatedDays',
            width: 100,
            render: (text)=>`${text} 天`
        },
        {
            title: '实际天数',
            dataIndex: 'actualDays',
            key: 'actualDays',
            width: 100,
            render: (text, record)=>{
                const isOvertime = record.actualDays > record.estimatedDays;
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                    style: {
                        color: isOvertime ? '#ff4d4f' : '#52c41a'
                    },
                    children: [
                        text,
                        " 天",
                        isOvertime && ` (+${record.actualDays - record.estimatedDays})`
                    ]
                }, void 0, true, {
                    fileName: "src/pages/projects/index.tsx",
                    lineNumber: 396,
                    columnNumber: 11
                }, this);
            }
        },
        {
            title: '完成进度',
            key: 'progress',
            width: 180,
            render: (_, record)=>{
                const percent = record.status === 'completed' ? 100 : Math.min(Math.round(record.actualDays / record.estimatedDays * 100), 99);
                const isOvertime = record.actualDays > record.estimatedDays;
                const status = record.status === 'completed' ? 'success' : isOvertime ? 'exception' : 'active';
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Progress, {
                            percent: percent,
                            size: "small",
                            status: status,
                            strokeColor: record.status === 'completed' ? '#52c41a' : isOvertime ? '#ff4d4f' : '#1890ff',
                            style: {
                                flex: 1,
                                margin: 0
                            }
                        }, void 0, false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 421,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            style: {
                                fontSize: '13px',
                                fontWeight: 600,
                                color: record.status === 'completed' ? '#52c41a' : isOvertime ? '#ff4d4f' : '#1890ff',
                                minWidth: '38px',
                                textAlign: 'right'
                            },
                            children: [
                                percent,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 434,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/projects/index.tsx",
                    lineNumber: 420,
                    columnNumber: 11
                }, this);
            }
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            width: 100,
            render: (status)=>{
                const statusMap = {
                    planning: {
                        color: 'blue',
                        text: '规划中',
                        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ClockCircleOutlined, {}, void 0, false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 458,
                            columnNumber: 57
                        }, this)
                    },
                    ongoing: {
                        color: 'processing',
                        text: '进行中',
                        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ClockCircleOutlined, {}, void 0, false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 459,
                            columnNumber: 62
                        }, this)
                    },
                    completed: {
                        color: 'success',
                        text: '已完成',
                        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CheckCircleOutlined, {}, void 0, false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 460,
                            columnNumber: 61
                        }, this)
                    },
                    delayed: {
                        color: 'error',
                        text: '已延期',
                        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.WarningOutlined, {}, void 0, false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 461,
                            columnNumber: 57
                        }, this)
                    }
                };
                const config = statusMap[status] || statusMap.ongoing;
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                    color: config.color,
                    icon: config.icon,
                    children: config.text
                }, void 0, false, {
                    fileName: "src/pages/projects/index.tsx",
                    lineNumber: 464,
                    columnNumber: 16
                }, this);
            }
        },
        {
            title: '成交金额',
            dataIndex: 'amount',
            key: 'amount',
            width: 120,
            render: (text)=>`¥${text.toLocaleString()}`
        },
        {
            title: '预估利润',
            dataIndex: 'profit',
            key: 'profit',
            width: 120,
            render: (text)=>`¥${text.toLocaleString()}`
        },
        {
            title: 'BUG总数',
            dataIndex: 'bugs',
            key: 'bugs',
            width: 90,
            render: (bugs)=>{
                const total = typeof bugs === 'number' ? bugs : bugs.total;
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                    color: "red",
                    children: total
                }, void 0, false, {
                    fileName: "src/pages/projects/index.tsx",
                    lineNumber: 488,
                    columnNumber: 16
                }, this);
            }
        },
        {
            title: '工单数',
            dataIndex: 'tickets',
            key: 'tickets',
            width: 90,
            render: (tickets)=>{
                const total = typeof tickets === 'number' ? tickets : tickets.maintenance + tickets.repair;
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                    color: "orange",
                    children: total
                }, void 0, false, {
                    fileName: "src/pages/projects/index.tsx",
                    lineNumber: 500,
                    columnNumber: 16
                }, this);
            }
        },
        {
            title: '成员数',
            dataIndex: 'members',
            key: 'memberCount',
            width: 80,
            render: (members)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                    color: "blue",
                    children: (members === null || members === void 0 ? void 0 : members.length) || 0
                }, void 0, false, {
                    fileName: "src/pages/projects/index.tsx",
                    lineNumber: 508,
                    columnNumber: 28
                }, this)
        },
        {
            title: '操作',
            key: 'action',
            fixed: 'right',
            width: 100,
            render: (_, record)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Space, {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                        type: "link",
                        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.EyeOutlined, {}, void 0, false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 519,
                            columnNumber: 19
                        }, void 0),
                        onClick: ()=>{
                            setCurrentProject(record);
                            setDrawerVisible(true);
                        },
                        children: "详情"
                    }, void 0, false, {
                        fileName: "src/pages/projects/index.tsx",
                        lineNumber: 517,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/projects/index.tsx",
                    lineNumber: 516,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.PageContainer, {
        title: "项目管理",
        subTitle: "查看和管理所有定制项目",
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProTable, {
                columns: columns,
                actionRef: actionRef,
                dataSource: mockProjects,
                rowKey: "id",
                search: {
                    labelWidth: 'auto'
                },
                pagination: {
                    pageSize: 10
                },
                scroll: {
                    x: 1800
                },
                dateFormatter: "string",
                toolBarRender: ()=>[
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                            type: "primary",
                            children: "导出数据"
                        }, "export", false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 548,
                            columnNumber: 11
                        }, void 0)
                    ],
                expandable: {
                    expandedRowRender: (record)=>{
                        if (!record.members || record.members.length === 0) return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                padding: '16px',
                                color: '#999'
                            },
                            children: "暂无成员信息"
                        }, void 0, false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 555,
                            columnNumber: 22
                        }, void 0);
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProTable, {
                            columns: memberColumns,
                            dataSource: record.members,
                            rowKey: "id",
                            search: false,
                            pagination: false,
                            options: false,
                            showHeader: true,
                            style: {
                                marginBottom: 0
                            }
                        }, void 0, false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 558,
                            columnNumber: 15
                        }, void 0);
                    },
                    rowExpandable: (record)=>record.members && record.members.length > 0
                }
            }, void 0, false, {
                fileName: "src/pages/projects/index.tsx",
                lineNumber: 534,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Drawer, {
                title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.FileTextOutlined, {
                            style: {
                                fontSize: '20px',
                                color: '#1890ff'
                            }
                        }, void 0, false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 578,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            style: {
                                fontSize: '18px',
                                fontWeight: 600
                            },
                            children: "项目详情"
                        }, void 0, false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 579,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/projects/index.tsx",
                    lineNumber: 577,
                    columnNumber: 11
                }, void 0),
                width: 1000,
                open: drawerVisible,
                onClose: ()=>setDrawerVisible(false),
                children: currentProject && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                            gutter: 16,
                            style: {
                                marginBottom: 24
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 6,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Statistic, {
                                            title: "成交金额",
                                            value: currentProject.amount,
                                            precision: 0,
                                            prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.DollarOutlined, {}, void 0, false, {
                                                fileName: "src/pages/projects/index.tsx",
                                                lineNumber: 596,
                                                columnNumber: 29
                                            }, void 0),
                                            suffix: "元",
                                            valueStyle: {
                                                color: '#3f8600',
                                                fontSize: '20px'
                                            }
                                        }, void 0, false, {
                                            fileName: "src/pages/projects/index.tsx",
                                            lineNumber: 592,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/projects/index.tsx",
                                        lineNumber: 591,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/projects/index.tsx",
                                    lineNumber: 590,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 6,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Statistic, {
                                            title: "预估利润",
                                            value: currentProject.profit,
                                            precision: 0,
                                            prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.RiseOutlined, {}, void 0, false, {
                                                fileName: "src/pages/projects/index.tsx",
                                                lineNumber: 608,
                                                columnNumber: 29
                                            }, void 0),
                                            suffix: "元",
                                            valueStyle: {
                                                color: '#cf1322',
                                                fontSize: '20px'
                                            }
                                        }, void 0, false, {
                                            fileName: "src/pages/projects/index.tsx",
                                            lineNumber: 604,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/projects/index.tsx",
                                        lineNumber: 603,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/projects/index.tsx",
                                    lineNumber: 602,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 6,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Statistic, {
                                            title: "团队成员",
                                            value: ((_currentProject_members = currentProject.members) === null || _currentProject_members === void 0 ? void 0 : _currentProject_members.length) || 0,
                                            prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.TeamOutlined, {}, void 0, false, {
                                                fileName: "src/pages/projects/index.tsx",
                                                lineNumber: 619,
                                                columnNumber: 29
                                            }, void 0),
                                            suffix: "人",
                                            valueStyle: {
                                                color: '#1890ff',
                                                fontSize: '20px'
                                            }
                                        }, void 0, false, {
                                            fileName: "src/pages/projects/index.tsx",
                                            lineNumber: 616,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/projects/index.tsx",
                                        lineNumber: 615,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/projects/index.tsx",
                                    lineNumber: 614,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 6,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Statistic, {
                                            title: "BUG总数",
                                            value: typeof currentProject.bugs === 'number' ? currentProject.bugs : currentProject.bugs.total,
                                            prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.BugOutlined, {}, void 0, false, {
                                                fileName: "src/pages/projects/index.tsx",
                                                lineNumber: 630,
                                                columnNumber: 29
                                            }, void 0),
                                            suffix: "个",
                                            valueStyle: {
                                                color: '#ff4d4f',
                                                fontSize: '20px'
                                            }
                                        }, void 0, false, {
                                            fileName: "src/pages/projects/index.tsx",
                                            lineNumber: 627,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/projects/index.tsx",
                                        lineNumber: 626,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/projects/index.tsx",
                                    lineNumber: 625,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 589,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            title: "基本信息",
                            style: {
                                marginBottom: 16
                            },
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Descriptions, {
                                column: 2,
                                bordered: true,
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Descriptions.Item, {
                                        label: "项目名称",
                                        span: 2,
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            style: {
                                                fontSize: '15px'
                                            },
                                            children: currentProject.name
                                        }, void 0, false, {
                                            fileName: "src/pages/projects/index.tsx",
                                            lineNumber: 642,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/projects/index.tsx",
                                        lineNumber: 641,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Descriptions.Item, {
                                        label: "学校",
                                        children: currentProject.school
                                    }, void 0, false, {
                                        fileName: "src/pages/projects/index.tsx",
                                        lineNumber: 644,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Descriptions.Item, {
                                        label: "项目状态",
                                        children: currentProject.status === 'completed' ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Badge, {
                                            status: "success",
                                            text: "已完成"
                                        }, void 0, false, {
                                            fileName: "src/pages/projects/index.tsx",
                                            lineNumber: 649,
                                            columnNumber: 21
                                        }, this) : currentProject.status === 'ongoing' ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Badge, {
                                            status: "processing",
                                            text: "进行中"
                                        }, void 0, false, {
                                            fileName: "src/pages/projects/index.tsx",
                                            lineNumber: 651,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Badge, {
                                            status: "default",
                                            text: "规划中"
                                        }, void 0, false, {
                                            fileName: "src/pages/projects/index.tsx",
                                            lineNumber: 653,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/projects/index.tsx",
                                        lineNumber: 647,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Descriptions.Item, {
                                        label: "开始时间",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CalendarOutlined, {}, void 0, false, {
                                                fileName: "src/pages/projects/index.tsx",
                                                lineNumber: 657,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            currentProject.startDate
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/projects/index.tsx",
                                        lineNumber: 656,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Descriptions.Item, {
                                        label: "结束时间",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CalendarOutlined, {}, void 0, false, {
                                                fileName: "src/pages/projects/index.tsx",
                                                lineNumber: 660,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            currentProject.endDate
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/projects/index.tsx",
                                        lineNumber: 659,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Descriptions.Item, {
                                        label: "预计天数",
                                        children: [
                                            currentProject.estimatedDays,
                                            " 天"
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/projects/index.tsx",
                                        lineNumber: 662,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Descriptions.Item, {
                                        label: "实际天数",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                                            color: currentProject.actualDays > currentProject.estimatedDays ? 'red' : 'green',
                                            children: [
                                                currentProject.actualDays,
                                                " 天"
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/projects/index.tsx",
                                            lineNumber: 666,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/projects/index.tsx",
                                        lineNumber: 665,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/projects/index.tsx",
                                lineNumber: 640,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 639,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            title: "项目进度",
                            style: {
                                marginBottom: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    style: {
                                        marginBottom: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            style: {
                                                marginBottom: 8,
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "整体完成度"
                                                }, void 0, false, {
                                                    fileName: "src/pages/projects/index.tsx",
                                                    lineNumber: 677,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    style: {
                                                        fontWeight: 600
                                                    },
                                                    children: currentProject.status === 'completed' ? '100%' : `${Math.min(Math.round(currentProject.actualDays / currentProject.estimatedDays * 100), 95)}%`
                                                }, void 0, false, {
                                                    fileName: "src/pages/projects/index.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/projects/index.tsx",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Progress, {
                                            percent: currentProject.status === 'completed' ? 100 : Math.min(Math.round(currentProject.actualDays / currentProject.estimatedDays * 100), 95),
                                            status: currentProject.status === 'completed' ? 'success' : currentProject.actualDays > currentProject.estimatedDays ? 'exception' : 'active',
                                            strokeWidth: 12
                                        }, void 0, false, {
                                            fileName: "src/pages/projects/index.tsx",
                                            lineNumber: 684,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/projects/index.tsx",
                                    lineNumber: 675,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                                    gutter: 16,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                            span: 12,
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                style: {
                                                    padding: '12px',
                                                    background: '#f0f2f5',
                                                    borderRadius: '4px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        style: {
                                                            color: '#666',
                                                            marginBottom: 4
                                                        },
                                                        children: "时间进度"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/projects/index.tsx",
                                                        lineNumber: 706,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        style: {
                                                            fontSize: '18px',
                                                            fontWeight: 600
                                                        },
                                                        children: [
                                                            currentProject.actualDays,
                                                            " / ",
                                                            currentProject.estimatedDays,
                                                            " 天"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/projects/index.tsx",
                                                        lineNumber: 707,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/projects/index.tsx",
                                                lineNumber: 705,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/pages/projects/index.tsx",
                                            lineNumber: 704,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                            span: 12,
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                style: {
                                                    padding: '12px',
                                                    background: '#f0f2f5',
                                                    borderRadius: '4px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        style: {
                                                            color: '#666',
                                                            marginBottom: 4
                                                        },
                                                        children: "利润率"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/projects/index.tsx",
                                                        lineNumber: 714,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        style: {
                                                            fontSize: '18px',
                                                            fontWeight: 600,
                                                            color: '#3f8600'
                                                        },
                                                        children: [
                                                            (currentProject.profit / currentProject.amount * 100).toFixed(1),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/projects/index.tsx",
                                                        lineNumber: 715,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/projects/index.tsx",
                                                lineNumber: 713,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/pages/projects/index.tsx",
                                            lineNumber: 712,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/projects/index.tsx",
                                    lineNumber: 703,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 674,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            title: "质量统计",
                            style: {
                                marginBottom: 16
                            },
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                                gutter: 16,
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                        span: 12,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                style: {
                                                    marginBottom: 16
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        style: {
                                                            marginBottom: 8,
                                                            display: 'flex',
                                                            justifyContent: 'space-between'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.BugOutlined, {}, void 0, false, {
                                                                        fileName: "src/pages/projects/index.tsx",
                                                                        lineNumber: 729,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    " BUG总数"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/pages/projects/index.tsx",
                                                                lineNumber: 729,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                style: {
                                                                    fontWeight: 600,
                                                                    color: '#ff4d4f'
                                                                },
                                                                children: typeof currentProject.bugs === 'number' ? currentProject.bugs : currentProject.bugs.total
                                                            }, void 0, false, {
                                                                fileName: "src/pages/projects/index.tsx",
                                                                lineNumber: 730,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/projects/index.tsx",
                                                        lineNumber: 728,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Progress, {
                                                        percent: 100,
                                                        strokeColor: "#ff4d4f",
                                                        showInfo: false,
                                                        strokeWidth: 8
                                                    }, void 0, false, {
                                                        fileName: "src/pages/projects/index.tsx",
                                                        lineNumber: 734,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/projects/index.tsx",
                                                lineNumber: 727,
                                                columnNumber: 19
                                            }, this),
                                            typeof currentProject.bugs !== 'number' && currentProject.bugs.byMember && currentProject.bugs.byMember.length > 0 && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                style: {
                                                    marginTop: 16
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                                                        orientation: "left",
                                                        plain: true,
                                                        style: {
                                                            margin: '12px 0'
                                                        },
                                                        children: "成员BUG分布"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/projects/index.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List, {
                                                        size: "small",
                                                        dataSource: currentProject.bugs.byMember,
                                                        renderItem: (item)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List.Item, {
                                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                    style: {
                                                                        width: '100%'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                            style: {
                                                                                display: 'flex',
                                                                                justifyContent: 'space-between',
                                                                                marginBottom: 4
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                                    children: item.memberName
                                                                                }, void 0, false, {
                                                                                    fileName: "src/pages/projects/index.tsx",
                                                                                    lineNumber: 751,
                                                                                    columnNumber: 33
                                                                                }, void 0),
                                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                                    style: {
                                                                                        fontWeight: 600
                                                                                    },
                                                                                    children: item.count
                                                                                }, void 0, false, {
                                                                                    fileName: "src/pages/projects/index.tsx",
                                                                                    lineNumber: 752,
                                                                                    columnNumber: 33
                                                                                }, void 0)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "src/pages/projects/index.tsx",
                                                                            lineNumber: 750,
                                                                            columnNumber: 31
                                                                        }, void 0),
                                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Progress, {
                                                                            percent: item.count / (typeof currentProject.bugs === 'number' ? currentProject.bugs : currentProject.bugs.total) * 100,
                                                                            strokeColor: "#ff4d4f",
                                                                            size: "small"
                                                                        }, void 0, false, {
                                                                            fileName: "src/pages/projects/index.tsx",
                                                                            lineNumber: 754,
                                                                            columnNumber: 31
                                                                        }, void 0)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "src/pages/projects/index.tsx",
                                                                    lineNumber: 749,
                                                                    columnNumber: 29
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "src/pages/projects/index.tsx",
                                                                lineNumber: 748,
                                                                columnNumber: 27
                                                            }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "src/pages/projects/index.tsx",
                                                        lineNumber: 744,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/projects/index.tsx",
                                                lineNumber: 742,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/projects/index.tsx",
                                        lineNumber: 726,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                        span: 12,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                style: {
                                                    marginBottom: 16
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        style: {
                                                            marginBottom: 8,
                                                            display: 'flex',
                                                            justifyContent: 'space-between'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.FileTextOutlined, {}, void 0, false, {
                                                                        fileName: "src/pages/projects/index.tsx",
                                                                        lineNumber: 769,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    " 工单总数"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/pages/projects/index.tsx",
                                                                lineNumber: 769,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                style: {
                                                                    fontWeight: 600,
                                                                    color: '#fa8c16'
                                                                },
                                                                children: typeof currentProject.tickets === 'number' ? currentProject.tickets : currentProject.tickets.maintenance + currentProject.tickets.repair
                                                            }, void 0, false, {
                                                                fileName: "src/pages/projects/index.tsx",
                                                                lineNumber: 770,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/projects/index.tsx",
                                                        lineNumber: 768,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Progress, {
                                                        percent: 100,
                                                        strokeColor: "#fa8c16",
                                                        showInfo: false,
                                                        strokeWidth: 8
                                                    }, void 0, false, {
                                                        fileName: "src/pages/projects/index.tsx",
                                                        lineNumber: 776,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/projects/index.tsx",
                                                lineNumber: 767,
                                                columnNumber: 19
                                            }, this),
                                            typeof currentProject.tickets !== 'number' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                style: {
                                                    marginTop: 16
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                                                        orientation: "left",
                                                        plain: true,
                                                        style: {
                                                            margin: '12px 0'
                                                        },
                                                        children: "工单类型分布"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/projects/index.tsx",
                                                        lineNumber: 785,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        style: {
                                                            marginBottom: 12
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    marginBottom: 4
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                        children: "维护工单"
                                                                    }, void 0, false, {
                                                                        fileName: "src/pages/projects/index.tsx",
                                                                        lineNumber: 788,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                        style: {
                                                                            fontWeight: 600
                                                                        },
                                                                        children: currentProject.tickets.maintenance
                                                                    }, void 0, false, {
                                                                        fileName: "src/pages/projects/index.tsx",
                                                                        lineNumber: 789,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/pages/projects/index.tsx",
                                                                lineNumber: 787,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Progress, {
                                                                percent: currentProject.tickets.maintenance / (currentProject.tickets.maintenance + currentProject.tickets.repair) * 100,
                                                                strokeColor: "#52c41a",
                                                                size: "small"
                                                            }, void 0, false, {
                                                                fileName: "src/pages/projects/index.tsx",
                                                                lineNumber: 791,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/projects/index.tsx",
                                                        lineNumber: 786,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    marginBottom: 4
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                        children: "修复工单"
                                                                    }, void 0, false, {
                                                                        fileName: "src/pages/projects/index.tsx",
                                                                        lineNumber: 799,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                        style: {
                                                                            fontWeight: 600
                                                                        },
                                                                        children: currentProject.tickets.repair
                                                                    }, void 0, false, {
                                                                        fileName: "src/pages/projects/index.tsx",
                                                                        lineNumber: 800,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/pages/projects/index.tsx",
                                                                lineNumber: 798,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Progress, {
                                                                percent: currentProject.tickets.repair / (currentProject.tickets.maintenance + currentProject.tickets.repair) * 100,
                                                                strokeColor: "#fa8c16",
                                                                size: "small"
                                                            }, void 0, false, {
                                                                fileName: "src/pages/projects/index.tsx",
                                                                lineNumber: 802,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/projects/index.tsx",
                                                        lineNumber: 797,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/projects/index.tsx",
                                                lineNumber: 784,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/projects/index.tsx",
                                        lineNumber: 766,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/projects/index.tsx",
                                lineNumber: 725,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 724,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            title: "项目成员",
                            style: {
                                marginBottom: 16
                            },
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List, {
                                dataSource: currentProject.members,
                                renderItem: (member, index)=>{
                                    const workProgress = member.workDays ? Math.min(member.workDays / currentProject.estimatedDays * 100, 100) : 0;
                                    const hasRisk = member.riskNote && member.riskNote.trim() !== '';
                                    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List.Item, {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            style: {
                                                width: '100%'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                                                    gutter: 16,
                                                    align: "middle",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                                            span: 6,
                                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                        style: {
                                                                            fontWeight: 600,
                                                                            fontSize: '15px',
                                                                            marginBottom: 4
                                                                        },
                                                                        children: member.name
                                                                    }, void 0, false, {
                                                                        fileName: "src/pages/projects/index.tsx",
                                                                        lineNumber: 830,
                                                                        columnNumber: 31
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                                                                        color: "blue",
                                                                        children: member.role
                                                                    }, void 0, false, {
                                                                        fileName: "src/pages/projects/index.tsx",
                                                                        lineNumber: 833,
                                                                        columnNumber: 31
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/pages/projects/index.tsx",
                                                                lineNumber: 829,
                                                                columnNumber: 29
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "src/pages/projects/index.tsx",
                                                            lineNumber: 828,
                                                            columnNumber: 27
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                                            span: 10,
                                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: 4,
                                                                            fontSize: '12px',
                                                                            color: '#666'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                                children: "工作进度"
                                                                            }, void 0, false, {
                                                                                fileName: "src/pages/projects/index.tsx",
                                                                                lineNumber: 839,
                                                                                columnNumber: 33
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                                children: [
                                                                                    member.workDays || 0,
                                                                                    " 天"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "src/pages/projects/index.tsx",
                                                                                lineNumber: 840,
                                                                                columnNumber: 33
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "src/pages/projects/index.tsx",
                                                                        lineNumber: 838,
                                                                        columnNumber: 31
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Progress, {
                                                                        percent: workProgress,
                                                                        size: "small",
                                                                        status: hasRisk ? 'exception' : 'active',
                                                                        strokeColor: hasRisk ? '#ff4d4f' : '#1890ff'
                                                                    }, void 0, false, {
                                                                        fileName: "src/pages/projects/index.tsx",
                                                                        lineNumber: 842,
                                                                        columnNumber: 31
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/pages/projects/index.tsx",
                                                                lineNumber: 837,
                                                                columnNumber: 29
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "src/pages/projects/index.tsx",
                                                            lineNumber: 836,
                                                            columnNumber: 27
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                                            span: 4,
                                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                style: {
                                                                    textAlign: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: '#666',
                                                                            marginBottom: 4
                                                                        },
                                                                        children: "BUG数"
                                                                    }, void 0, false, {
                                                                        fileName: "src/pages/projects/index.tsx",
                                                                        lineNumber: 852,
                                                                        columnNumber: 31
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                                                                        color: "red",
                                                                        style: {
                                                                            fontSize: '14px',
                                                                            fontWeight: 600
                                                                        },
                                                                        children: member.bugCount || 0
                                                                    }, void 0, false, {
                                                                        fileName: "src/pages/projects/index.tsx",
                                                                        lineNumber: 853,
                                                                        columnNumber: 31
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/pages/projects/index.tsx",
                                                                lineNumber: 851,
                                                                columnNumber: 29
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "src/pages/projects/index.tsx",
                                                            lineNumber: 850,
                                                            columnNumber: 27
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                                            span: 4,
                                                            children: hasRisk && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                                                                icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.WarningOutlined, {}, void 0, false, {
                                                                    fileName: "src/pages/projects/index.tsx",
                                                                    lineNumber: 860,
                                                                    columnNumber: 42
                                                                }, void 0),
                                                                color: "error",
                                                                children: "有风险"
                                                            }, void 0, false, {
                                                                fileName: "src/pages/projects/index.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 31
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "src/pages/projects/index.tsx",
                                                            lineNumber: 858,
                                                            columnNumber: 27
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/pages/projects/index.tsx",
                                                    lineNumber: 827,
                                                    columnNumber: 25
                                                }, void 0),
                                                hasRisk && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    style: {
                                                        marginTop: 12,
                                                        padding: '8px 12px',
                                                        background: '#fff2e8',
                                                        borderLeft: '3px solid #ff4d4f',
                                                        borderRadius: '4px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: '#666',
                                                                marginBottom: 2
                                                            },
                                                            children: "风险备注"
                                                        }, void 0, false, {
                                                            fileName: "src/pages/projects/index.tsx",
                                                            lineNumber: 874,
                                                            columnNumber: 29
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                            style: {
                                                                color: '#ff4d4f',
                                                                fontSize: '13px'
                                                            },
                                                            children: member.riskNote
                                                        }, void 0, false, {
                                                            fileName: "src/pages/projects/index.tsx",
                                                            lineNumber: 875,
                                                            columnNumber: 29
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/pages/projects/index.tsx",
                                                    lineNumber: 867,
                                                    columnNumber: 27
                                                }, void 0),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    style: {
                                                        marginTop: 8,
                                                        fontSize: '12px',
                                                        color: '#999'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CalendarOutlined, {}, void 0, false, {
                                                            fileName: "src/pages/projects/index.tsx",
                                                            lineNumber: 879,
                                                            columnNumber: 27
                                                        }, void 0),
                                                        " ",
                                                        member.startDate,
                                                        " ~ ",
                                                        member.endDate
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/pages/projects/index.tsx",
                                                    lineNumber: 878,
                                                    columnNumber: 25
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/projects/index.tsx",
                                            lineNumber: 826,
                                            columnNumber: 23
                                        }, void 0)
                                    }, index, false, {
                                        fileName: "src/pages/projects/index.tsx",
                                        lineNumber: 825,
                                        columnNumber: 21
                                    }, void 0);
                                }
                            }, void 0, false, {
                                fileName: "src/pages/projects/index.tsx",
                                lineNumber: 816,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/projects/index.tsx",
                            lineNumber: 815,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/projects/index.tsx",
                    lineNumber: 587,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "src/pages/projects/index.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/projects/index.tsx",
        lineNumber: 533,
        columnNumber: 5
    }, this);
};
_s(Projects, "p04J6aD/5YHqhCszmrRchQrDftY=");
_c = Projects;
var _default = Projects;
var _c;
$RefreshReg$(_c, "Projects");
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
//# sourceMappingURL=p__projects__index-async.js.map