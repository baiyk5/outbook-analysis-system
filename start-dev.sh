#!/bin/bash

# OutBook 开发环境启动脚本

echo "🚀 OutBook 开发环境启动脚本"
echo "================================"
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未安装 Node.js"
    echo "请访问 https://nodejs.org/ 安装 Node.js"
    exit 1
fi

echo "✅ Node.js 版本: $(node -v)"
echo ""

# 检查后端配置
if [ ! -f "backend/.env" ]; then
    echo "⚠️  警告: 后端未配置"
    echo ""
    read -p "是否现在配置飞书？(y/n): " configure
    if [ "$configure" = "y" ]; then
        cd backend
        npm run setup
        cd ..
    else
        echo "跳过配置，将使用默认设置（可能无法获取飞书数据）"
    fi
    echo ""
fi

# 启动后端
echo "📡 启动后端服务..."
cd backend

# 检查依赖
if [ ! -d "node_modules" ]; then
    echo "安装后端依赖..."
    npm install --legacy-peer-deps
fi

# 后台启动后端
npm run dev &
BACKEND_PID=$!
echo "后端服务 PID: $BACKEND_PID"
echo "后端服务地址: http://localhost:3000"
echo ""

cd ..

# 等待后端启动
echo "等待后端服务启动..."
sleep 5

# 启动前端
echo "🎨 启动前端服务..."

# 检查依赖
if [ ! -d "node_modules" ]; then
    echo "安装前端依赖..."
    npm install --legacy-peer-deps
fi

# 启动前端
npm run dev &
FRONTEND_PID=$!
echo "前端服务 PID: $FRONTEND_PID"
echo "前端服务地址: http://localhost:8000"
echo ""

echo "================================"
echo "✅ 服务启动完成！"
echo ""
echo "📋 服务信息:"
echo "  - 前端: http://localhost:8000"
echo "  - 后端: http://localhost:3000"
echo "  - 健康检查: http://localhost:3000/health"
echo ""
echo "💡 提示:"
echo "  - 按 Ctrl+C 停止所有服务"
echo "  - 查看日志请查看终端输出"
echo ""
echo "🎉 开始使用 OutBook 吧！"
echo "================================"

# 等待用户中断
wait

