import dayjs from 'dayjs';
import type { Request, Response } from 'express';
import type { DataItem, OfflineDataType, SearchDataType } from './data.d';

// mock data
const visitData: DataItem[] = [];
const beginDay = Date.now();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2: DataItem[] = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const salesData: DataItem[] = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData: SearchDataType[] = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
const salesTypeData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

const salesTypeDataOnline = [
  {
    x: '家用电器',
    y: 244,
  },
  {
    x: '食用酒水',
    y: 321,
  },
  {
    x: '个护健康',
    y: 311,
  },
  {
    x: '服饰箱包',
    y: 41,
  },
  {
    x: '母婴产品',
    y: 121,
  },
  {
    x: '其他',
    y: 111,
  },
];

const salesTypeDataOffline = [
  {
    x: '家用电器',
    y: 99,
  },
  {
    x: '食用酒水',
    y: 188,
  },
  {
    x: '个护健康',
    y: 344,
  },
  {
    x: '服饰箱包',
    y: 255,
  },
  {
    x: '其他',
    y: 65,
  },
];

const offlineData: OfflineDataType[] = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `Stores ${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
const offlineChartData: DataItem[] = [];
for (let i = 0; i < 20; i += 1) {
  offlineChartData.push({
    x: Date.now() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 10,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}

const titles = [
  '清华大学在线教育平台',
  '北京大学智慧校园系统',
  '复旦大学数字图书馆',
  '上海交通大学选课系统',
  '浙江大学实验室管理',
  '南京大学学生管理系统',
  '中国科技大学科研平台',
  '武汉大学教务系统',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const avatars2 = [
  'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
  'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
  'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
  'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png',
];

const getNotice = (_: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 'xxx1',
        title: titles[0],
        logo: avatars[0],
        description: '在线教育平台开发，包含直播、录播、作业系统等功能模块',
        updatedAt: new Date(),
        member: '定制项目组',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx2',
        title: titles[1],
        logo: avatars[1],
        description: '智慧校园一体化解决方案，涵盖教务、学工、后勤等多个系统',
        updatedAt: new Date('2024-10-15'),
        member: '定制项目组',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx3',
        title: titles[2],
        logo: avatars[2],
        description: '数字图书馆系统，支持在线阅读、借阅管理、资源检索',
        updatedAt: new Date(),
        member: '定制项目组',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx4',
        title: titles[3],
        logo: avatars[3],
        description: '新一代选课系统，支持智能推荐、冲突检测、容量管理',
        updatedAt: new Date('2024-10-20'),
        member: '定制项目组',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx5',
        title: titles[4],
        logo: avatars[4],
        description: '实验室综合管理平台，包含设备管理、预约系统、安全监控',
        updatedAt: new Date('2024-10-18'),
        member: '定制项目组',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx6',
        title: titles[5],
        logo: avatars[5],
        description: '学生信息管理系统，支持学籍管理、成绩管理、奖惩记录',
        updatedAt: new Date('2024-10-22'),
        member: '定制项目组',
        href: '',
        memberLink: '',
      },
    ],
  });
};

const getActivities = (_: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 'trend-1',
        updatedAt: new Date(),
        user: {
          name: '曲丽丽',
          avatar: avatars2[0],
        },
        group: {
          name: '定制项目组',
          link: 'http://github.com/',
        },
        project: {
          name: '清华大学在线教育平台',
          link: 'http://github.com/',
        },
        template: '在 @{group} 新建项目 @{project}',
      },
      {
        id: 'trend-2',
        updatedAt: new Date(),
        user: {
          name: '付小小',
          avatar: avatars2[1],
        },
        group: {
          name: '定制项目组',
          link: 'http://github.com/',
        },
        project: {
          name: '北京大学智慧校园系统',
          link: 'http://github.com/',
        },
        template: '在 @{group} 新建项目 @{project}',
      },
      {
        id: 'trend-3',
        updatedAt: new Date(),
        user: {
          name: '林东东',
          avatar: avatars2[2],
        },
        group: {
          name: '定制项目组',
          link: 'http://github.com/',
        },
        project: {
          name: '复旦大学数字图书馆',
          link: 'http://github.com/',
        },
        template: '在 @{group} 新建项目 @{project}',
      },
      {
        id: 'trend-4',
        updatedAt: new Date(),
        user: {
          name: '周星星',
          avatar: avatars2[4],
        },
        project: {
          name: '上海交通大学选课系统',
          link: 'http://github.com/',
        },
        template: '将 @{project} 更新至已发布状态',
      },
      {
        id: 'trend-5',
        updatedAt: new Date(),
        user: {
          name: '朱偏右',
          avatar: avatars2[3],
        },
        project: {
          name: '浙江大学实验室管理',
          link: 'http://github.com/',
        },
        comment: {
          name: '验收报告',
          link: 'http://github.com/',
        },
        template: '在 @{project} 发布了 @{comment}',
      },
      {
        id: 'trend-6',
        updatedAt: new Date(),
        user: {
          name: '乐哥',
          avatar: avatars2[5],
        },
        group: {
          name: '定制项目组',
          link: 'http://github.com/',
        },
        project: {
          name: '南京大学学生管理系统',
          link: 'http://github.com/',
        },
        template: '在 @{group} 新建项目 @{project}',
      },
    ],
  });
};

const radarOriginData = [
  {
    name: '个人',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: '团队',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: '部门',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

const radarData: any[] = [];
const radarTitleMap = {
  ref: '引用',
  koubei: '口碑',
  output: '产量',
  contribute: '贡献',
  hot: '热度',
};
radarOriginData.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key as 'ref'],
        value: item[key as 'ref'],
      });
    }
  });
});

const getChartData = (_: Request, res: Response) => {
  res.json({
    data: {
      visitData,
      visitData2,
      salesData,
      searchData,
      offlineData,
      offlineChartData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
      radarData,
    },
  });
};

export default {
  'GET  /api/project/notice': getNotice,
  'GET  /api/activities': getActivities,
  'GET  /api/fake_workplace_chart_data': getChartData,
};
