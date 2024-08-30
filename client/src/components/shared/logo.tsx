import { Images } from "lucide-react";
import { Flex, Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Flex
      as="a"
      href={process.env.NEXT_PUBLIC_APP_URL}
      gap={4}
      align="center"
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
