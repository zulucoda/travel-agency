/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/17.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React from 'react';
import { shallow } from 'enzyme';
import SelectFieldList from '../select-field-list.view';

describe('Select Field List View - Unit Test', () => {
  it('should render without crashing', () => {
    shallow(<SelectFieldList data={[]} />);
  });

  it('should render a list of options grouped by optgroup', () => {
    const data = ['value1', 'value2', 'value3'];
    const wrapper = shallow(<SelectFieldList data={data} />);
    const options = wrapper.find('option');
    expect(options.length).toEqual(3);
  });
});
