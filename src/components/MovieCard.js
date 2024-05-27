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

export default function MovieCard({ imdbID, Title, Plot, Genre, Poster }) {
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
          <Button>See More</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}
