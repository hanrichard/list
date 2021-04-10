import List from '@material-ui/core/List';
import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, selectedMovieId, movieSelected }) => {
  const showMovieList = movies?.map((movie, index) => (
    <MovieItem key={`${movie.imdbID}+${index}`} movie={movie} selectedMovieId={selectedMovieId} movieSelected={movieSelected} />
  ));

  return (
    <List>
      {showMovieList}
    </List>
  );
};

export default MovieList;
