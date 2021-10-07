import {createSlice} from '@reduxjs/toolkit';

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: {
    useDefaultRoute: true
  },
  reducers: {
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

export const { disableDefaultRoute, enableDefaultRoute, resetDefaultRoute } = preferencesSlice.actions;

export default preferencesSlice.reducer;