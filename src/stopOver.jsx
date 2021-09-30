import React, { Component, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import { customTheme } from './theme/muiTheme';
import { Itinerary } from './components/itinerary';
import { AddressInput } from './components/addressInput';

export const StopOver = (props) => {
  const addressStateEnd = useSelector(state => state.end);
  const addressStateStart = useSelector(state => state.start);

  return <Box>
    <ThemeProvider theme={customTheme()}>
      <p>StopOver</p>
      <Itinerary/>
      <AddressInput id='address-form-start' end={false} start={true} />
      <AddressInput id='address-form-end' end={true} start={false} />
      {process.env.NODE_ENV !== 'production' && <AddressInput />}
      {addressStateStart.geocode && <p>{addressStateStart.geocode.latitude},{addressStateStart.geocode.longitude}</p>}
      {addressStateEnd.geocode && <p>{addressStateEnd.geocode.latitude},{addressStateEnd.geocode.longitude}</p>}
    </ThemeProvider>
  </Box>;
};