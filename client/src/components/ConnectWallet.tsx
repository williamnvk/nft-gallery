"use client";

import { truncateString } from "@/helpers/truncateString";
import { useUserSession, useWeb3 } from "@/hooks";
import { loginWithWallet } from "@/services/auth";
import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { WalletIcon } from "lucide-react";
import { useCallback } from "react";

const ConnectWallet = () => {
  const { wallet, setWallet, isLoggedIn, setAccessToken, resetUser } =
    useUserSession();
  const { connectWallet } = useWeb3();

  const onConnectSuccess = useCallback(async (account: string) => {
    setWallet(account);
    const response = await loginWithWallet(account);
    setAccessToken(response.token);
  }, []);

  const onConnectWallet = () => {
    connectWallet(onConnectSuccess);
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
          {truncateString(wallet as string, 4)}
        </MenuButton>
        <MenuList>
          <MenuGroup title="Ações">
            <MenuItem as="a" href="/minhas-colecoes">
              Ver minhas coleções
            </MenuItem>
            <MenuItem onClick={disconnect}>Desconectar Carteira</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    );
  }

  return (
    <Button
      colorScheme="blue"
      onClick={onConnectWallet}
      leftIcon={<WalletIcon />}
    >
      Conectar Carteira
    </Button>
  );
};

export default ConnectWallet;
