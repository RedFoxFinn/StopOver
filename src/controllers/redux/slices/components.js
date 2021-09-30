import {createSlice} from '@reduxjs/toolkit';

export const componentSlice = createSlice({
  name: 'component_control',
  initialState: {
    addressInput: true,
  },
  reducers: {
    showAddressInput: (state, action) => {
      state.addressInput = true;
    },
    hideAddressInput: (state, action) => {
      state.addressInput = false;
    },
  }
});

export const { showAddressInput, hideAddressInput } = componentSlice.actions;

export default componentSlice.reducer;