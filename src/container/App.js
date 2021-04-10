import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Main from './Main';
import Sidebar from './Sidebar';

const AppWrapper = styled.div`
  display: flex;
`;

const App = () => {
  const [movieID, setMovieID] = useState('');
  const [key, setKey] = useState('');

  const handleMovieSelected = (value) => {
    setMovieID(value);
  };

  const handleKeywordsChange = (value) => {
    setKey(value);
  };

  useEffect(() => {
    setMovieID('');
  }, [key]);

  return (
    <AppWrapper>
      <Sidebar
        onMovieSelected={handleMovieSelected} onKeywords={handleKeywordsChange} />
      <Main movieID={movieID} />
    </AppWrapper>
  );
};

export default App;
