((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__reports__index'],
{ "src/pages/reports/index.tsx": function (module, exports, __mako_require__){
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
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _react = __mako_require__("node_modules/react/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const { RangePicker } = _antd.DatePicker;
const Reports = ()=>{
    _s();
    const [aiModalVisible, setAiModalVisible] = (0, _react.useState)(false);
    const [aiGenerating, setAiGenerating] = (0, _react.useState)(false);
    const [form] = _antd.Form.useForm();
    // 内联 Mock 数据
    const monthlyReports = [
        {
            id: '1',
            title: '2024年6月项目月报',
            type: 'monthly',
            period: '2024-06',
            generatedAt: '2024-07-01 10:30:00',
            summary: '本月完成3个项目，总成交金额746万元，利润298.4万元。项目整体进度良好，BUG修复率达95%。'
        },
        {
            id: '2',
            title: '2024年5月项目月报',
            type: 'monthly',
            period: '2024-05',
            generatedAt: '2024-06-01 10:30:00',
            summary: '本月完成2个项目，总成交金额678万元，利润271.2万元。新增项目2个，团队协作效率提升15%。'
        },
        {
            id: '3',
            title: '2024年4月项目月报',
            type: 'monthly',
            period: '2024-04',
            generatedAt: '2024-05-01 10:30:00',
            summary: '本月完成4个项目，总成交金额593万元，利润237.2万元。客户满意度达98%，获得多个好评。'
        },
        {
            id: '4',
            title: '2024年3月项目月报',
            type: 'monthly',
            period: '2024-03',
            generatedAt: '2024-04-01 10:30:00',
            summary: '本月完成3个项目，总成交金额458万元，利润183.2万元。技术难点攻克2个，团队能力提升显著。'
        }
    ];
    const quarterlyReports = [
        {
            id: 'q1',
            title: '2024年第二季度项目报告',
            type: 'quarterly',
            period: '2024-Q2',
            generatedAt: '2024-07-05 14:00:00',
            summary: '第二季度完成项目12个，总成交金额1977万元，利润806.8万元。团队规模扩大20%，项目交付质量稳步提升。'
        },
        {
            id: 'q2',
            title: '2024年第一季度项目报告',
            type: 'quarterly',
            period: '2024-Q1',
            generatedAt: '2024-04-05 14:00:00',
            summary: '第一季度完成项目8个，总成交金额1230万元，利润492万元。成功开拓3所新高校客户，市场占有率提升10%。'
        }
    ];
    const fetchReports = async ()=>{
    // 使用内联数据，不需要请求
    };
    const handleGenerateReport = async (values)=>{
        try {
            const response = await (0, _max.request)('/api/reports/generate', {
                method: 'POST',
                data: values
            });
            if (response.success) {
                _antd.message.success('报告生成成功！');
                fetchReports();
            }
        } catch (error) {
            _antd.message.error('报告生成失败！');
        }
    };
    const handleAIGenerate = async (values)=>{
        setAiGenerating(true);
        try {
            // 这里预留 AI 接口调用
            await new Promise((resolve)=>setTimeout(resolve, 2000));
            _antd.message.success('AI 报告生成成功！（演示功能）');
            setAiModalVisible(false);
            fetchReports();
        } catch (error) {
            _antd.message.error('AI 报告生成失败！');
        } finally{
            setAiGenerating(false);
        }
    };
    const handleDownload = (report)=>{
        _antd.message.info(`下载报告: ${report.title}`);
    // 这里实现下载逻辑
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.PageContainer, {
        title: "报告生成",
        subTitle: "生成月度和季度分析报告",
        extra: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                type: "primary",
                icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.RobotOutlined, {}, void 0, false, {
                    fileName: "src/pages/reports/index.tsx",
                    lineNumber: 127,
                    columnNumber: 17
                }, void 0),
                onClick: ()=>setAiModalVisible(true),
                children: "AI 智能生成"
            }, "ai", false, {
                fileName: "src/pages/reports/index.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, void 0)
        ],
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                split: "vertical",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                        title: "月度报告",
                        colSpan: "50%",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Form, {
                                form: form,
                                layout: "inline",
                                onFinish: handleGenerateReport,
                                style: {
                                    marginBottom: 16
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Form.Item, {
                                        name: "month",
                                        label: "选择月份",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.DatePicker, {
                                            picker: "month"
                                        }, void 0, false, {
                                            fileName: "src/pages/reports/index.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/reports/index.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Form.Item, {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                            type: "primary",
                                            htmlType: "submit",
                                            children: "生成月度报告"
                                        }, void 0, false, {
                                            fileName: "src/pages/reports/index.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/reports/index.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/reports/index.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List, {
                                dataSource: monthlyReports,
                                renderItem: (item)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List.Item, {
                                        actions: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                                type: "link",
                                                icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.DownloadOutlined, {}, void 0, false, {
                                                    fileName: "src/pages/reports/index.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 27
                                                }, void 0),
                                                onClick: ()=>handleDownload(item),
                                                children: "下载"
                                            }, "download", false, {
                                                fileName: "src/pages/reports/index.tsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, void 0)
                                        ],
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List.Item.Meta, {
                                            avatar: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.FileTextOutlined, {
                                                style: {
                                                    fontSize: 24,
                                                    color: '#1890ff'
                                                }
                                            }, void 0, false, {
                                                fileName: "src/pages/reports/index.tsx",
                                                lineNumber: 168,
                                                columnNumber: 27
                                            }, void 0),
                                            title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Space, {
                                                children: [
                                                    item.title,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                                                        color: "blue",
                                                        children: "月度"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/reports/index.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 23
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/reports/index.tsx",
                                                lineNumber: 170,
                                                columnNumber: 21
                                            }, void 0),
                                            description: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                                        children: item.summary
                                                    }, void 0, false, {
                                                        fileName: "src/pages/reports/index.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 23
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                                        style: {
                                                            color: '#999',
                                                            fontSize: 12
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CalendarOutlined, {}, void 0, false, {
                                                                fileName: "src/pages/reports/index.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 25
                                                            }, void 0),
                                                            " 生成时间: ",
                                                            item.generatedAt
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/reports/index.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 23
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/reports/index.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "src/pages/reports/index.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "src/pages/reports/index.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "src/pages/reports/index.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/reports/index.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProCard, {
                        title: "季度报告",
                        colSpan: "50%",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Form, {
                                layout: "inline",
                                onFinish: handleGenerateReport,
                                style: {
                                    marginBottom: 16
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Form.Item, {
                                        name: "quarter",
                                        label: "选择季度",
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.DatePicker, {
                                            picker: "quarter"
                                        }, void 0, false, {
                                            fileName: "src/pages/reports/index.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/reports/index.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Form.Item, {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                            type: "primary",
                                            htmlType: "submit",
                                            children: "生成季度报告"
                                        }, void 0, false, {
                                            fileName: "src/pages/reports/index.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/reports/index.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/reports/index.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List, {
                                dataSource: quarterlyReports,
                                renderItem: (item)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List.Item, {
                                        actions: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                                type: "link",
                                                icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.DownloadOutlined, {}, void 0, false, {
                                                    fileName: "src/pages/reports/index.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 27
                                                }, void 0),
                                                onClick: ()=>handleDownload(item),
                                                children: "下载"
                                            }, "download", false, {
                                                fileName: "src/pages/reports/index.tsx",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, void 0)
                                        ],
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List.Item.Meta, {
                                            avatar: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.FileTextOutlined, {
                                                style: {
                                                    fontSize: 24,
                                                    color: '#52c41a'
                                                }
                                            }, void 0, false, {
                                                fileName: "src/pages/reports/index.tsx",
                                                lineNumber: 221,
                                                columnNumber: 27
                                            }, void 0),
                                            title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Space, {
                                                children: [
                                                    item.title,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                                                        color: "green",
                                                        children: "季度"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/reports/index.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 23
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/reports/index.tsx",
                                                lineNumber: 223,
                                                columnNumber: 21
                                            }, void 0),
                                            description: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                                        children: item.summary
                                                    }, void 0, false, {
                                                        fileName: "src/pages/reports/index.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 23
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                                        style: {
                                                            color: '#999',
                                                            fontSize: 12
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CalendarOutlined, {}, void 0, false, {
                                                                fileName: "src/pages/reports/index.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 25
                                                            }, void 0),
                                                            " 生成时间: ",
                                                            item.generatedAt
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/reports/index.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 23
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/reports/index.tsx",
                                                lineNumber: 229,
                                                columnNumber: 21
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "src/pages/reports/index.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "src/pages/reports/index.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "src/pages/reports/index.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/reports/index.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/reports/index.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Modal, {
                title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Space, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.RobotOutlined, {
                            style: {
                                color: '#1890ff'
                            }
                        }, void 0, false, {
                            fileName: "src/pages/reports/index.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, void 0),
                        "AI 智能生成报告"
                    ]
                }, void 0, true, {
                    fileName: "src/pages/reports/index.tsx",
                    lineNumber: 246,
                    columnNumber: 11
                }, void 0),
                open: aiModalVisible,
                onCancel: ()=>setAiModalVisible(false),
                footer: null,
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Spin, {
                    spinning: aiGenerating,
                    tip: "AI 正在分析数据并生成报告...",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Form, {
                            layout: "vertical",
                            onFinish: handleAIGenerate,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Form.Item, {
                                    name: "dateRange",
                                    label: "选择时间范围",
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择时间范围'
                                        }
                                    ],
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(RangePicker, {
                                        style: {
                                            width: '100%'
                                        }
                                    }, void 0, false, {
                                        fileName: "src/pages/reports/index.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/reports/index.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Form.Item, {
                                    name: "reportType",
                                    label: "报告类型",
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择报告类型'
                                        }
                                    ],
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Select, {
                                        style: {
                                            width: '100%'
                                        },
                                        placeholder: "请选择报告类型",
                                        options: [
                                            {
                                                label: '月度报告',
                                                value: 'monthly'
                                            },
                                            {
                                                label: '季度报告',
                                                value: 'quarterly'
                                            },
                                            {
                                                label: '年度报告',
                                                value: 'yearly'
                                            }
                                        ]
                                    }, void 0, false, {
                                        fileName: "src/pages/reports/index.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/reports/index.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Form.Item, {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Space, {
                                        style: {
                                            width: '100%',
                                            justifyContent: 'flex-end'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                                onClick: ()=>setAiModalVisible(false),
                                                children: "取消"
                                            }, void 0, false, {
                                                fileName: "src/pages/reports/index.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                                type: "primary",
                                                htmlType: "submit",
                                                icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.RobotOutlined, {}, void 0, false, {
                                                    fileName: "src/pages/reports/index.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 64
                                                }, void 0),
                                                children: "AI 生成"
                                            }, void 0, false, {
                                                fileName: "src/pages/reports/index.tsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/reports/index.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/reports/index.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/reports/index.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            size: "small",
                            style: {
                                marginTop: 16,
                                background: '#f0f2f5'
                            },
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                style: {
                                    margin: 0,
                                    color: '#666'
                                },
                                children: "💡 提示：AI 将根据选定时间范围内的项目数据，自动分析并生成包含关键指标、趋势分析和建议的智能报告。"
                            }, void 0, false, {
                                fileName: "src/pages/reports/index.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/reports/index.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/reports/index.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/reports/index.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/reports/index.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
};
_s(Reports, "fmvFwp9hwoYPVSYT/tRt5AKmxPY=", false, function() {
    return [
        _antd.Form.useForm
    ];
});
_c = Reports;
var _default = Reports;
var _c;
$RefreshReg$(_c, "Reports");
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
//# sourceMappingURL=p__reports__index-async.js.map