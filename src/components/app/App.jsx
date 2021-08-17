import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '../../state/ReduxProvider';
import { currentColor, beforeColor, afterColor } from '../../state/actions';
import { selectColor } from '../../state/selectors';
import { useReducer } from 'react';


const [state, dispatch] = useReducer(reducer, initialState);

const initialState = {
  current: '#FF0000',
  before: [],
  after: [],
};
  //   const undo = () => {
  //     setAfter((after) => [current, ...after]);
  //     setCurrent(before[before.length - 1]);
  //     setBefore((before) => before.slice(0, -1));
  //   };

//   const redo = () => {
//     setBefore((before) => [...before, current]);
//     setCurrent(after[0]);
//     setAfter((after) => after.slice(1));
//   };

//   const record = (val) => {
//     setBefore((before) => [...before, current]);
//     setCurrent(val);
//   };

//   return {
//     undo,
//     record,
//     redo,
//     current,
//   };
// };
const color = useSelector(selectColor);

useEffect(() => {
  dispatch(currentColor(color));
  dispatch(beforeColor(color));
  dispatch(afterColor(color));
});


function App() {
  const { current, undo, redo, record } = useReducer('#FF0000');

  return (
    <>
      <button data-testid="undo" onClick={undo}>undo</button>
      <button data-testid="redo" onClick={redo}>redo</button>
      <input
        data-testid="colorInput"
        type="color"
        value={current}
        onChange={({ target }) => record(target.value)}
      />
      <div
        data-testid="display"
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;
