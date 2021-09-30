import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Chip from '@mui/material/Chip';

const POSITIONSTACK_API_BASE = 'http://api.positionstack.com/v1/forward?';
const POSITIONSTACK_API_KEY = () => {
  return `access_key=${process.env.REACT_APP_POSITIONSTACK_API_KEY}&`;
};
const POSITIONSTACK_API_ADDRESS = (street, number, municipality) => {
  return `&query=${street}%20${number},%20${municipality}&output=json&limit=1`;
};

export const AddressInput = ({end = false, start = false, id = 'default'}) => {
  const addressState = end ? useSelector(state => state.end) : start ? useSelector(state => state.start) : null;
  const dispatch = useDispatch();
  const fetchGeocode = () => {
    const { street, number, municipality } = addressState ?? null;
    axios.get(`${POSITIONSTACK_API_BASE}${POSITIONSTACK_API_KEY()}${POSITIONSTACK_API_ADDRESS(street, number, municipality)}`)
      .then((response) => {
        const {data} = response;
        start && dispatch({type: 'location_start/setGeocode', geocode: data.data[0]});
        end && dispatch({type: 'location_end/setGeocode', geocode: data.data[0]});
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

  return !end && !start
    ? <Card
      variant='outlined'
      sx={{
        '& > :not(style)': { m: 1 },
        minWidth: 300,
        maxWidth: 800,
        marginBottom: 2
      }}
    >
      <Divider>
        <Chip icon={<ErrorOutlineIcon/>} label='Virheelliset määritykset' color='error' variant='outlined' />
      </Divider>
    </Card>
    : <Card
      component='form'
      variant='outlined'
      sx={{
        '& > :not(style)': { m: 1 },
        minWidth: 300,
        maxWidth: 800,
        marginBottom: 2
      }}
      noValidate
      autoComplete="off"
      key={id}
      id={id}
    >
      {end
        ? <Divider>
          <Chip icon={<PinDropIcon/>} label='Päätepiste' color='info' variant='outlined' />
        </Divider>
        : start
          ? <Divider>
            <Chip icon={<PinDropIcon/>} label='Lähtöpiste' color='info' variant='outlined' />
          </Divider>
          : null}
      <TextField
        key={`${id}-street`}
        InputLabelProps={{shrink: true}}
        label='katu' defaultValue=''
        size='small' onChange={handleStreet}
        color='primary' />
      <TextField
        key={`${id}-number`}
        InputLabelProps={{shrink: true}}
        label='numero' defaultValue=''
        size='small' onChange={handleNumber}
        sx={{maxWidth: 80}}
        color='primary' />
      <TextField
        key={`${id}-municipality`}
        InputLabelProps={{shrink: true}}
        label='kunta' defaultValue=''
        size='small' onChange={handleMunicipality}
        color='primary' />
      <Button
        key={`${id}-query`}
        variant='outlined'
        size='medium'
        color='secondary'
        onClick={fetchGeocode}>Aseta</Button>
    </Card>;
};