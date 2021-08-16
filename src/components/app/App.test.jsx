/* eslint-disable max-len */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App container', () => {
  it('renders the app and displays colors', async () => {
    render(<App />);

    const display = screen.getByTestId('display');

    const colorInput = screen.getByTestId('colorInput');
    fireEvent.change(colorInput, { target: { value: '#FF0001' } });
    expect(display).toHaveStyle({ backgroundColor: '#FF0001' });

    const undoButton = screen.getByTestId('undo');
    userEvent.click(undoButton);
    expect(display).toHaveStyle({ backgroundColor: '#FF0000' });

    const redoButton = screen.getByTestId('redo');
    userEvent.click(redoButton);
    expect(display).toHaveStyle({ backgroundColor: '#FF0001' });
  });
});
