/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TravelDealView from './travel-deal/travel-deal.view';
import uuidv4 from 'uuid/v4';

export default class TravelDealsView extends Component {
  constructor(props) {
    super(props);

    this._renderTravelDeals = this._renderTravelDeals.bind(this);
  }

  _renderTravelDeals() {
    return this.props.travelDealsReducer.currentDeals.map(deal => (
      <TravelDealView
        key={uuidv4()}
        deal={deal}
        arrival={this.props.searchReducer.search.arrival}
      />
    ));
  }

  componentDidMount() {}

  render() {
    if (this.props.travelDealsReducer.currentDeals.length === 0) {
      return <div />;
    } else {
      return <div className="travel-deals">{this._renderTravelDeals()}</div>;
    }
  }
}

TravelDealsView.propTypes = {
  travelDealsReducer: PropTypes.object,
  searchReducer: PropTypes.object,
  cacheDealsAction: PropTypes.func,
  receiveDealsAction: PropTypes.func
};
