import { HStack, Box } from "@chakra-ui/react";
import Search from "./Search";

const Header = () => {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <Box>Icon</Box>
      <Search />
      <Box>Mode</Box>
    </HStack>
  );
};

export default Header;
