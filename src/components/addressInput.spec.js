
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import store from '../controllers/redux/store';
import { AddressInput } from './addressInput';

describe('addressInput - unit tests', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('AddressInput renders - start', () => {
    render(<Provider store={store}><AddressInput id='stopover.unit.test' start={true} end={false} /></Provider>);
    const component = screen.queryByTestId('stopover.unit.test');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, AddressInput);
    expect(component.textContent).toMatch('Lähtöpiste');
    expect(component.textContent).toMatch('katu');
    expect(component.textContent).toMatch('numero');
    expect(component.textContent).toMatch('kunta');
    expect(component.textContent).toMatch('Aseta');
  });
  it('AddressInput fields - start', () => {
    render(<Provider store={store}><AddressInput id='stopover.unit.test' start={true} end={false} /></Provider>);
    const street = screen.getByLabelText('katu');
    expect(street).toBeTruthy();
    expect(street.value).toBe('');
    userEvent.type(street, 'Mannerheimintie');
    expect(street.value).toBe('Mannerheimintie');
    const number = screen.getByLabelText('numero');
    expect(number).toBeTruthy();
    expect(number.value).toBe('');
    userEvent.type(number, '1');
    expect(number.value).toBe('1');
    const municipality = screen.getByLabelText('kunta');
    expect(municipality).toBeTruthy();
    expect(municipality.value).toBe('');
    userEvent.type(municipality, 'Helsinki');
    expect(municipality.value).toBe('Helsinki');
    const set = screen.getByText('Aseta');
    expect(set).toBeTruthy();
    userEvent.click(set);
    setTimeout(() => {
      expect(street.value).toBe('');
      expect(number.value).toBe('');
      expect(municipality.value).toBe('');
    }, 3500);
  });
  it('AddressInput renders - end', () => {
    render(<Provider store={store}><AddressInput id='stopover.unit.test' start={false} end={true} /></Provider>);
    const component = screen.queryByTestId('stopover.unit.test');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, AddressInput);
    expect(component.textContent).toMatch('Päätepiste');
    expect(component.textContent).toMatch('katu');
    expect(component.textContent).toMatch('numero');
    expect(component.textContent).toMatch('kunta');
    expect(component.textContent).toMatch('Aseta');
  });
  it('AddressInput renders - incorrectly set', () => {
    render(<Provider store={store}><AddressInput id='stopover.unit.test' start={false} end={false} /></Provider>);
    const component = screen.queryByTestId('stopover.unit.test');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, AddressInput);
    expect(component.textContent).toMatch('Virheelliset määritykset');
  });
});