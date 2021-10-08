import {createSlice} from '@reduxjs/toolkit';

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: {
    useDefaultRoute: true,
    all: true,
    bicycle: false,
    bus: false,
    car: false,
    ferry: false,
    rail: false,
    subway: false,
    tram: false,
    walk: false
  },
  reducers: {
    setAll: (state, action) => {
      state.all = true;
      state.bicycle = false;
      state.bus = false;
      state.car = false;
      state.ferry = false;
      state.rail = false;
      state.subway = false;
      state.tram = false;
      state.walk = false;
    },
    setBicycle: (state, action) => {
      state.all = false;
      state.bicycle = action.status;
    },
    setBus: (state, action) => {
      state.all = false;
      state.bus = action.status;
    },
    setCar: (state, action) => {
      state.all = false;
      state.car = action.status;
    },
    setFerry: (state, action) => {
      state.all = false;
      state.ferry = action.status;
    },
    setRail: (state, action) => {
      state.all = false;
      state.rail = action.status;
    },
    setSubway: (state, action) => {
      state.all = false;
      state.subway = action.status;
    },
    setTram: (state, action) => {
      state.all = false;
      state.tram = action.status;
    },
    setWalk: (state, action) => {
      state.all = false;
      state.walk = action.status;
    },
    disableDefaultRoute: (state, action) => {
      state.useDefaultRoute = false;
    },
    resetDefaultRoute: (state, action) => {
      state.useDefaultRoute = true;
    },
    enableDefaultRoute: (state, action) => {
      state.useDefaultRoute = true;
    }
  }
});

export const { disableDefaultRoute, enableDefaultRoute, resetDefaultRoute, setAll,
  setBicycle, setBus, setCar, setFerry, setRail, setSubway, setTram, setWalk
} = preferencesSlice.actions;

export default preferencesSlice.reducer;