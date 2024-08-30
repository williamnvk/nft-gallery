"use client";

import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Unauthorized = () => {
  const router = useRouter();

  return (
    <Box>
      <Heading>401!</Heading>
      <Button onClick={() => router.push("/")}>Voltar</Button>
    </Box>
  );
};

export default Unauthorized;
