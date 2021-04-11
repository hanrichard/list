import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Pagination from './Pagination';

describe('<Pagination />', () => {
  it('should render Pagination', async () => {
    const { getByTestId } = render(<Pagination />);
    const items = await getByTestId('pagination');
    expect(items).toBeTruthy();
  });

  it('should call onClickPagination when clicking on the next page', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <Pagination
        onClickPagination={mockFn}
        currentPage={1}
        totalPaginatedPagesNum={10} />,
    );

    const rightArrowPagination = getByTestId('arrow-right-pagination');
    fireEvent.click(rightArrowPagination);
    expect(mockFn).toBeCalledWith(2);
  });

  it('should call onClickPagination when clicking on the prev page arrow', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <Pagination
        onClickPagination={mockFn}
        currentPage={2}
        totalPaginatedPagesNum={10} />,
    );

    const leftArrowPagination = getByTestId('arrow-left-pagination');
    fireEvent.click(leftArrowPagination);
    expect(mockFn).toBeCalledWith(1);
  });
});
