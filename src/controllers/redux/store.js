import {configureStore} from '@reduxjs/toolkit';

import startSlice from './slices/start';
import endSlice from './slices/end';
import { componentSlice } from './slices/components';

export default configureStore({
  reducer: {
    start: startSlice,
    end: endSlice,
    component: componentSlice
  }
});