
export function sanitiseSeconds(seconds) {
  const m = Math.floor(seconds/60);
  const s = seconds-(m*60);
  return m >= 60 ? `~${Math.floor(m/60)}h ${m%60}min` : s >= 30 ? `~${m+1}min` : `~${m}min`;
}

export function sanitiseDistance(distance) {
  const meters = Math.floor(distance);
  return meters >= 1000 ? `${Math.round((meters/1000 + Number.EPSILON)*100)/100}km` : `${meters}m`;
}

export function sanitiseDatetime(datetimeMS) {
  const dt = new Date(datetimeMS);
  return `${dt.getHours() < 10 ? `0${dt.getHours()}` : dt.getHours()}:${dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes()}`;
}