import { HStack, Image } from "@chakra-ui/react";

import Search from "./Search";
import ColorModeSwitch from "./ColorModeSwitch";

import logo from "../../assets/logo.webp";

interface Props {
  onSearch: (value: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      {/* <Search onSearch={onSearch} /> */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
