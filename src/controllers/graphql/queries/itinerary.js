import { gql } from '@apollo/client';

import { ITINERARY_DETAILS } from '../fragments/itinerary_details';
import TransportMode from '../types/transportmode.graphql';

export const ITINERARY = gql`
  query plan(
      $fromPlace: String!,
      $toPlace: String!,
      $numItineraries: Int,
      $walkSpeed: Float,
      $walkReluctance: Float,
      $walkBoardCost: Int,
      $minTransferTime: Int,
      $date: String,
      $time: String,
      $transportModes: [TransportMode]
  ) {
    plan(
      fromPlace: $fromPlace,
      toPlace: $toPlace,
      numItineraries: $numItineraries,
      walkSpeed: $walkSpeed,
      walkReluctance: $walkReluctance,
      walkBoardCost: $walkBoardCost,
      minTransferTime: $minTransferTime,
      date: $date,
      time: $time,
      transportModes: $transportModes
    ) {
      ...ItineraryDetails
    }
  }
  ${ITINERARY_DETAILS}
`;