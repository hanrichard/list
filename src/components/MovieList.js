import List from '@material-ui/core/List';
import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, selectedMovieId, movieSelected }) => {
  const showMovieList = movies?.map((movie) => (
    <MovieItem key={`${movie.imdbID}`} movie={movie} selectedMovieId={selectedMovieId} movieSelected={movieSelected} />
  ));

  return (
    <List>
      {showMovieList}
    </List>
  );
};

export default MovieList;
