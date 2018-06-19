/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React from 'react';
import { shallow } from 'enzyme';

import SearchView from '../search.view';

describe('SearchView - Unit Test', () => {
  const onSearchErrorActionMock = jest.fn();
  const onSearchAsyncActionMock = jest.fn();
  const searchOnChangeActionMock = jest.fn();
  const resetToInitStateActionMock = jest.fn();
  const searchReducer = {
    search: {
      departure: 'Choose departure',
      arrival: 'Choose arrival',
      dealType: 'Cheapest'
    },
    isSearchDisable: false
  };

  it('should render without crashing', () => {
    shallow(
      <SearchView
        onSearchAsyncAction={onSearchAsyncActionMock}
        searchOnChangeAction={searchOnChangeActionMock}
        onSearchErrorAction={onSearchErrorActionMock}
        searchReducer={searchReducer}
        cities={[]}
        resetToInitStateAction={resetToInitStateActionMock}
      />
    );
  });
});
