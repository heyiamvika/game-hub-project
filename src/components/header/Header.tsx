import { HStack, Icon } from "@chakra-ui/react";

import Search from "./Search";
import ModeSwitch from "./ModeSwitch";

const Header = () => {
  return (
    <HStack justifyContent="space-between" alignItems="center" py={5}>
      <Icon />
      <Search />
      <ModeSwitch />
    </HStack>
  );
};

export default Header;
