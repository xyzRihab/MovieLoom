import React from 'react';
import './styles/output.css';
import { ChakraProvider, Grid } from '@chakra-ui/react';
import Header from './components/Header';
import Home from './components/Home';
import DetailsMovie from './components/DetailsMovie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <Grid>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<DetailsMovie />} />
          </Routes>
        </Router>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
