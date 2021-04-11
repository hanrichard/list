import { render } from '@testing-library/react';
import React from 'react';
import Loader from './Loader';

describe('<Loader />', () => {
  it('should render movie list', async () => {
    const { getByTestId } = render(<Loader />);
    const items = await getByTestId('loader');
    expect(items).toBeTruthy();
  });
});
