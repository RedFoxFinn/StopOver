import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { HashRouter as Router } from 'react-router-dom';

import { customTheme } from './theme/muiTheme';
import Navigation, {Routing} from './components/navigation';

export const StopOver = (props) => {
  return <Box>
    <Router>
      <ThemeProvider theme={customTheme()}>
        <p>StopOver</p>
        <Navigation/>
        <Routing/>
      </ThemeProvider>
    </Router>
  </Box>;
};