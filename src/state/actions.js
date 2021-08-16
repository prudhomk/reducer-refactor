export const GET_COLOR = 'GET_COLOR';


export const getColor = (color) => ({
  type: GET_COLOR,
  payload: color,
});

export const redo = (color) => ({
  type: redo,
  payload: color,
});

