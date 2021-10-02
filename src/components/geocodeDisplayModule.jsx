import React, {  } from 'react';
import { useSelector } from 'react-redux';

export const GeocodeDisplayModule = (props) => {
  const addressStateEnd = useSelector(state => state.end);
  const addressStateStart = useSelector(state => state.start);

  function endGeocodeIsSet() {
    return addressStateEnd.geocode
      ? <p>{addressStateEnd.geocode.latitude},{addressStateEnd.geocode.longitude}</p> : <p>Päätepiste puuttuu</p>;
  }
  function startGeocodeIsSet() {
    return addressStateStart.geocode
      ? <p>{addressStateStart.geocode.latitude},{addressStateStart.geocode.longitude}</p> : <p>Lähtöpiste puuttuu</p>;
  }

  return <section id={props.id} data-testid={props.id} >
    {startGeocodeIsSet()}
    {endGeocodeIsSet()}
  </section>;
};