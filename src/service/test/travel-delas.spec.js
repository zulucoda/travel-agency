/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import TravelDeals from '../travel-deals';
import testData from '../../../public/data/response.json'; //using as test data as well for convienecey

describe('Travel Deals - Unit Test', () => {
  describe('getTravelDealsForCities', () => {
    describe('cheapest deals', () => {
      it('should get travel deals for current departure and arrival city', () => {
        const departure = 'London';
        const arrival = 'Moscow';
        const dealType = 'Cheapest';

        const actor = new TravelDeals(testData, dealType);

        const actual = actor.getTravelDealsForCities(departure, arrival);

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

    describe('fastest deals', () => {
      it('should get travel deals for current departure and arrival city', () => {
        const departure = 'London';
        const arrival = 'Moscow';
        const dealType = 'Fastest';

        const actor = new TravelDeals(testData, dealType);

        const actual = actor.getTravelDealsForCities(departure, arrival);

        const expected = {
          deals: [
            {
              transport: 'car',
              departure: 'London',
              arrival: 'Amsterdam',
              duration: { h: '04', m: '45' },
              cost: 120,
              discount: 0,
              reference: 'CLA0445'
            },
            {
              transport: 'car',
              departure: 'Amsterdam',
              arrival: 'Warsaw',
              duration: { h: '04', m: '45' },
              cost: 120,
              discount: 0,
              reference: 'CAW0445'
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
              transport: 'car',
              departure: 'Stockholm',
              arrival: 'Moscow',
              duration: { h: '04', m: '00' },
              cost: 120,
              discount: 0,
              reference: 'CSM0400'
            }
          ]
        };

        expect(actual).toEqual(expected);
      });
    });

    describe('edge case', () => {
      it('should get travel deals from London (departure) to Athens (Arrival) city', () => {
        const departure = 'London';
        const arrival = 'Athens';
        const dealType = 'Cheapest';

        const actor = new TravelDeals(testData, dealType);

        const actual = actor.getTravelDealsForCities(departure, arrival);

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
              arrival: 'Prague',
              duration: { h: '06', m: '15' },
              cost: 40,
              discount: 0,
              reference: 'BWP0615'
            },
            {
              transport: 'bus',
              departure: 'Prague',
              arrival: 'Budapest',
              duration: { h: '07', m: '00' },
              cost: 40,
              discount: 25,
              reference: 'BPB0700'
            },
            {
              transport: 'bus',
              departure: 'Budapest',
              arrival: 'Athens',
              duration: { h: '07', m: '45' },
              cost: 40,
              discount: 50,
              reference: 'BBA0745'
            }
          ]
        };

        expect(actual).toEqual(expected);
      });
    });
  });
});
