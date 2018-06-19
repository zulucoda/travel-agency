/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TotalView extends Component {
  constructor(props) {
    super(props);
    this._calculateTotalCost = this._calculateTotalCost.bind(this);
    this._calculateTotalTime = this._calculateTotalTime.bind(this);
  }

  _calculateTotalCost() {
    return this.props.travelDealsReducer.currentDeals.reduce(
      (acc, currentValue) => {
        const accValue = acc.cost ? acc.cost : acc;
        return accValue + currentValue.cost;
      }
    );
  }

  _calculateTotalTime() {
    return this.props.travelDealsReducer.currentDeals.reduce(
      (acc, currentValue) => {
        const accValue = acc.reference
          ? parseInt(acc.reference.substring(4), 0)
          : acc;
        return accValue + parseInt(currentValue.reference.substring(4), 0);
      }
    );
  }

  render() {
    if (this.props.travelDealsReducer.currentDeals.length === 0) {
      return <div />;
    } else {
      return (
        <div className="totals">
          <div className="total">
            <h1>Total</h1>
          </div>
          <div className="total-departure">
            <h1>
              <i className="fas fa-flag" />
            </h1>
            <h3>{this.props.searchReducer.search.departure}</h3>
          </div>
          <div className="total-progress">
            <h1>
              <i className="fas fa-arrow-circle-right" />
            </h1>
          </div>
          <div className="total-arrival">
            <h1>
              <i className="fas fa-flag-checkered" />
            </h1>
            <h3>{this.props.searchReducer.search.arrival}</h3>
          </div>
          <div className="total-amount">
            <h4>
              {this.props.travelDealsReducer.currentDeals.length === 1
                ? `${this.props.travelDealsReducer.currentDeals[0].duration.h}${
                    this.props.travelDealsReducer.currentDeals[0].duration.m
                  }`
                : this._calculateTotalTime()}
            </h4>
            <h3>
              {this.props.travelDealsReducer.currentDeals.length === 1
                ? this.props.travelDealsReducer.currentDeals[0].cost
                : this._calculateTotalCost()}{' '}
              <i className="fas fa-euro-sign" />
            </h3>
          </div>
        </div>
      );
    }
  }
}

TotalView.propTypes = {
  searchReducer: PropTypes.object,
  travelDealsReducer: PropTypes.object
};
