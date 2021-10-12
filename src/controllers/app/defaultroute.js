
/**
 * defaultroute is constant that will provide the start- and endpoint addresses
 * of the default route of the application and API calls
 */
export const start = () => {
  return {
    street: 'Soittilanmäki',
    number: '6',
    municipality: 'Espoo',
    name: 'Hotelli Nuuksio'
  };
};
export const end = () => {
  return {
    name: 'Maria 01',
    street: 'Lapinlahdenkatu',
    number: '16',
    municipality: 'Helsinki'
  };
};