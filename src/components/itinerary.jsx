
import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useSelector } from 'react-redux';

import {ITINERARY} from '../controllers/graphql/queries/itinerary';

/**
 * ADD NEXT: TRANSPORT MODES
 */

export const Itinerary = (props) => {
  const {
    all,
    bus,
    bicycle,
    car,
    ferry,
    rail,
    subway,
    tram,
    walk
  } = useSelector(state => state.preferences);
  function getModes() {
    let modes = [];
    if (all) {
      return [];
    } else {
      bus && modes.push({mode: 'BUS'});
      bicycle && modes.push({mode: 'BICYCLE'});
      car && modes.push({mode: 'CAR'});
      ferry && modes.push({mode: 'FERRY'});
      rail && modes.push({mode: 'RAIL'});
      subway && modes.push({mode: 'SUBWAY'});
      tram && modes.push({mode: 'TRAM'});
      walk && modes.push({mode: 'WALK'});
      return modes.length > 0 ? modes : [];
    }
  }
  const {start, end} = props.route;
  const options = {
    query: ITINERARY,
    variables: {
      fromPlace: start.queryLocation,
      toPlace: end.queryLocation,
      numItineraries: 3,
      minTransferTime: 2,
      transportModes: getModes()
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