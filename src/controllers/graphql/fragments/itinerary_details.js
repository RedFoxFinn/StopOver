import { gql } from '@apollo/client';

import { LEG_DETAILS } from './leg_details';

export const ITINERARY_DETAILS = gql`
  fragment ItineraryDetails on Itinerary {
    startTime
    endTime
    walkDistance
    duration
    legs {
      ...LegDetails
    }
  }
  ${LEG_DETAILS}
`;