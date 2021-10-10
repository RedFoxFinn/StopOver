import { gql } from '@apollo/client';

export const STOP = gql`
  query stop($id: String!) {
    stop(id: $id) {
      name
      lat
      lon
    }
  }
`;