"use client";

import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

const Error = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const errMsg = searchParams.get("error");

  return (
    <Box>
      <Heading>{errMsg}</Heading>
      <Button onClick={() => router.back()}>Voltar</Button>
    </Box>
  );
};

export default Error;
