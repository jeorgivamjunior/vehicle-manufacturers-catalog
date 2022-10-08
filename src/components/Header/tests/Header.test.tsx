import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Header } from '../Header';

describe('Header component', () => {
  it('renders the ui correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display the title', () => {
    render(<Header />);
    const title = screen.getByRole('heading');

    expect(title).toBeInTheDocument();
  });

  it('should display the logo', () => {
    render(<Header />);
    const logo = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
  });
});
