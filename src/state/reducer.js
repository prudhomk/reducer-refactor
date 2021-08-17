/* eslint-disable max-len */
import { UNDO, REDO, CURRENT_COLOR } from './actions';

export const initialState = {
  current: '#FF0000',
  before: [],
  after: [],
};

export function Reducer(state, action) {
  switch(action.type) {

    case UNDO:
      return { 
        ...state, 
        before: (state.before).slice(0, -1),
        current: state.before[(state.before).length - 1],
        after: [state.current, ...state.after], 
      };   

    case REDO:
      return { 
        ...state, 
        before: [...state.before, state.current],
        current: state.after[0],
        after: (state.after).slice(1),
      };
   
    case CURRENT_COLOR:
      return {
        ...state,
        before: [...state.before, state.current],
        current: action.payload,
      };

    default:
      return state;
  }
}
