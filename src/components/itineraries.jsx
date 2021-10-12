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

  const RenderRoutes = () => {
    return routes.map(route => <Itinerary route={route} mode={modes.USER} />);
  };

  return <section id={props.id} data-testid={props.id} style={{
    display: 'inline-flex'
  }} >
    <Transportmodes id={`${props.id}.modeselector`} />
    <article style={{margin: '0.5rem', marginLeft: '1.5rem'}}>
      <Typography variant='h6' >Oletusreitti</Typography>
      {defaultroute ? <Itinerary route={defaultroute} mode={modes.DEFAULT} /> : <Typography variant='subtitle1' >Oletusreittiä ei ole asetettu</Typography>}
      <Typography variant='h6' >Käyttäjän reitit</Typography>
      {routes && routes.length > 0 ? <RenderRoutes /> : <Typography variant='subtitle1' >Käyttäjällä ei ole suosikkireittejä</Typography>}
    </article>
  </section>;
};