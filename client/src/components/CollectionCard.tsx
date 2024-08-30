"use client";
import { Collections } from "@/types/collections";
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

export const CollectionCard: FC<Collections.Collection> = (props) => {
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <VStack w="full" align="center" mb={8} borderRadius="md" p={0}>
      <Box h="200px">
        <Image src={props.cover} alt={props.name} width={200} height={200} />
      </Box>
      <VStack w="full" bg={bg} p={8}>
        <Heading as="h3" size="md">
          {props.name}
        </Heading>
        <Text
          size="xs"
          as="p"
          noOfLines={3}
          whiteSpace="pre-wrap"
          wordBreak="break-all"
        >
          {props.description}
        </Text>
      </VStack>
    </VStack>
  );
};
