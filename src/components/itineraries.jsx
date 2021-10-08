import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

import { Itinerary } from './itinerary';
import { Transportmodes } from './transportmodes';

const modes = Object.freeze({
  DEFAULT: 'default',
  USER: 'user'
});

export const Itineraries = (props) => {
  const {routes, defaultroute} = useSelector(state => state.route);

  return <section id={props.id} data-testid={props.id} >
    <article>
      <Transportmodes id={`${props.id}.modeselector`} />
    </article>
    <article>
      <Typography variant='h6' >Oletusreitti</Typography>
      {defaultroute ? <Itinerary route={defaultroute} mode={modes.DEFAULT} /> : <p>Oletusreittiä ei ole asetettu</p>}
    </article>
    <article>
      <Typography variant='h6' >Käyttäjän reitit</Typography>
      {routes && routes.length > 0 ? <p>Käyttäjän suosikkireitit</p> : <p>Käyttäjällä ei ole suosikkireittejä</p>}
    </article>
  </section>;
};