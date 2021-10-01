import {configureStore} from '@reduxjs/toolkit';

import startSlice from './slices/start';
import endSlice from './slices/end';
import notificationSlice from './slices/notifications';
import routeSlice from './slices/route';

export default configureStore({
  reducer: {
    start: startSlice,
    end: endSlice,
    notification: notificationSlice,
    route: routeSlice
  }
});