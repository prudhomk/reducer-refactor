/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector  } from '../../state/ReduxProvider';
import { currentColor, undoColor, redoColor } from '../../state/actions';
import { selectColor } from '../../state/selectors';



// useEffect(() => {
//   dispatch(currentColor(color));
//   dispatch(beforeColor(color));
//   dispatch(afterColor(color));
// });


function App() {
  const current = useSelector(selectColor);
  const dispatch = useDispatch();
  const undo = () => dispatch(undoColor());
  const redo = () => dispatch(redoColor());
  
  return (
    <>
      <button data-testid="undo" onClick={undo}>undo</button>
      <button data-testid="redo" onClick={redo}>redo</button>
      <input
        data-testid="colorInput"
        type="color"
        value={current}
        onChange={({ target }) => dispatch(currentColor(target.value))}
      />
      <div
        data-testid="display"
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;
