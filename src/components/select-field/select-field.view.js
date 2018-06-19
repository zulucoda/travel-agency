/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectFieldList from './select-field-list/select-field-list.view';

export default class SelectFieldView extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {}

  _onChange(evt) {
    const name = this.props.name;
    const value = evt.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;

    this.props.onChange({ name, value, error });
  }

  render() {
    return (
      <select
        className="custom-select"
        name={this.props.name}
        id={this.props.name}
        onChange={this._onChange}
        value={this.props.value}
      >
        <SelectFieldList data={this.props.data} label={this.props.label} />
      </select>
    );
  }
}

SelectFieldView.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  value: PropTypes.string,
  validate: PropTypes.func,
  label: PropTypes.string.isRequired
};
