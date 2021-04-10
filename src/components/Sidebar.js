import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Clear';
import debounce from 'lodash/debounce';
import SearchBar from 'material-ui-search-bar';
import PropTypes from 'prop-types';
import React from 'react';
import Loader from './Loader';
import MovieList from './MovieList';

const Sidebar = ({
  onSearch, onCancel, movies, onMovieSelected, selectedMovieId, search, searchError, loading, showPagination, totalPageResult,
}) => {
  console.log('movies', movies);
  return (
    <div>
      <SearchBar
        data-testid="search-bar"
        value={search}
        onChange={debounce(onSearch, 300)}
        onCancelSearch={onCancel}
        placeholder="Search here"
        closeIcon={<CloseIcon data-testid="close-icon" />}
        autoFocus />

      {movies.length === 0 && !search && !searchError && !loading && (
        <Typography>
          Start typing to search for movies
        </Typography>
      )}

      {search && searchError && (
      <Typography>
        {searchError}
      </Typography>
      )}
      {loading && <Loader />}
      {!searchError && !loading && (
        <MovieList
          movies={movies}
          selectedMovieId={selectedMovieId}
          onMovieSelected={onMovieSelected} />
      )}

      <div>
        {totalPageResult}
        {' '}
        {showPagination ? 'show' : 'hide'}
      </div>
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
  showPagination: false,
  totalPageResult: 0,
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
  showPagination: PropTypes.bool,
  totalPageResult: PropTypes.number,
};

export default Sidebar;
