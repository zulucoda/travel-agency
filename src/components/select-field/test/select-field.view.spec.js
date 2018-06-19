/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React from 'react';
import { shallow } from 'enzyme';

import SelectFieldView from '../select-field.view';

describe('Select Field View - Unit Test', () => {
  const selectOnChangeActionMock = jest.fn();
  const resetActionMock = jest.fn();
  const onChangeMock = jest.fn();
  const selectFieldReducerMock = {
    selectFields: {},
    selectFieldErrors: {}
  };

  it('should render without crashing', () => {
    shallow(
      <SelectFieldView
        name="select1"
        data={[]}
        onChange={onChangeMock}
        selectFieldReducer={selectFieldReducerMock}
        selectOnChangeAction={selectOnChangeActionMock}
        resetAction={resetActionMock}
        label="some label"
        disable={false}
      />
    );
  });
});
