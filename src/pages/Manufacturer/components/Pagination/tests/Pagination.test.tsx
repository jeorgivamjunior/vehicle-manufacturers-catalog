import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ManufacturerContext } from '../../../../../contexts';
import { Pagination } from '../Pagination';

describe('Pagination file', () => {
  it('should display the table with 3 items', () => {
    const contextValue = {
      handlePageChange: jest.fn(),
    } as any;

    render(
      <ManufacturerContext.Provider value={contextValue}>
        <Pagination />
      </ManufacturerContext.Provider>,
    );

    const nextPageButton = screen.getByLabelText('Go to next page');

    const spyHandlePageChange = jest.spyOn(contextValue, 'handlePageChange');

    userEvent.click(nextPageButton);

    expect(spyHandlePageChange).toHaveBeenCalledTimes(1);
  });
});
