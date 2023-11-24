import { HStack, Image } from "@chakra-ui/react";

import Search from "./Search";
import ModeSwitch from "./ModeSwitch";

import Logo from "../../assets/logo.webp";

interface Props {
  onSearch: (value: string) => void;
}

const Header = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" alignItems="center" w="100%" py={5}>
      <Image src={Logo} h="60px" />
      <Search onSearch={onSearch} />
      <ModeSwitch />
    </HStack>
  );
};

export default Header;
