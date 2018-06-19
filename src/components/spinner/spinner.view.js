/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SpinnerView extends Component {
  render() {
    if (this.props.showSpinner) {
      return <div className="loading">Loading&#8230;</div>;
    }
    return null;
  }
}

SpinnerView.propTypes = {
  showSpinner: PropTypes.bool.isRequired
};

export default SpinnerView;
