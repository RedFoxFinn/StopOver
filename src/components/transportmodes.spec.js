import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act, isCompositeComponentWithType } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import ToggleButton from '@mui/material/ToggleButton';

import store from '../controllers/redux/store';
import { Transportmodes } from './transportmodes';

describe('transportmodes - unit tests', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('InputModule renders', () => {
    render(<Provider store={store}><Transportmodes id='stopover.unit.test' /></Provider>);
    const component = screen.queryByTestId('stopover.unit.test');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Transportmodes);
    expect(component.textContent).toMatch('Valitse kulkukeinot');
    expect(component.textContent).toMatch('Kaikki kulkukeinot');
    expect(component.textContent).toMatch('Pyörä');
    expect(component.textContent).toMatch('Bussi');
    expect(component.textContent).toMatch('Auto');
    expect(component.textContent).toMatch('Lautta');
    expect(component.textContent).toMatch('Juna');
    expect(component.textContent).toMatch('Metro');
    expect(component.textContent).toMatch('Ratikka');
    expect(component.textContent).toMatch('Kävely');
  });
});

describe('transportmodes - integration tests', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('transportmodes - state', () => {
    render(<Provider store={store}><Transportmodes id='stopover.integration.test' /></Provider>);
    const component = screen.queryByTestId('stopover.integration.test');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Transportmodes);
    let preferences = store.getState().preferences;
    expect(preferences.all).toBe(true);
    expect(preferences.bicycle).toBe(false);
    expect(preferences.bus).toBe(false);
    expect(preferences.ferry).toBe(false);
    expect(preferences.metro).toBe(false);
    expect(preferences.tram).toBe(false);
    expect(preferences.rail).toBe(false);
    expect(preferences.walk).toBe(false);
    const all = within(component).getByText('Kaikki kulkukeinot');
    const bicycle = within(component).getByText('Pyörä');
    const car = within(component).getByText('Auto');
    const bus = within(component).getByText('Bussi');
    const ferry = within(component).getByText('Lautta');
    const metro = within(component).getByText('Metro');
    const rail = within(component).getByText('Juna');
    const tram = within(component).getByText('Ratikka');
    const walk = within(component).getByText('Kävely');
    expect(all).toBeTruthy();
    expect(bicycle).toBeTruthy();
    expect(bus).toBeTruthy();
    expect(car).toBeTruthy();
    expect(ferry).toBeTruthy();
    expect(metro).toBeTruthy();
    expect(tram).toBeTruthy();
    expect(rail).toBeTruthy();
    expect(walk).toBeTruthy();
    isCompositeComponentWithType(all, ToggleButton);
    isCompositeComponentWithType(bicycle, ToggleButton);
    isCompositeComponentWithType(bus, ToggleButton);
    isCompositeComponentWithType(car, ToggleButton);
    isCompositeComponentWithType(ferry, ToggleButton);
    isCompositeComponentWithType(metro, ToggleButton);
    isCompositeComponentWithType(tram, ToggleButton);
    isCompositeComponentWithType(rail, ToggleButton);
    isCompositeComponentWithType(walk, ToggleButton);
    
    act(() => {
    });
    setTimeout(() => {
    }, 3500);
  });
});
