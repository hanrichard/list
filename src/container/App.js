import React, { useState } from 'react';
import styled from 'styled-components';
import Main from './Main';
import Sidebar from './Sidebar';

const AppWrapper = styled.div`
  display: flex;
`;

const App = () => {
  const [movieID, setMovieID] = useState('');

  const handleMovieSelected = (value) => {
    setMovieID(value);
  };

  return (
    <AppWrapper>
      <Sidebar
        onMovieSelected={handleMovieSelected} />
      <Main movieID={movieID} />
    </AppWrapper>
  );
};

export default App;
