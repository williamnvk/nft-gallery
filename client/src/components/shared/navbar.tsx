import UserNav from "@/components/shared/user-nav";
import ModeToggle from "@/components/shared/mode-toggle";
import { Flex } from "@chakra-ui/react";
import Logo from "./logo";

const Navbar = () => {
  return (
    <>
      <Flex gap={4} p={4} align="center" justify="space-between">
        <Logo />
        <Flex align="center" gap={4}>
          <ModeToggle />
          <UserNav />
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
