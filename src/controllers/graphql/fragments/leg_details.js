import { gql } from '@apollo/client';

import { STOP_DETAILS } from './stop_details';

export const LEG_DETAILS = gql`
  fragment LegDetails on Leg {
    mode
    startTime
    endTime
    duration
    distance
    trip {
      tripHeadsign
      route {
        shortName
        longName
      }
    }
    from {
      lat
      lon
      name
      stop {
        ...StopDetails
      }
    }
    to {
      lat
      lon
      name
      stop {
        ...StopDetails
      }
    }
  }
  ${STOP_DETAILS}
`;