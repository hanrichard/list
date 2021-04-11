import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .MuiCircularProgress-svg {
    color: #125430;
  }
`;
const Loader = () => (
  <Wrapper>
    <CircularProgress size={60} data-testid="loader" />
  </Wrapper>
);

export default Loader;
