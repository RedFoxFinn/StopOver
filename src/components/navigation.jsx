import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { green } from '@mui/material/colors';

import { Itineraries } from './itineraries';
import { InputModule } from './inputModule';
import { GeocodeDisplayModule } from './geocodeDisplayModule';

const Navigation = ({id}) => {
  return <nav id={id} data-testid={id} style={{display: 'inline-flex', alignItems: 'center'}} >
    <ButtonGroup variant='outlined' size='small' sx={{margin: '1rem'}}>
      <Button
        to='/'
        component={NavLink}
      >Reitit</Button>
      <Button
        to='/details'
        component={NavLink}
      >Pistetiedot</Button>
      <Button
        to='/planning'
        component={NavLink}
      >Reittisuunnittelu</Button>
    </ButtonGroup>
  </nav>;
};

export const Routing = (props) => {
  
  return <section id={props.id} data-testid={props.id} >
    <Switch>
      <Route path='/planning' children={<InputModule id={`${props.id}.planning`} />} />
      <Route path='/details' children={<GeocodeDisplayModule id={`${props.id}.geocode`} />}/>
      <Route exact path='/' children={<Itineraries id={`${props.id}.routes`} />}/>
    </Switch>
  </section>;
};

export default Navigation;