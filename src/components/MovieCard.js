import {
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Image,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function MovieCard({ imdbID, Title, Plot, Genre, Poster }) {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <SimpleGrid width="100%">
      <Card>
        <CardHeader>
          <Image src={Poster} alt={`${Title} poster`} paddingBottom="10px" />
          <Heading size="md">{Title}</Heading>
        </CardHeader>
        <CardBody marginTop="-20px" marginBottom="-20px">
          <Text>{Plot}</Text>
          <Text as="b">{Genre}</Text>
        </CardBody>
        <CardFooter>
          <Button onClick={handleSeeMore}>See More</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}
