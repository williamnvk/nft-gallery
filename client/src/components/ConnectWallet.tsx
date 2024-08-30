"use client";

import { useUserSession } from "@/hooks";
import { loginWithWallet } from "@/services/auth";
import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const ConnectWallet = () => {
  const { wallet, setWallet, isLoggedIn, setAccessToken, resetUser } =
    useUserSession();

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Solicitar conexão com a carteira
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        setWallet(account);

        const response = await loginWithWallet(account);
        setAccessToken(response.token);
      } catch (error) {
        console.error("Erro ao conectar a carteira:", error);
      }
    } else {
      console.error("MetaMask não está instalada");
    }
  };

  const disconnect = async () => {
    try {
      // Disconnect from the wallet
      await window.ethereum.disconnect();
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    } finally {
      resetUser();
    }
  };

  if (isLoggedIn) {
    return (
      <Menu>
        <MenuButton as={Button} colorScheme="teal">
          {wallet}
        </MenuButton>
        <MenuList>
          <MenuGroup title="Ações">
            <MenuItem onClick={disconnect}>Desconectar Carteira</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    );
  }

  return (
    <Button colorScheme="blue" onClick={connectWallet}>
      Conectar Carteira
    </Button>
  );
};

export default ConnectWallet;
