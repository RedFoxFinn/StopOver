
export function createRoute(start, end) {
  if (start && start.geocode && start.geocode.address && end && end.geocode && end.geocode.address) {
    const startName = start.name ? start.name : `${start.geocode.address.road}, ${start.geocode.address.house_number || start.number}, ${start.geocode.address.city ?? start.geocode.address.town}`;
    const endName = end.name ? end.name : `${end.geocode.address.road}, ${end.geocode.address.house_number || end.number}, ${end.geocode.address.city ?? end.geocode.address.town}`;
    const startPoint = `${startName}::${start.geocode.lat},${start.geocode.lon}`;
    const endPoint = `${endName}::${end.geocode.lat},${end.geocode.lon}`;
    const sp = {
      queryLocation: startPoint,
      name: startName,
      street: start.geocode.address.road,
      number: start.geocode.address.house_number ?? start.number,
      municipality: start.geocode.address.city ?? start.geocode.address.town
    };
    const ep = {
      queryLocation: endPoint,
      name: endName,
      street: end.geocode.address.road,
      number: end.geocode.address.house_number ?? end.number,
      municipality: end.geocode.address.city ?? end.geocode.address.town
    };
    return {
      start: sp,
      end: ep
    };
  } else {
    return null;
  }
}