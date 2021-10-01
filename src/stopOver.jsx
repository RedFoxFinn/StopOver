import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { HashRouter as Router } from 'react-router-dom';

import { customTheme } from './theme/muiTheme';
import Navigation, {Routing} from './components/navigation';
import { getRoutes } from './controllers/app/localstorage_routes';

export const StopOver = (props) => {
  const {alert} = useSelector(state => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const routes = getRoutes();
    if (routes !== null && routes.length > 0) {
      dispatch({type: 'route_control/setRoutes', routes: routes});
      dispatch({type: 'notification_control/setAlert', alert: {message: 'Reitit palautettu'}});
    }
  }, []);

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={() => dispatch({type: 'notification_control/resetAlert'})}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => dispatch({type: 'notification_control/resetAlert'})}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return <Box>
    <Router>
      <ThemeProvider theme={customTheme()}>
        <Typography variant='h5' >StopOver</Typography>
        <Navigation/>
        <Routing/>
        <Snackbar
          open={alert !== null}
          autoHideDuration={6000}
          onClose={() => dispatch({type: 'notification_control/resetAlert'})}
          message={alert?.message ?? 'testi'}
          action={action}
        />
      </ThemeProvider>
    </Router>
  </Box>;
};