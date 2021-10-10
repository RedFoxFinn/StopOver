
import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import {ITINERARY} from '../controllers/graphql/queries/itinerary';
import { STOP } from '../controllers/graphql/queries/stop';

export const Itinerary = (props) => {
  const {start, end} = props.route;
  const options = {
    query: ITINERARY,
    variables: {
      fromPlace: start.queryLocation,
      toPlace: end.queryLocation,
      numItineraries: 3,
      minTransferTime: 2
    },
    pollInterval: 30000
  };
  const [loadItinerary, {called, data, error, loading}] = useLazyQuery(ITINERARY, options);
  // const [loadStop, {called, data, error, loading}] = useLazyQuery(STOP, {variables: {id: 'HSL:1173434'}});

  useEffect(() => {
    start && end && !called && loadItinerary();
    data && console.warn(data);
    error && console.warn(error);
  }, []);
  
  return <section id={props.id} data-testid={props.id} >
    {called && loading && <p>Itinerary loading</p>}
    {called && error && <p>Itinerary loading failed</p>}
    {called && data && <p>Itinerary loaded</p>}
    {!called && <p>Itinerary loading not initialized</p>}
  </section>;
};