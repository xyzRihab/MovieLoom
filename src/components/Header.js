import { Box, Button, Flex, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    navigate('/movie', { state: { searchTerm } });
  };

  return (
    <Box bg="gray.100" h="60px" boxShadow="sm" px={4} py={2}>
      <Flex>
        <Box flex="1" maxWidth="600px" marginX={4}>
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </Box>
        <Button colorScheme="blue" onClick={handleSearch}>
          Search
        </Button>
      </Flex>
    </Box>
  );
}
