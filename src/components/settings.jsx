import React, {} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SettingsInputCompositeOutlinedIcon from '@mui/icons-material/SettingsInputCompositeOutlined';

import { setUseDefaultRoute } from '../controllers/app/localstorage_settings';

export const Settings = ({id}) => {
  const dispatch = useDispatch();
  const { useDefaultRoute } = useSelector(state => state.preferences);

  const handleDefaultRoute = (event) => {
    setUseDefaultRoute(!useDefaultRoute);
    useDefaultRoute
      ? dispatch({type: 'preferences/disableDefaultRoute'})
      : dispatch({type: 'preferences/enableDefaultRoute'});
  };

  const Selector = () => {
    const selectorId = `${id}.default-route-${useDefaultRoute ? 'disable' : 'enable'}`;
    return <Button
      color={useDefaultRoute ? 'error' : 'success'}
      variant='outlined'
      size='medium'
      id={selectorId}
      data-testid={selectorId}
      sx={{
        margin: '0.5rem 1rem'
      }}
      onClick={handleDefaultRoute} >
      {`${useDefaultRoute ? 'Älä k' : 'K'}äytä oletusreittiä`}
    </Button>;
  };

  const DefaultRouteStatus = () => {
    const statusId = `${id}.default-route-status-${useDefaultRoute ? 'enabled' : 'disabled'}`;
    return <Typography
      id={statusId}
      data-testid={statusId}
      size='medium'>
      {`${useDefaultRoute ? 'Käytetään' : 'Ei käytetä'} oletusreittiä`}
    </Typography>;
  };

  return <Card
    id={id}
    data-testid={id}
    key={id}
    component='form'
    variant='outlined'
    sx={{
      '& > :not(style)': { m: 1 },
      minWidth: 300,
      maxWidth: 800,
      marginBottom: 2,
      backgroundColor: 'rgba(0,0,0,0.05)'
    }}
    noValidate
    autoComplete="off"
    key={id}
    id={id}
  >
    <Divider>
      <Chip icon={<SettingsInputCompositeOutlinedIcon/>} label='Asetukset' color='info' variant='outlined' />
    </Divider>
    <Box sx={{
      display: 'inline-flex',
      alignItems: 'center'
    }}>
      <DefaultRouteStatus/>
      <Selector />
    </Box>
  </Card>;
};