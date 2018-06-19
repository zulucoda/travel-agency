/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/16.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React, { Component } from 'react';
import './app.css';
import SearchContainer from '../search/search.container';
import TravelDealsContainer from '../travel-deals/travel-deals.container';
import TotalContainer from '../total/total.container';
import SpinnerView from '../spinner/spinner.view';
import PropTypes from 'prop-types';

export default class App extends Component {
  componentDidMount() {
    this.props.onGetTravelDealsAsyncAction();
  }

  render() {
    return (
      <div className="container">
        <div className="app-body">
          <SearchContainer />
          <TravelDealsContainer />
          <TotalContainer />
          <SpinnerView showSpinner={this.props.isLoading} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onGetTravelDealsAsyncAction: PropTypes.func.isRequired
};
