/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/17.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import TravelDeals from './travel-deals';

const API_URL = '/data/';

class TravelDealsService {
  _parseJson(response) {
    return response.json();
  }

  onGetTravelDeals() {
    return fetch(`${API_URL}response.json`, {
      method: 'GET'
    }).then(this._parseJson);
  }

  getTravelDealsForCities(departure, arrival, dealType, data) {
    return new Promise((resolve, reject) => {
      const travelDeals = new TravelDeals(data, dealType);
      const results = travelDeals.getTravelDealsForCities(departure, arrival);
      resolve(results);
    });
  }
}

export default new TravelDealsService();
