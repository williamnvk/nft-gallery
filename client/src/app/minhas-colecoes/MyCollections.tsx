"use client";

import {
  Button,
  Flex,
  Grid,
  Heading,
  Skeleton,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useUserSession } from "@/hooks";
import { useToast } from "@chakra-ui/react";
import CollectionsGrid from "@/components/CollectionsGrid";
import { SearchIcon, SheetIcon } from "lucide-react";
import { Collections } from "@/types/collections";
import { getMyCollections, exportToCsv } from "@/services/users";
import { useRouter } from "next/navigation";

const MyCollections = () => {
  const toast = useToast();
  const { isLoggedIn, jwt: token } = useUserSession();
  const router = useRouter();

  const [collections, setCollections] = useState<Array<Collections.Collection>>(
    []
  );

  useEffect(() => {
    if (!isLoggedIn) {
      toast({
        title: "Atenção",
        description: "Conecte sua carteira para ver suas coleções",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      router.push("/");
    }
  }, [isLoggedIn, router]);

  const onGetMyCollections = async () => {
    try {
      const response = await getMyCollections(token as string);
      const data = await response.json();
      setCollections(data);
    } catch {
      ///
    }
  };

  const downloadCsv = async () => {
    try {
      const response = await exportToCsv(token as string);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "minhas-colecoes.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch {
      toast({
        title: "Atenção",
        description:
          "Não foi possível fazer exportar suas coleções. Tente novamente mais tarde!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    onGetMyCollections();
  }, []);

  if (!isLoggedIn) {
    return (
      <>
        <Grid
          w="full"
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          gap={{ base: 2, md: 4 }}
          p={0}
        >
          <Skeleton w="full" h="200px" />
          <Skeleton w="full" h="200px" />
          <Skeleton w="full" h="200px" />
          <Skeleton w="full" h="200px" />
        </Grid>
      </>
    );
  }

  return (
    <>
      {collections.length > 0 ? (
        <>
          <Flex w="full">
            <Button
              onClick={downloadCsv}
              leftIcon={<SheetIcon />}
              colorScheme="teal"
            >
              Download
            </Button>
          </Flex>
          <CollectionsGrid collections={collections} />
        </>
      ) : (
        <VStack align="center" w="full" bg="gray.100" p={8}>
          <SearchIcon size="48px" />
          <Heading size="md">
            Você não tem nenhuma coleção sendo monitorada!
          </Heading>

          <Button as="a" href="/" variant="outline" colorScheme="blue">
            Veja todas
          </Button>
        </VStack>
      )}
    </>
  );
};

export default MyCollections;
