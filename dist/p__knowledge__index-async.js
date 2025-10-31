((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__knowledge__index'],
{ "src/pages/knowledge/index.tsx": function (module, exports, __mako_require__){
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
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const { Search } = _antd.Input;
const { Option } = _antd.Select;
const Knowledge = ()=>{
    _s();
    const [filterType, setFilterType] = (0, _react.useState)('all');
    const [previewVisible, setPreviewVisible] = (0, _react.useState)(false);
    const [currentDoc, setCurrentDoc] = (0, _react.useState)(null);
    // 内联 Mock 数据
    const mockDocuments = [
        {
            id: '1',
            title: '清华大学在线教育平台需求报告',
            type: 'requirement',
            project: '清华大学在线教育平台',
            uploadDate: '2024-01-10',
            size: '2.3 MB',
            tags: [
                '需求分析',
                '在线教育',
                '清华大学'
            ]
        },
        {
            id: '2',
            title: '清华大学在线教育平台验收报告',
            type: 'acceptance',
            project: '清华大学在线教育平台',
            uploadDate: '2024-07-01',
            size: '1.8 MB',
            tags: [
                '验收',
                '项目完成',
                '清华大学'
            ]
        },
        {
            id: '3',
            title: '北京大学智慧校园系统设计文档',
            type: 'design',
            project: '北京大学智慧校园系统',
            uploadDate: '2024-03-05',
            size: '4.5 MB',
            tags: [
                '系统设计',
                '架构',
                '北京大学'
            ]
        },
        {
            id: '4',
            title: '复旦大学数字图书馆需求报告',
            type: 'requirement',
            project: '复旦大学数字图书馆',
            uploadDate: '2024-02-05',
            size: '3.1 MB',
            tags: [
                '需求分析',
                '图书馆',
                '复旦大学'
            ]
        },
        {
            id: '5',
            title: '复旦大学数字图书馆验收报告',
            type: 'acceptance',
            project: '复旦大学数字图书馆',
            uploadDate: '2024-07-25',
            size: '2.2 MB',
            tags: [
                '验收',
                '项目完成',
                '复旦大学'
            ]
        },
        {
            id: '6',
            title: '上海交通大学选课系统设计文档',
            type: 'design',
            project: '上海交通大学选课系统',
            uploadDate: '2024-04-10',
            size: '3.8 MB',
            tags: [
                '系统设计',
                '选课',
                '上海交大'
            ]
        },
        {
            id: '7',
            title: '浙江大学实验室管理需求报告',
            type: 'requirement',
            project: '浙江大学实验室管理',
            uploadDate: '2024-04-25',
            size: '2.7 MB',
            tags: [
                '需求分析',
                '实验室',
                '浙江大学'
            ]
        },
        {
            id: '8',
            title: '南京大学学生管理系统设计文档',
            type: 'design',
            project: '南京大学学生管理系统',
            uploadDate: '2024-05-28',
            size: '4.2 MB',
            tags: [
                '系统设计',
                '学生管理',
                '南京大学'
            ]
        },
        {
            id: '9',
            title: '中国科技大学科研平台需求报告',
            type: 'requirement',
            project: '中国科技大学科研平台',
            uploadDate: '2024-06-25',
            size: '3.5 MB',
            tags: [
                '需求分析',
                '科研',
                '中科大'
            ]
        },
        {
            id: '10',
            title: '项目管理规范文档',
            type: 'other',
            project: '通用',
            uploadDate: '2024-01-05',
            size: '1.2 MB',
            tags: [
                '规范',
                '管理',
                '通用'
            ]
        }
    ];
    const [documents] = (0, _react.useState)(mockDocuments);
    const [filteredDocuments, setFilteredDocuments] = (0, _react.useState)(mockDocuments);
    const stats = {
        total: mockDocuments.length,
        requirement: mockDocuments.filter((d)=>d.type === 'requirement').length,
        acceptance: mockDocuments.filter((d)=>d.type === 'acceptance').length,
        design: mockDocuments.filter((d)=>d.type === 'design').length
    };
    (0, _react.useEffect)(()=>{
        filterDocuments();
    }, [
        filterType
    ]);
    const filterDocuments = ()=>{
        if (filterType === 'all') setFilteredDocuments(documents);
        else setFilteredDocuments(documents.filter((doc)=>doc.type === filterType));
    };
    const handleSearch = (value)=>{
        if (!value) {
            filterDocuments();
            return;
        }
        const filtered = documents.filter((doc)=>doc.title.toLowerCase().includes(value.toLowerCase()) || doc.project.toLowerCase().includes(value.toLowerCase()));
        setFilteredDocuments(filtered);
    };
    const getFileIcon = (type)=>{
        switch(type){
            case 'requirement':
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.FileTextOutlined, {
                    style: {
                        fontSize: 24,
                        color: '#1890ff'
                    }
                }, void 0, false, {
                    fileName: "src/pages/knowledge/index.tsx",
                    lineNumber: 160,
                    columnNumber: 16
                }, this);
            case 'acceptance':
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.FilePdfOutlined, {
                    style: {
                        fontSize: 24,
                        color: '#52c41a'
                    }
                }, void 0, false, {
                    fileName: "src/pages/knowledge/index.tsx",
                    lineNumber: 162,
                    columnNumber: 16
                }, this);
            case 'design':
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.FileWordOutlined, {
                    style: {
                        fontSize: 24,
                        color: '#faad14'
                    }
                }, void 0, false, {
                    fileName: "src/pages/knowledge/index.tsx",
                    lineNumber: 164,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.FileTextOutlined, {
                    style: {
                        fontSize: 24,
                        color: '#999'
                    }
                }, void 0, false, {
                    fileName: "src/pages/knowledge/index.tsx",
                    lineNumber: 166,
                    columnNumber: 16
                }, this);
        }
    };
    const getTypeTag = (type)=>{
        const typeMap = {
            requirement: {
                color: 'blue',
                text: '需求报告'
            },
            acceptance: {
                color: 'green',
                text: '验收报告'
            },
            design: {
                color: 'orange',
                text: '设计文档'
            },
            other: {
                color: 'default',
                text: '其他'
            }
        };
        const config = typeMap[type] || typeMap.other;
        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
            color: config.color,
            children: config.text
        }, void 0, false, {
            fileName: "src/pages/knowledge/index.tsx",
            lineNumber: 178,
            columnNumber: 12
        }, this);
    };
    const handlePreview = (doc)=>{
        setCurrentDoc(doc);
        setPreviewVisible(true);
    };
    const handleDownload = (doc)=>{
        console.log('下载文档:', doc.title);
    // 实现下载逻辑
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.PageContainer, {
        title: "知识文库",
        subTitle: "项目文档管理与查询",
        extra: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                type: "primary",
                children: "上传文档"
            }, "upload", false, {
                fileName: "src/pages/knowledge/index.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, void 0)
        ],
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
                                title: "文档总数",
                                value: stats.total || 0,
                                prefix: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.FileTextOutlined, {}, void 0, false, {
                                    fileName: "src/pages/knowledge/index.tsx",
                                    lineNumber: 208,
                                    columnNumber: 23
                                }, void 0)
                            }, void 0, false, {
                                fileName: "src/pages/knowledge/index.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/knowledge/index.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/knowledge/index.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 6,
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Statistic, {
                                title: "需求报告",
                                value: stats.requirement || 0,
                                valueStyle: {
                                    color: '#1890ff'
                                }
                            }, void 0, false, {
                                fileName: "src/pages/knowledge/index.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/knowledge/index.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/knowledge/index.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 6,
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Statistic, {
                                title: "验收报告",
                                value: stats.acceptance || 0,
                                valueStyle: {
                                    color: '#52c41a'
                                }
                            }, void 0, false, {
                                fileName: "src/pages/knowledge/index.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/knowledge/index.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/knowledge/index.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 6,
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Statistic, {
                                title: "设计文档",
                                value: stats.design || 0,
                                valueStyle: {
                                    color: '#faad14'
                                }
                            }, void 0, false, {
                                fileName: "src/pages/knowledge/index.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/knowledge/index.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/knowledge/index.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/knowledge/index.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                style: {
                    marginBottom: 16
                },
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Space, {
                    size: "large",
                    style: {
                        width: '100%'
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Search, {
                            placeholder: "搜索文档标题或项目名称",
                            allowClear: true,
                            enterButton: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.SearchOutlined, {}, void 0, false, {
                                fileName: "src/pages/knowledge/index.tsx",
                                lineNumber: 247,
                                columnNumber: 26
                            }, void 0),
                            size: "large",
                            onSearch: handleSearch,
                            style: {
                                width: 400
                            }
                        }, void 0, false, {
                            fileName: "src/pages/knowledge/index.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Select, {
                            value: filterType,
                            onChange: setFilterType,
                            style: {
                                width: 200
                            },
                            size: "large",
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Option, {
                                    value: "all",
                                    children: "全部类型"
                                }, void 0, false, {
                                    fileName: "src/pages/knowledge/index.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Option, {
                                    value: "requirement",
                                    children: "需求报告"
                                }, void 0, false, {
                                    fileName: "src/pages/knowledge/index.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Option, {
                                    value: "acceptance",
                                    children: "验收报告"
                                }, void 0, false, {
                                    fileName: "src/pages/knowledge/index.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Option, {
                                    value: "design",
                                    children: "设计文档"
                                }, void 0, false, {
                                    fileName: "src/pages/knowledge/index.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Option, {
                                    value: "other",
                                    children: "其他"
                                }, void 0, false, {
                                    fileName: "src/pages/knowledge/index.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/knowledge/index.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/knowledge/index.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/knowledge/index.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List, {
                    itemLayout: "horizontal",
                    dataSource: filteredDocuments,
                    pagination: {
                        pageSize: 10,
                        showSizeChanger: true,
                        showTotal: (total)=>`共 ${total} 个文档`
                    },
                    renderItem: (item)=>{
                        var _item_tags;
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List.Item, {
                            actions: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                    type: "link",
                                    icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.EyeOutlined, {}, void 0, false, {
                                        fileName: "src/pages/knowledge/index.tsx",
                                        lineNumber: 283,
                                        columnNumber: 25
                                    }, void 0),
                                    onClick: ()=>handlePreview(item),
                                    children: "预览"
                                }, "preview", false, {
                                    fileName: "src/pages/knowledge/index.tsx",
                                    lineNumber: 280,
                                    columnNumber: 17
                                }, void 0),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                    type: "link",
                                    icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.DownloadOutlined, {}, void 0, false, {
                                        fileName: "src/pages/knowledge/index.tsx",
                                        lineNumber: 291,
                                        columnNumber: 25
                                    }, void 0),
                                    onClick: ()=>handleDownload(item),
                                    children: "下载"
                                }, "download", false, {
                                    fileName: "src/pages/knowledge/index.tsx",
                                    lineNumber: 288,
                                    columnNumber: 17
                                }, void 0)
                            ],
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List.Item.Meta, {
                                avatar: getFileIcon(item.type),
                                title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Space, {
                                    children: [
                                        item.title,
                                        getTypeTag(item.type)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/knowledge/index.tsx",
                                    lineNumber: 301,
                                    columnNumber: 19
                                }, void 0),
                                description: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                            children: [
                                                "项目: ",
                                                item.project
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/knowledge/index.tsx",
                                            lineNumber: 308,
                                            columnNumber: 21
                                        }, void 0),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Space, {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: [
                                                        "上传时间: ",
                                                        item.uploadDate
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/pages/knowledge/index.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 23
                                                }, void 0),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: [
                                                        "大小: ",
                                                        item.size
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/pages/knowledge/index.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 23
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/knowledge/index.tsx",
                                            lineNumber: 309,
                                            columnNumber: 21
                                        }, void 0),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            style: {
                                                marginTop: 8
                                            },
                                            children: (_item_tags = item.tags) === null || _item_tags === void 0 ? void 0 : _item_tags.map((tag, index)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Tag, {
                                                    children: tag
                                                }, index, false, {
                                                    fileName: "src/pages/knowledge/index.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 25
                                                }, void 0))
                                        }, void 0, false, {
                                            fileName: "src/pages/knowledge/index.tsx",
                                            lineNumber: 313,
                                            columnNumber: 21
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/knowledge/index.tsx",
                                    lineNumber: 307,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "src/pages/knowledge/index.tsx",
                                lineNumber: 298,
                                columnNumber: 15
                            }, void 0)
                        }, void 0, false, {
                            fileName: "src/pages/knowledge/index.tsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, void 0);
                    }
                }, void 0, false, {
                    fileName: "src/pages/knowledge/index.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/knowledge/index.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Modal, {
                title: currentDoc === null || currentDoc === void 0 ? void 0 : currentDoc.title,
                open: previewVisible,
                onCancel: ()=>setPreviewVisible(false),
                width: 800,
                footer: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                        type: "primary",
                        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.DownloadOutlined, {}, void 0, false, {
                            fileName: "src/pages/knowledge/index.tsx",
                            lineNumber: 333,
                            columnNumber: 55
                        }, void 0),
                        onClick: ()=>currentDoc && handleDownload(currentDoc),
                        children: "下载"
                    }, "download", false, {
                        fileName: "src/pages/knowledge/index.tsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, void 0),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                        onClick: ()=>setPreviewVisible(false),
                        children: "关闭"
                    }, "close", false, {
                        fileName: "src/pages/knowledge/index.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, void 0)
                ],
                children: currentDoc && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    style: {
                        padding: 24,
                        background: '#f5f5f5',
                        minHeight: 400
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            style: {
                                textAlign: 'center',
                                color: '#999'
                            },
                            children: "文档预览功能开发中..."
                        }, void 0, false, {
                            fileName: "src/pages/knowledge/index.tsx",
                            lineNumber: 343,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            style: {
                                textAlign: 'center',
                                color: '#999'
                            },
                            children: [
                                "文档: ",
                                currentDoc.title
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/knowledge/index.tsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/knowledge/index.tsx",
                    lineNumber: 342,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "src/pages/knowledge/index.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/knowledge/index.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
};
_s(Knowledge, "Igf2K2UITD0H3M2B+2LDLJ1RTwM=");
_c = Knowledge;
var _default = Knowledge;
var _c;
$RefreshReg$(_c, "Knowledge");
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
//# sourceMappingURL=p__knowledge__index-async.js.map