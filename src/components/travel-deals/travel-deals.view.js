/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TravelDealsView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="travel-deals">
        {JSON.stringify(this.props.travelDealsReducer.currentDeals, null, 3)}
        {/*<div className="travel-deal">*/}
        {/*<div className="travel-deal-start travel-deal-item">*/}
        {/*<h1>*/}
        {/*<i className="fas fa-bus" />*/}
        {/*</h1>*/}
        {/*<h3>London</h3>*/}
        {/*</div>*/}
        {/*<div className="travel-deal-progress travel-deal-item">*/}
        {/*<hr />*/}
        {/*</div>*/}
        {/*<div className="travel-deal-phase-complete travel-deal-item">*/}
        {/*<h1>*/}
        {/*<i className="fas fa-flag" />*/}
        {/*</h1>*/}
        {/*<h3>Amsterdam</h3>*/}
        {/*</div>*/}
        {/*<div className="travel-deal-cost-duration travel-deal-item">*/}
        {/*<h4>05h:15m</h4>*/}
        {/*<h6>REF BLA0515</h6>*/}
        {/*<h5>*/}
        {/*160 <i className="fas fa-euro-sign" />*/}
        {/*</h5>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="travel-deal">*/}
        {/*<div className="travel-deal-start travel-deal-item">*/}
        {/*<h1>*/}
        {/*<i className="fas fa-train" />*/}
        {/*</h1>*/}
        {/*<h3>Amsterdam</h3>*/}
        {/*</div>*/}
        {/*<div className="travel-deal-progress travel-deal-item">*/}
        {/*<hr />*/}
        {/*</div>*/}
        {/*<div className="travel-deal-phase-complete travel-deal-item">*/}
        {/*<h1>*/}
        {/*<i className="fas fa-flag" />*/}
        {/*</h1>*/}
        {/*<h3>Warsaw</h3>*/}
        {/*</div>*/}
        {/*<div className="travel-deal-cost-duration travel-deal-item">*/}
        {/*<h4>04h:15m</h4>*/}
        {/*<h6>REF TAW0415</h6>*/}
        {/*<h5>*/}
        {/*110 <i className="fas fa-euro-sign" />*/}
        {/*</h5>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="travel-deal">*/}
        {/*<div className="travel-deal-start travel-deal-item">*/}
        {/*<h1>*/}
        {/*<i className="fas fa-car" />*/}
        {/*</h1>*/}
        {/*<h3>Warsaw</h3>*/}
        {/*</div>*/}
        {/*<div className="travel-deal-progress travel-deal-item">*/}
        {/*<hr />*/}
        {/*</div>*/}
        {/*<div className="travel-deal-phase-complete travel-deal-item">*/}
        {/*<h1>*/}
        {/*<i className="fas fa-flag-checkered" />*/}
        {/*</h1>*/}
        {/*<h3>Moscow</h3>*/}
        {/*</div>*/}
        {/*<div className="travel-deal-cost-duration travel-deal-item">*/}
        {/*<h4>03h:15m</h4>*/}
        {/*<h6>REF CWM0315</h6>*/}
        {/*<h5>*/}
        {/*80 <i className="fas fa-euro-sign" />*/}
        {/*</h5>*/}
        {/*</div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

TravelDealsView.propTypes = {
  travelDealsReducer: PropTypes.object,
  cacheDealsAction: PropTypes.func,
  receiveDealsAction: PropTypes.func
};
