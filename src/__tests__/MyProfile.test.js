import configureStore from 'redux-mock-store';
import {
  render, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import MyProfile from '../components/MyProfile';

const mockStore = configureStore([]);

describe('Tests My profyle', () => {
  test('My profile component renders correctly/Snapshot', () => {
    const store = mockStore({
      rockets: [{
        id: '0',
        name: 'Rocket 0',
        description: 'Rocket description',
        images: ['img 0', 'img 1'],
        reserved: true,
      },
      {
        id: '1',
        name: 'Rocket 1',
        description: 'Rocket description',
        images: ['img 0', 'img 1'],
        reserved: true,
      }],
      missions: [{}],
    });

    const tree = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Reserved rockets shows', () => {
    const store = mockStore({
      rockets: [{
        id: '0',
        name: 'Rocket 0',
        description: 'Rocket description',
        images: ['img 0', 'img 1'],
        reserved: true,
      },
      {
        id: '1',
        name: 'Rocket 1',
        description: 'Rocket description',
        images: ['img 0', 'img 1'],
        reserved: true,
      }],
      missions: [{}],
    });
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    const element = screen.getByText('Rocket 0');

    expect(element).toBeEnabled();
  });

  test('Reserved missions shows', () => {
    const store = mockStore({
      rockets: [{}],
      missions: [{
        mission_id: '1',
        mission_name: 'Mission 1',
        description: 'Mission description',
        reserved: true,
      }],
    });
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    const element = screen.getByText('Mission 1');

    expect(element).toBeEnabled();
  });
});
