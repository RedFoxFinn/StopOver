import React, { useState } from 'react';
import { dispatch, useSelector } from 'react-redux';

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
  const [allTransportModes, setAllTransportModes] = useState(true);
  const [bicycle, setBicycle] = useState(false);
  const [bus, setBus] = useState(false);
  const [car, setCar] = useState(false);
  const [ferry, setFerry] = useState(false);
  const [rail, setRail] = useState(false);
  const [subway, setSubway] = useState(false);
  const [tram, setTram] = useState(false);
  const [walk, setWalk] = useState(false);

  function handleAll() {
    setAllTransportModes(true);
    setBicycle(false);
    setBus(false);
    setCar(false);
    setFerry(false);
    setRail(false);
    setSubway(false);
    setTram(false);
    setWalk(false);
  }
  function handleMode(mode) {
    switch (mode) {
    case 'BICYCLE': {
      allTransportModes && setAllTransportModes(false);
      setBicycle(true);
      break;
    }
    case 'BUS': {
      allTransportModes && setAllTransportModes(false);
      setBus(true);
      break;
    }
    case 'CAR': {
      allTransportModes && setAllTransportModes(false);
      setCar(true);
      break;
    }
    case 'FERRY': {
      allTransportModes && setAllTransportModes(false);
      setFerry(true);
      break;
    }
    case 'RAIL': {
      allTransportModes && setAllTransportModes(false);
      setRail(true);
      break;
    }
    case 'SUBWAY': {
      allTransportModes && setAllTransportModes(false);
      setSubway(true);
      break;
    }
    case 'TRAM': {
      allTransportModes && setAllTransportModes(false);
      setTram(true);
      break;
    }
    case 'WALK': {
      allTransportModes && setAllTransportModes(false);
      setWalk(true);
      break;
    }
    default: {
      handleAll();
      break;
    }
    }
  }

  return <section id={props.id} data-testid={props.id} >
    <p>Select your preferred transport modes here!</p>
  </section>;
};