
export function createRoute(start, end) {
  if (start && start.address && end && end.address) {
    const startPoint = start && start.address && `${start.address.house_number}, ${start.address.road}, ${start.address.city || start.address.town}::${start.lat},${start.lon}`;
    const endPoint = end && end.address && `${end.address.house_number}, ${end.address.road}, ${end.address.city || end.address.town}::${end.lat},${end.lon}`;
    const sp = {
      queryLocation: startPoint,
      street: start.address.road,
      number: start.address.house_number,
      municipality: start.address.city || start.address.town
    };
    const ep = {
      queryLocation: endPoint,
      street: end.address.road,
      number: end.address.house_number,
      municipality: end.address.city || end.address.town
    };
    return {
      start: sp,
      end: ep
    };
  } else {
    return null;
  }
}