/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React from 'react';
import { shallow } from 'enzyme';

import SpinnerView from '../spinner.view';

describe('Spinner View - Unit Test', () => {
  it('should render without crashing', () => {
    shallow(<SpinnerView showSpinner={false} />);
  });
});
