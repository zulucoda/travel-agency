/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React from 'react';
import { shallow } from 'enzyme';

import TotalView from '../total.view';

describe('Total View - Unit Test', () => {
  it('should render without crashing', () => {
    const travelDealsReducer = { currentDeals: [] };
    const searchReducer = { search: {} };
    shallow(
      <TotalView
        searchReducer={searchReducer}
        travelDealsReducer={travelDealsReducer}
      />
    );
  });

  describe('_calculateTotalTime', () => {
    it('should render total view with one deal', () => {
      const travelDealsReducer = {
        currentDeals: [
          {
            transport: 'bus',
            departure: 'London',
            arrival: 'Amsterdam',
            duration: { h: '07', m: '45' },
            cost: 40,
            discount: 25,
            reference: 'BLA0745'
          }
        ]
      };
      const searchReducer = {
        search: {
          departure: 'some departure city',
          arrival: 'some arrival city',
          dealType: 'Cheapest'
        }
      };
      shallow(
        <TotalView
          searchReducer={searchReducer}
          travelDealsReducer={travelDealsReducer}
        />
      );
    });
  });
});
