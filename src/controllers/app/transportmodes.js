
export function mode(transportmode) {
  switch (transportmode) {
  case 'BICYCLE': return 'fillarilla';
  case 'BUS': return 'bussilla';
  case 'CAR': return 'autolla';
  case 'FERRY': return 'suokin lautalla';
  case 'RAIL': return 'lähijunalla';
  case 'SUBWAY': return 'metrolla';
  case 'TRAM': return 'spåralla';
  case 'TRANSIT': return 'oletus';
  case 'WALK': return 'kävellen';
  default: return 'oletus';
  }
}