import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import React from 'react';

const MovieItem = ({ movie, selectedMovieId, onMovieSelected }) => {
  const {
    Title, imdbID, Poster, Year,
  } = movie;
  return (
    <ListItem
      button
      selected={imdbID === selectedMovieId}
      onClick={() => {
        onMovieSelected(imdbID);
      }}
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
  onMovieSelected: () => {},
};

MovieItem.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string,
      Poster: PropTypes.string,
      Year: PropTypes.string,
      Title: PropTypes.string,
    }),
  ),
  selectedMovieId: '',
  onMovieSelected: PropTypes.func,
};

export default MovieItem;
