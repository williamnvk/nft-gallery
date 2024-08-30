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
import { FC, FormEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export const Search: FC<{}> = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState<string>("");
  const bg = useColorModeValue("gray.100", "gray.900");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const params = new URLSearchParams();
    params.set("search", search);

    const queryString = params.toString();
    router.push(`${pathname}?${queryString}`);
  };

  return (
    <VStack w="full" align="center" mb={{ base: 4, md: 8 }}>
      <Box w="full" bgGradient="linear(to-r, green.400, green.950)" rounded="md" p={0.5}>
        <Flex
          w="full"
          as="form"
          align="center"
          bg={bg}
          rounded="md"
          px={4}
          py={2}
          onSubmit={onSubmit}
        >
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
            required
          />
          <Tooltip label="Limpar pesquisa" hasArrow>
            <XIcon
              role="button"
              type="submit"
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
