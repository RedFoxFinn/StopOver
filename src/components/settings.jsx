import React, {} from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

export const Settings = (props) => {
  return <section id={props.id} data-testid={props.id} >
    <Typography variant='subtitle1' >Settings</Typography>
  </section>;
};