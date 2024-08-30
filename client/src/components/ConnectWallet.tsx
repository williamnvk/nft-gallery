"use client";

import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const ConnectWallet = () => {
  const [account, setAccount] = useState<null | string>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Solicitar conexão com a carteira
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        setAccount(account);
      } catch (error) {
        console.error("Erro ao conectar a carteira:", error);
      }
    } else {
      console.error("MetaMask não está instalada");
    }
  };

  return (
    <Box>
      <Button colorScheme="blue" onClick={connectWallet}>
        Conectar Carteira
      </Button>
      <Text>{account}</Text>
    </Box>
  );
};

export default ConnectWallet;
