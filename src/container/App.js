import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_KEY, axiosApi } from '../axios-api';

const AppWrapper = styled.div`
  display: flex
`;

const App = () => {
  const [movieData, setMovieData] = useState({ moviesResults: [], totalResults: 0 });
  const [searchError, setSearchError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [querykeyWord, setQuerykeyWord] = useState();
  const [queryPage, setQueryPage] = useState(1);
  const [movieID, setMovieID] = useState();

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
    }

    setQueryPage(1);
  }, [querykeyWord]);

  console.log('xxxx', movieData);
  return (
    <AppWrapper>
      <div>siderbar</div>
      <div>main</div>
    </AppWrapper>
  );
};

export default App;
