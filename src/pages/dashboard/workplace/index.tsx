import { Radar } from '@ant-design/plots';
import { PageContainer } from '@ant-design/pro-components';
import { Link, useRequest } from '@umijs/max';
import { Avatar, Card, Col, List, Row, Skeleton, Statistic } from 'antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { FC } from 'react';
import EditableLinkGroup from './components/EditableLinkGroup';
import type { ActivitiesType, CurrentUser } from './data.d';
import { fakeChartData, queryActivities, queryProjectNotice } from './service';
import useStyles from './style.style';
import { useResponsive } from '@/utils/responsive';

dayjs.extend(relativeTime);

const links = [
  {
    title: '项目管理',
    href: '/projects',
  },
  {
    title: '数据统计',
    href: '/statistics',
  },
  {
    title: '报告生成',
    href: '/reports',
  },
  {
    title: '知识文库',
    href: '/knowledge',
  },
  {
    title: '团队协作',
    href: '',
  },
  {
    title: '系统设置',
    href: '',
  },
];
const PageHeaderContent: FC<{
  currentUser: Partial<CurrentUser>;
}> = ({ currentUser }) => {
  const { styles } = useStyles();
  const loading = currentUser && Object.keys(currentUser).length;
  if (!loading) {
    return (
      <Skeleton
        avatar
        paragraph={{
          rows: 1,
        }}
        active
      />
    );
  }
  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.avatar}>
        <Avatar size="large" src={currentUser.avatar} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          早安，
          {currentUser.name}
          ，祝你开心每一天！
        </div>
        <div>
          {currentUser.title} | {currentUser.group}
        </div>
      </div>
    </div>
  );
};
const ExtraContent: FC<Record<string, any>> = () => {
  const { styles } = useStyles();
  return (
    <div className={styles.extraContent}>
      <div className={styles.statItem}>
        <Statistic title="项目总数" value={56} suffix="个" />
      </div>
      <div className={styles.statItem}>
        <Statistic title="团队成员" value={7} suffix="人" />
      </div>
      <div className={styles.statItem}>
        <Statistic title="总成交额" value={2223} suffix="万" />
      </div>
    </div>
  );
};
const Workplace: FC = () => {
  const { styles } = useStyles();
  const { isMobile, isTablet } = useResponsive();

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
      memberLink: '',
    },
    {
      id: 'xxx2',
      title: '北京大学智慧校园系统',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      description: '智慧校园一体化解决方案，涵盖教务、学工、后勤等多个系统',
      updatedAt: new Date('2024-10-15'),
      member: '定制项目组',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx3',
      title: '复旦大学数字图书馆',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      description: '数字图书馆系统，支持在线阅读、借阅管理、资源检索',
      updatedAt: new Date(),
      member: '定制项目组',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx4',
      title: '上海交通大学选课系统',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      description: '新一代选课系统，支持智能推荐、冲突检测、容量管理',
      updatedAt: new Date('2024-10-20'),
      member: '定制项目组',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx5',
      title: '浙江大学实验室管理',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      description: '实验室综合管理平台，包含设备管理、预约系统、安全监控',
      updatedAt: new Date('2024-10-18'),
      member: '定制项目组',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx6',
      title: '南京大学学生管理系统',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      description: '学生信息管理系统，支持学籍管理、成绩管理、奖惩记录',
      updatedAt: new Date('2024-10-22'),
      member: '定制项目组',
      href: '',
      memberLink: '',
    },
  ];

  const activitiesLoading = false;
  const activities = [
    {
      id: 'trend-1',
      updatedAt: new Date(),
      user: {
        name: '曲丽丽',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
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
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
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
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
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
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
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
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
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
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
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
  ];

  // 雷达图数据
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

  const radarTitleMap: Record<string, string> = {
    ref: '引用',
    koubei: '口碑',
    output: '产量',
    contribute: '贡献',
    hot: '热度',
  };

  const radarData: any[] = [];
  radarOriginData.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (key !== 'name') {
        radarData.push({
          name: item.name,
          label: radarTitleMap[key],
          value: item[key as keyof typeof item],
        });
      }
    });
  });

  const data = { radarData };
  const renderActivities = (item: ActivitiesType) => {
    const events = item.template.split(/@\{([^{}]*)\}/gi).map((key) => {
      if (item[key as keyof ActivitiesType]) {
        const value = item[key as 'user'];
        return (
          <a href={value?.link} key={value?.name}>
            {value.name}
          </a>
        );
      }
      return key;
    });
    return (
      <List.Item key={item.id}>
        <List.Item.Meta
          avatar={<Avatar src={item.user.avatar} />}
          title={
            <span>
              <a className={styles.username}>{item.user.name}</a>
              &nbsp;
              <span className={styles.event}>{events}</span>
            </span>
          }
          description={
            <span className={styles.datetime} title={item.updatedAt}>
              {dayjs(item.updatedAt).fromNow()}
            </span>
          }
        />
      </List.Item>
    );
  };

  return (
    <PageContainer
      content={
        <PageHeaderContent
          currentUser={{
            avatar:
              'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            name: '白宇堃',
            userid: '00000001',
            email: 'antdesign@alipay.com',
            signature: '海纳百川，有容乃大',
            title: '前端开发工程师',
            group: '傲博教育-定制项目组-前端开发工程师',
          }}
        />
      }
      extraContent={<ExtraContent />}
    >
      <Row gutter={isMobile ? [12, 12] : 24} className="mobile-gutter">
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <Card
            className={`${styles.projectList} mobile-card`}
            style={{
              marginBottom: isMobile ? 12 : 24,
            }}
            title="进行中的项目"
            variant="borderless"
            extra={<Link to="/projects">全部项目</Link>}
            loading={projectLoading}
          >
            {projectNotice.map((item) => (
              <Card.Grid className={styles.projectGrid} key={item.id}>
                <Card.Meta
                  title={
                    <div className={styles.cardTitle}>
                      <Avatar size="small" src={item.logo} />
                      <Link to={item.href || '/'}>{item.title}</Link>
                    </div>
                  }
                  description={item.description}
                  style={{
                    width: '100%',
                  }}
                />
                <div className={styles.projectItemContent}>
                  <Link to={item.memberLink || '/'}>{item.member || ''}</Link>
                  {item.updatedAt && (
                    <span className={styles.datetime} title={item.updatedAt}>
                      {dayjs(item.updatedAt).fromNow()}
                    </span>
                  )}
                </div>
              </Card.Grid>
            ))}
          </Card>
          <Card
            styles={{
              body: {
                padding: activitiesLoading ? (isMobile ? 12 : 16) : 0,
              },
            }}
            variant="borderless"
            className={`${styles.activeCard} mobile-card`}
            title="动态"
            loading={activitiesLoading}
          >
            <List<ActivitiesType>
              loading={activitiesLoading}
              renderItem={(item) => renderActivities(item)}
              dataSource={activities}
              className={`${styles.activitiesList} mobile-list`}
              size={isMobile ? 'small' : 'large'}
            />
          </Card>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{
              marginBottom: isMobile ? 12 : 24,
            }}
            className="mobile-card"
            title="便捷导航"
            variant="borderless"
          >
            <EditableLinkGroup
              onAdd={() => {}}
              links={links}
              linkElement={Link}
            />
          </Card>
          <Card
            style={{
              marginBottom: isMobile ? 12 : 24,
            }}
            className="mobile-card"
            variant="borderless"
            title="团队能力指数"
            loading={data?.radarData?.length === 0}
          >
            <Radar
              height={isMobile ? 250 : 343}
              data={data?.radarData || []}
              xField="label"
              colorField="name"
              yField="value"
              shapeField="smooth"
              area={{
                style: {
                  fillOpacity: 0.4,
                },
              }}
              axis={{
                y: {
                  gridStrokeOpacity: 0.5,
                },
              }}
              legend={{
                color: {
                  position: 'bottom',
                  layout: { justifyContent: 'center' },
                },
              }}
            />
          </Card>
          <Card
            styles={{
              body: {
                paddingTop: 12,
                paddingBottom: 12,
              },
            }}
            variant="borderless"
            title="团队"
            loading={projectLoading}
          >
            <div className={styles.members}>
              <Row gutter={48}>
                {projectNotice.map((item) => {
                  return (
                    <Col span={12} key={`members-item-${item.id}`}>
                      <a>
                        <Avatar src={item.logo} size="small" />
                        <span className={styles.member}>
                          {item.member.substring(0, 3)}
                        </span>
                      </a>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};
export default Workplace;
