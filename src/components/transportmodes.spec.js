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
  beforeEach(() => render(<Provider store={store}><Transportmodes id='stopover.unit.test' /></Provider>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('transportmodes renders', () => {
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
  it('transportmodes - bicycle', () => {
    const bicycle = screen.queryByTestId('stopover.unit.test.bicycle');
    expect(bicycle).toBeTruthy();
    isCompositeComponentWithType(bicycle, ToggleButton);
    let state_preferences = store.getState().preferences;
    expect(state_preferences.all).toBe(true);
    expect(state_preferences.bicycle).toBe(false);
    act(() => userEvent.click(bicycle));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(false);
      expect(state_preferences.bicycle).toBe(true);
    }, 500);
    act(() => userEvent.click(bicycle));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(true);
      expect(state_preferences.bicycle).toBe(false);
    }, 500);
  });
  it('transportmodes - bus', () => {
    const bus = screen.queryByTestId('stopover.unit.test.bus');
    expect(bus).toBeTruthy();
    isCompositeComponentWithType(bus, ToggleButton);
    let state_preferences = store.getState().preferences;
    expect(state_preferences.all).toBe(true);
    expect(state_preferences.bus).toBe(false);
    act(() => userEvent.click(bus));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(false);
      expect(state_preferences.bus).toBe(true);
    }, 500);
    act(() => userEvent.click(bus));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(true);
      expect(state_preferences.bus).toBe(false);
    }, 500);
  });
  it('transportmodes - car', () => {
    const car = screen.queryByTestId('stopover.unit.test.car');
    expect(car).toBeTruthy();
    isCompositeComponentWithType(car, ToggleButton);
    let state_preferences = store.getState().preferences;
    expect(state_preferences.all).toBe(true);
    expect(state_preferences.car).toBe(false);
    act(() => userEvent.click(car));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(false);
      expect(state_preferences.car).toBe(true);
    }, 500);
    act(() => userEvent.click(car));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(true);
      expect(state_preferences.car).toBe(false);
    }, 500);
  });
  it('transportmodes - ferry', () => {
    const ferry = screen.queryByTestId('stopover.unit.test.ferry');
    expect(ferry).toBeTruthy();
    isCompositeComponentWithType(ferry, ToggleButton);
    let state_preferences = store.getState().preferences;
    expect(state_preferences.all).toBe(true);
    expect(state_preferences.ferry).toBe(false);
    act(() => userEvent.click(ferry));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(false);
      expect(state_preferences.ferry).toBe(true);
    }, 500);
    act(() => userEvent.click(ferry));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(true);
      expect(state_preferences.ferry).toBe(false);
    }, 500);
  });
  it('transportmodes - metro', () => {
    const metro = screen.queryByTestId('stopover.unit.test.subway');
    expect(metro).toBeTruthy();
    isCompositeComponentWithType(metro, ToggleButton);
    let state_preferences = store.getState().preferences;
    expect(state_preferences.all).toBe(true);
    expect(state_preferences.subway).toBe(false);
    act(() => userEvent.click(metro));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(false);
      expect(state_preferences.subway).toBe(true);
    }, 500);
    act(() => userEvent.click(metro));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(true);
      expect(state_preferences.subway).toBe(false);
    }, 500);
  });
  it('transportmodes - rail', () => {
    const rail = screen.queryByTestId('stopover.unit.test.rail');
    expect(rail).toBeTruthy();
    isCompositeComponentWithType(rail, ToggleButton);
    let state_preferences = store.getState().preferences;
    expect(state_preferences.all).toBe(true);
    expect(state_preferences.rail).toBe(false);
    act(() => userEvent.click(rail));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(false);
      expect(state_preferences.rail).toBe(true);
    }, 500);
    act(() => userEvent.click(rail));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(true);
      expect(state_preferences.rail).toBe(false);
    }, 500);
  });
  it('transportmodes - tram', () => {
    const tram = screen.queryByTestId('stopover.unit.test.tram');
    expect(tram).toBeTruthy();
    isCompositeComponentWithType(tram, ToggleButton);
    let state_preferences = store.getState().preferences;
    expect(state_preferences.all).toBe(true);
    expect(state_preferences.tram).toBe(false);
    act(() => userEvent.click(tram));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(false);
      expect(state_preferences.tram).toBe(true);
    }, 500);
    act(() => userEvent.click(tram));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(true);
      expect(state_preferences.tram).toBe(false);
    }, 500);
  });
  it('transportmodes - walk', () => {
    const walk = screen.queryByTestId('stopover.unit.test.walk');
    expect(walk).toBeTruthy();
    isCompositeComponentWithType(walk, ToggleButton);
    let state_preferences = store.getState().preferences;
    expect(state_preferences.all).toBe(true);
    expect(state_preferences.walk).toBe(false);
    act(() => userEvent.click(walk));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(false);
      expect(state_preferences.walk).toBe(true);
    }, 500);
    act(() => userEvent.click(walk));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(true);
      expect(state_preferences.walk).toBe(false);
    }, 500);
  });
  it('transportmodes - all', () => {
    const all = screen.queryByTestId('stopover.unit.test.all');
    const bicycle = screen.queryByTestId('stopover.unit.test.bicycle');
    const car = screen.queryByTestId('stopover.unit.test.car');
    const bus = screen.queryByTestId('stopover.unit.test.bus');
    const ferry = screen.queryByTestId('stopover.unit.test.ferry');
    const metro = screen.queryByTestId('stopover.unit.test.subway');
    const rail = screen.queryByTestId('stopover.unit.test.rail');
    const tram = screen.queryByTestId('stopover.unit.test.tram');
    const walk = screen.queryByTestId('stopover.unit.test.walk');
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
    let state_preferences = store.getState().preferences;
    expect(state_preferences.all).toBe(true);
    expect(state_preferences.bicycle).toBe(false);
    expect(state_preferences.car).toBe(false);
    expect(state_preferences.bus).toBe(false);
    expect(state_preferences.ferry).toBe(false);
    expect(state_preferences.subway).toBe(false);
    expect(state_preferences.tram).toBe(false);
    expect(state_preferences.rail).toBe(false);
    expect(state_preferences.walk).toBe(false);
    act(() => {
      userEvent.click(bicycle);
      userEvent.click(bus);
      userEvent.click(car);
      userEvent.click(ferry);
      userEvent.click(rail);
      userEvent.click(tram);
      userEvent.click(metro);
      userEvent.click(walk);
    });
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(false);
      expect(state_preferences.bicycle).toBe(true);
      expect(state_preferences.bus).toBe(true);
      expect(state_preferences.car).toBe(true);
      expect(state_preferences.ferry).toBe(true);
      expect(state_preferences.subway).toBe(true);
      expect(state_preferences.tram).toBe(true);
      expect(state_preferences.rail).toBe(true);
      expect(state_preferences.walk).toBe(true);
    }, 500);
    act(() => userEvent.click(all));
    state_preferences = store.getState().preferences;
    setTimeout(() => {
      expect(state_preferences.all).toBe(true);
      expect(state_preferences.bicycle).toBe(false);
      expect(state_preferences.bus).toBe(false);
      expect(state_preferences.car).toBe(true);
      expect(state_preferences.ferry).toBe(false);
      expect(state_preferences.subway).toBe(false);
      expect(state_preferences.tram).toBe(false);
      expect(state_preferences.rail).toBe(false);
      expect(state_preferences.walk).toBe(false);
    }, 500);
  });
});
