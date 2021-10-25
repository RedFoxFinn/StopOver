import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act, isCompositeComponentWithType } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import Button from '@mui/material/Button';

import store from '../controllers/redux/store';
import { Settings } from './settings';

describe('settings unit tests', () => {
  let dummy = false;
  beforeEach(() => render(<Provider store={store} ><Settings id='stopover.unit.test' /></Provider>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('settings render', () => {
    const component = screen.queryByTestId('stopover.unit.test');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Settings);
    expect(component.textContent).toMatch('Asetukset');
  });
  it('default route selector', () => {
    const component = screen.queryByTestId('stopover.unit.test');
    expect(component).toBeTruthy();
    expect(component.textContent).toMatch('Käytetään');
    expect(component.textContent).toMatch('oletusreittiä');
    expect(component.textContent).toMatch('Käytetään oletusreittiä');
    let selector = within(component).getByText('Älä käytä oletusreittiä');
    expect(selector).toBeTruthy();
    isCompositeComponentWithType(selector, Button);
    act(() => userEvent.click(selector));
    expect(component.textContent).toMatch('Ei');
    expect(component.textContent).toMatch('käytetä');
    expect(component.textContent).toMatch('oletusreittiä');
    expect(component.textContent).toMatch('Ei käytetä oletusreittiä');
    selector = within(component).getByText('Käytä oletusreittiä');
    expect(selector).toBeTruthy();
    isCompositeComponentWithType(selector, Button);
    act(() => userEvent.click(selector));
    expect(component.textContent).toMatch('Käytetään');
    expect(component.textContent).toMatch('oletusreittiä');
    expect(component.textContent).toMatch('Käytetään oletusreittiä');
  });
});