import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import { Itinerary } from './itinerary';
import { InputModule } from './inputModule';
import { GeocodeDisplayModule } from './geocodeDisplayModule';

const Navigation = ({id}) => {
  return <nav style={{display: 'inline-flex', alignItems: 'center'}} >
    <Divider orientation="vertical" variant="middle" flexItem />
    <Button
      to='/'
      component={NavLink}
    >Reittipisteet</Button>
    <Divider orientation="vertical" variant="middle" flexItem />
    <Button
      to='/details'
      component={NavLink}
    >Pistetiedot</Button>
    <Divider orientation="vertical" variant="middle" flexItem />
    <Button
      to='/itinerary'
      component={NavLink}
    >Reitti</Button>
    <Divider orientation="vertical" variant="middle" flexItem />
  </nav>;
};

export const Routing = (props) => {
  const startAddress = useSelector(state => state.start);
  const endAddress = useSelector(state => state.end);

  return <section >
    <Switch>
      <Route exact path='/' children={<InputModule/>} />
      <Route path='/details' children={<GeocodeDisplayModule/>}/>
      <Route path='/itinerary' children={<Itinerary/>}/>
    </Switch>
  </section>;
};

export default Navigation;