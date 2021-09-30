import {configureStore} from '@reduxjs/toolkit';

import startSlice from './slices/start';
import endSlice from './slices/end';
import notificationSlice from './slices/notifications';

export default configureStore({
  reducer: {
    start: startSlice,
    end: endSlice,
    notification: notificationSlice
  }
});