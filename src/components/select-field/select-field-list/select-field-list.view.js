/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/17.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

export default class SelectFieldList extends Component {
  constructor(props) {
    super(props);

    this._renderOptionList = this._renderOptionList.bind(this);
  }

  _renderOptionList() {
    return this.props.data.map(option => (
      <option key={uuidv4()} value={option}>
        {option}
      </option>
    ));
  }

  render() {
    return <optgroup>{this._renderOptionList()}</optgroup>;
  }
}

SelectFieldList.propTypes = {
  data: PropTypes.array.isRequired
};
