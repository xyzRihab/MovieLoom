import { Box, Button, Flex, Input } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box bg="gray.100" h="60px" boxShadow="sm" px={4} py={2}>
      <Flex>
        <Box flex="1" maxWidth="600px" marginX={4}>
          <Input placeholder="Search..." />
        </Box>
        <Button colorScheme="blue">Search</Button>
      </Flex>
    </Box>
  );
}
