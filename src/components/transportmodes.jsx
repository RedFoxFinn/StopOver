import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PedalBikeIcon from '@mui/icons-material/PedalBike';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import TrainIcon from '@mui/icons-material/Train';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import TramIcon from '@mui/icons-material/Tram';
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

  return <section id={props.id} data-testid={props.id} >
    <Typography variant='h6'>Valitse kulkukeinot</Typography>
    <ToggleButtonGroup size='small' variant='outlined' orientation='vertical' onChange={handleMode} >
      <ToggleButton selected={all} >Kaikki kulkukeinot <HslHrtIcon name='HSLIcon' height='1.5rem' /></ToggleButton>
      <ToggleButton selected={bicycle} value='BICYCLE' >Pyörä <HslHrtIcon name='bicycleBoxedIcon' height='1.5rem' /></ToggleButton>
      <ToggleButton selected={bus} value='BUS' >Bussi <HslHrtIcon name='busBoxedIcon' height='1.5rem' /></ToggleButton>
      <ToggleButton selected={car} value='CAR' >Auto <HslHrtIcon name='carBoxedIcon' height='1.5rem' /></ToggleButton>
      <ToggleButton selected={ferry} value='FERRY' >Lautta <HslHrtIcon name='ferryBoxedIcon' height='1.5rem' /></ToggleButton>
      <ToggleButton selected={rail} value='RAIL' >Juna <HslHrtIcon name='trainBoxedIcon' height='1.5rem' /></ToggleButton>
      <ToggleButton selected={subway} value='SUBWAY' >Metro <HslHrtIcon name='metroBoxedIcon' height='1.5rem' /></ToggleButton>
      <ToggleButton selected={tram} value='TRAM' >Ratikka <HslHrtIcon name='tramBoxedIcon' height='1.5rem' /></ToggleButton>
      <ToggleButton selected={walk} value='WALK' >Kävely <DirectionsWalkIcon sx={{fontSize: '1.5rem'}} /></ToggleButton>
    </ToggleButtonGroup>
  </section>;
};