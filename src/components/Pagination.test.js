import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Pagination from './Pagination';

describe('<Pagination />', () => {
  it('should render accordingly', () => {
    const { asFragment } = render(
      <Pagination
        onClickPagination={jest.fn()}
        currentPage={1}
        totalPaginatedPagesNum={10} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onClickPagination when clicking on the next pagination arrow', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <Pagination
        onClickPagination={mockFn}
        currentPage={1}
        totalPaginatedPagesNum={10} />,
    );

    const rightArrowPagination = getByTestId('arrow-right-pagination');

    // Click next page
    fireEvent.click(rightArrowPagination);
    expect(mockFn).toBeCalledWith(2);
  });

  it('should call onClickPagination when clicking on the previous pagination arrow', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <Pagination
        onClickPagination={mockFn}
        currentPage={2}
        totalPaginatedPagesNum={10} />,
    );

    const leftArrowPagination = getByTestId('arrow-left-pagination');

    // Click previous page
    fireEvent.click(leftArrowPagination);
    expect(mockFn).toBeCalledWith(1);
  });
});
