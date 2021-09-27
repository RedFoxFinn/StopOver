import { gql } from '@apollo/client';

import { STOP_DETAILS } from './stop_details';

export const LEG_DETAILS = gql`
  fragment LegDetails on Leg {
    mode
    startTime
    endTime
    from {
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