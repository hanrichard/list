import { render } from '@testing-library/react';
import React from 'react';
import Loader from './Loader';

describe('<Loader />', () => {
  it('should render accordingly', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
