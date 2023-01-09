import { nanoid } from 'nanoid';
import IsMobile from 'is-mobile';
import { pick } from 'lodash';
import { DEFAULT_BORDER } from '@/components/InternalBorder';
import {
  DEFAULT_CONDITION_CONFIG,
  DEFAULT_GROUP_COMPONENT_TRANSFORM,
  BASIC_DEFAULT_DATA_CONFIG,
} from '@/components/ChartComponents/Common/Constants/defaultConfig';
import Theme from '../../theme/wonderland.project.json';

const isMobile = IsMobile();

export const DEFAULT_FILTER_LIST: ComponentData.TFilterConfig[] = [
  {
    id: nanoid(),
    name: '取前几项',
    code: `
      // 起始的索引
      const start = 0 
      // 结束的索引
      const end = 10
      return data.slice(start, end)
    `,
    editable: false,
    params: [],
  },
  {
    id: nanoid(),
    name: '排序(小 -> 大)',
    code: `
      // 排序的字段
      const sortKey = 'x'

      return data.sort((a, b) => {
        return a[sortKey] - b[sortKey]
      })
    `,
    editable: false,
    params: [],
  },
  {
    id: nanoid(),
    name: '排序(大 -> 小)',
    code: `
      // 排序的字段
      const sortKey = 'x'

      return data.sort((a, b) => {
        return b[sortKey] - a[sortKey]
      })
    `,
    editable: false,
    params: [],
  },
];

const DEFAULT_SCREEN_DATA: ComponentData.TScreenData = {
  name: '大屏名称',
  description: '',
  components: [],
  poster: '',
  config: {
    style: {
      width: 1920,
      height: 1080,
      padding: [0, 0],
    },
    attr: {
      poster: {
        type: 'color',
        color: {
          r: 5,
          g: 46,
          b: 36,
        },
        background: '',
        internal_background: 'GRADIENT_MIX_BACKGROUND',
      },
      request: {
        ...pick(BASIC_DEFAULT_DATA_CONFIG!.request, [
          'method',
          'headers',
          'body',
          'serviceRequest',
          'frequency',
        ]),
      },
      grid: 1,
      filter: DEFAULT_FILTER_LIST,
      params: [],
      constants: [],
      theme: {
        type: 'custom',
        value: Theme.themeName,
      },
      guideLine: {
        show: true,
        value: [],
      },
      componentBorder: {
        width: 10,
        padding: [0, 0],
      },
      lens: {
        show: false,
        hueRotate: 0,
        saturate: 100,
        brightness: 100,
        contrast: 100,
        opacity: 100,
        grayscale: 0,
      },
      scale: 'fit-height',
      waterMark: false,
    },
    flag: {
      type: isMobile ? 'H5' : 'PC',
    },
  },
};

export default DEFAULT_SCREEN_DATA;

export const DEFAULT_CONFIG: ComponentData.TBaseConfig = {
  style: {
    width: 200,
    height: 200,
    left: 0,
    top: 0,
    opacity: 1,
    rotate: 0,
    zIndex: 2,
    skew: {
      x: 0,
      y: 0,
    },
    margin: {
      y: 0,
    },
    border: {
      show: false,
      value: DEFAULT_BORDER,
    },
    // 只在组内时生效
    groupTransform: {
      rotate: {
        x: 0,
        y: 30,
        z: 0,
      },
      scale: {
        x: 1,
        y: 1,
      },
      translate: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
  },
  attr: {
    visible: true,
    lock: false,
  },
};

export const DEFAULT_GROUP_OPTIONS: any = {
  condition: DEFAULT_CONDITION_CONFIG(),
  transform: DEFAULT_GROUP_COMPONENT_TRANSFORM,
};

export const DEFAULT_GROUP_CONFIG: ComponentData.TComponentData['config'] = {
  ...DEFAULT_CONFIG,
  options: {
    ...DEFAULT_GROUP_OPTIONS,
  },
};
