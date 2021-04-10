import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { API_KEY, axiosApi } from '../axios-api';

const Main = ({ movieID }) => {
  const [moviedDetailData, setMovieDetailData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (movieID) {
      setLoading(true);
      setError(false);
      setMovieDetailData(null);

      axiosApi.get(`?i=${movieID}&apikey=${API_KEY}&plot=full`)
        .then((response) => {
          const { data } = response;
          if (response.Response === 'False') {
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

  console.log('xxx', moviedDetailData);

  return (
    <div>Main</div>
  );
};

Main.defaultProps = {
  movieID: '',
};

Main.propTypes = {
  movieID: PropTypes.string,
};

export default Main;
