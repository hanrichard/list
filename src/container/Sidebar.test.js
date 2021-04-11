import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
  const movies = [
    {
      Title: 'A Few Good Men',
      Year: '1992',
      imdbID: 'tt0104257',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMmRlZDQ1MmUtMzE2Yi00YTkxLTk1MGMtYmIyYWQwODcxYzRlXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg',
    },
    {
      Title: 'For a Few Dollars More',
      Year: '1965',
      imdbID: 'tt0059578',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNWM1NmYyM2ItMTFhNy00NDU0LThlYWUtYjQyYTJmOTY0ZmM0XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    },
    {
      Title: 'A Few Best Men',
      Year: '2011',
      imdbID: 'tt1640711',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BODU0NzY2MzY4Ml5BMl5BanBnXkFtZTgwOTQzOTE3MjE@._V1_SX300.jpg',
    },
    {
      Title: 'A Few Days in September',
      Year: '2006',
      imdbID: 'tt0446442',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNTQ2MDMzMzE0M15BMl5BanBnXkFtZTcwMDMwMTA1MQ@@._V1_SX300.jpg',
    },
    {
      Title: 'A Few Less Men',
      Year: '2017',
      imdbID: 'tt3784652',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZWM5N2NiZTAtZGRkNi00NzE1LWEyMTMtMWQ4NTE5MDA0NzlmXkEyXkFqcGdeQXVyNTE0MDE1MjQ@._V1_SX300.jpg',
    },
    {
      Title: 'A Few Kilos of Dates for a Funeral',
      Year: '2006',
      imdbID: 'tt0922379',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTI5MTg3MmUtNjk2Zi00NjdmLThlMzYtYmZjOWE4NTczMzY4L2ltYWdlXkEyXkFqcGdeQXVyMjEwMDY4OTk@._V1_SX300.jpg',
    },
    {
      Title: 'A Few Days with Me',
      Year: '1988',
      imdbID: 'tt0095943',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTQxOTQ2NDAtNzM0ZC00OWEzLTlhNjQtYzA2NzM0MTc4ZDE3XkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_SX300.jpg',
    },
    {
      Title: 'A Few Hours of Spring',
      Year: '2012',
      imdbID: 'tt1899270',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjUxNzYyNzktNGNkNi00NTkwLWJjYzUtYjUwNDliYmM2MDZhXkEyXkFqcGdeQXVyNzM0MDQ1Mw@@._V1_SX300.jpg',
    },
    {
      Title: 'A Skin Too Few: The Days of Nick Drake',
      Year: '2002',
      imdbID: 'tt0264013',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDcyMTlhMzItN2FkOC00ZWY5LTg0OTUtZjlhZDFiZmY5MjU0XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg',
    },
    {
      Title: 'A Few Cubic Meters of Love',
      Year: '2014',
      imdbID: 'tt3516158',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNjMyNzkzMDc4OF5BMl5BanBnXkFtZTgwNzc5NDI4MjE@._V1_SX300.jpg',
    },
    {
      Title: 'For A Few Dollars Less',
      Year: '1966',
      imdbID: 'tt0155009',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGM0YzExOWItNWI3Mi00Yjg5LTk1MDAtOWJmMDk1YzViNGU5XkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg',
    },
    {
      Title: 'For A Few Dollars Less',
      Year: '1966',
      imdbID: 'tt0155033',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGM0YzExOWItNWI3Mi00Yjg5LTk1MDAtOWJmMDk1YzViNGU5XkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg',
    },
  ];
  it('should render the default text', async () => {
    const selectedMovies = movies.slice(0, 1);
    const mock = new MockAdapter(axios);
    mock.onGet('testurl').reply(200, selectedMovies);

    render(
      <Sidebar onMovieSelected={jest.fn()} onKeywords={jest.fn()} />,
    );
    const items = await screen.findAllByText(/Start typing to search for movies/);
    expect(items).toHaveLength(1);
  });

  it('should not render pagination', async () => {
    const mock = new MockAdapter(axios);
    const selectedMovies = movies.slice(0, 1);
    mock.onGet('testurl').reply(200, selectedMovies);

    const { queryAllByTestId } = render(
      <Sidebar onMovieSelected={jest.fn()} onKeywords={jest.fn()} />,
    );
    const paginations = queryAllByTestId('pagination');
    expect(paginations.length).toEqual(0);
  });

  it('should render pagination', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet('testurl').reply(200, movies);

    const { getByPlaceholderText } = render(
      <Sidebar onMovieSelected={jest.fn()} onKeywords={jest.fn()} />,
    );

    const searchBar = getByPlaceholderText('Search here');
    fireEvent.change(searchBar, { target: { value: 'interstellar' } });

    const items = await screen.findAllByText(/Page 1/);
    expect(items).toHaveLength(1);
  });
});
