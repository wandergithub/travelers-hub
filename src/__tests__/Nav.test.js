import renderer from 'react-test-renderer';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from '../components/Nav';

describe('Nav bar testing', () => {
  test('Nav bar Snapshot', () => {
    const tree = renderer.create(<Router><Navbar /></Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Nav bar rockets link', () => {
    render(<Router><Navbar /></Router>);
    const link = screen.getByText('Rockets');

    fireEvent.click(link);

    expect(window.location.pathname).toBe('/rockets');
  });

  test('Nav bar Missions link', () => {
    render(<Router><Navbar /></Router>);
    const link = screen.getByText('Missions');
    fireEvent.click(screen.getByText('My Profile'));

    fireEvent.click(link);

    expect(window.location.pathname).toBe('/');
  });

  test('Nav bar My profile link', () => {
    render(<Router><Navbar /></Router>);
    const link = screen.getByText('My Profile');

    fireEvent.click(link);

    expect(window.location.pathname).toBe('/myprofile');
  });
});
