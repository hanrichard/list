import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import React from 'react';

const MovieItem = ({ movie, selectedMovieId, movieSelected }) => {
  const {
    Title, imdbID, Poster, Year,
  } = movie;

  const handleSelectId = () => {
    movieSelected(imdbID);
  };

  return (
    <ListItem
      button
      selected={imdbID === selectedMovieId}
      onClick={handleSelectId}
      data-testid="movie-list-item">
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          variant="square"
          src={Poster} />
      </ListItemAvatar>
      <ListItemText primary={Title} secondary={Year} />
    </ListItem>
  );
};

MovieItem.defaultProps = {
  movie: {
    Title: '', imdbID: '', Poster: '', Year: '',
  },
  selectedMovieId: '',
  movieSelected: () => {},
};

MovieItem.propTypes = {
  movie:
    PropTypes.shape({
      imdbID: PropTypes.string,
      Poster: PropTypes.string,
      Year: PropTypes.string,
      Title: PropTypes.string,
    }),
  selectedMovieId: PropTypes.string,
  movieSelected: PropTypes.func,
};

export default MovieItem;
