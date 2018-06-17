/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/17.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import travelDealsService from '../travel-deals-service';

describe('Travel Deals Service - Unit Test', () => {
  function mockServerSuccess() {
    return jest.fn().mockImplementation(() => {
      return new Promise(resolve => {
        resolve({
          status: '200',
          json: function() {
            return { payload: 'some payload' };
          }
        });
      });
    });
  }

  describe('onGetTravelDeals', () => {
    it('should get travel deals', async () => {
      global.fetch = mockServerSuccess();

      const response = await travelDealsService.onGetTravelDeals();

      expect(response).toEqual({ payload: 'some payload' });
    });
  });
});
