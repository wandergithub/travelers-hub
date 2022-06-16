import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import Rockets from '../components/Rockets';
import { reserveRocket } from '../redux/rockets/Redux-Rockets';

const mockStore = configureStore([]);

describe('Rockets component test', () => {
  const rockets = [
    {
      id: '0',
      name: 'Rocket 0',
      description: 'Rocket description',
      images: ['img 0', 'img 1'],
      reserved: false,
    },
  ];

  test('Component renders/ Snapshot test', () => {
    const store = mockStore({
      rockets,
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Reserve rocket functionality', () => {
    const store = mockStore({
      rockets,
    });
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Reserve Rocket'));
    const firedAction = store.getActions();

    expect(...firedAction).toEqual(reserveRocket('0'));
  });

  test('Cancel rocket reservation functionality', () => {
    const store = mockStore({
      rockets: [
        {
          id: '0',
          name: 'Rocket 0',
          description: 'Rocket description',
          images: ['img 0', 'img 1'],
          reserved: true,
        },
      ],
    });
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Cancel Reservation Rocket'));
    const firedAction = store.getActions();

    expect(...firedAction).toEqual(reserveRocket('0'));
  });
});
