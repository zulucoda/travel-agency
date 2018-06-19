/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/16.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React from 'react';
import { shallow } from 'enzyme';

import AppView from '../app.view';

describe('App View - Unit Test', () => {
  const onGetTravelDealsAsyncActionMock = jest.fn();

  it('should render without crashing', () => {
    shallow(
      <AppView
        onGetTravelDealsAsyncAction={onGetTravelDealsAsyncActionMock}
        isLoading={false}
      />
    );
  });
});
