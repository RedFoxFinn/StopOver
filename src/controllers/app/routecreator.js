
export function createRoute(start, end) {
  if (start && start.location && start.location.address && end && end.location && end.location.address) {
    const startName = start.name ? start.name : `${start.location.address.house_number}, ${start.location.address.road}, ${start.location.address.city ?? start.location.address.town}`;
    const endName = end.name ? end.name : `${end.location.address.house_number}, ${end.location.address.road}, ${end.location.address.city ?? end.location.address.town}`;
    const startPoint = `${startName}::${start.location.lat},${start.location.lon}`;
    const endPoint = `${endName}::${end.location.lat},${end.location.lon}`;
    const sp = {
      queryLocation: startPoint,
      street: start.location.address.road,
      number: start.location.address.house_number,
      municipality: start.location.address.city ?? start.location.address.town
    };
    const ep = {
      queryLocation: endPoint,
      street: end.location.address.road,
      number: end.location.address.house_number,
      municipality: end.location.address.city ?? end.location.address.town
    };
    return {
      start: sp,
      end: ep
    };
  } else {
    return null;
  }
}