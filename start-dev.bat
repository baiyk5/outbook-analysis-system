@echo off
chcp 65001 >nul
echo.
echo 🚀 OutBook 开发环境启动脚本
echo ================================
echo.

REM 检查 Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ 错误: 未安装 Node.js
    echo 请访问 https://nodejs.org/ 安装 Node.js
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✅ Node.js 版本: %NODE_VERSION%
echo.

REM 检查后端配置
if not exist "backend\.env" (
    echo ⚠️  警告: 后端未配置
    echo.
    set /p configure="是否现在配置飞书？(y/n): "
    if /i "%configure%"=="y" (
        cd backend
        call npm run setup
        cd ..
    ) else (
        echo 跳过配置，将使用默认设置（可能无法获取飞书数据）
    )
    echo.
)

REM 启动后端
echo 📡 启动后端服务...
cd backend

REM 检查依赖
if not exist "node_modules" (
    echo 安装后端依赖...
    call npm install --legacy-peer-deps
)

REM 启动后端（新窗口）
start "OutBook Backend" cmd /k "npm run dev"
echo 后端服务地址: http://localhost:3000
echo.

cd ..

REM 等待后端启动
echo 等待后端服务启动...
timeout /t 5 /nobreak >nul

REM 启动前端
echo 🎨 启动前端服务...

REM 检查依赖
if not exist "node_modules" (
    echo 安装前端依赖...
    call npm install --legacy-peer-deps
)

REM 启动前端（新窗口）
start "OutBook Frontend" cmd /k "npm run dev"
echo 前端服务地址: http://localhost:8000
echo.

echo ================================
echo ✅ 服务启动完成！
echo.
echo 📋 服务信息:
echo   - 前端: http://localhost:8000
echo   - 后端: http://localhost:3000
echo   - 健康检查: http://localhost:3000/health
echo.
echo 💡 提示:
echo   - 前端和后端在独立窗口运行
echo   - 关闭窗口即可停止对应服务
echo   - 查看日志请查看对应窗口
echo.
echo 🎉 开始使用 OutBook 吧！
echo ================================
echo.
pause

