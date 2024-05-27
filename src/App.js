import React from 'react';
import { ChakraProvider, Grid } from '@chakra-ui/react';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <ChakraProvider>
      <Grid>
        <Header />
        <Home />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
