import React from 'react';
import styled from 'styled-components';

import './App.css';
import ConversionList from './components/ConversionList';
import ConversionCard from './components/ConversionCard';
import Statistics from './components/Statistics';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    margin: 0 10px;
  }
  > div {
    margin: 10px 0;
  }
`;

function App(): JSX.Element {
  return (
    <Root>
      <ConversionCard />
      <Statistics />
      <ConversionList />
    </Root>
  );
}

export default App;
