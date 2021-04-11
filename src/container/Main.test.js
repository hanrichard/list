/* eslint-disable react/jsx-indent */
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import MovieListContext from '../movieList-context';
import Main from './Main';

describe('<Main />', () => {
  const movie = {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Genre: 'Adventure, Drama, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot: "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.",
    Language: 'English',
    Country: 'USA, UK, Canada',
    Awards: 'Won 1 Oscar. Another 43 wins & 148 nominations.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.6/10',
      },
      {
        Source: 'Rotten Tomatoes',
        Value: '72%',
      },
      {
        Source: 'Metacritic',
        Value: '74/100',
      },
    ],
    Metascore: '74',
    imdbRating: '8.6',
    imdbVotes: '1,530,614',
    imdbID: 'tt0816692',
    Type: 'movie',
    DVD: '24 May 2016',
    BoxOffice: '$188,020,017',
    Production: 'Syncopy, Lynda Obst Productions',
    Website: 'N/A',
    Response: 'True',
  };

  it('should render movie title', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet('testurl').reply(200, movie);
    const value = {
      movieId: 'tt0816692',
    };
    render(<MovieListContext.Provider value={value}>
      <Main />
           </MovieListContext.Provider>);
    const items = await screen.findAllByText(/Tile:Interstellar/);
    expect(items).toHaveLength(1);
  });
});
