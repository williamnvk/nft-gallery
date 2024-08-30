"use client";

import { CollectionCard } from "@/components/CollectionCard";
import { useUserSession, useWeb3 } from "@/hooks";
import { loginWithWallet } from "@/services/auth";
import { getAllNetworks } from "@/services/networks";
import { addCollectionToUser } from "@/services/users";
import { Collections } from "@/types/collections";
import { Networks } from "@/types/networks";
import {
  Grid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

export default function CollectionsGrid({
  collections,
}: {
  collections: Array<Collections.Collection>;
}) {
  const toast = useToast();

  const {
    setWallet,
    setAccessToken,
    isLoggedIn,
    jwt: token,
  } = useUserSession();
  const { connectWallet } = useWeb3();

  const [collection, setCollection] = useState<Collections.Collection>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSelectCollection = (c: Collections.Collection) => {
    setCollection(c);
    onOpen();
  };

  const [networks, setNetworks] = useState<Array<Networks.Network>>([]);

  const onConnectSuccess = useCallback(async (account: string) => {
    setWallet(account);
    const response = await loginWithWallet(account);
    setAccessToken(response.token);
  }, []);

  const getAvailableNetworks = async () => {
    try {
      const response = await getAllNetworks();
      setNetworks(response);
    } catch {
      //
    }
  };

  const handleClick = async () => {
    if (!isLoggedIn) {
      await connectWallet(onConnectSuccess);
    }

    try {
      const response = await addCollectionToUser(
        collection as Collections.Collection,
        token as string
      );

      if (!response.ok) {
        if (response.status === 409) {
          toast({
            title: "Ops",
            description: "Essa coleção já está sendo monitorada!",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } else {
        toast({
          title: "Pronto",
          description: "Agora você está monitorando essa coleção!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (e) {
      console.error(e);
      toast({
        title: "Ops",
        description:
          "Não foi possível adicionar essa coleção... Tente novamente mais tarde!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getAvailableNetworks();
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{collection && collection.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {collection && (
              <Box style={{ pointerEvents: "none" }}>
                <CollectionCard
                  {...collection}
                  onClick={() => {}}
                  networks={networks}
                />
              </Box>
            )}
          </ModalBody>
          <ModalFooter gap={4}>
            <Button variant="solid" colorScheme="blue" onClick={handleClick}>
              Monitorar
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose} variant="ghost">
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Grid
        w="full"
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={{ base: 2, md: 4 }}
        p={0}
      >
        {collections.map((c) => (
          <CollectionCard
            key={`collection-${c.slug}`}
            networks={networks}
            {...c}
            onClick={() => onSelectCollection(c)}
          />
        ))}
      </Grid>
    </>
  );
}
