import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import ToggleButton from '@mui/material/ToggleButton';

import { modes } from './itineraries';
import { client } from '../controllers/graphql/client';
import store from '../controllers/redux/store';
import { Itinerary } from './itinerary';
import { start, end } from '../controllers/app/defaultroute';
import { createRoute } from '../controllers/app/routecreator';
import { ax, API_BASE_URL, NOMINATIM_API_ADDRESS_QUERY } from '../controllers/app/api';

describe('itinerary - unit tests', () => {
  let startGC;
  let endGC;
  let route;
  let dummy = false;
  beforeAll(async () => {
    const startPoint = start();
    const endPoint = end();
    if (startPoint.street && startPoint.number && startPoint.municipality && startPoint.name &&
      endPoint.street && endPoint.number && endPoint.municipality && endPoint.name) {
      await ax.get(`${API_BASE_URL()}${NOMINATIM_API_ADDRESS_QUERY(startPoint.street, startPoint.number, startPoint.municipality)}`)
        .then((response) => {
          const {data} = response;
          if (data.length > 0 && data[0]?.lat && data[0]?.address) {
            startGC = {name: startPoint.name, geocode: data[0]};
          }
        })
        .catch((error) => {
          console.warn(error.message);
        }).then(async () => await ax.get(`${API_BASE_URL()}${NOMINATIM_API_ADDRESS_QUERY(endPoint.street, endPoint.number, endPoint.municipality)}`)
          .then((response) => {
            const {data} = response;
            if (data.length > 0 && data[0]?.lat && data[0]?.address) {
              endGC = {name: endPoint.name, geocode: data[0]};
            }
          })
          .catch((error) => {
            console.warn(error.message);
          })).finally(() => route = startGC && endGC ? createRoute(startGC, endGC) : null);
    } else {
      route = null;
    }
  });
  beforeEach(() => render(<Provider store={store}><ApolloProvider client={client} >
    <Itinerary id='stopover.unit.test' route={route} mode={modes.DEFAULT} />
  </ApolloProvider></Provider>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('itinerary renders', () => {
    const component = screen.queryByTestId('stopover.unit.test');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Itinerary);
  });
  it('default route', () => {
    const component = screen.queryByTestId('stopover.unit.test');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Itinerary);
    expect(component.textContent).toMatch('Itinerary loading');
    setTimeout(() => {
      expect(component.textContent).toMatch('Hotelli');
      expect(component.textContent).toMatch('Nuuksio');
      expect(component.textContent).toMatch('Hotelli Nuuksio');
      expect(component.textContent).toMatch('Maria');
      expect(component.textContent).toMatch('01');
      expect(component.textContent).toMatch('Maria 01');
      expect(component.textContent).toMatch('Hotelli Nuuksio - Maria 01');
      expect(component.textContent).toMatch('Lähtöaika:');
      expect(component.textContent).toMatch('Saapumisaika:');
      expect(component.textContent).toMatch('Kävelyä:');
      expect(component.textContent).toMatch('Matkan pituus:');
      expect(component.textContent).toMatch('Matka-aika:');
      expect(component.textContent).toMatch('Pysäkki:');
      expect(component.textContent).toMatch('Pysäkkitunnus:');
      expect(component.textContent).toMatch('Linja:');
      expect(component.textContent).toMatch('Asema:');
      expect(component.textContent).toMatch('Laituri:');
      expect(component.textContent).toMatch('WALK');
      expect(component.textContent).toMatch('BUS');
    }, 1500);
  });
});