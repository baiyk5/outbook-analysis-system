((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__projects__board'],
{ "src/pages/projects/board.tsx": function (module, exports, __mako_require__){
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
var _plots = __mako_require__("node_modules/@ant-design/plots/es/index.js");
var _react = __mako_require__("node_modules/react/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const { Option } = _antd.Select;
const ProjectBoard = ()=>{
    _s();
    const [selectedProject, setSelectedProject] = (0, _react.useState)('1');
    // 项目列表
    const projects = [
        {
            id: '1',
            name: '清华大学在线教育平台'
        },
        {
            id: '2',
            name: '北京大学智慧校园系统'
        },
        {
            id: '3',
            name: '复旦大学数字图书馆'
        },
        {
            id: '4',
            name: '上海交通大学选课系统'
        },
        {
            id: '5',
            name: '浙江大学实验室管理'
        }
    ];
    // 任务进展数据（柱状图）
    const taskProgressData = [
        {
            stage: '项目启动',
            count: 3,
            status: '已完成'
        },
        {
            stage: '需求分析',
            count: 5,
            status: '已完成'
        },
        {
            stage: '系统设计',
            count: 8,
            status: '已完成'
        },
        {
            stage: '前端开发',
            count: 12,
            status: '进行中'
        },
        {
            stage: '后端开发',
            count: 15,
            status: '进行中'
        },
        {
            stage: 'UI设计',
            count: 6,
            status: '已完成'
        },
        {
            stage: '测试',
            count: 4,
            status: '待开始'
        },
        {
            stage: '运维',
            count: 2,
            status: '待开始'
        }
    ];
    // 项目成员甘特图数据（使用日期格式）
    const ganttData = [
        {
            name: '张三 - 项目经理',
            startDate: '2024-01-15',
            endDate: '2024-06-30',
            role: '项目启动',
            days: 167
        },
        {
            name: '李四 - 前端开发',
            startDate: '2024-02-01',
            endDate: '2024-06-15',
            role: '前端开发',
            days: 135
        },
        {
            name: '王五 - 后端开发',
            startDate: '2024-01-20',
            endDate: '2024-06-20',
            role: '后端开发',
            days: 152
        },
        {
            name: '赵六 - UI设计师',
            startDate: '2024-01-15',
            endDate: '2024-03-30',
            role: 'UI设计',
            days: 75
        },
        {
            name: '孙七 - 测试工程师',
            startDate: '2024-04-01',
            endDate: '2024-06-30',
            role: '测试',
            days: 91
        },
        {
            name: '周八 - 运维工程师',
            startDate: '2024-05-15',
            endDate: '2024-06-30',
            role: '运维',
            days: 46
        }
    ];
    // 任务进展柱状图配置
    const taskProgressConfig = {
        data: taskProgressData,
        xField: 'stage',
        yField: 'count',
        colorField: 'status',
        label: {
            text: 'count',
            position: 'top',
            style: {
                fill: '#000',
                fontSize: 14,
                fontWeight: 'bold'
            }
        },
        legend: {
            position: 'top'
        },
        color: ({ status })=>{
            if (status === '已完成') return '#52c41a';
            if (status === '进行中') return '#1890ff';
            return '#faad14';
        },
        axis: {
            y: {
                title: '任务数量'
            },
            x: {
                title: '任务阶段'
            }
        }
    };
    // 甘特图配置 - 转换数据为时间范围格式
    const ganttChartData = ganttData.map((item)=>({
            name: item.name,
            startDate: new Date(item.startDate).getTime(),
            endDate: new Date(item.endDate).getTime(),
            role: item.role,
            startDateStr: item.startDate,
            endDateStr: item.endDate,
            days: item.days
        }));
    const ganttConfig = {
        data: ganttChartData,
        xField: 'name',
        yField: [
            'endDate',
            'startDate'
        ],
        colorField: 'role',
        label: {
            text: (datum)=>`${datum.days}天`,
            position: 'inside',
            style: {
                fill: '#fff',
                fontSize: 12,
                fontWeight: 'bold'
            }
        },
        axis: {
            y: {
                title: '时间轴',
                labelFormatter: (val)=>{
                    const date = new Date(val);
                    return `${date.getMonth() + 1}/${date.getDate()}`;
                }
            },
            x: {
                title: '项目成员'
            }
        },
        legend: {
            position: 'top',
            title: '任务类型'
        },
        tooltip: {
            title: 'name',
            items: [
                {
                    field: 'startDateStr',
                    name: '开始时间'
                },
                {
                    field: 'endDateStr',
                    name: '结束时间'
                },
                {
                    field: 'days',
                    name: '工作天数',
                    valueFormatter: (v)=>`${v} 天`
                }
            ]
        }
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.PageContainer, {
        title: "项目看板",
        subTitle: "任务进展与成员甘特图",
        extra: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Space, {
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                        children: "选择项目："
                    }, void 0, false, {
                        fileName: "src/pages/projects/board.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, void 0),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Select, {
                        value: selectedProject,
                        onChange: setSelectedProject,
                        style: {
                            width: 250
                        },
                        children: projects.map((p)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Option, {
                                value: p.id,
                                children: p.name
                            }, p.id, false, {
                                fileName: "src/pages/projects/board.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, void 0))
                    }, void 0, false, {
                        fileName: "src/pages/projects/board.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, void 0)
                ]
            }, "filter", true, {
                fileName: "src/pages/projects/board.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, void 0)
        ],
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                gutter: [
                    16,
                    16
                ],
                style: {
                    marginBottom: 16
                },
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                    span: 24,
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                        title: "任务进展看板",
                        extra: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Space, {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                                    color: "green",
                                    children: "✅ 已完成"
                                }, void 0, false, {
                                    fileName: "src/pages/projects/board.tsx",
                                    lineNumber: 198,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                                    color: "blue",
                                    children: "🔄 进行中"
                                }, void 0, false, {
                                    fileName: "src/pages/projects/board.tsx",
                                    lineNumber: 199,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                                    color: "orange",
                                    children: "⏰ 待开始"
                                }, void 0, false, {
                                    fileName: "src/pages/projects/board.tsx",
                                    lineNumber: 200,
                                    columnNumber: 17
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/projects/board.tsx",
                            lineNumber: 197,
                            columnNumber: 15
                        }, void 0),
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                width: '100%',
                                height: 400
                            },
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_plots.Column, {
                                ...taskProgressConfig
                            }, void 0, false, {
                                fileName: "src/pages/projects/board.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/projects/board.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/projects/board.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/projects/board.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/projects/board.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                gutter: [
                    16,
                    16
                ],
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                    span: 24,
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                        title: "项目成员甘特图",
                        extra: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                            color: "green",
                            children: "时间安排"
                        }, void 0, false, {
                            fileName: "src/pages/projects/board.tsx",
                            lineNumber: 214,
                            columnNumber: 40
                        }, void 0),
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                width: '100%',
                                height: 450
                            },
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_plots.Bar, {
                                ...ganttConfig
                            }, void 0, false, {
                                fileName: "src/pages/projects/board.tsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/projects/board.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/projects/board.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/projects/board.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/projects/board.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/projects/board.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
};
_s(ProjectBoard, "3XY+BSmvxbX3g0pe+8S/zJWgXPc=");
_c = ProjectBoard;
var _default = ProjectBoard;
var _c;
$RefreshReg$(_c, "ProjectBoard");
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
//# sourceMappingURL=p__projects__board-async.js.map