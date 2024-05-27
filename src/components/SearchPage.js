import { Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { useLocation } from 'react-router-dom';

const apiKey = process.env.API_KEY;

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const searchTerm = location.state?.searchTerm;

  const fetchMovies = async movie => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${movie}&apikey=${apiKey}`
    );
    const data = await response.json();

    if (data.Search) {
      const detailedMovies = [];
      for (const movie of data.Search) {
        const movieDetailsResponse = await fetch(
          `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`
        );
        const movieDetails = await movieDetailsResponse.json();
        detailedMovies.push(movieDetails);
      }
      setMovies(detailedMovies);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4} padding={4}>
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          imdbID={movie.imdbID}
          Title={movie.Title}
          Plot={movie.Plot}
          Genre={movie.Genre}
          Poster={movie.Poster}
        />
      ))}
    </Grid>
  );
}
