// import Games from "./components/Games";

import { HStack, VStack, Box, Heading } from "@chakra-ui/react";

interface Props {
  selectedGenre: string;
}

const GamesContainer = ({ selectedGenre }: Props) => {
  return (
    <Box>
      <Heading fontSize={52}>{`${selectedGenre}${
        selectedGenre && " "
      }Games`}</Heading>
    </Box>
  );
};

export default GamesContainer;
