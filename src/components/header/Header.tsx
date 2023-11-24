import { HStack, Image, Box } from "@chakra-ui/react";

import Search from "./Search";
import ModeSwitch from "./ModeSwitch";

import Logo from "../../assets/logo.webp";

const Header = () => {
  return (
    <HStack justifyContent="space-between" alignItems="center" w="100%" py={5}>
      <Image src={Logo} h="60px" />
      <Search />
      <ModeSwitch />
    </HStack>
  );
};

export default Header;
