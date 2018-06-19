import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectFieldView from '../select-field/select-field.view';

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
            <select className="custom-select" id="optionsSelect">
              <option value="Cheapest">Cheapest</option>
              <option value="Fastest">Fastest</option>
            </select>
          </div>
        </div>
        <div className="search-btn search-item">
          <button type="button" className="btn btn-danger">
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
  cities: PropTypes.array.isRequired
};
