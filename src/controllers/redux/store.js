import {configureStore} from '@reduxjs/toolkit';

import startSlice from './slices/start';
import endSlice from './slices/end';

export default configureStore({
  reducer: {
    start: startSlice,
    end: endSlice
  }
});