import { gql } from '@apollo/client';

export const STOP_DETAILS = gql`
  fragment StopDetails on Stop {
    code
    platformCode
    name
    zoneId
  }
`;