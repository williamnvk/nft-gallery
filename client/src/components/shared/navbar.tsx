import ModeToggle from "@/components/shared/mode-toggle";
import { Flex, Stack } from "@chakra-ui/react";
import Logo from "./logo";
import ConnectWallet from "../ConnectWallet";

const Navbar = () => {
  return (
    <>
      <Stack
        direction={{ base: "column", md: "row" }}
        gap={4}
        p={{ base: 0, md: 4 }}
        align="center"
        justify="space-between"
      >
        <Logo />
        <Flex align="center" gap={4}>
          <ModeToggle />
          <ConnectWallet />
        </Flex>
      </Stack>
    </>
  );
};

export default Navbar;
