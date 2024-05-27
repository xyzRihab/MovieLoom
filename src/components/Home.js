import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Flex, Grid, Spinner } from '@chakra-ui/react';

const apiKey = process.env.API_KEY;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (searchTerm, limit = 10) => {
    let moviesList = [];

    try {
      setIsLoading(true);
      while (moviesList.length < limit) {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`
        );
        const data = await response.json();

        if (data.Response === 'True') {
          moviesList = moviesList.concat(data.Search);
        } else {
          break;
        }
      }

      const detailedMovies = [];
      for (const movie of moviesList) {
        const movieDetailsResponse = await fetch(
          `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`
        );
        const movieDetails = await movieDetailsResponse.json();
        detailedMovies.push(movieDetails);
      }

      setMovies(detailedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchMovies('Batman');
  }, []);

  return (
    <div>
      {error ? (
        'There was an error loading the movies.'
      ) : isLoading ? (
        <Flex justify="center" align="center" height="100vh">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Grid templateColumns="repeat(5, 1fr)" gap={4} p={4}>
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
      )}
    </div>
  );
}
