
import {appid} from '../../../package.json';

export function getUseDefaultRoute() {
  return localStorage.getItem(`${appid}.setting.def_route`) ?? true;
}

export function setUseDefaultRoute(setting = true) {
  localStorage.setItem(`${appid}.setting.def_route`, setting);
}