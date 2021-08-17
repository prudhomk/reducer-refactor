export const CURRENT_COLOR = 'CURRENT_COLOR';
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export const currentColor = (current) => ({
  type: CURRENT_COLOR,
  payload: current,
});

export const undoColor = () => ({
  type: UNDO,
});

export const redoColor = () => ({
  type: REDO,
});


