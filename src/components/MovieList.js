import List from '@material-ui/core/List';
import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, selectedMovieId, onMovieSelected }) => {
  const showMovieList = movies?.map((movie) => (
    <MovieItem key={`${movie.imdbID}`} movie={movie} selectedMovieId={selectedMovieId} onMovieSelected={onMovieSelected} />
  ));

  return (
    <List>
      {showMovieList}
    </List>
  );
};

export default MovieList;
