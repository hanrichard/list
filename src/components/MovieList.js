import List from '@material-ui/core/List';
import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, selectedMovieId, onMovieSelected }) => {
  console.log('MovieList', movies);

  // eslint-disable-next-line react/prop-types
  const showMovieList = movies?.map((movie) => (
    <MovieItem movie={movie} selectedMovieId={selectedMovieId} onMovieSelected={onMovieSelected} />
  ));

  return (
    <List>
      {showMovieList}
    </List>
  );
};

export default MovieList;
