import { gql } from '@apollo/client';

import { STOPTIME_DETAILS } from './stoptime_details';

export const STOP_DETAILS = gql`
  fragment StopDetails on Stop {
    code
    name
    gtfsId
    zoneId
    vehicleMode
    stopTimesForPatterns(omitNonPickups: true, timeRange: 1800) {
      stopTimes {
        ...StoptimeDetails
      }
    }
  }
  ${STOPTIME_DETAILS}
`;