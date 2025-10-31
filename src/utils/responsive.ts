/**
 * 移动端响应式工具函数
 */

import { useEffect, useState } from 'react';

// 断点定义
export const BREAKPOINTS = {
  xs: 480,   // 手机
  sm: 576,   // 手机横屏
  md: 768,   // 平板
  lg: 992,   // 桌面
  xl: 1200,  // 大桌面
  xxl: 1600, // 超大桌面
};

// 设备类型
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

/**
 * 获取当前设备类型
 */
export const getDeviceType = (width: number): DeviceType => {
  if (width < BREAKPOINTS.md) {
    return 'mobile';
  } else if (width < BREAKPOINTS.lg) {
    return 'tablet';
  }
  return 'desktop';
};

/**
 * 判断是否为移动设备
 */
export const isMobile = (width?: number): boolean => {
  const w = width || (typeof window !== 'undefined' ? window.innerWidth : 0);
  return w < BREAKPOINTS.md;
};

/**
 * 判断是否为平板设备
 */
export const isTablet = (width?: number): boolean => {
  const w = width || (typeof window !== 'undefined' ? window.innerWidth : 0);
  return w >= BREAKPOINTS.md && w < BREAKPOINTS.lg;
};

/**
 * 判断是否为桌面设备
 */
export const isDesktop = (width?: number): boolean => {
  const w = width || (typeof window !== 'undefined' ? window.innerWidth : 0);
  return w >= BREAKPOINTS.lg;
};

/**
 * 响应式 Hook - 监听窗口大小变化
 */
export const useResponsive = () => {
  const [state, setState] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    deviceType: 'desktop' as DeviceType,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const deviceType = getDeviceType(width);

      setState({
        width,
        height,
        deviceType,
        isMobile: deviceType === 'mobile',
        isTablet: deviceType === 'tablet',
        isDesktop: deviceType === 'desktop',
      });
    };

    // 初始化
    handleResize();

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return state;
};

/**
 * 根据设备类型返回不同的值
 */
export const getResponsiveValue = <T,>(
  mobile: T,
  tablet: T,
  desktop: T,
  deviceType?: DeviceType,
): T => {
  const type = deviceType || getDeviceType(window.innerWidth);
  
  switch (type) {
    case 'mobile':
      return mobile;
    case 'tablet':
      return tablet;
    case 'desktop':
      return desktop;
    default:
      return desktop;
  }
};

/**
 * 获取响应式的列数
 */
export const getResponsiveColumns = (deviceType?: DeviceType): number => {
  return getResponsiveValue(1, 2, 4, deviceType);
};

/**
 * 获取响应式的 Drawer 宽度
 */
export const getResponsiveDrawerWidth = (deviceType?: DeviceType): number | string => {
  return getResponsiveValue('100%', 600, 1000, deviceType);
};

/**
 * 获取响应式的 Modal 宽度
 */
export const getResponsiveModalWidth = (deviceType?: DeviceType): number | string => {
  return getResponsiveValue('90%', 600, 800, deviceType);
};

