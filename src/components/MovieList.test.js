import { render } from '@testing-library/react';
import React from 'react';
import MovieList from './MovieList';

describe('<MovieList />', () => {
  const movies = [{}];

  it('should render movie list', async () => {
    const { getByTestId } = render(<MovieList
      movies={movies} selectedMovieId="" movieSelected={jest.fn()} />);
    const items = await getByTestId('list');
    expect(items).toBeTruthy();
  });
});
