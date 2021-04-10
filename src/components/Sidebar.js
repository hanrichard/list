import CloseIcon from '@material-ui/icons/Clear';
import debounce from 'lodash/debounce';
import SearchBar from 'material-ui-search-bar';
import React from 'react';
import MovieList from './MovieList';

const Sidebar = ({
  onSearch, onCancel, querykeyWord, movies,
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
      <MovieList movies={movies} />
    </div>
  );
};

export default Sidebar;
