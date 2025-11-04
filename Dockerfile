# 前端 Dockerfile
# 多阶段构建：先构建，再用 Nginx 提供静态文件

# 阶段 1: 构建
FROM node:18-alpine AS builder

WORKDIR /app

# 复制 package.json
COPY package*.json ./

# 安装依赖
RUN npm install --legacy-peer-deps

# 复制源代码
COPY . .

# 设置生产环境
ENV NODE_ENV=production
ENV USE_LOCAL_MOCK=false

# 构建
RUN npm run build

# 阶段 2: 运行
FROM nginx:alpine

# 复制构建产物
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]

