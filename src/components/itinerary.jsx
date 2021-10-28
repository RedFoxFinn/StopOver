
import React, { useEffect, useState } from 'react';
import { fromError, useLazyQuery } from '@apollo/client';
import { useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

import {HslHrtIcon} from '../icons/HslHrtIcon';

import { mode } from '../controllers/app/transportmodes';
import { sanitiseDatetime, sanitiseDistance, sanitiseSeconds } from '../controllers/app/sanitisers';
import {ITINERARY} from '../controllers/graphql/queries/itinerary';

/* Details: the details of planned itinerary
 * Error: shown if the loading resulted error(s)
 * Loading: shown while query was initialized but not successful (yet)
 * ILNI: Itinerary Loading Not Initialized, shown when component loading but not started querying of data
 */

const Leg = ({leg, legIndex, numberofLegs, previousLegMode}) => {
  let stop_s;
  if (leg.from.stop) {
    stop_s = leg.from.stop;
  }
  return <TimelineItem key={legIndex} >
    <TimelineContent sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flexStart',
      width: '15rem'
    }}>
      {leg.from?.stop && <React.Fragment>
        <Typography>{leg.mode === 'RAIL' || leg.mode === 'SUBWAY' || (leg.mode === 'WALK' && previousLegMode === 'RAIL' || previousLegMode === 'SUBWAY') ? 'Asema' : 'Pysäkki'}: {stop_s.name}</Typography>
        {leg.mode === 'RAIL' || leg.mode === 'SUBWAY'
          ? <Typography>Laituri: {stop_s.platformCode}</Typography> 
          : leg.mode !== 'WALK' && <Typography>Pysäkkitunnus: {stop_s.code}</Typography>}
        {leg.mode !== 'WALK' && <Typography>Linja: {leg.trip.route.shortName} - {leg.trip.tripHeadsign}</Typography>}
      </React.Fragment>}
      <Typography>Eteneminen: {mode(leg.mode)}</Typography>
    </TimelineContent>
    <TimelineSeparator >
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
      {legIndex < numberofLegs && <TimelineConnector />}
    </TimelineSeparator>
    <TimelineOppositeContent sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flexStart',
      width: '15rem'
    }}>
      <Typography>Etapin lähtö: {sanitiseDatetime(leg.startTime)}</Typography>
      <Typography>Matka-aika: {sanitiseSeconds(leg.duration)}</Typography>
      <Typography>Etapin pituus: {sanitiseDistance(leg.distance)}</Typography>
    </TimelineOppositeContent>
  </TimelineItem>;
};

const Details = ({data, points}) => {
  const {walkDistance, duration, legs, startTime, endTime} = data?.plan?.itineraries[0];
  const Legs = () => {
    return <Timeline>
      {legs.map(leg => {
        const legIndex = legs.indexOf(leg);
        const prev = legs[legIndex-1];
        return <Leg leg={leg} legIndex={legIndex} key={`leg-${legIndex}`} numberofLegs={legs.length} previousLegMode={prev?.mode} />;
      })}
    </Timeline>;
  };

  return <Card sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', backgroundColor: 'transparent'}}>
    <Typography variant='subtitle1' sx={{marginTop: '0.5rem'}} >{points.start} - {points.end}</Typography>
    <Typography>Lähtö: {sanitiseDatetime(startTime)}</Typography>
    <Typography>Saapuminen: {sanitiseDatetime(endTime)}</Typography>
    <Typography>Matka-aika: {sanitiseSeconds(duration)}</Typography>
    <Typography>Kävelyä: {sanitiseDistance(walkDistance)}</Typography>
    {legs && <Legs/>}
  </Card>;
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
    /*
    DISABLED POSSIBILITY TO USE TRANSPORTMODE SELECTOR SET MODES IN QUERIES DUE
    ISSUE THAT'LL CRASH WHOLE APPLICATION ON MODE SELECTOR STATE CHANGE

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
    */
    return [];
  }
  const {start, end} = props.route;
  const options = {
    query: ITINERARY,
    variables: {
      fromPlace: start.queryLocation,
      toPlace: end.queryLocation,
      numItineraries: 1,
      minTransferTime: 300,
      walkReluctance: 2.1,
      transportModes: getModes()
    },
    pollInterval: 30000,
    fetchPolicy: 'network-only'
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