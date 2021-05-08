import {getApp, Facade, GetAPP, patchActions} from '@clux/react-web';
import type {ModuleGetter} from './project';

declare const process: any;
declare const ENV: any;

type APP = GetAPP<Facade<ModuleGetter>>;

export type APPState = APP['State'];
export type RouteState = APP['State']['route'];

export const {Modules, Pagenames, LoadView, GetActions, GetRouter} = getApp<APP>();

export const apiMaps: {[key: string]: string} = ENV.apiMaps || {};

if (process.env.NODE_ENV === 'production') {
  type ProxyActions = APP['Actions'];
  // 生成环境下，加上proxyPollyfill可以适配不支持proxy的低版本浏览器，以下第2个参数由cli自动生成，请勿修改
  // eslint-disable-next-line
  patchActions('ProxyActions', '{"stage":["Init","Loading","RouteParams","Update"],"mainLayout":["Init","Loading","RouteParams","Update"]}');
}
