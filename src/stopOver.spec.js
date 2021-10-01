
import React from 'react';
import { render, screen } from '@testing-library/react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import store from './controllers/redux/store';
import { StopOver } from './stopOver';

describe('stopOver - unit tests', () => {
  let dummy = false;
  beforeEach(() => render(<Provider store={store}><StopOver id='stopover.unit.test' /></Provider>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('StopOver renders', () => {
    const component = screen.queryByTestId('stopover.unit.test');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, StopOver);
    expect(component.textContent).toMatch('StopOver');
  });
});