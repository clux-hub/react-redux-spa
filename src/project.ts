import {createRouteModule, DeepPartial} from '@clux/react-web';
import * as StageModule from './modules/stage';

const defaultRouteParams = {
  route: {},
  stage: {},
  mainLayout: {},
};

type RouteParams = typeof defaultRouteParams;
type PartialRouteParams = DeepPartial<RouteParams>;

const pagenameMap = {
  '/photos': {
    argsToParams() {
      const pathParams: PartialRouteParams = {stage: {}, mainLayout: {}};
      return pathParams;
    },
    paramsToArgs() {
      return [];
    },
  },
};

// 定义模块的加载方案，同步或者异步均可
export const moduleGetter = {
  route: () =>
    createRouteModule(defaultRouteParams, pagenameMap, {
      in(nativeLocation) {
        let pathname = nativeLocation.pathname;
        if (pathname === '/') {
          pathname = '/photos/list';
        }
        return {...nativeLocation, pathname};
      },
      out(nativeLocation) {
        return nativeLocation;
      },
    }),
  stage: () => {
    return StageModule;
  },
  mainLayout: () => {
    return import('./modules/mainLayout');
  },
};

export type ModuleGetter = typeof moduleGetter;
