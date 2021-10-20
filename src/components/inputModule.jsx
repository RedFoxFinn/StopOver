import React, {  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';

import { AddressInput, StartSet, EndSet } from './addressInput';
import { createRoute } from '../controllers/app/routecreator';
import { addLocalRoute } from '../controllers/app/localstorage_routes';

/**
 * InputModule is a parent component for setting up
 * user defined routes
 * 
 * It consists of two AddressInput components: start and end.
 * Once both addresses and their respective geocodes are set,
 * the Button to create the actual route will be enabled.
 * 
 * Button triggers usage of handleRouteCreation which will
 * use createRoute to build data object that contains query-ready
 * string for Apollo and necessary details for both start- and endpoints.
 * Object will be added to localStorage using addLocalRoute-function and
 * to global state management dispatching action type 'route_control/addRoute'
 * After this the notification of successful addition will be triggered.
 * Next the start- and endpoints are cleared from global state (because route is
 * already in the route_control).
 */

export const InputModule = (props) => {
  const startAddress = useSelector(state => state.start);
  const endAddress = useSelector(state => state.end);
  const dispatch = useDispatch();

  const handleRouteCreation = (event) => {
    const route = createRoute(startAddress, endAddress);
    addLocalRoute(route);
    dispatch({type: 'route_control/addRoute', route: route});
    dispatch({type: 'notification_control/setAlert', alert: {mode: 'success', message: 'Reitti luotu'}});
    dispatch({type: 'location_end/resetEnd'});
    dispatch({type: 'location_start/resetStart'});
  };

  const checkStartGeocode = () => {
    return startAddress && startAddress.geocode !== null && startAddress.geocode.hasOwnProperty('lat');
  };
  const checkEndGeocode = () => {
    return endAddress && endAddress.geocode !== null && endAddress.geocode.hasOwnProperty('lat');
  };

  return <section id={props.id} data-testid={props.id} >
    {checkStartGeocode() ? <StartSet id={`${props.id}.address-form-start`}/> : <AddressInput id={`${props.id}.address-form-start`} end={false} start={true} />}
    {checkEndGeocode() ? <EndSet id={`${props.id}.address-form-end`}/> : <AddressInput id={`${props.id}.address-form-end`} end={true} start={false} />}
    {process.env.NODE_ENV !== 'production' && <AddressInput />}
    <Button
      id={`${props.id}.generate-route`}
      data-testid={`${props.id}.generate-route`}
      variant='outlined'
      size='medium'
      color='secondary'
      disabled={!checkStartGeocode() || !checkEndGeocode()}
      onClick={handleRouteCreation}
    >Luo reitti</Button>
  </section>;
};