import {createSlice} from '@reduxjs/toolkit';

export const endSlice = createSlice({
  name: 'location_end',
  initialState: {
    street: '',
    number: '',
    municipality: '',
    name: '',
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
    setName: (state, action) => {
      state.name = action.name;
    },
    resetAddress: (state, action) => {
      state.street = '';
      state.number = '';
      state.municipality = '';
      state.name = '';
    },
    setGeocode: (state, action) => {
      state.geocode = action.geocode;
    },
    resetEnd: (state, action) => {
      state.street = '';
      state.number = '';
      state.municipality = '';
      state.name = '';
      state.geocode = null;
    }
  }
});

export const { setStreet, setNumber, setMunicipality, setName, setGeocode, resetAddress, resetEnd } = endSlice.actions;

export default endSlice.reducer;