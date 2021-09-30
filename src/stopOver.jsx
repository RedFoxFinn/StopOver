import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import { customTheme } from './theme/muiTheme';
import { Itinerary } from './components/itinerary';
import { InputModule } from './components/inputModule';
import { GeocodeDisplayModule } from './components/geocodeDisplayModule';

export const StopOver = (props) => {

  return <Box>
    <ThemeProvider theme={customTheme()}>
      <p>StopOver</p>
      <Itinerary/>
      <InputModule/>
      <GeocodeDisplayModule/>
    </ThemeProvider>
  </Box>;
};