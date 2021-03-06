import React from 'react';
import { render } from 'react-dom';
import { initialState, Reducer } from './state/reducer';
import { ReduxProvider } from './state/ReduxProvider';
import App from './components/app/App';

render(
  <ReduxProvider reducer={Reducer} initialState={initialState}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
