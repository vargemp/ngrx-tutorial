import { GET_NEW_BANANA, PEEL_BANANA, EAT_BANANA, TIME_HOP_COMPLETE } from './banana.actions.ts';
import * as programActions from './banana.actions.ts';

export function reducer (state: any, action: programActions.BananaAction): any {
  switch(action.type){
    case GET_NEW_BANANA: {
      console.log('REDUCER ' + GET_NEW_BANANA);
      return {
        isPeeled: false,
        bitesRemaining: 9,
        color: 'yellow'
      };
    }
    case PEEL_BANANA: {
      console.log('REDUCER ' + PEEL_BANANA);
      return {
        ...state,
        isPeeled: true
      };
    }
    case EAT_BANANA: {
      console.log('REDUCER ' + EAT_BANANA);
      return {
        ...state,
        bitesRemaining: state.bitesRemaining-action.payload >= 0 ? state.bitesRemaining-action.payload : state.bitesRemaining-0
      }
    }
    case TIME_HOP_COMPLETE: {
      console.log('REDUCER ' + TIME_HOP_COMPLETE);
      return {
        ...state,
        color: action.payload
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}