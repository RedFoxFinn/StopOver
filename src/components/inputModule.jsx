import React, {  } from 'react';

import { AddressInput } from './addressInput';

export const InputModule = ({id}) => {
  return <React.Fragment>
    <AddressInput id='address-form-start' end={false} start={true} />
    <AddressInput id='address-form-end' end={true} start={false} />
    {process.env.NODE_ENV !== 'production' && <AddressInput />}
  </React.Fragment>;
};