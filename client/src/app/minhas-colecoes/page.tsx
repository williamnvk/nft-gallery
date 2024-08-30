import {
  Container,
  Heading,
  VStack,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import MyCollections from "./MyCollections";

export default function Page() {
  return (
    <>
      <Container maxW="container.xl" mb={16}>
        <VStack w="full" align="flex-start" gap={4} px={{ base: 0, md: 8 }}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Minhas coleções</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Heading>Minhas coleções</Heading>
          <Text>Aqui estão todas as coleções monitoradas por você!</Text>
          <MyCollections />
        </VStack>
      </Container>
    </>
  );
}
