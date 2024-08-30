import { CollectionCard } from "@/components/CollectionCard";
import { Search } from "@/components/shared/search";
import { getAllCollections } from "@/services/collections";
import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FileIcon, GalleryHorizontalEndIcon, WalletIcon } from "lucide-react";

export default async function Page() {
  const data = await getAllCollections();

  return (
    <>
      <Container maxW="container.xl" mb={16}>
        <VStack w="full" align="flex-start" gap={8}>
          <Flex minH="50vh" align="center">
            <VStack flex={1} align="center" gap={4}>
              <Heading as="h1" size="xl" mb={8}>
                Descubra o Futuro da Arte e Colecionáveis Digitais
              </Heading>
              <Text fontSize="sm">
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
            <VStack flex={1}></VStack>
          </Flex>

          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            {data.map((c) => (
              <CollectionCard key={`collection-${c.slug}`} {...c} />
            ))}
          </Grid>

          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
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
