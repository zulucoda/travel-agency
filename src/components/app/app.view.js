/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/16.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React, { Component } from 'react';
import './app.css';

class App extends Component {
  componentDidMount() {
    this.props.onGetTravelDealsAsyncAction();
  }

  render() {
    return (
      <div className="container">
        {JSON.stringify(this.props.travelDeals, null, 3)}
      </div>
    );
  }
}

export default App;
