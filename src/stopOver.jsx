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
import { start, end } from './controllers/app/defaultroute';
import { createRoute } from './controllers/app/routecreator';

import { ax, API_BASE_URL, NOMINATIM_API_ADDRESS_QUERY } from './controllers/app/api';

export const StopOver = (props) => {
  const {alert} = useSelector(state => state.notification);
  const dispatch = useDispatch();
  const [startGC, setStartGC] = useState(null);
  const [endGC, setEndGC] = useState(null);
  const [defaultSet, setDefaultSet] = useState(false);
  const [routesSet, setRoutesSet] = useState(false);

  useEffect(() => {
    const {street, number, municipality, name} = start();
    if (street && number && municipality) {
      ax.get(`${API_BASE_URL()}${NOMINATIM_API_ADDRESS_QUERY(street, number, municipality)}`)
        .then((response) => {
          const {data} = response;
          if (data.length > 0 && data[0]?.lat && data[0]?.address) {
            setStartGC({name: name, geocode: data[0]});
          }
        })
        .catch((error) => {
          console.warn(error.message);
        });
    }
  }, []);
  useEffect(() => {
    const {street, number, municipality, name} = end();
    if (street && number && municipality) {
      ax.get(`${API_BASE_URL()}${NOMINATIM_API_ADDRESS_QUERY(street, number, municipality)}`)
        .then((response) => {
          const {data} = response;
          if (data.length > 0 && data[0]?.lat && data[0]?.address) {
            setEndGC({name: name, geocode: data[0]});
          }
        })
        .catch((error) => {
          console.warn(error.message);
        });
    }
  }, []);
  useEffect(() => {
    if (startGC && endGC) {
      const route = createRoute(startGC, endGC);
      if (route) {
        dispatch({type: 'route_control/setDefault', route: route});
        setDefaultSet(true);
      }
      const routes = getRoutes();
      if (routes && routes.length > 0) {
        dispatch({type: 'route_control/setRoutes', routes: routes});
        setRoutesSet(true);
      }
      if (defaultSet && routesSet) {
        dispatch({type: 'notification_control/setAlert', alert: {mode: 'success', message: 'Oletusreitti luotu'}});
        setTimeout(() => {
          dispatch({type: 'notification_control/setAlert', alert: {message: 'Reitit palautettu'}});
        }, 3000);
      } else if (defaultSet && !routesSet) {
        dispatch({type: 'notification_control/setAlert', alert: {mode: 'success', message: 'Oletusreitti luotu'}});
      } else if (!defaultSet && routesSet) {
        dispatch({type: 'notification_control/setAlert', alert: {message: 'Reitit palautettu'}});
      }
    }
  }, [startGC, endGC, defaultSet, routesSet]);
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