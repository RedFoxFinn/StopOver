
import React from 'react';
import { useLazyQuery } from '@apollo/client';

import {ITINERARY} from '../controllers/graphql/queries/itinerary';

export const Itinerary = (props) => {
  const {route, mode} = props;
  const [loadItinerary, {called, data, error, loading}] = useLazyQuery(ITINERARY, {});
  
  return <section id={props.id} data-testid={props.id} >
    {called && loading && <p>Itinerary loading</p>}
    {called && error && <p>Itinerary loading failed</p>}
    {called && data && <p>Itinerary loaded</p>}
    {!called && <p>Itinerary loading not initialized</p>}
  </section>;
};