
# StopOver

React + Redux + Apollo + Material UI = StopOver
Application that'll make public transportation in Helsinki region easier.

## Problem to solve

Well, if you're happy with HSL (Helsinki Region Transportation) routing service [Reittiopas](https://reittiopas.fi), this app might not give anything new to you.

BUT.

You might want your own personalised view to show timetables for your most used routes. Or timetables for your favorite stops.

This app gives you these features.

## Technologically speaking...

Applications, softwares, firmwares... They require code. So does this app.

### Frontend

On the frontend I've used some vanilla JS (EcmaScript) magic and some cool libraries I do like.

- React for building components, views.. all of it basicly
- Redux(-toolkit) for managing the application state (sure, context and useState are cool but sometimes global state just is worth it)
- Apollo (GraphQL) for keeping routing and timetable data updated for you
- MUI (Material UI) for more consistent elements

### API

I use [HSL Routing API](https://digitransit.fi/en/developers/apis/1-routing-api/) for having up-to-date data on the view

### Electron?

Hmm.... Maybe...

## Repo

- [main](https://github.com/RedFoxFinn/StopOver)
- [front](https://github.com/RedFoxFinn/StopOver/tree/front)
