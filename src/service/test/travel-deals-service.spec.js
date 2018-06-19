/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/17.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import travelDealsService from '../travel-deals-service';
import testData from '../../../public/data/response.json'; //using as test data as well for convienecey

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

  describe('getTravelDealsForCities', () => {
    describe('success', () => {
      it('should get travel deals for current departure and arrival city', async () => {
        const departure = 'London';
        const arrival = 'Moscow';
        const dealType = 'Cheapest';

        const actual = await travelDealsService.getTravelDealsForCities(
          departure,
          arrival,
          dealType,
          testData
        );

        const expected = {
          deals: [
            {
              transport: 'bus',
              departure: 'London',
              arrival: 'Amsterdam',
              duration: { h: '07', m: '45' },
              cost: 40,
              discount: 25,
              reference: 'BLA0745'
            },
            {
              transport: 'bus',
              departure: 'Amsterdam',
              arrival: 'Warsaw',
              duration: { h: '05', m: '15' },
              cost: 40,
              discount: 25,
              reference: 'BAW0515'
            },
            {
              transport: 'bus',
              departure: 'Warsaw',
              arrival: 'Stockholm',
              duration: { h: '05', m: '15' },
              cost: 40,
              discount: 50,
              reference: 'BWS0515'
            },
            {
              transport: 'bus',
              departure: 'Stockholm',
              arrival: 'Moscow',
              duration: { h: '05', m: '30' },
              cost: 40,
              discount: 25,
              reference: 'BSM0530'
            }
          ]
        };

        expect(actual).toEqual(expected);
      });
    });
  });
});
