import {
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
  VStack,
  Box,
  Stack,
} from "@chakra-ui/react";
import { MailIcon } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <Box as="footer" borderTopWidth="1px">
      <Container maxW="container.xl" p={8} gap={16}>
        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          justifyContent="flex-start"
          w="full"
          pb={8}
          gap={8}
        >
          <MailIcon size={48} />
          <VStack flex={1} align="flex-start" gap={0}>
            <Text fontSize="sm" fontWeight="bold">
              NEWSLETTER
            </Text>
            <Text fontSize="xl">
              Receba coleções de NFTS inéditos e novidades gratuitamente
            </Text>
          </VStack>
          <VStack flex={1} align="flex-start">
            <Flex gap={4} align="center" w="full">
              <Input rounded={6} type="email" flex={1} />
              <Button>Enviar</Button>
            </Flex>
            <Flex gap={2}>
              <Checkbox />
              <Text fontSize="xs">
                Autorizo o envio de comunicações por e-mail ou qualquer outro
                meio e concordo com os Termos e{" "}
                <Link
                  href="/politica-privacidade"
                  style={{ textDecoration: "underline" }}
                >
                  Políticas de Privacidade
                </Link>
                .
              </Text>
            </Flex>
          </VStack>
        </Stack>
        <Divider />
        <Flex mt={8}>
          <Text fontSize="xs">
            &copy; {new Date().getFullYear()}{" "}
            {process.env.NEXT_PUBLIC_SITE_NAME}. Todos os direitos reservados.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
