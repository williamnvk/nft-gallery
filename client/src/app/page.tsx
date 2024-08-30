import CollectionsGrid from "@/components/CollectionsGrid";
import { HomeIllustrationSvg } from "@/components/illustrations/HomeIllustrationSvg";
import { Search } from "@/components/shared/search";
import { getAllCollections } from "@/services/collections";
import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FileIcon,
  GalleryHorizontalEndIcon,
  SearchIcon,
  WalletIcon,
} from "lucide-react";

export default async function Page({ searchParams }: { searchParams: any }) {
  const data = await getAllCollections(
    (searchParams["search"] as string) || null
  );

  return (
    <>
      <Container maxW="container.xl" mb={16}>
        <VStack w="full" align="flex-start" gap={4} px={{ base: 0, md: 8 }}>
          <Stack
            minH="60vh"
            align="center"
            direction={{ base: "column-reverse", md: "row" }}
            w="full"
          >
            <VStack flex={1} align="center" gap={4} w="full">
              <Heading
                as="h1"
                w="full"
                fontSize={{ base: "3xl", md: "5xl" }}
                mb={{ base: 2, md: 8 }}
              >
                Descubra o Futuro da Arte e Colecionáveis Digitais
              </Heading>
              <Text fontSize={{ base: "xs", md: "sm" }}>
                Bem-vindo ao{" "}
                <strong>{process.env.NEXT_PUBLIC_SITE_NAME}</strong>, onde a
                criatividade encontra a inovação. Nossa plataforma conecta
                artistas, colecionadores e entusiastas com o mundo vibrante dos
                NFTs (Tokens Não Fungíveis). Explore uma vasta coleção de obras
                digitais exclusivas, desde arte visual até música e itens de
                jogos, todos autenticados pela tecnologia blockchain.
              </Text>
              <Search />
            </VStack>
            <VStack flex={1} align="center" m={{ base: 4, md: 0 }}>
              <HomeIllustrationSvg width="300px" height="300px" />
            </VStack>
          </Stack>

          {data.length > 0 ? (
            <CollectionsGrid collections={data} />
          ) : (
            <VStack align="center" w="full" bg="gray.100" p={8}>
              <SearchIcon size="48px" />
              <Heading size="md">Nenhum resultado encontrado...</Heading>
              <Text size="xs">Tente outro termo!</Text>
              <Button as="a" href="/" variant="outline" colorScheme="blue">
                Recarregar
              </Button>
            </VStack>
          )}

          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap={8}
          >
            <GridItem>
              <Flex gap={4} align="center">
                <FileIcon size={32} />
                <VStack align="flex-start" ml={4} flex={1}>
                  <Heading as="h2" fontSize="lg">
                    O Que São NFTs?
                  </Heading>
                  <Text fontSize="sm">
                    NFTs são mais do que simples imagens; eles representam
                    propriedade e autenticidade no mundo digital. Cada NFT é
                    único, permitindo que você possua e troque obras digitais
                    com a mesma confiança de colecionáveis físicos.
                  </Text>
                </VStack>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex gap={4} align="center">
                <WalletIcon size={32} />
                <VStack align="flex-start" ml={4} flex={1}>
                  <Heading as="h2" fontSize="lg">
                    Por Que Comprar NFTs?
                  </Heading>
                  <Text fontSize="sm">
                    Ao adquirir um NFT, você não está apenas comprando uma
                    imagem ou música, mas sim investindo em uma peça única da
                    cultura digital. Quer você seja um colecionador experiente
                    ou um novato no mundo dos NFTs, nossa plataforma oferece
                    algo para todos.
                  </Text>
                </VStack>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex gap={4} align="center">
                <GalleryHorizontalEndIcon size={32} />
                <VStack align="flex-start" ml={4} flex={1}>
                  <Heading as="h2" fontSize="lg">
                    Comece Sua Coleção Hoje
                  </Heading>
                  <Text fontSize="sm">
                    Explore nossas coleções destacadas, descubra artistas
                    emergentes e adicione peças exclusivas ao seu portfólio. Com
                    uma interface fácil de usar e uma comunidade global
                    apaixonada, [Nome do Site] é o lugar perfeito para iniciar
                    sua jornada no mundo dos NFTs.
                  </Text>
                </VStack>
              </Flex>
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    </>
  );
}
