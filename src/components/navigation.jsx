import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Itinerary } from './itinerary';
import { InputModule } from './inputModule';
import { GeocodeDisplayModule } from './geocodeDisplayModule';

const Navigation = ({id}) => {
  const activeStyle = {color: 'rgb(61,61,61)', textDecoration: 'solid underline', textDecorationColor: '#00c853'};
  const inactiveStyle = {color: 'rgba(61,61,61,0.5)', textDecoration: 'none'};
  const separator = <p style={{color: 'rgba(61,61,61,0.5)'}}> | </p>;
  return <nav style={{display: 'inline-flex', alignItems: 'center'}} >
    <NavLink
      to='/'
      inactiveStyle={inactiveStyle}
    >??</NavLink>
    {separator}
    <NavLink
      to='/set'
      activeStyle={activeStyle}
      inactiveStyle={inactiveStyle}
    >Reittipisteet</NavLink>
    {separator}
    <NavLink
      to='/details'
      activeStyle={activeStyle}
      inactiveStyle={inactiveStyle}
    >Pistetiedot</NavLink>
    {separator}
    <NavLink
      to='/itinerary'
      activeStyle={activeStyle}
      inactiveStyle={inactiveStyle}
    >Reitti</NavLink>
  </nav>;
};

export const Routing = (props) => {
  const startAddress = useSelector(state => state.start);
  const endAddress = useSelector(state => state.end);

  return <section >
    <Switch>
      <Route exact path='/' children={<p>home?</p>} />
      <Route path='/set' children={<InputModule/>} />
      <Route path='/details' children={<GeocodeDisplayModule/>}/>
      <Route path='/itinerary' children={<Itinerary/>}/>
    </Switch>
  </section>;
};

export default Navigation;