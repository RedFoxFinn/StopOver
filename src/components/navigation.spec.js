
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation, { Routing } from './navigation';

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
  const history = createMemoryHistory();
  beforeEach(() => render(<Router history={history}>
    <Navigation id={`${baseid}.navigation`} />
    <Routing id={`${baseid}.routing`} />
  </Router>));
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