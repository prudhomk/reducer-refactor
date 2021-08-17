/* eslint-disable max-len */
import { AFTER_COLOR, BEFORE_COLOR, CURRENT_COLOR, redo, undo } from './actions';

export const initialState = {
  current: '#FF0000',
  before: [],
  after: [],
};

export function Reducer(state, action) {
  switch(action.type) {

    case undo:
      return { 
        ...state, 
        before: (action.payload(BEFORE_COLOR)).slice(0, -1),
        current: action.payload([BEFORE_COLOR.length - 1]),
        after: action.payload([CURRENT_COLOR, ...AFTER_COLOR]), 
      };    
    case redo:
      return { 
        ...state, 
        before: action.payload([...BEFORE_COLOR, CURRENT_COLOR]),
        current: action.payload(AFTER_COLOR[0]),
        after: (action.payload(AFTER_COLOR)).slice(1),
      };
   
    case CURRENT_COLOR:
      return state;
  }
}
