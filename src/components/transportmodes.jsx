import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

import { HslHrtIcon } from '../icons/HslHrtIcon';

const modes = Object.freeze({
  BICYCLE: {mode: 'BICYCLE'},
  BUS: {mode: 'BUS'},
  CAR: {mode: 'CAR'},
  FERRY: {mode: 'FERRY'},
  RAIL: {mode: 'RAIL'},
  SUBWAY: {mode: 'SUBWAY'},
  TRAM: {mode: 'TRAM'},
  TRANSIT: {mode: 'TRANSIT'},
  WALK: {mode: 'WALK'}
});

export const Transportmodes = (props) => {
  const dispatch = useDispatch();
  const {
    all,
    bicycle,
    bus,
    car,
    ferry,
    rail,
    subway,
    tram,
    walk
  } = useSelector(state => state.preferences);

  function checkIfLast(mode) {
    switch (mode) {
    case 'BICYCLE': return !bus && !car && !ferry && !rail && !subway && !tram && !walk && bicycle ? true : false;
    case 'BUS': return !bicycle && !car && !ferry && !rail && !subway && !tram && !walk && bus ? true : false;
    case 'CAR': return !bus && !bicycle && !ferry && !rail && !subway && !tram && !walk && car ? true : false;
    case 'FERRY': return !bus && !car && !bicycle && !rail && !subway && !tram && !walk && ferry ? true : false;
    case 'RAIL': return !bus && !car && !ferry && !bicycle && !subway && !tram && !walk && rail ? true : false;
    case 'SUBWAY': return !bus && !car && !ferry && !rail && !bicycle && !tram && !walk && subway ? true : false;
    case 'TRAM': return !bus && !car && !ferry && !rail && !subway && !bicycle && !walk && tram ? true : false;
    case 'WALK': return !bus && !car && !ferry && !rail && !subway && !tram && !bicycle && walk ? true : false;
    default: return true;
    }
  }
  function handleMode(event) {
    event.preventDefault();
    if (checkIfLast(event.target.value)) {
      dispatch({type: 'preferences/setAll'});
    } else {
      switch (event.target.value) {
      case 'BICYCLE': dispatch({type: 'preferences/setBicycle', status: !bicycle}); break;
      case 'BUS': dispatch({type: 'preferences/setBus', status: !bus}); break;
      case 'CAR': dispatch({type: 'preferences/setCar', status: !car}); break;
      case 'FERRY': dispatch({type: 'preferences/setFerry', status: !ferry}); break;
      case 'RAIL': dispatch({type: 'preferences/setRail', status: !rail}); break;
      case 'SUBWAY': dispatch({type: 'preferences/setSubway', status: !subway}); break;
      case 'TRAM': dispatch({type: 'preferences/setTram', status: !tram}); break;
      case 'WALK': dispatch({type: 'preferences/setWalk', status: !walk}); break;
      default: dispatch({type: 'preferences/setAll'}); break;
      }
    }
  }

  return <section id={props.id} data-testid={props.id} style={{margin: '0.5rem'}} >
    <Typography variant='h6' sx={{marginBottom: '0.5rem'}}>Valitse kulkukeinot</Typography>
    <ToggleButtonGroup size='small' variant='outlined' orientation='vertical' onChange={handleMode} >
      <ToggleButton selected={all} value='ALL' sx={{alignItems: 'center', justifyContent: 'flex-start'}}>
        <HslHrtIcon name='HSLIcon' height='1.5rem' />
        <Typography variant='body' sx={{marginLeft: '1rem'}}>Kaikki kulkukeinot</Typography>
      </ToggleButton>
      <ToggleButton selected={bicycle} value='BICYCLE' sx={{alignItems: 'center', justifyContent: 'flex-start'}}>
        <HslHrtIcon name='bicycleBoxedIcon' height='1.5rem' />
        <Typography variant='body' sx={{marginLeft: '1rem'}}>Pyörä</Typography>
      </ToggleButton>
      <ToggleButton selected={bus} value='BUS' sx={{alignItems: 'center', justifyContent: 'flex-start'}}>
        <HslHrtIcon name='busBoxedIcon' height='1.5rem' />
        <Typography variant='body' sx={{marginLeft: '1rem'}}>Bussi</Typography>
      </ToggleButton>
      <ToggleButton selected={car} value='CAR' sx={{alignItems: 'center', justifyContent: 'flex-start'}}>
        <HslHrtIcon name='carBoxedIcon' height='1.5rem' />
        <Typography variant='body' sx={{marginLeft: '1rem'}}>Auto</Typography>
      </ToggleButton>
      <ToggleButton selected={ferry} value='FERRY' sx={{alignItems: 'center', justifyContent: 'flex-start'}}>
        <HslHrtIcon name='ferryBoxedIcon' height='1.5rem' />
        <Typography variant='body' sx={{marginLeft: '1rem'}}>Lautta</Typography>
      </ToggleButton>
      <ToggleButton selected={rail} value='RAIL' sx={{alignItems: 'center', justifyContent: 'flex-start'}}>
        <HslHrtIcon name='trainBoxedIcon' height='1.5rem' />
        <Typography variant='body' sx={{marginLeft: '1rem'}}>Juna</Typography>
      </ToggleButton>
      <ToggleButton selected={subway} value='SUBWAY' sx={{alignItems: 'center', justifyContent: 'flex-start'}}>
        <HslHrtIcon name='metroBoxedIcon' height='1.5rem' />
        <Typography variant='body' sx={{marginLeft: '1rem'}}>Metro</Typography>
      </ToggleButton>
      <ToggleButton selected={tram} value='TRAM' sx={{alignItems: 'center', justifyContent: 'flex-start'}}>
        <HslHrtIcon name='tramBoxedIcon' height='1.5rem' />
        <Typography variant='body' sx={{marginLeft: '1rem'}}>Ratikka</Typography>
      </ToggleButton>
      <ToggleButton selected={walk} value='WALK' sx={{alignItems: 'center', justifyContent: 'flex-start'}}>
        <DirectionsWalkIcon sx={{fontSize: '1.5rem'}} />
        <Typography variant='body' sx={{marginLeft: '1rem'}}>Kävely</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  </section>;
};