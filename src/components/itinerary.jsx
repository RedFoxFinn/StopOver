
import React from 'react';
import { useLazyQuery } from '@apollo/client';

import {ITINERARY} from '../controllers/graphql/queries/itinerary';

export const Itinerary = (props) => {
  const {} = props;
  const [loadItinerary, {called, data, error, loading}] = useLazyQuery(ITINERARY, {});
  if (called) {
    if (loading) {
      return <p>Itinerary loading</p>;
    } else if (error) {
      return <p>Itinerary loading failed</p>;
    } else {
      return <p>Itinerary loaded</p>;
    }
  } else {
    return <p>Itinerary loading not initialized</p>;
  }
};