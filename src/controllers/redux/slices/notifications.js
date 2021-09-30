import {createSlice} from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notification_control',
  initialState: {
    alert: null,
  },
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.alert;
    },
    resetAlert: (state, action) => {
      state.alert = null;
    },
  }
});

export const { setAlert, resetAlert } = notificationSlice.actions;

export default notificationSlice.reducer;