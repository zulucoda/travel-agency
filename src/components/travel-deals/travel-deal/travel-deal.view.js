/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TravelDealView extends Component {
  render() {
    const transport = `fas fa-${this.props.deal.transport}`;
    const flag =
      this.props.arrival === this.props.deal.arrival
        ? 'fas fa-flag-checkered'
        : 'fas fa-flag';
    return (
      <div className="travel-deal">
        <div className="travel-deal-start travel-deal-item">
          <h1>
            <i className={transport} />
          </h1>
          <h3>{this.props.deal.departure}</h3>
        </div>
        <div className="travel-deal-progress travel-deal-item">
          <hr />
        </div>
        <div className="travel-deal-phase-complete travel-deal-item">
          <h1>
            <i className={flag} />
          </h1>
          <h3>{this.props.deal.arrival}</h3>
        </div>
        <div className="travel-deal-cost-duration travel-deal-item">
          <h4>
            {this.props.deal.duration.h}h:{this.props.deal.duration.m}m
          </h4>
          <h6>REF {this.props.deal.reference}</h6>
          <h5>
            {this.props.deal.cost} <i className="fas fa-euro-sign" />
          </h5>
        </div>
      </div>
    );
  }
}

TravelDealView.propTypes = {
  deal: PropTypes.object.isRequired,
  arrival: PropTypes.string.isRequired
};
