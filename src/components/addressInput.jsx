import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Chip from '@mui/material/Chip';

import { ax, API_BASE_URL, NOMINATIM_API_ADDRESS_QUERY } from '../controllers/app/api';

const Failure = ({id}) => <Card
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
    <Chip icon={<ErrorOutlineIcon/>} label='Virheelliset määritykset' color='error' variant='outlined' />
  </Divider>
</Card>;

export const StartSet = ({id}) => <Card
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
    <Chip icon={<ErrorOutlineIcon/>} label='Aloituspiste asetettu' color='success' variant='outlined' />
  </Divider>
</Card>;

export const EndSet = ({id}) => <Card
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
    <Chip icon={<ErrorOutlineIcon/>} label='Päätepiste asetettu' color='success' variant='outlined' />
  </Divider>
</Card>;

export const AddressInput = ({end = false, start = false, id = 'default'}) => {
  const addressState_end = useSelector(state => state.end);
  const addressState_start = useSelector(state => state.start);
  const dispatch = useDispatch();
  
  const fetchGeocode = () => {
    start && ax.get(`${API_BASE_URL()}${NOMINATIM_API_ADDRESS_QUERY(addressState_start.street, addressState_start.number, addressState_start.municipality)}`)
      .then((response) => {
        const {data} = response;
        if (data.length > 0 && data[0]?.lat && data[0]?.address) {
          dispatch({type: 'location_start/setGeocode', geocode: data[0]});
          dispatch({type: 'notification_control/setAlert', alert: {mode: 'info', message: 'Aloituspiste asetettu'}});
        }
      })
      .catch((error) => {
        console.warn(error.message);
      });
    end && ax.get(`${API_BASE_URL()}${NOMINATIM_API_ADDRESS_QUERY(addressState_end.street, addressState_end.number, addressState_end.municipality)}`)
      .then((response) => {
        const {data} = response;
        if (data.length > 0 && data[0]?.lat && data[0]?.address) {
          dispatch({type: 'location_end/setGeocode', geocode: data[0]});
          dispatch({type: 'notification_control/setAlert', alert: {mode: 'info', message: 'Päätepiste asetettu'}});
        }
      })
      .catch((error) => {
        console.warn(error.message);
      });
  };

  const handleStreet = (event) => {
    end
      ? dispatch({type: 'location_end/setStreet', street: event.target.value})
      : start
        ? dispatch({type: 'location_start/setStreet', street: event.target.value})
        : console.log('input not set to either end or start');
  };
  const handleNumber = (event) => {
    end
      ? dispatch({type: 'location_end/setNumber', number: event.target.value})
      : start
        ? dispatch({type: 'location_start/setNumber', number: event.target.value})
        : console.log('input not set to either end or start');
  };
  const handleMunicipality = (event) => {
    end
      ? dispatch({type: 'location_end/setMunicipality', municipality: event.target.value})
      : start
        ? dispatch({type: 'location_start/setMunicipality', municipality: event.target.value})
        : console.log('input not set to either end or start');
  };
  const handleName = (event) => {
    end
      ? dispatch({type: 'location_end/setName', name: event.target.value})
      : start
        ? dispatch({type: 'location_start/setName', name: event.target.value})
        : console.log('input not set to either end or start');
  };

  return !end && !start
    ? <Failure id={id} />
    : <Card
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
    >
      <Divider>
        <Chip icon={<PinDropIcon/>} label={start ? 'Aloituspiste' : 'Päätepiste'} color='info' variant='outlined' />
      </Divider>
      <TextField
        id={`${id}-street`}
        data-testid={`${id}-street`}
        key={`${id}-street`}
        InputLabelProps={{shrink: true}}
        label='katu' defaultValue=''
        size='small' onChange={handleStreet}
        sx={{maxWidth: 200}}
        color='primary' />
      <TextField
        id={`${id}-number`}
        data-testid={`${id}-number`}
        key={`${id}-number`}
        InputLabelProps={{shrink: true}}
        label='numero' defaultValue=''
        size='small' onChange={handleNumber}
        sx={{maxWidth: 80}}
        color='primary' />
      <TextField
        id={`${id}-municipality`}
        data-testid={`${id}-municipality`}
        key={`${id}-municipality`}
        InputLabelProps={{shrink: true}}
        label='kunta' defaultValue=''
        size='small' onChange={handleMunicipality}
        sx={{maxWidth: 160}}
        color='primary' />
      <TextField
        id={`${id}-name`}
        data-testid={`${id}-name`}
        key={`${id}-name`}
        InputLabelProps={{shrink: true}}
        label='nimi' defaultValue=''
        size='small' onChange={handleName}
        sx={{maxWidth: 160}}
        color='primary' />
      <Button
        id={`${id}-query`}
        data-testid={`${id}-query`}
        key={`${id}-query`}
        variant='outlined'
        size='medium'
        color='secondary'
        onClick={fetchGeocode}>Aseta</Button>
    </Card>;
};