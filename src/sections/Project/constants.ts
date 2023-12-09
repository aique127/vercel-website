import { projectListProps } from './index';
import  Mitrade1 from '@/assets/images/mitrade1.png';
import Mitrade2 from '@/assets/images/mitrade2.png';
import Fxb from '@/assets/images/fengxiangbiao.png';
// import Fzyl from '@/assets/images/fengzhi.png';

const thumb = 'https://dummyimage.com/832x540/000/fff.png&text=loading';

export const projectList:projectListProps[] = [
  {
    projectId: 1,
    img: Mitrade1,
    alt: '交易平台 Mitrade',
    title: '交易平台 Mitrade',
    desc: '通过Mitrade平台，您可以投资、交易更广泛的国际金融市场，涵盖股票、指数、商品、外汇等数百个热门品种。不仅限于体验友好的手机版和网页版交易平台，Mitrade还为您提供有竞争力的交易成本、快速的交易执行、优秀的客户服务和丰富的资讯支持，助力您及时把握投资、交易的良机。',
    tech: 'web',
    href: 'https://app.mitrade.com/',
    technical: ['Vue', 'ElementUI', 'Scss', 'Webpack'],
    imagesArr: [{ thumb, url: Mitrade2, alt: 'Mitrade'}]
  },
  {
    projectId: 2,
    img: Fxb,
    alt: '丰向标',
    title: '丰向标',
    desc: '供应链全链路中心、经营分析、大屏监控、数据中心四大部分。能够支持不同类型企业的供应链运营监控任务，辅助高层决策、辅助中策运营管理，实时跟进供应链运营状态、发现问题、预警风险。支持供应链一单到底的全流程跟踪，在质量、时效、效能、成本、归因等方面助力分析，引入人工智能辅助进行深度解析，生成对应的数据报表和报告，以热力图、流向图、状态图、指标图表等形式大屏显示。',
    tech: 'web',
    href: 'https://saas-data.sf-express.com/',
    technical: ['Vue', 'ElementUI', 'Scss', 'Webpack', 'Echarts', 'Npm'],
    imagesArr: [{ thumb, url: Fxb, alt: 'PISX'}]
  }
  // {
  //   projectId: 3,
  //   img: Fzyl,
  //   alt: '丰智云链',
  //   title: '丰智云链 - 供应链全场景解决方案',
  //   desc: '物流中台、数字化仓储、智慧仓储等功能，是整个供应链交付执行的核心系统。整体建设内容包括TMS运输管理系统、WMS仓储管理系统、BMS结算管理系统等多个子系统，助力企业实现产业数智化升级。',
  //   tech: 'web',
  //   href: 'https://saas-tenant.sf-express.com/',
  //   technical: ['Vue', 'React', 'Qiankun', 'Webpack', 'ElementUI', 'Antdesign'],
  //   imagesArr: [
  //     { thumb, url: Fzyl, alt: 'FS-com'}
  //   ],
  // }
]