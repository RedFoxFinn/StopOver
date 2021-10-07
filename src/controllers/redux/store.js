import {configureStore} from '@reduxjs/toolkit';

import startSlice from './slices/start';
import endSlice from './slices/end';
import notificationSlice from './slices/notifications';
import routeSlice from './slices/route';
import preferencesSlice from './slices/preferences';

export default configureStore({
  reducer: {
    start: startSlice,
    end: endSlice,
    notification: notificationSlice,
    route: routeSlice,
    preferences: preferencesSlice
  }
});