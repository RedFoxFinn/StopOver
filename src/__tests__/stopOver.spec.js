
import React from 'react';
import { render, screen } from '@testing-library/react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

describe('stopOver - unit tests', () => {
  let dummy = false;
  beforeEach(() => render(<StopOver id='stopover.unit.test' />));
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