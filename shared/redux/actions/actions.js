import * as ActionTypes from '../constants/constants';
// import fetch from 'isomorphic-fetch';

// const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8000)}`) : '';


export function incrementTick() {
  return {
    type: ActionTypes.INCREMENT_TICK,
  };
}
