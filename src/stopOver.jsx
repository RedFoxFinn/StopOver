import React, { Component, useEffect } from 'react';

import {} from 'react-redux';

import { Itinerary } from './components/itinerary';
import { AddressInput } from './components/addressInput';

export const StopOver = (props) => {
  return <article>
    <p>StopOver</p>
    <Itinerary/>
    Start
    <AddressInput id='address-form' end={false} start={true} />
    End
    <AddressInput id='address-form' end={true} start={false} />
    Nope
    <AddressInput />
  </article>;
};