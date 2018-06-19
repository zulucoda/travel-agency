/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import { DEAL_TYPE, CITY_TYPE } from '../constants/constants';

class TravelDeals {
  constructor(data, dealType) {
    this.data = data;
    this.dealType = dealType;
  }

  _findCityAndIndex(cityType, city) {
    let firstIndex = -1;
    const deals = this.data.deals.filter((item, index) => {
      if (item[cityType].toLowerCase() === city.toLowerCase()) {
        if (firstIndex === -1) {
          firstIndex = index;
        }
        return true;
      }
    });

    return {
      deals: deals.slice(0, 3),
      index: firstIndex,
      city,
      cityType
    };
  }

  _mapJourney(departureCityAndIndex, arrivalCityAndIndex) {
    const deals = this.data.deals.slice(
      departureCityAndIndex.index,
      arrivalCityAndIndex.index
    );
    const mapJourney = [];
    mapJourney.push(arrivalCityAndIndex);
    for (let i = deals.length - 1; i > -1; i = i - 2) {
      if (
        deals[i].arrival ===
        mapJourney[mapJourney.length - 1].deals[0].departure
      ) {
        const city = this._findCityAndIndex(
          CITY_TYPE.arrival,
          deals[i].arrival
        );
        mapJourney.push(city);
      }
    }
    return mapJourney.reverse();
  }

  _calculateCheapestDeal(journey) {
    return journey.deals.reduce((dealAcc, currentDeal) => {
      const acc = dealAcc.cost ? dealAcc.cost : dealAcc;
      return Math.min(acc, currentDeal.cost);
    });
  }

  _filterCheapestDeal(journey, cheapestDeal) {
    return [journey.deals.filter(deal => deal.cost === cheapestDeal)[0]]; // always return first one if there's more than one
  }

  _getCheapestDeals(mappedJourney) {
    mappedJourney.forEach(journey => {
      const cheapestDeal = this._calculateCheapestDeal(journey);
      journey.deals = this._filterCheapestDeal(journey, cheapestDeal);
      return journey;
    });
    return {
      deals: mappedJourney.map(deals => {
        return deals.deals.reduce(deal => deal);
      })
    };
  }

  _calculateFastestDeal(journey) {
    return journey.deals.reduce((dealAcc, currentDeal) => {
      const acc = dealAcc.reference ? dealAcc.reference : dealAcc;
      return Math.min(
        Number.isInteger(acc) ? acc : parseInt(acc.substring(4)),
        parseInt(currentDeal.reference.substring(4))
      );
    });
  }

  _getBestDealForCustomer(journey, fastestDeal) {
    // if there's more than fast deal, get the cheapest for the customer
    const fastestJourney = journey.deals.filter(
      deal => parseInt(deal.reference.substring(4)) === fastestDeal
    );
    if (fastestJourney.length > 1) {
      const bestDealForCustomer = this._calculateCheapestDeal(journey);
      return this._filterCheapestDeal(journey, bestDealForCustomer);
    }
    return [fastestJourney[0]];
  }

  _getFastestDeals(mappedJourney) {
    mappedJourney.forEach(journey => {
      const fastestDeal = this._calculateFastestDeal(journey);
      journey.deals = this._getBestDealForCustomer(journey, fastestDeal); // always return first one if there's more than one
      return journey;
    });
    return {
      deals: mappedJourney.map(deals => {
        return deals.deals.reduce(deal => deal);
      })
    };
  }

  _getPreferredJourney(mappedJourney) {
    if (this.dealType === DEAL_TYPE.cheapest) {
      return this._getCheapestDeals(mappedJourney);
    }
    return this._getFastestDeals(mappedJourney);
  }

  getTravelDealsForCities(departure, arrival) {
    const departureCityAndIndex = this._findCityAndIndex(
      CITY_TYPE.departure,
      departure
    );
    const arrivalCityAndIndex = this._findCityAndIndex(
      CITY_TYPE.arrival,
      arrival
    );

    // Because the initial data is an ordered list we can use this to find cities in between departure & arrival and map the journey
    const mappedJourney = this._mapJourney(
      departureCityAndIndex,
      arrivalCityAndIndex
    );

    return this._getPreferredJourney(mappedJourney);
  }
}

export default TravelDeals;
