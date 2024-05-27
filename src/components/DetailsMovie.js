import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Grid,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const apiKey = process.env.API_KEY;

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
        );
        const data = await response.json();

        setMovie(data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    getMovie();
  }, [id]);

  const ImdbPage = () => {
    window.location.href = `https://www.imdb.com/title/${id}`;
  };

  return (
    <div>
      {error ? (
        'There was an error loading the movies.'
      ) : isLoading ? (
        <Flex justify="center" align="center" height="100vh">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Grid height="93vh" placeItems="center">
          <Card
            width="50%"
            height="70%"
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
          >
            <Grid templateColumns="40% 60%" placeItems="center">
              <Image src={movie.Poster} alt={movie.Title} />
              <Stack>
                <CardBody>
                  <Heading size="md">{movie.Title}</Heading>
                  <Text fontSize="sm" paddingTop="2">
                    {movie.Released}
                  </Text>
                  <Text fontSize="sm">{movie.Genre}</Text>
                  <Heading paddingTop="5" size="sm">
                    Plot:
                  </Heading>
                  <Text paddingY="2">{movie.Plot}</Text>
                  <Heading marginTop="5" size="xs">
                    Awards:
                  </Heading>
                  <Text paddingBottom="2" fontSize="sm">
                    {movie.Awards}
                  </Text>
                  <Heading size="xs">Runtime:</Heading>
                  <Text paddingBottom="2" fontSize="sm">
                    {movie.Runtime}
                  </Text>
                  <Heading size="xs">Director:</Heading>
                  <Text paddingBottom="2" fontSize="sm">
                    {movie.Director}
                  </Text>
                  <Heading size="xs">Writer:</Heading>
                  <Text paddingBottom="2" fontSize="sm">
                    {movie.Writer}
                  </Text>
                  <Heading size="xs">Language:</Heading>
                  <Text paddingBottom="2" fontSize="sm">
                    {movie.Language}
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button
                    marginTop="-5"
                    variant="solid"
                    colorScheme="blue"
                    onClick={ImdbPage}
                  >
                    See More
                  </Button>
                </CardFooter>
              </Stack>
            </Grid>
          </Card>
        </Grid>
      )}
    </div>
  );
}
