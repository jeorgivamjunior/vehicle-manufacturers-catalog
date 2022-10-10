import { render, screen } from '@testing-library/react';

import { ManufacturerContextProvider } from '../../../contexts';
import { Manufacturer } from '../Manufacturer';

describe('Manufacturer file', () => {
  it('should render a table', () => {
    render(<Manufacturer />, { wrapper: ManufacturerContextProvider });

    const table = screen.getByRole('grid');

    expect(table).toBeInTheDocument();
  });
});
