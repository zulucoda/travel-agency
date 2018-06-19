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
  }

  componentDidMount() {}

  render() {
    return (
      <div className="search-component">
        <div className="search-start search-item">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" for="startSelect">
                DEP
              </label>
            </div>
            <SelectFieldView
              data={this.props.cities}
              name="departure"
              onChange={this.props.searchOnChangeAction}
              value={this.props.searchReducer.search.departure}
              label="Departure Cities"
            />
          </div>
        </div>
        <div className="search-end search-item">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" for="endSelect">
                ARR
              </label>
            </div>
            <SelectFieldView
              data={this.props.cities}
              name="arrival"
              onChange={this.props.searchOnChangeAction}
              value={this.props.searchReducer.search.arrival}
              label="Arrival Cities"
            />
          </div>
        </div>
        <div className="search-options search-item">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" for="optionsSelect">
                OPTIONS
              </label>
            </div>
            <SelectFieldView
              data={[DEAL_TYPE.cheapest, DEAL_TYPE.fastest]}
              name="dealType"
              onChange={this.props.searchOnChangeAction}
              value={this.props.searchReducer.search.dealType}
              label="Preferred journey"
            />
          </div>
        </div>
        <div className="search-btn search-item">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.onSearchAsyncAction()}
          >
            SEARCH
          </button>
        </div>
      </div>
    );
  }
}

SearchView.propTypes = {
  searchOnChangeAction: PropTypes.func.isRequired,
  searchReducer: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired,
  onSearchAsyncAction: PropTypes.func.isRequired
};
