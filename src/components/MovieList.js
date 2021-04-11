import List from '@material-ui/core/List';
import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, selectedMovieID, movieSelected }) => {
  const showMovieList = movies?.map((movie, index) => (
    <MovieItem key={`${movie.imdbID}+${index}`} movie={movie} selectedMovieID={selectedMovieID} movieSelected={movieSelected} />
  ));

  return (
    <List data-testid="list">
      {showMovieList}
    </List>
  );
};

export default MovieList;
