
export function createRoute(start, end) {
  const startPoint = `${start.name}, ${start?.locality || start.administrative_area}::${start.latitude},${start.longitude}`;
  const endPoint = `${end.name}, ${end.locality ?? end.administrative_area}::${end.latitude},${end.longitude}`;
  const sp = {
    queryLocation: startPoint,
    street: start.street,
    number: start.number,
    municipality: start?.locality || start.administrative_area
  };
  const ep = {
    queryLocation: endPoint,
    street: end.street,
    number: end.number,
    municipality: end?.locality || end.administrative_area
  };
  return {
    start: sp,
    end: ep
  };
}