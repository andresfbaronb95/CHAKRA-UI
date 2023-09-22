import React from 'react';
import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react';

function Header() {
  return (
    <Flex p="4" bg="blue.500" color="white">
      <Box p="2">
        <Heading size="md">Logo</Heading>
      </Box>
      <Spacer />
      <Box p="2">
        <Button colorScheme="teal" mr="4">
          Inicio
        </Button>
        <Button colorScheme="teal" mr="4">
          Acerca de
        </Button>
        <Button colorScheme="teal">Contacto</Button>
      </Box>
    </Flex>
  );
}

export default Header;
