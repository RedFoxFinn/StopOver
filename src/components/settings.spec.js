import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import ToggleButton from '@mui/material/ToggleButton';

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
  });
});