
import React from 'react';

describe('stopOver - application UI tests', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).to.be.false;
    dummy = true;
    expect(dummy).to.be.true;
  });
  it('StopOver loads', () => {
    cy.visit('http://localhost:3000');
  });
});
