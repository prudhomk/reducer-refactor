import { GET_COLOR, redo, undo } from './actions';

export const initialState = {
  current: '',
};

export function Reducer(state, action) {
  switch(action.type) {
    case redo:
      return { ...state, current: action.payload };
    case undo:
      return { ...state, current: action.payload };
    case GET_COLOR:
      return state;
  }
}
