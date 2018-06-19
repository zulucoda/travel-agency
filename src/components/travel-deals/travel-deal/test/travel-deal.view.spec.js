/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React from 'react';
import { shallow } from 'enzyme';

import TravelDealView from '../travel-deal.view';

describe('Travel Deal View - Unit Test', () => {
  it('should render without crashing', () => {
    shallow(
      <TravelDealView
        arrival={''}
        deal={{
          transport: 'bus',
          departure: 'London',
          arrival: 'Amsterdam',
          duration: { h: '07', m: '45' },
          cost: 40,
          discount: 25,
          reference: 'BLA0745'
        }}
      />
    );
  });
});
