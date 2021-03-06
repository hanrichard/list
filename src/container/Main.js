import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { API_KEY, axiosApi } from '../axios-api';
import Loader from '../components/Loader';
import MovieListContext from '../movieList-context';

const MainContainer = styled.div`
  margin-left: 50px;
`;

const Main = () => {
  const [moviedDetailData, setMovieDetailData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieID } = useContext(MovieListContext);

  useEffect(() => {
    if (movieID) {
      setLoading(true);
      setError(false);
      setMovieDetailData(null);

      axiosApi.get(`?i=${movieID}&apikey=${API_KEY}&plot=full`)
        .then((response) => {
          const { data, Response } = response;
          if (Response === 'False') {
            setError(true);
          } else {
            setMovieDetailData(data);
          }
          setLoading(false);
        })
        .catch(({ message }) => {
          setError(message);
          setLoading(false);
        });
    }
  }, [movieID]);

  if (movieID === '') {
    return (
      <MainContainer>
        <Typography variant="h4">
          Please select a movie
        </Typography>
      </MainContainer>
    );
  }

  if (loading) {
    return (
      <MainContainer>
        <Loader />
      </MainContainer>
    );
  }

  if (error) {
    return (
      <MainContainer>
        <Typography variant="h4">
          Error....
        </Typography>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      {moviedDetailData?.Title && (
      <Typography variant="h4">
        Tile:
        {moviedDetailData?.Title}
      </Typography>
      )}
      {moviedDetailData?.Poster && moviedDetailData?.Poster !== 'N/A' && (
      <Box
        component="img"
        src={moviedDetailData?.Poster} />
      )}
      {moviedDetailData?.Plot && (
      <Typography variant="h6">
        Plot:
        {moviedDetailData?.Plot}
      </Typography>
      )}
      {moviedDetailData?.Language && (
      <Typography variant="h6">
        Language:
        {moviedDetailData?.Language}
      </Typography>
      )}
      {moviedDetailData?.Runtime && (
      <Typography variant="h6">
        Duration:
        {moviedDetailData?.Runtime}
      </Typography>
      )}
      {moviedDetailData?.Actors && (
      <Typography variant="h6">
        Actors:
        {moviedDetailData?.Actors}
      </Typography>
      )}
    </MainContainer>
  );
};

export default Main;
