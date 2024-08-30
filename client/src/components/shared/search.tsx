"use client";
import {
  Box,
  Flex,
  Input,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { SearchIcon, XIcon } from "lucide-react";
import { FC, useState } from "react";

export const Search: FC<{}> = () => {
  const [search, setSearch] = useState<string>("");
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <VStack w="full" align="center" mb={8}>
      <Box
        w="container.sm"
        bgGradient="linear(to-r, green.400, green.950)"
        rounded="md"
        p={0.5}
      >
        <Flex align="center" bg={bg} rounded="md" px={4} py={2}>
          <SearchIcon size={24} />
          <Input
            type="text"
            outline="none"
            _active={{
              outline: "none",
            }}
            _focusVisible={{
              outline: "none",
            }}
            fontSize="lg"
            placeholder="Ex.: Bored Ape"
            border={0}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            flex={1}
          />
          <Tooltip label="Limpar pesquisa" hasArrow>
            <XIcon
              role="button"
              size={24}
              opacity={search.length > 0 ? 1 : 0}
              onClick={() => setSearch("")}
            />
          </Tooltip>
        </Flex>
      </Box>
      <Flex mt={1} fontSize="sm" w="full" align="flex-start">
        Tente&nbsp;
        <Text
          color={useColorModeValue("green.600", "green.300")}
          role="button"
          _hover={{
            color: useColorModeValue("green.700", "green.500"),
          }}
          onClick={() => setSearch("Bored Ape")}
        >
          Bored Ape
        </Text>
        ,&nbsp;
        <Text
          color={useColorModeValue("green.600", "green.300")}
          role="button"
          _hover={{
            color: useColorModeValue("green.700", "green.500"),
          }}
          onClick={() => setSearch("Meebits")}
        >
          Meebits
        </Text>
        ...
      </Flex>
    </VStack>
  );
};
