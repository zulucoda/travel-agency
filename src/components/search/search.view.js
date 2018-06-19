/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectFieldView from '../select-field/select-field.view';
import { DEAL_TYPE } from '../../constants/constants';

export default class SearchView extends Component {
  constructor(props) {
    super(props);
    this._onSearchClick = this._onSearchClick.bind(this);
  }

  _onSearchClick() {
    this.props.onSearchErrorAction({
      message: ''
    });
    if (
      this.props.searchReducer.search.departure ===
      this.props.searchReducer.search.arrival
    ) {
      return this.props.onSearchErrorAction({
        message:
          'Departure and Arrival city cannot be the same city. Please choose a different Departure or Arrival city.'
      });
    }
    console.log(this.props.searchReducer.search.arrival);
    if (this.props.searchReducer.search.departure === 'Choose departure') {
      return this.props.onSearchErrorAction({
        message: 'Please choose a Departure city.'
      });
    }

    if (this.props.searchReducer.search.arrival === 'Choose arrival') {
      return this.props.onSearchErrorAction({
        message: 'Please choose a Arrival city.'
      });
    }

    return this.props.onSearchAsyncAction();
  }

  _renderSearchOrClear() {
    if (this.props.searchReducer.isSearchDisable) {
      return (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            this.props.resetToInitStateAction();
            this.props.searchOnChangeAction({
              name: 'departure',
              value: 'Choose departure'
            });
            this.props.searchOnChangeAction({
              name: 'arrival',
              value: 'Choose arrival'
            });
          }}
        >
          CLEAR
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-danger"
          onClick={this._onSearchClick}
        >
          SEARCH
        </button>
      );
    }
  }

  render() {
    return (
      <div className="search-component">
        <div className="search-start search-item">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="departure">
                DEP
              </label>
            </div>
            <SelectFieldView
              data={this.props.cities}
              name="departure"
              onChange={this.props.searchOnChangeAction}
              value={this.props.searchReducer.search.departure}
              label="Departure Cities"
              disable={this.props.searchReducer.isSearchDisable}
            />
          </div>
        </div>
        <div className="search-end search-item">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="arrival">
                ARR
              </label>
            </div>
            <SelectFieldView
              data={this.props.cities}
              name="arrival"
              onChange={this.props.searchOnChangeAction}
              value={this.props.searchReducer.search.arrival}
              label="Arrival Cities"
              disable={this.props.searchReducer.isSearchDisable}
            />
          </div>
        </div>
        <div className="search-options search-item">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="dealType">
                OPTIONS
              </label>
            </div>
            <SelectFieldView
              data={[DEAL_TYPE.cheapest, DEAL_TYPE.fastest]}
              name="dealType"
              onChange={this.props.searchOnChangeAction}
              value={this.props.searchReducer.search.dealType}
              label="Preferred journey"
              disable={this.props.searchReducer.isSearchDisable}
            />
          </div>
        </div>
        <div className="search-btn search-item">
          {this._renderSearchOrClear()}
        </div>
        <div className="search-error-message text-warning">
          {this.props.searchReducer.errorMessage}
        </div>
      </div>
    );
  }
}

SearchView.propTypes = {
  searchOnChangeAction: PropTypes.func.isRequired,
  searchReducer: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired,
  onSearchAsyncAction: PropTypes.func.isRequired,
  onSearchErrorAction: PropTypes.func.isRequired,
  resetToInitStateAction: PropTypes.func.isRequired
};
