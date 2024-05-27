import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import DetailsMovie from '../components/DetailsMovie';
import SearchPage from '../components/SearchPage';

export default function router() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<SearchPage />} />
        <Route path="/movie/:id" element={<DetailsMovie />} />
      </Routes>
    </Router>
  );
}
