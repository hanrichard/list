import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_KEY, axiosApi } from '../axios-api';
import Sidebar from '../components/Sidebar';
import Main from './Main';

const AppWrapper = styled.div`
  display: flex;
`;

const listPerPage = 10;

const App = () => {
  const [movieData, setMovieData] = useState({ moviesResults: [], totalResults: 0 });
  const [searchError, setSearchError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [querykeyWord, setQuerykeyWord] = useState();
  const [queryPage, setQueryPage] = useState(1);
  const [movieID, setMovieID] = useState();

  const showPagination = movieData.totalResults > listPerPage;
  const totalPageResult = Math.ceil(movieData.totalResults / listPerPage);

  const handleOnSearch = (value) => {
    setQuerykeyWord(value);
  };

  const handleOnCancel = () => {
    setQuerykeyWord('');
    setMovieID('');
  };

  const handleMovieSelected = (value) => {
    setMovieID(value);
  };

  useEffect(() => {
    setLoading(true);
    setSearchError(null);
    setMovieData({ moviesResults: [], totalResults: 0 });

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
              totalResults,
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
      setMovieData({ moviesResults: [], totalResults: 0 });
      setSearchError('');
      setLoading(false);
    }

    setMovieID('');
    setQueryPage(1);
  }, [querykeyWord]);

  console.log('xxxx totalResults', movieData.totalResults);

  return (
    <AppWrapper>
      <Sidebar
        search={querykeyWord}
        searchError={searchError}
        loading={loading}
        onSearch={handleOnSearch}
        onCancel={handleOnCancel}
        selectedMovieId={movieID}
        onMovieSelected={handleMovieSelected}
        movies={movieData.moviesResults}
        showPagination={showPagination}
        totalPageResult={totalPageResult} />
      <Main movieID={movieID} />
    </AppWrapper>
  );
};

export default App;
