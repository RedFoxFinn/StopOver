
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navigation, { Routing } from './navigation';
import store from '../controllers/redux/store';
import { GeocodeDisplayModule } from './geocodeDisplayModule';
import { InputModule } from './inputModule';
import { Itineraries } from './itineraries';

describe('navigation - unit tests', () => {
  let dummy = false;
  beforeEach(() => render(<Router><Navigation id='stopover.unit.test' /></Router>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('Navigation renders', () => {
    const component = screen.queryByTestId('stopover.unit.test');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Navigation);
    expect(component.textContent).toMatch('Reitit');
    expect(component.textContent).toMatch('Reittisuunnittelu');
  });
});

describe('routing - unit tests', () => {
  const baseid='stopover.unit.test';
  let dummy = false;
  beforeEach(() => render(<Provider store={store} >
    <Router >
      <Navigation id={`${baseid}.navigation`} />
      <Routing id={`${baseid}.routing`} />
    </Router>
  </Provider>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('routing renders', () => {
    const component = screen.queryByTestId(`${baseid}.routing`);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Routing);
  });
});

describe('routing - integration tests', () => {
  const baseid='stopover.unit.test';
  let dummy = false;
  beforeEach(() => render(<Provider store={store} >
    <Provider store={store} >
      <Router >
        <Navigation id={`${baseid}.navigation`} />
        <Routing id={`${baseid}.routing`} />
      </Router>
    </Provider>
  </Provider>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('routing "/" >> Itinerary', () => {
    const component = screen.queryByTestId(`${baseid}.routing.routes`);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Itineraries);
  });
  it('routing "/details" >> GeocodeDisplayModule', () => {
    userEvent.click(screen.getByText('Pistetiedot'));
    const component = screen.queryByTestId(`${baseid}.routing.geocode`);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, GeocodeDisplayModule);
  });
  it('routing "/planning" >> InputModule', () => {
    userEvent.click(screen.getByText('Reittisuunnittelu'));
    const component = screen.queryByTestId(`${baseid}.routing.planning`);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, InputModule);
  });
});