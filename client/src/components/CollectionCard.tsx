"use client";
import { theme } from "@/theme/theme";
import { Collections } from "@/types/collections";
import { Networks } from "@/types/networks";
import {
  Badge,
  Heading,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

export const CollectionCard: FC<
  Collections.Collection & {
    onClick: () => void;
    networks: Array<Networks.Network>;
  }
> = ({ onClick, networks, ...props }) => {
  const imageBg = useColorModeValue("gray.50", "gray.950");
  const bg = useColorModeValue("gray.100", "gray.900");
  const borderColor = useColorModeValue(
    theme.colors.gray[100],
    theme.colors.gray[900]
  );

  return (
    <Stack
      role="button"
      onClick={onClick}
      direction={{ base: "row", md: "column" }}
      w="full"
      align="center"
      borderRadius="md"
      p={0}
      border={{ base: `solid 1px ${borderColor}`, md: `none` }}
      gap={0}
    >
      <Stack
        w="full"
        h="120px"
        bg={{ base: "inherit", md: imageBg }}
        align="center"
      >
        <Image src={props.cover} alt={props.name} width={120} height={120} />
      </Stack>
      <VStack
        w="full"
        bg={bg}
        p={8}
        align="flex-start"
        borderBottomRadius={{ base: 0, md: "md" }}
      >
        <Heading as="h3" size="md" h="60px">
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
        {props.contracts.map((c) => (
          <Tag
            variant="outline"
            colorScheme="green"
            key={`nft-gallery-chain-${c.chain}`}
          >
            {networks.find((n) => n.id === c.chain)?.slug}
          </Tag>
        ))}
      </VStack>
    </Stack>
  );
};
