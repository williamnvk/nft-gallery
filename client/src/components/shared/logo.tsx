"use client";
import { Images } from "lucide-react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

const Logo = () => {
  const bg = useColorModeValue("gray.100", "gray.950");
  return (
    <Flex
      as="a"
      href={process.env.NEXT_PUBLIC_APP_URL}
      p={{ base: 4, md: 0 }}
      gap={4}
      align="center"
      w="full"
      bg={{ base: bg, md: "inherit" }}
      title={process.env.NEXT_PUBLIC_SITE_NAME}
    >
      <Images width={32} height={32} />
      <Text fontWeight="bold" lineHeight={0}>
        {process.env.NEXT_PUBLIC_SITE_NAME}
      </Text>
      <Text fontSize="xs">Sua galeria virtual</Text>
    </Flex>
  );
};

export default Logo;
