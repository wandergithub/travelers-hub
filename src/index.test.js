import React from 'react';
import '@testing-library/jest-dom';
import { render as rtlRender, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/config';

const render = (component) => rtlRender(<Provider store={store}>{component}</Provider>);

describe('Render of all components', () => {
  test('Missions page loaded', () => {
    render(<App />);
    const missions = screen.getAllByAltText('[class="Missions-wrapper"]');
    expect(missions).toBeInTheDocument();
  });
});
