
import {appid} from '../../../package.json';

export function getRoutes() {
  const localroutes = JSON.parse(localStorage.getItem(`${appid}.routes`));
  return localroutes ? localroutes : null;
}

export function setRoutes(routes) {
  localStorage.setItem(`${appid}.routes`, JSON.stringify(routes));
}

export function addLocalRoute(newRoute) {
  let localsToSet = [];
  const localsSet = JSON.parse(localStorage.getItem(`${appid}.routes`));
  if (localsSet !== null && localsSet.length > 0) {
    localsSet.map((route) => {
      route.hasOwnProperty('latitude') && localsToSet.append(route);
    });
  }
  localsToSet = [...localsToSet, newRoute];
  localStorage.setItem(`${appid}.routes`, JSON.stringify(localsToSet));
}

export function resetRoutes() {
  localStorage.removeItem(`${appid}.routes`);
}