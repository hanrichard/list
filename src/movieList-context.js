import React from 'react';

const MovieListContext = React.createContext({
  movieId: '',
  setMovieId: () => {},
});

export default MovieListContext;
