import {createSlice} from '@reduxjs/toolkit';

export const routeSlice = createSlice({
  name: 'route_control',
  initialState: {
    routes: null,
  },
  reducers: {
    setRoutes: (state, action) => {
      state.routes = action.routes;
    },
    resetRoutes: (state, action) => {
      state.routes = null;
    },
    addRoute: (state, action) => {
      if (state.routes !== null && state.routes.length > 0) {
        state.routes = [...state.routes, action.route];
      } else {
        state.routes = [action.route];
      }
    
    }
  }
});

export const { setRoutes, resetRoutes, addRoute } = routeSlice.actions;

export default routeSlice.reducer;