import React, {  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';

import { AddressInput } from './addressInput';
import { createRoute } from '../controllers/app/routecreator';
import { addLocalRoute } from '../controllers/app/localstorage_routes';

export const InputModule = ({id}) => {
  const startAddress = useSelector(state => state.start);
  const endAddress = useSelector(state => state.end);
  const dispatch = useDispatch();

  const handleRouteCreation = (event) => {
    const route = createRoute(startAddress.geocode, endAddress.geocode);
    console.warn(route);
    addLocalRoute(route);
    dispatch({type: 'route_control/addRoute', route: route});
    dispatch({type: 'notification_control/setAlert', alert: {mode: 'success', message: 'Reitti luotu'}});
    dispatch({type: 'location_end/resetEnd'});
    dispatch({type: 'location_start/resetStart'});
  };

  const checkStartGeocode = () => {
    return startAddress.geocode !== null && startAddress.geocode.hasOwnProperty('latitude');
  };
  const checkEndGeocode = () => {
    return endAddress.geocode !== null && endAddress.geocode.hasOwnProperty('latitude');
  };

  return <React.Fragment>
    <AddressInput id='address-form-start' end={false} start={true} />
    <AddressInput id='address-form-end' end={true} start={false} />
    {process.env.NODE_ENV !== 'production' && <AddressInput />}
    <Button
      variant='outlined'
      size='medium'
      color='secondary'
      disabled={!checkStartGeocode() || !checkEndGeocode()}
      onClick={handleRouteCreation}
    >Luo reitti</Button>
  </React.Fragment>;
};