import { gql } from '@apollo/client';

export const STOPTIME_DETAILS = gql`
  fragment StoptimeDetails on Stoptime {
    serviceDay
    scheduledDeparture
    departureDelay
    realtime
    trip {
      routeShortName
      tripHeadsign
    }
  }
`;