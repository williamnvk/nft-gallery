
import { Flex, Heading, Text } from "@chakra-ui/react";


const NotFound = () => {
  return (
    <>
      <Flex gap={4} p={4} align="center">
        <Heading>404</Heading>
        <Text>Página não encontrada</Text>
      </Flex>
    </>
  );
};

export default NotFound;
