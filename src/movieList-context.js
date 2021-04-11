import React from 'react';

const MovieListContext = React.createContext({
  movieID: '',
  setMovieID: () => {},
});

export default MovieListContext;
