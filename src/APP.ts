import {getApp, Facade, GetAPP, patchActions} from '@clux/react-web';
import type {ModuleGetter} from './project';

type APP = GetAPP<Facade<ModuleGetter>>;

export type APPState = APP['State'];
export type RouteState = APP['State']['route'];

export const {Modules, Pagenames, LoadView, GetActions, GetRouter} = getApp<APP>();

export const apiMaps: {[key: string]: string} = {};

declare const process: any;

if (process.env.NODE_ENV === 'production') {
  type ProxyActions = APP['Actions'];
  // 生成环境下，加上proxyPollyfill可以适配不支持proxy的低版本浏览器，以下第2个参数由cli自动生成，请勿修改
  // eslint-disable-next-line
  patchActions(
    'ProxyActions',
    '{"app":["Init","Loading","RouteParams","Update","initState"],"mainLayout":["Init","Loading","RouteParams","Update","initState"],"photos":["Init","Loading","RouteParams","Update","fetchList","initState","putList"]}'
  );
}
