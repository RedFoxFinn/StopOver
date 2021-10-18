
import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

import {HslHrtIcon} from '../icons/HslHrtIcon';

import {ITINERARY} from '../controllers/graphql/queries/itinerary';

/* Details: the details of planned itinerary
 * Error: shown if the loading resulted error(s)
 * Loading: shown while query was initialized but not successful (yet)
 * ILNI: Itinerary Loading Not Initialized, shown when component loading but not started querying of data
 */

const Details = ({data, points}) => {
  const {walkDistance, duration, legs} = data.plan.itineraries[0];
  const Legs = () => {
    return <Timeline sx={{display: 'flex', alignItems: 'start'}} >
      {legs.map(leg => {
        const legIndex = legs.indexOf(leg);
        return <TimelineItem key={legIndex}>
          <TimelineSeparator>
            {leg.mode === 'WALK' && <TimelineDot variant='outlined' color='other' >
              <DirectionsWalkIcon sx={{fontSize: '1.25rem'}} />
            </TimelineDot>}
            {leg.mode === 'BICYCLE' && <TimelineDot variant='outlined' color='bicycle' >
              <HslHrtIcon name='bicycleIcon' height='1.25rem' />
            </TimelineDot>}
            {leg.mode === 'BUS' && <TimelineDot variant='outlined' color='bus' >
              <HslHrtIcon name='busIcon' height='1.25rem' />
            </TimelineDot>}
            {leg.mode === 'CAR' && <TimelineDot variant='outlined' color='other' >
              <HslHrtIcon name='carIcon' height='1.25rem' />
            </TimelineDot>}
            {leg.mode === 'TRAM' && <TimelineDot variant='outlined' color='tram' >
              <HslHrtIcon name='tramIcon' height='1.25rem' />
            </TimelineDot>}
            {leg.mode === 'RAIL' && <TimelineDot variant='outlined' color='train' >
              <HslHrtIcon name='trainIcon' height='1.25rem' />
            </TimelineDot>}
            {leg.mode === 'SUBWAY' && <TimelineDot variant='outlined' color='subway' >
              <HslHrtIcon name='metroIcon' height='1.25rem' />
            </TimelineDot>}
            {leg.mode === 'FERRY' && <TimelineDot variant='outlined' color='ferry' >
              <HslHrtIcon name='ferryIcon' height='1.25rem' />
            </TimelineDot>}
            {legIndex < legs.length-1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>{leg.mode}</TimelineContent>
        </TimelineItem>;
      })}
    </Timeline>;
  };

  return <Box>
    <Typography variant='subtitle1' >{points.start} - {points.end}</Typography>
    {legs && <Legs/>}
  </Box>;
};

const Error = () => <Typography variant='subtitle1' >Itinerary loading failed</Typography>;
const Loading = () => <Typography variant='subtitle1' >Itinerary loading</Typography>;
const ILNI = () => <Typography variant='subtitle1' >Itinerary loading not initialized</Typography>;

export const Itinerary = (props) => {
  const {
    all,
    bus,
    bicycle,
    car,
    ferry,
    rail,
    subway,
    tram,
    walk
  } = useSelector(state => state.preferences);
  function getModes() {
    let modes = [];
    if (all) {
      return [];
    } else {
      bus && modes.push({mode: 'BUS'});
      bicycle && modes.push({mode: 'BICYCLE'});
      car && modes.push({mode: 'CAR'});
      ferry && modes.push({mode: 'FERRY'});
      rail && modes.push({mode: 'RAIL'});
      subway && modes.push({mode: 'SUBWAY'});
      tram && modes.push({mode: 'TRAM'});
      walk && modes.push({mode: 'WALK'});
      return modes.length > 0 ? modes : [];
    }
  }
  const {start, end} = props.route;
  const options = {
    query: ITINERARY,
    variables: {
      fromPlace: start.queryLocation,
      toPlace: end.queryLocation,
      numItineraries: 1,
      minTransferTime: 2,
      transportModes: getModes()
    },
    pollInterval: 30000
  };
  const [loadItinerary, { called, data, error, loading, refetch }] = useLazyQuery(ITINERARY, options);
  
  useEffect(() => {
    start && end && !called && loadItinerary();
  }, []);

  function getPoint(point) {
    if (point === 'start') {
      return start.name ?? `${start.street} ${start.number}, ${start.municipality}`;
    } else {
      return end.name ?? `${end.street} ${end.number}, ${end.municipality}`;
    }
  }
  
  return <section id={props.id} data-testid={props.id} >
    {called && loading && <Loading/>}
    {called && error && <Error/>}
    {called && data && <Details data={data} points={{start: getPoint('start'), end: getPoint('end')}} />}
    {!called && <ILNI/>}
  </section>;
};