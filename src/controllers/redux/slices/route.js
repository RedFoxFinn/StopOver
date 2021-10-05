import {createSlice} from '@reduxjs/toolkit';

export const routeSlice = createSlice({
  name: 'route_control',
  initialState: {
    routes: [],
    defaultroute: null
  },
  reducers: {
    setRoutes: (state, action) => {
      state.routes = action.routes;
    },
    resetRoutes: (state, action) => {
      state.routes = [];
    },
    addRoute: (state, action) => {
      if (state.routes.length > 0) {
        state.routes = [...state.routes, action.route];
      } else {
        state.routes = [action.route];
      }
    },
    setDefault: (state, action) => {
      state.defaultroute = action.route;
    },
    resetDefault: (state, action) => {
      state.defaultroute = null;
    }, 
  }
});

export const { setRoutes, resetRoutes, addRoute, setDefault, resetDefault } = routeSlice.actions;

export default routeSlice.reducer;