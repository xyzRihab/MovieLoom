import React from 'react';
import { ChakraProvider, Grid } from '@chakra-ui/react';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider>
      <Grid>
        <Header />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
