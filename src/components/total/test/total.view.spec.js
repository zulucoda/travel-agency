/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React from 'react';
import { shallow } from 'enzyme';

import TotalView from '../total.view';

describe('Total View - Unit Test', () => {
  const travelDealsReducer = { currentDeals: [] };
  const searchReducer = { search: {} };

  it('should render without crashing', () => {
    shallow(
      <TotalView
        searchReducer={searchReducer}
        travelDealsReducer={travelDealsReducer}
      />
    );
  });
});
