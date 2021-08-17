export const CURRENT_COLOR = 'CURRENT_COLOR';
export const BEFORE_COLOR = 'BEFORE_COLOR';
export const AFTER_COLOR = 'AFTER_COLOR';

export const currentColor = (color) => ({
  type: CURRENT_COLOR,
  payload: color,
});

export const beforeColor = (color) => ({
  type: BEFORE_COLOR,
  payload: color,
});

export const afterColor = (color) => ({
  type: AFTER_COLOR,
  payload: color,
});


