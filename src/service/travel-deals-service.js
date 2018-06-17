/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/17.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

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
}

export default new TravelDealsService();
