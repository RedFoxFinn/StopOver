import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';

import { Itinerary } from './itinerary';
import { Transportmodes } from './transportmodes';

export const modes = Object.freeze({
  DEFAULT: 'default',
  USER: 'user'
});

export const Itineraries = (props) => {
  const { useDefaultRoute, useModeSelector } = useSelector(state => state.preferences);
  const {routes, defaultroute} = useSelector(state => state.route);

  const RenderRoutes = ({id}) => {
    return <Card
      id={id}
      data-testid={id}
      key={id}
      variant='outlined'
      sx={{
        '& > :not(style)': { m: 1 },
        minWidth: 300,
        maxWidth: 800,
        marginBottom: 2,
        backgroundColor: 'rgba(0,0,0,0.05)'
      }}>
      <Divider>
        <Chip icon={<TimelineOutlinedIcon/>} label='Käyttäjän reitit' color='info' variant='outlined' />
      </Divider>
      <Box sx={{
        margin: '0.5rem 1rem'
      }}>
        {routes && routes.length > 0 ? routes.map(route => <Itinerary id={`${id}-${routes.indexOf(route)}.itinerary`} route={route} mode={modes.USER} key={routes.indexOf(route)} />) : <Typography variant='subtitle1' >Käyttäjällä ei ole suosikkireittejä</Typography>}
      </Box>
    </Card>;
  };

  const RenderDefaultRoute = ({id}) => {
    return useDefaultRoute
      ? <Card
        id={id}
        data-testid={id}
        key={id}
        variant='outlined'
        sx={{
          '& > :not(style)': { m: 1 },
          minWidth: 300,
          maxWidth: 800,
          marginBottom: 2,
          backgroundColor: 'rgba(0,0,0,0.05)'
        }}
      >
        <Divider>
          <Chip icon={<TimelineOutlinedIcon/>} label='Oletusreitti' color='warning' variant='outlined' />
        </Divider>
        <Box sx={{
          margin: '0.5rem 1rem'
        }}>
          {defaultroute ? <Itinerary id={`${id}.itinerary`} route={defaultroute} mode={modes.DEFAULT} /> : <Typography variant='subtitle1' >Oletusreittiä ei ole asetettu</Typography>}
        </Box>
      </Card>
      : null;
  };

  return <section id={props.id} data-testid={props.id} style={{
    display: 'inline-flex'
  }} >
    {useModeSelector && <Transportmodes id={`${props.id}.modeselector`} />}
    <article style={{margin: '0.5rem', marginLeft: '1.5rem'}}>
      <RenderDefaultRoute id={`${props.id}.default-route`} />
      <RenderRoutes id={`${props.id}.user-routes`} />
    </article>
  </section>;
};