import {createSlice} from '@reduxjs/toolkit';

export const endSlice = createSlice({
  name: 'location_end',
  initialState: {
    street: '',
    number: '',
    municipality: '',
    geocode: null
  },
  reducers: {
    setStreet: (state, action) => {
      state.street = action.street;
    },
    setNumber: (state, action) => {
      state.number = action.number;
    },
    setMunicipality: (state, action) => {
      state.municipality = action.municipality;
    },
    resetAddress: (state, action) => {
      state.street = '';
      state.number = '';
      state.municipality = '';
    },
    setGeocode: (state, action) => {
      state.geocode = action.geocode;
    },
    resetEnd: (state, action) => {
      state.street = '';
      state.number = '';
      state.municipality = '';
      state.geocode = null;
    }
  }
});

export const { setStreet, setNumber, setMunicipality, setGeocode, resetAddress, resetEnd } = endSlice.actions;

export default endSlice.reducer;