import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Clear';
import debounce from 'lodash/debounce';
import SearchBar from 'material-ui-search-bar';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_KEY, axiosApi } from '../axios-api';
import Loader from '../components/Loader';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import MovieListContext from '../movieList-context';

const listPerPage = 10;

const SidebarContainer = styled.div`
  flex: 0 0 300px;
`;

const Sidebar = () => {
  const { setMovieID } = useContext(MovieListContext);
  const [movieData, setMovieData] = useState({ moviesResults: [], moviesResultsAmount: 0 });
  const [searchError, setSearchError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [querykeyWord, setQuerykeyWord] = useState('');
  const [queryPage, setQueryPage] = useState(1);

  const { moviesResults, moviesResultsAmount } = movieData;

  const showPagination = moviesResultsAmount > listPerPage;
  const totalPageResult = Math.ceil(moviesResultsAmount / listPerPage);

  const handleOnSearch = (value) => {
    setQuerykeyWord(value);
    setMovieID('');
  };

  const handleOnCancel = () => {
    setQuerykeyWord('');
    setMovieID('');
  };

  const handleMovieSelected = (id) => {
    setMovieID(id);
  };

  const handleClickPagination = (page) => {
    setQueryPage(page);
    setMovieID('');
  };

  useEffect(() => {
    setLoading(true);
    setSearchError(null);
    setMovieData({ moviesResults: [], moviesResultsAmount: 0 });

    if (querykeyWord) {
      axiosApi.get(`?s=${querykeyWord}&apikey=${API_KEY}&page=${queryPage}`)
        .then((response) => {
          const {
            data: {
              Search, totalResults, Response, Error,
            },
          } = response;
          if (Response === 'False') {
            setSearchError(Error);
          } else {
            setMovieData({
              moviesResults: Search,
              moviesResultsAmount: totalResults,
            });
          }
          setLoading(false);
        }).catch(({ message }) => {
          setSearchError(message);
          setLoading(false);
        });
    }
  }, [querykeyWord, queryPage]);

  useEffect(() => {
    if (!querykeyWord) {
      setMovieData({ moviesResults: [], moviesResultsAmount: 0 });
      setSearchError('');
      setLoading(false);
    }

    setQueryPage(1);
  }, [querykeyWord]);

  return (
    <SidebarContainer>
      <SearchBar
        data-testid="search-bar"
        value={querykeyWord}
        onChange={debounce(handleOnSearch, 300)}
        onCancelSearch={handleOnCancel}
        placeholder="Search here"
        closeIcon={<CloseIcon data-testid="close-icon" />}
        autoFocus />

      {moviesResults.length === 0 && !querykeyWord && !searchError && !loading && (
        <Typography>
          Start typing to search for movies
        </Typography>
      )}

      {querykeyWord && searchError && (
      <Typography>
        {searchError}
      </Typography>
      )}

      {loading && <Loader />}

      {!searchError && !loading && (
        <MovieList
          movies={moviesResults}
          selectedMovieID={handleMovieSelected}
          movieSelected={handleMovieSelected} />
      )}

      {showPagination && !searchError && (
        <Pagination
          data-testid="pagination-Id"
          onClickPagination={handleClickPagination}
          currentPage={queryPage}
          totalPaginatedPagesNum={totalPageResult} />
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
