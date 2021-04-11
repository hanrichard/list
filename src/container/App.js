import React, { useState } from 'react';
import styled from 'styled-components';
import MovieListContext from '../movieList-context';
import Main from './Main';
import Sidebar from './Sidebar';

const AppWrapper = styled.div`
  display: flex;
`;

const App = () => {
  const [movieId, setMovieId] = useState('');
  const value = { movieId, setMovieId };

  return (
    <MovieListContext.Provider value={value}>
      <AppWrapper>
        <Sidebar />
        <Main />
      </AppWrapper>
    </MovieListContext.Provider>
  );
};

export default App;
