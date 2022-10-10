import { render, screen } from '@testing-library/react';

import { ManufacturerContext } from '../../../../../contexts';
import { ManufacturerGrid } from '../ManufacturerGrid';

describe('ManufacturerGrid file', () => {
  it('should display the table with 3 items', () => {
    const contextValue = {
      data: [{ id: 1 }, { id: 2 }],
    } as any;

    render(
      <ManufacturerContext.Provider value={contextValue}>
        <ManufacturerGrid />
      </ManufacturerContext.Provider>,
    );

    const tableRows = screen.getAllByRole('row');

    // including the header row
    expect(tableRows).toHaveLength(3);
  });
});
