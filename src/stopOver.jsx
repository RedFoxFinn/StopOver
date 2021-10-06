import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { defaultroute } from './controllers/app/defaultroute';
import { createRoute } from './controllers/app/routecreator';

import { ax, API_BASE_URL, NOMINATIM_API_ADDRESS_QUERY } from './controllers/app/api';

export const StopOver = (props) => {
  const { start, end } = defaultroute;
  const {alert} = useSelector(state => state.notification);
  const dispatch = useDispatch();
  let startGC;
  let endGC;

  useEffect(() => {
    let defaultSet = false;
    let routesSet = false;
    ax.get(`${API_BASE_URL()}${NOMINATIM_API_ADDRESS_QUERY(start.street, start.number, start.municipality)}`)
      .then((response) => {
        const {data} = response;
        if (data.length > 0 && data[0]?.lat && data[0]?.address) {
          startGC = data[0];
        }
      })
      .catch((error) => {
        console.warn(error.message);
      });
    ax.get(`${API_BASE_URL()}${NOMINATIM_API_ADDRESS_QUERY(end.street, end.number, end.municipality)}`)
      .then((response) => {
        const {data} = response;
        if (data.length > 0 && data[0]?.lat && data[0]?.address) {
          endGC = data[0];
        }
      })
      .catch((error) => {
        console.warn(error.message);
      });
    const route = createRoute(startGC, endGC);
    dispatch({type: 'route_control/setDefault', route: route});
    defaultSet = true;
    const routes = getRoutes();
    if (routes !== null && routes.length > 0) {
      dispatch({type: 'route_control/setRoutes', routes: routes});
      routesSet = true;
    }
    if (defaultSet && routesSet) {
      dispatch({type: 'notification_control/setAlert', alert: {mode: 'success', message: 'Oletusreitti luotu'}});
      setTimeout(() => {
        dispatch({type: 'notification_control/setAlert', alert: {message: 'Reitit palautettu'}});
      }, 3000);
    } else if (defaultSet && !routeSet) {
      dispatch({type: 'notification_control/setAlert', alert: {mode: 'success', message: 'Oletusreitti luotu'}});
    } else if (!defaultSet && routeSet) {
      dispatch({type: 'notification_control/setAlert', alert: {message: 'Reitit palautettu'}});
    }
  }, [start, end, startGC, endGC]);

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

  return <article id={props.id} data-testid={props.id} >
    <Router>
      <ThemeProvider theme={customTheme()}>
        <Typography variant='h5' >StopOver - {props.ver}</Typography>
        <Navigation id={`${props.id}.navigation`} />
        <Routing id={`${props.id}.content`} />
        <Snackbar
          id={`${props.id}.snack`}
          open={alert !== null}
          autoHideDuration={6000}
          onClose={() => dispatch({type: 'notification_control/resetAlert'})}
          message={alert?.message ?? 'testi'}
          action={action}
        />
      </ThemeProvider>
    </Router>
  </article>;
};