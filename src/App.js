import React from 'react';
import './styles/output.css';
import { ChakraProvider } from '@chakra-ui/react';
import Router from './routes/Router';

function App() {
  return (
    <ChakraProvider>
        <Router />
    </ChakraProvider>
  );
}

export default App;
