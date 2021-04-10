import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Clear';
import debounce from 'lodash/debounce';
import SearchBar from 'material-ui-search-bar';
import PropTypes from 'prop-types';
import React from 'react';
import MovieList from './MovieList';

const Sidebar = ({
  onSearch, onCancel, querykeyWord, movies, onMovieSelected, selectedMovieId, search, searchError, loading,
}) => {
  console.log('sidebar');
  return (
    <div>
      <SearchBar
        data-testid="search-bar"
        value={querykeyWord}
        onChange={debounce(onSearch, 300)}
        onCancelSearch={onCancel}
        placeholder="Search here"
        closeIcon={<CloseIcon data-testid="close-icon" />}
        autoFocus />

      {search && searchError && (
      <Typography>
        {searchError}
      </Typography>
      )}
      {loading && 'loading ...'}
      {!searchError && !loading && (
        <MovieList
          movies={movies}
          selectedMovieId={selectedMovieId}
          onMovieSelected={onMovieSelected} />
      )}
    </div>
  );
};

Sidebar.defaultProps = {
  movies: {},
  search: '',
  selectedMovieId: '',
  onSearch: () => {},
  onCancel: () => {},
  onMovieSelected: () => {},
  searchError: '',
  loading: false,
  querykeyWord: '',
};

Sidebar.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string,
      Poster: PropTypes.string,
      Year: PropTypes.string,
      Title: PropTypes.string,
    }),
  ),
  search: PropTypes.string,
  selectedMovieId: PropTypes.string,
  onSearch: PropTypes.func,
  onCancel: PropTypes.func,
  onMovieSelected: PropTypes.func,
  searchError: PropTypes.string,
  loading: PropTypes.bool,
  querykeyWord: PropTypes.string,
};

export default Sidebar;
