/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

jest.mock('redux');

import { mapStateToProps } from '../total.container';

describe('Total Container - Unit test', () => {
  function stateBefore() {
    return {
      searchReducer: {
        search: {
          departure: 'some departure city',
          arrival: 'some arrival city'
        }
      },
      travelDealsReducer: {
        currentDeals: [
          {
            transport: 'bus',
            departure: 'London',
            arrival: 'Amsterdam',
            duration: {
              h: '07',
              m: '45'
            },
            cost: 40,
            discount: 25,
            reference: 'BLA0745'
          },
          {
            transport: 'bus',
            departure: 'Amsterdam',
            arrival: 'Warsaw',
            duration: {
              h: '05',
              m: '15'
            },
            cost: 40,
            discount: 25,
            reference: 'BAW0515'
          },
          {
            transport: 'bus',
            departure: 'Warsaw',
            arrival: 'Stockholm',
            duration: {
              h: '05',
              m: '15'
            },
            cost: 40,
            discount: 50,
            reference: 'BWS0515'
          },
          {
            transport: 'bus',
            departure: 'Stockholm',
            arrival: 'Moscow',
            duration: {
              h: '05',
              m: '30'
            },
            cost: 40,
            discount: 25,
            reference: 'BSM0530'
          }
        ]
      }
    };
  }

  it('should map state to props', () => {
    const actual = mapStateToProps(stateBefore());

    const expected = {
      ...stateBefore()
    };

    expect(actual).toEqual(expected);
  });
});
