import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import ConnectWallet from "../ConnectWallet";

const UserNav = async () => {
  const session = false;

  const signout = () => {};

  return (
    <>
      {session ? (
        <Menu>
          <MenuButton as="button">TODO</MenuButton>
          <MenuList>
            <MenuItem onClick={signout}>Sair</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <ConnectWallet />
      )}
    </>
  );
};

export default UserNav;
