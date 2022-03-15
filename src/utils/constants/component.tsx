import {
  InteractionOutlined,
  AreaChartOutlined,
  FontColorsOutlined,
  FundProjectionScreenOutlined,
  CompassOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import classnames from 'classnames';

const commonClass: string = classnames('ac-i-size-m');

export const COMPONENT_TYPE_LIST = [
  {
    type: 'chart',
    icon: <AreaChartOutlined className={classnames(commonClass)} />,
    title: '图表',
    children: [
      {
        type: 'bar',
        title: '柱形图',
        children: [
          {
            type: 'BAR_BASIC',
            title: '基础柱形图',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
      {
        type: 'line',
        title: '折现图',
        children: [
          {
            type: 'LINE_BASIC',
            title: '基础折线图',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
      {
        type: 'pie',
        title: '饼图',
        children: [
          {
            type: 'PIE_BASIC',
            title: '基础饼图',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
      {
        type: 'scatter',
        title: '散点图',
        children: [
          {
            type: 'SCATTER_BASIC',
            title: '基础散点图',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
      {
        type: 'radar',
        title: '雷达图',
        children: [
          {
            type: 'RADAR_BASIC',
            title: '基础雷达图',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
      {
        type: 'box-plot',
        title: '盒须图',
        children: [
          {
            type: 'BOX_PLOT_BASIC',
            title: '基础盒须图',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
      {
        type: 'funnel',
        title: '漏斗图',
        children: [
          {
            type: 'FUNNEL_BASIC',
            title: '基础漏斗图',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
      {
        type: 'gauge',
        title: '仪表盘',
        children: [
          {
            type: 'GAUGE_BASIC',
            title: '基础仪表盘',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
      {
        type: 'tree-map',
        title: '矩形树图',
        children: [
          {
            type: 'TREE_MAP_BASIC',
            title: '基础矩形树图',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
      {
        type: 'sub-burst',
        title: '旭日图',
        children: [
          {
            type: 'SUN_BURST_BASIC',
            title: '基础旭日图',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
      {
        type: 'pictorial-bar',
        title: '象形图',
        children: [
          {
            type: 'PICTORIAL_BAR_BASIC',
            title: '象形柱图',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
      {
        type: 'parallel',
        title: '平行坐标系',
        children: [
          {
            type: 'PARALLEL_BASIC',
            title: '基础平行坐标系',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
    ],
  },
  {
    type: 'font',
    title: '文本',
    icon: <FontColorsOutlined className={classnames(commonClass)} />,
    children: [
      {
        type: 'text',
        title: '文字',
        children: [
          {
            type: 'TITLE',
            title: '标题',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
          {
            type: 'TIME_MACHINE',
            title: '时间器',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
          {
            type: 'COUNT_UP_NUMBER',
            title: '数字翻牌器',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
    ],
  },
  {
    type: 'media',
    title: '媒体',
    icon: <FundProjectionScreenOutlined className={classnames(commonClass)} />,
    children: [
      {
        type: 'media',
        title: '媒体',
        children: [
          {
            type: 'IMAGE',
            title: '图片',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
          {
            type: 'VIDEO',
            title: '视频',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
          {
            type: 'CAROUSEL',
            title: '轮播图',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
    ],
  },
  {
    type: 'map',
    title: '地图',
    icon: <CompassOutlined className={classnames(commonClass)} />,
    children: [],
  },
  {
    type: 'other',
    title: '其他',
    icon: <AppstoreOutlined className={classnames(commonClass)} />,
    children: [
      {
        type: 'other',
        title: '其他',
        children: [
          {
            type: 'WORD_CLOUD_BASIC',
            title: '词云',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
          {
            type: 'IFRAME',
            title: 'iframe',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
    ],
  },
  {
    type: 'interactive',
    title: '联动',
    icon: <InteractionOutlined className={classnames(commonClass)} />,
    children: [
      {
        type: 'interactive',
        title: '联动',
        children: [
          {
            type: 'TAB',
            title: 'Tab标签',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
          {
            type: 'SELECT',
            title: '下拉框',
            icon: 'https://t11.baidu.com/it/u=3568834696,3961759073&fm=58',
            description: '',
          },
        ],
      },
    ],
  },
];
