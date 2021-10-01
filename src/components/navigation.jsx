import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import { green } from '@mui/material/colors';

import { Itinerary } from './itinerary';
import { InputModule } from './inputModule';
import { GeocodeDisplayModule } from './geocodeDisplayModule';

const Navigation = ({id}) => {
  return <nav style={{display: 'inline-flex', alignItems: 'center'}} >
    <Divider orientation="vertical" variant="middle" color={green['A700']} flexItem />
    <Button
      to='/'
      sx={{
        margin: 1
      }}
      variant='outlined'
      component={NavLink}
    >Reitit</Button>
    <Divider orientation="vertical" variant="middle" color={green['A700']} flexItem />
    <Button
      to='/details'
      sx={{
        margin: 1
      }}
      variant='outlined'
      component={NavLink}
    >Pistetiedot</Button>
    <Divider orientation="vertical" variant="middle" color={green['A700']} flexItem />
    <Button
      to='/planning'
      sx={{
        margin: 1
      }}
      variant='outlined'
      component={NavLink}
    >Reittisuunnittelu</Button>
    <Divider orientation="vertical" variant="middle" color={green['A700']} flexItem />
  </nav>;
};

export const Routing = (props) => {
  
  return <section >
    <Switch>
      <Route path='/planning' children={<InputModule/>} />
      <Route path='/details' children={<GeocodeDisplayModule/>}/>
      <Route exact path='/' children={<Itinerary/>}/>
    </Switch>
  </section>;
};

export default Navigation;